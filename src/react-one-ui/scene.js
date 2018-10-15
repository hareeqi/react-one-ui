import React from 'react';

import { View } from 'react-native';
import { css } from './theme';

const styles = css({
    scene: {
        flex: 1
    },
    centered: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export const Scene = ({ style, centered, ...props }) => <View style={[styles.scene, centered && styles.centered, style]} {...props} />;
