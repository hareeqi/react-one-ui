const env = process.env;
const bin_dir = `${__dirname}/node_modules/.bin/`;
const exec = require('child_process').execSync;
const e = c => exec(c, { shell: '/bin/bash', stdio: 'inherit' });

const me = exec('npm whoami') + '';
if (me !== 'react-one\n') {
    console.log('You must log in to npm, use "npm login" command');
    process.exit(1);
}

console.log('===== preparing release package.json');
e(`mv ./package.json ./package.dev.json`);
e(`mv ./package.release.json ./package.json`);

console.log('===== building dist files');
e(`rm -rf ./dist && ${bin_dir}babel ./src/libs/react-one-ui --out-dir dist`);

console.log('===== patching version');

try {
    e(`npm version patch -F`);
    e(`npm publish`);
} catch (e) {
    console.log('Error occured in patching and publising');
    console.log('=====returing dev package.json');
    e(`mv ./package.json ./package.release.json`);
    e(`mv ./package.dev.json ./package.json `);
    process.exit(1);
}

console.log('=====returing dev package.json');
e(`mv ./package.json ./package.release.json`);
e(`mv ./package.dev.json ./package.json `);
