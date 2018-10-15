import React from 'react';
import { Link } from './link';
import { theme, css } from './theme';

const styles = css({
    button: {
        borderWidth: theme.hairline,
        borderColor: theme.primary_color,
        minHeight: theme.comp_height,
        borderRadius: theme.round ? theme.roundness : 0,
        paddingHorizontal: 20,
        minWidth: theme.min_width
    }
});

export const Button = ({ style, ...props }) => <Link style={[styles.button, style]} {...props} />;
