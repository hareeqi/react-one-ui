Object.defineProperty(exports,"__esModule",{value:true});exports.css=exports.theme=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _reactNative=require('react-native');var custome_theme={};try{custome_theme=require('../../../package.json').oneTheme||{};}catch(e){}var theme=exports.theme=_extends({primary_color:'#3498db',text_color:'#222222',gray_color:'#999999',light_gray_color:'#eeeeee',warning_color:'#f1c40f',error_color:'#e74c3c',success_color:'#1abc9c',round:true,roundness:20,comp_height:40,min_width:250,font_xs:10,font_sm:12,font_md:14,font_lg:16,font_xl:18,hairline:_reactNative.StyleSheet.hairlineWidth,absoluteFill:_reactNative.StyleSheet.absoluteFill,absoluteFillObject:_reactNative.StyleSheet.absoluteFillObject},custome_theme);var css=exports.css=_reactNative.StyleSheet.create;