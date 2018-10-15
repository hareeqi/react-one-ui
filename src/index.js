import React from 'react';
import { Platform } from 'react-native';
import { Expo, Dom, serviceWorker } from './react-one-ui';

import App from './app';

if (Platform.OS === 'web') {
    Dom.render(<App />, document.getElementById('root'));
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();

    /// Enabling hot reloading
    if (module.hot) {
        console.log('Connected');
        module.hot.accept('./app', () => {
            const Root = require('./app').default;
            console.log(`%c ==========  Recived update in ${Date()}`, 'background: #222; color: #bada55');
            Dom.render(<Root />, document.getElementById('root'));
        });
    }
} else {
    // eslint-disable-next-line
    __DEV__ && Expo.KeepAwake.activate();
    Expo.registerRootComponent(App);
}
