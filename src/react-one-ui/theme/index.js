import { StyleSheet } from 'react-native';
const custome_theme = require('../../../package.json').oneTheme || {};

export const theme = {
    primary_color: '#3498db',
    text_color: '#222222',
    gray_color: '#999999',
    light_gray_color: '#eeeeee',
    warning_color: '#f1c40f',
    error_color: '#e74c3c',
    success_color: '#1abc9c',
    round: true,
    roundness: 20,
    // this height & width is the default height/width for buttons and inputs
    comp_height: 40,
    min_width: 250,
    font_xs: 10,
    font_sm: 12,
    font_md: 14,
    font_lg: 16,
    font_xl: 18,
    hairline: StyleSheet.hairlineWidth,
    absoluteFill: StyleSheet.absoluteFill,
    absoluteFillObject: StyleSheet.absoluteFillObject,
    ...custome_theme
};

export const css = StyleSheet.create;
