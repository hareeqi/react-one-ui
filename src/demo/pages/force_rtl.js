import React from 'react';
import { Scene, Button, forceRTL, I18nManager } from 'react-one-ui';

export const Page_forceRTL = () => (
    <Scene centered>
        <Button title="Change Layout Dir" onPress={() => forceRTL(!I18nManager.isRTL)} />
    </Scene>
);
