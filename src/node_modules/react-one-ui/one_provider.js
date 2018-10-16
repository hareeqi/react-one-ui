import React from 'react';
import { I18nManager } from 'react-native';
import { AlertProvider } from './alert';
import { isWeb } from './platform';
import { Expo } from './resolver';

let forceRTL;
class OneProvider extends React.Component {
    forceRTL = flag => {
        I18nManager.forceRTL(flag);

        isWeb ? this.is_mounted && this.forceUpdate() : Expo.Updates.reloadFromCache();
    };
    componentDidMount() {
        this.is_mounted = true;
        forceRTL = this.forceRTL;
    }

    componentWillUnmount() {
        this.is_mounted = false;
    }
    render() {
        return <AlertProvider>{this.props.children}</AlertProvider>;
    }
}

export { OneProvider, forceRTL };
