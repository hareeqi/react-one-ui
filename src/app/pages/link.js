import React from 'react';
import { Scene, Link, Alert } from 'react-one-ui';

export const Page_Link = () => (
    <Scene centered>
        <Link title="Click Me" onPress={() => Alert.alert('Link', 'hi from link example', [{ text: 'Ok' }])} />
    </Scene>
);
