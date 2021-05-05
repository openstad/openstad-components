const fs = require('fs').promises;
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function updateVersionNumber() {


  // get current branch
  const { stdout, stderr } = await exec('git rev-parse --abbrev-ref HEAD');
  let branch = stdout.trim().toString();
  
  let packageJSON = await fs.readFile('./package.json');
  packageJSON = packageJSON.toString();
  
  let match = packageJSON.match(/"version": "([^"]+)"/);
  if (match) {
    let versionLine = match[0];
    let version = match[1];

    console.log(branch, versionLine, version);

    // alpha on development: increase number
    if (version.match('alpha') && branch == 'development') {
      console.log('alpha on development: increase number');
      version = version.replace(/(\d+)$/, ($0, $1) => parseInt($1) + 1);
    }
    
    // alpha on release: apparently just merged, so replace alpha by beta
    if (version.match('alpha') && branch == 'release') {
      console.log('alpha on release: apparently just merged, so replace alpha by beta');
    }
    
    // beta on release: increase number
    if (version.match('beta') && branch == 'release') {
      console.log('beta on release: increase number');
      version = version.replace(/(\d+)$/, ($0, $1) => parseInt($1) + 1);
    }
    
    // beta on master: apparently just merged, so remove beta
    if (version.match('beta') && branch == 'master') {
      console.log('beta on master: apparently just merged, so remove beta');
    }

    // neither on master: increase number
    if (!version.match('alpha|beta') && branch == 'master') {
      console.log('neither on master: increase number');
      version = version.replace(/(\d+)$/, ($0, $1) => parseInt($1) + 1);
    }

    console.log(branch, versionLine, version);

  }




//  fs.writeFileSync('./package.json', packageJSON);

}

updateVersionNumber();
