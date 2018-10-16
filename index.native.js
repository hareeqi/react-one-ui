const { Expo } = require('./src/libs/react-one-ui');
const App = require('./src/demo').default;
// eslint-disable-next-line
__DEV__ && Expo.KeepAwake.activate();
Expo.registerRootComponent(App);
