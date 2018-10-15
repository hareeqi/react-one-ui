import React from 'react';
import { Scene, Button, Alert } from 'react-one-ui';

export const Page_Button = () => (
    <Scene centered>
        <Button title="Click Me" onPress={() => Alert.alert('Button', 'hi from button example', [{ text: 'Ok' }])} />
    </Scene>
);
