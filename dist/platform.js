Object.defineProperty(exports,"__esModule",{value:true});exports.isIphoneX=exports.isIOS=exports.isAndroid=exports.isNative=exports.isWeb=undefined;var _reactNative=require('react-native');var _resolver=require('./resolver');var isWeb=exports.isWeb=_reactNative.Platform.OS==='web';var isNative=exports.isNative=!isWeb;var isAndroid=exports.isAndroid=_reactNative.Platform.OS==='android';var isIOS=exports.isIOS=_reactNative.Platform.OS==='ios';var isIphoneX=exports.isIphoneX=isIOS&&_resolver.Expo.Constants.platform.ios.model.toLowerCase().includes('iphonex');