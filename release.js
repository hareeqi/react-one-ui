const sleep = (time = 1) => new Promise(resolve => setTimeout(resolve, time));
const bin_dir = `${__dirname}/node_modules/.bin/`;
const exec = require('child_process').execSync;
const e = c => exec(c, { shell: '/bin/bash', stdio: 'inherit' });

const me = exec('npm whoami') + '';
if (me !== 'react-one\n') {
    console.log('ERROR: You must log in to npm, use "npm login" command');
    process.exit(1);
}
const is_clean = exec('git status') + '';
if (!is_clean.includes('On branch master') || !is_clean.includes('working tree clean')) {
    console.log('ERROR: Make sure you are on the master branch and your git tree is clean');
    process.exit(1);
}

const runscript = async () => {
    console.log('===== preparing release package.json');
    e(`mv ./package.json ./package.dev.json`);
    e(`mv ./package.release.json ./package.json`);

    console.log('===== building dist files');
    e(`rm -rf ./dist && ${bin_dir}babel ./src/libs/react-one-ui --out-dir dist`);

    console.log('===== patching version');

    try {
        e(`npm version patch -f --no-commit-hooks`);
        //e(`npm publish`);
    } catch (a) {
        console.log('=====Error occured in patching and publising');
        console.log('=====returing dev package.json');
        await sleep(1000);
        e(`mv ./package.json ./package.release.json`);
        await sleep(1000);
        e(`mv ./package.dev.json ./package.json `);
        process.exit(1);
    }

    console.log('=====returing dev package.json');
    e(`mv ./package.json ./package.release.json`);
    e(`mv ./package.dev.json ./package.json `);
};

runscript();
