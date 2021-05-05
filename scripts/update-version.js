const fs = require('fs').promises;
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function updateVersionNumber() {

  try {
    
    // get current branch
    const { stdout, stderr } = await exec('git rev-parse --abbrev-ref HEAD');
    let branch = stdout.trim().toString();
    
    let packageJSON = await fs.readFile('./package.json');
    packageJSON = packageJSON.toString();
    
    let match = packageJSON.match(/"version": "([^"]+)"/);
    if (match) {
      let versionLine = match[0];
      let version = match[1];

      if (version.match('alpha') && branch == 'development') {
        // alpha on development: increase number
        version = version.replace(/(\d+)$/, ($0, $1) => parseInt($1) + 1);
      } else if (version.match('alpha') && branch == 'release') {
        // alpha on release: apparently just merged, so replace alpha by beta
        version = version.replace('alpha', 'beta');
      } else if (version.match('beta') && branch == 'release') {
        // beta on release: increase number
        version = version.replace(/(\d+)$/, ($0, $1) => parseInt($1) + 1);
      } else if (version.match('beta') && branch == 'master') {
        // beta on master: apparently just merged, so remove beta including number
        version = version.replace(/-beta\.\d+/, '');
      } else if (!version.match('alpha|beta') && branch == 'master') {
        // neither on master: increase number
        version = version.replace(/(\d+)$/, ($0, $1) => parseInt($1) + 1);
      }

      packageJSON = packageJSON.replace(versionLine, `"version": "${version}"`)
      await fs.writeFile('./package.json', packageJSON);

    } else {
      throw new Error('Version not found');
    }

  } catch (err) {
    console.log(err);
  }

}

updateVersionNumber();
