!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.MakeActionCreator=r():e.MakeActionCreator=r()}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r){"use strict";function t(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e){return["START","SUCCESS","FAILURE"].indexOf(e.slice(e.lastIndexOf("_")+1))>=0}function o(e){return{base:e.slice(0,e.lastIndexOf("_")),sub:e.slice(e.lastIndexOf("_")+1)}}function s(e){return e?"string"==typeof e?e:"string"==typeof e.error?e.error:"string"==typeof e.message?e.message:e.error&&e.error.message?e.error.message:null:null}Object.defineProperty(r,"__esModule",{value:!0});var a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e};r.reducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments[1];if(n(r.type)){var i=o(r.type),u=i.base,f=i.sub;return a({},e,t({},u,{status:"START"===f?"pending":"SUCCESS"===f?"success":"failure",error:"FAILURE"===f?s(r.payload):null,response:"SUCCESS"!==f&&"FAILURE"!==f||!r.payload?null:r.payload}))}return"CLEAR_STATUS"===r.type?a({},e,t({},r.actionType,void 0)):e}}])});