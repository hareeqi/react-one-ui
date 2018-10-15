const package_info = require('./package.json');
if (package_info._resolved) {
    module.exports = require('./dist');
} else {
    const { Expo } = require('./src/react-one-ui');
    const App = require('./src/demo').default;
    // eslint-disable-next-line
    __DEV__ && Expo.KeepAwake.activate();
    Expo.registerRootComponent(App);
}
