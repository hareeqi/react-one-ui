const bin_dir = `${__dirname}/node_modules/.bin/`;
const exec = require('child_process').execSync;
const e = c => exec(c, { shell: '/bin/bash', stdio: 'inherit' });

const me = exec('npm whoami') + '';
if (me !== 'react-one\n') {
    console.log('\n\nERROR: You must log in to npm, use "npm login" command\n\n');
    process.exit(1);
}
const is_clean = exec('git status') + '';
if (!is_clean.includes('On branch master') || !is_clean.includes('working tree clean')) {
    console.log('\n\nERROR: Make sure you are on the master branch and your git tree is clean\n\n');
    process.exit(1);
}

console.log('\n\n===== preparing release package.json');
e(`mv ./package.json ./package.dev.json`);
e(`mv ./package.release.json ./package.json`);

console.log('\n\n===== building dist files');
e(`rm -rf ./dist && ${bin_dir}babel ./src/node_modules/react-one-ui --out-dir dist`);

console.log('\n\n=====  patching version');

try {
    e(`npm version -f --no-commit-hooks --no-git-tag-version patch`);
    e(`npm publish`);
} catch (a) {
    console.log('\n\n===== ereverting due to errors');

    e(`mv ./package.json ./package.release.json`);
    e(`mv ./package.dev.json ./package.json`);
    e(`git reset --hard`);
    process.exit(1);
}

console.log('\n\n===== Restoring dev satae');
e(`mv ./package.json ./package.release.json`);
e(`mv ./package.dev.json ./package.json`);
e(`rm -rf ./dist`);

console.log('\n\n===== Committing , Taggin, Pushing');
const pkg = require('./package.release.json');
e(`git add .`);
e(`git commit -m'version ${pkg.version} released'`);
e(`git tag v${pkg.version}`);
e(`git push`);
e(`git push origin v${pkg.version}`);
