const fs = require('fs').promises;
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function updateVersionNumber() {

  try {

    let packageJSON = await fs.readFile('./package.json');
    packageJSON = packageJSON.toString();

    // get current branch
    let { stdout, stderr } = await exec('git rev-parse --abbrev-ref HEAD');
    let branch = stdout && stdout.trim().toString();
    if (!branch) throw new Error('Current branch not found');
    if (branch == 'master') return;

    // get version from package.json
    let match = packageJSON.match(/"version": "([^"]+)"/);
    let versionLine = match && match[0];
    let version = match && match[1];
    if (!versionLine || !version) throw new Error('Version not found');

    // get current published version
    ({ stdout, stderr } = await exec('npm view --json openstad-components'));
    let info = stdout && stdout.toString();
    info = JSON.parse(info)
    let publishedVersion = info['dist-tags'][(branch == 'release' && 'beta') || (branch == 'development' && 'alpha')];
    if (!publishedVersion) throw new Error('Published version not found');

    // increase version number
    version = publishedVersion.replace(/(\d+)$/, ($0, $1) => parseInt($1) + 1);

    // save in package.json
    packageJSON = packageJSON.replace(versionLine, `"version": "${version}"`)
    await fs.writeFile('./package.json', packageJSON);

  } catch (err) {
    console.log(err);
  }

}

updateVersionNumber();
