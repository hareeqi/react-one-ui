import React from 'react';
import { OneProvider } from 'react-one-ui';
import DemoApp from './home';

export default class App extends React.Component {
    render() {
        return (
            <OneProvider>
                <DemoApp />
            </OneProvider>
        );
    }
}
