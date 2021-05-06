const fs = require('fs').promises;
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function updateVersionNumber() {

  try {

    let packageJSON = await fs.readFile('./package.json');
    packageJSON = packageJSON.toString();

    // get current branch
    let { stdout, stderr } = await exec('git branch --show-current');
    console.log(stdout);
    let branch = stdout && stdout.trim().toString();
    console.log(branch);
    //if (!branch) throw new Error('Current branch not found');
    if (branch == 'master') return;
    let tag = '';
    if (branch == 'release') tag = 'beta';
    if (branch == 'development') tag = 'alpha';
    console.log(tag);


    console.log('1:');
    ({ stdout, stderr } = await exec('git version'));
    console.log(stdout);
    
    console.log('2:');
    ({ stdout, stderr } = await exec('git branch'));
    console.log(stdout);

    console.log('3:');
    console.log(process.env.TRAVIS_BRANCH)


    return 
    
    // get version from package.json
    let match = packageJSON.match(/"version": "([^"]+)"/);
    let versionLine = match && match[0];
    let version = match && match[1];
    if (!versionLine || !version) throw new Error('Version not found');

    // get current published version
    ({ stdout, stderr } = await exec('npm view --json openstad-components'));
    let info = stdout && stdout.toString();
    info = JSON.parse(info)
    console.log(info);
    console.log((branch == 'release' && 'beta') || (branch == 'development' && 'alpha'));
    let publishedVersion = info['dist-tags'][tag];
    console.log(publishedVersion);
    if (!publishedVersion) throw new Error('Published version not found');

    // set new version
    let newVersion = publishedVersion;
    if (publishedVersion.match(new RegExp('^'+version))) {
       // increase version number
      newVersion = newVersion.replace(/(\d+)$/, ($0, $1) => parseInt($1) + 1);
    } else {
      // first release for this version
      newVersion = `${version}-${tag}.0`; 
    }

    console.log(newVersion);

    // save in package.json
    packageJSON = packageJSON.replace(versionLine, `"version": "${newVersion}"`)
    await fs.writeFile('./package.json', packageJSON);

  } catch (err) {
    console.log(err);
  }

}

updateVersionNumber();
