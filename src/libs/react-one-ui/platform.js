import { Platform } from 'react-native';
import { Expo } from './resolver';
export const isWeb = Platform.OS === 'web';
export const isNative = !isWeb;
export const isAndroid = Platform.OS === 'android';
export const isIOS = Platform.OS === 'ios';
export const isIphoneX = isIOS && Expo.Constants.platform.ios.model.toLowerCase().includes('iphonex');
