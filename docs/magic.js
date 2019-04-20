(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
function b(a,b){return j(a)||c(a,b)||f()}function c(a,b){var c=[];var d=!0;var e=!1;var f=undefined;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{!d&&h["return"]!=null&&h["return"]()}finally{if(e)throw f}}return c}function e(a){return j(a)||g(a)||f()}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function g(a){if(Symbol.iterator in Object(a)||Object.prototype.toString.call(a)==="[object Arguments]")return Array.from(a)}function j(a){if(Array.isArray(a))return a}function k(a,b){if(a==null)return{};var c=l(a,b);var d,e;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(e=0;e<f.length;e++)d=f[e],!(b.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(a,d)&&(c[d]=a[d])}return c}function l(a,b){if(a==null)return{};var c={};var d=Object.keys(a);var e,f;for(f=0;f<d.length;f++)e=d[f],!(b.indexOf(e)>=0)&&(c[e]=a[e]);return c}function m(a){return m=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function m(a){return typeof a}:function m(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},m(a)}var n=require("hyperapp"),o=n.app,q=n.h;var h=function(a){return function(){var b=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var d=!!(arguments.length>1&&arguments[1]!==undefined)&&arguments[1];var e=function is(a){for(var b=arguments.length,c=Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===m(a)})};return!d&&(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),q(a,b,d)}};var r=h("div");var s=h("button");var t=h("code");var u=h("i");var i=h("pre");var v=h("span");var w=h("a");var a=h("text");var x=function Link(a,b){var c=a.to,d=a.href,e=a.text,f=a.nofollow,g=a.noreferrer,h=k(a,["to","href","text","nofollow","noreferrer"]);return function(a,i){return c=c||d||"",h.href=c,c&&c.startsWith("/")&&!c.startsWith("//")?h.onclick=function(a){return i.go({e:a,to:c})}:(h.target="_blank",h.rel="noopener",f&&(h.rel+=" nofollow"),g&&(h.rel+=" noreferrer")),w(h,[e,b])}};var y=h("img");var z=function Img(a){return function(){if(typeof a==="string"&&(a={src:a}),!!a.src)return!a.alt&&(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),y(a)}};var A=h("h2");var B=h("h3");var C=h("li");var D=h("p");var p=h("ul");var E={View:function View(a){var b=!!(arguments.length>1&&arguments[1]!==undefined)&&arguments[1];return function(c,d){var g="dark";return!b&&c.pre.theme==="dark"&&(g="light"),r({"class":"Pre ".concat(b||c.pre.theme)},[r({"class":"menu"},[!b&&s({onclick:function onclick(){return d.pre.changeTheme(g)}},g),s({onclick:function onclick(){return d.pre.clip(a)}},"copy")]),i(function format(a){var f=function wrapWords(a){if(typeof a!=="string")return a;var e=a.split(/\b/);return a=e.map(function(a,f){if(a!==""){var g="";return a==="state"?g="state":a==="actions"?g="actions":e[f+1]&&e[f+1].includes(":")?g="colon":j(a)?g="html":"\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final export throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require\n".includes(a)?g="keyword":"\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".includes(a)?g="builtin":"true false".includes(a)?g="boolean":e[f-1]==="."?g="property":e[f+1]==="."&&(g="object"),g&&(a=v({"class":g},a)),a}}),a};var h={canvas:1,video:1};var i=function wordsByLine(a){if(a.trim().startsWith("//"))return t({"class":"line comment"},a);var b=a.replace(/"/g,"'");var c=b.split("'"),d=e(c),g=d[0],h=d[1],j=d.slice(2);var k=j;k.length===1?k=i(k[0]):k.length>1&&(k=i(k.join("'")));var l=[];return l=typeof h==="undefined"?f(a):[f(g),v({"class":"string"},"'".concat(h,"'")),k],l};var j=function isHtmlTag(a){if(h.hasOwnProperty(a))return!0;try{var b=typeof global==="undefined"?document.createElement(a).toString()==="[object HTMLDivElement]":Object.keys(o.dependencies).includes(a);if(b)return h[a]=!0,!0}catch(a){}};a=a.replace(/^\n|\n$/g,"");var k=a.split("\n").map(function(a){return t({"class":"line"},i(a))});return k}(a))])}}};var F={View:function View(){return G({"class":"main"},[r({"class":"wrapper"},["made with a few bits of ",x({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])}};var G=h("footer");var H={View:function View(a){var b=a.name,c=b===void 0?"menu":b,d=a.between,e=d!==void 0&&d,f=a.items,g=f===void 0?[]:f;return function(a){if(g.length||a[c]&&a[c].length)return!g.length&&(g=a[c]),I({"class":"Menu"},[p(g.map(function(b,d){var f=b.items,g=k(b,["items"]);var h={};var i=a.hash?"#".concat(a.hash):"";var j=a.url+i;g.to===j&&(h["class"]="active");var l;return f&&j.startsWith(g.to)&&(l=p(f.map(function(a){return C([x(a)])}))),[C(h,[x(g),l]),e&&d<a[c].length-1?C(e):""]}))])}}};var I=h("nav");var J=h("header");var K=function PageHead(a){return(a.logo||a.menu||a.tagline)&&J({"class":"main"},[(a.logo||a.logotext)&&x({to:"/css/","class":"logo-wrapper"},[a.logo&&z({"class":"logo",src:a.logo}),a.logotext&&v({"class":"logo-text"},a.logotext)]),H.View])};var L={"/css/":function css(){return r([A("@magic/css"),D("parse/stringify/write css in js"),D("NO dynamic css, css gets output as css file"),x({to:"https://www.npmjs.com/package/@magic/css"},z({src:"https://img.shields.io/npm/v/@magic/css.svg"})),x({to:"https://travis-ci.org/magic/css"},z({src:"https://travis-ci.com/magic/css.svg?branch=master"})),x({to:"https://ci.appveyor.com/project/jaeh/css/branch/master"},z({src:"https://ci.appveyor.com/api/projects/status/yk1hmw7ilwb74h5y/branch/master?svg=true"})),x({to:"https://coveralls.io/github/magic/css"},z({src:"https://coveralls.io/repos/github/magic/css/badge.svg"})),x({to:"https://greenkeeper.io"},z({src:"https://badges.greenkeeper.io/magic/css.svg"})),A("installation"),E.View("npm install @magic/css"),A("usage"),B("init"),E.View("const css = require('@magic/css')"),B("styles"),E.View("\nconst style = {\n  '.className': {\n    color: 'green',\n  },\n}\nawait css.stringify(style)\n// .className { color:green; }"),B("hover/active etc"),E.View("\nconst style = {\n  'div': {\n    color: 'red',\n    '&:hover': {\n      color: 'green',\n    },\n  },\n}\n\nawait css.stringify(style)\n// div { color: red; }\n// div:hover { color: green; }"),B("nesting"),E.View("\nconst style = {\n  'div': {\n    'p, &:hover': {\n      color: 'red',\n    },\n  },\n}\nawait css.stringify(style)\n// div p, div:hover { color: red; }"),B("parse"),E.View("\nconst style = {\n  '.className': {\n    '#id': {\n      color: 'orange',\n    },\n  },\n}\n\ncss.parse(style)\n// ast"),B("stringify"),E.View("\nconst style = {\n  '.className': {\n    '#id': {\n      color: 'white',\n    },\n  },\n}\n\nawait css.stringify(style)\n// minified string\n`.className #id{color:white;}`\n"),B("write to filesystem"),E.View("\nconst style = {\n  '.className': {\n    '#id': {\n      color: opts.textColor,\n    },\n  },\n}\n\ncss.write(style)\n// writes styles to ./out.css\ncss.write(style, { OUTFILE: './outfile.css' })\n// writes styles to ./outfile.css"),B("media queries"),E.View("\nconst style = {\n  '@media screen and (min-width: 500px)': {\n    '#id': {\n      color: opts.textColor,\n    },\n  },\n}\n\nawait css.stringify(style)\n// css string\n`\n@media screen and (min-width: 500px) {\n  #id {\n    color: green;\n  }\n}\n`"),B("keyframes"),E.View("\nconst style = {\n'@keyframes anim-name': {\n  from {\n    opacity: 0,\n  },\n  to {\n    opacity: 1,\n  }\n}\n\nawait css.stringify(style)\n\n// css string\n`\n@keyframes anim-name {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n`"),B("webfonts"),E.View("\nconst style = {\n  '@font-face': {\n    fontFamily: 'font-name',\n    fontDir: '/fonts/',\n    fontStyle: 'normal',\n    fontWeight: 'normal',\n  },\n}\n\nawait css.stringify(style)\n// css string\n`\n@font-face {\n  font-family: \"font-name\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('/fonts/font-name.eot');\n  src: url('/fonts/font-name.eot#iefix') format('embedded-opentype'),',\n  url('/fonts/font-name.ttf') format('truetype'),',\n  url('/fonts/font-name.woff') format('woff'),',\n  url('/fonts/font-name.woff2') format('woff2'),',\n  url('/fonts/font-name.svg#font-name') format('svg');',\n}\n`"),r({"class":"changelog"},[A("CHANGELOG"),B("0.1.0"),p([C("return classes and ids as separate objects additionally to selectors")]),B("0.2.0"),p([C("Added media queries")]),B("0.3.0"),p([C("returns a promise! no longer sync"),C("autoprefixer and postcss added")]),B("0.4.0"),p([C("supports @font-face declarations")]),B("0.4.1"),p([C("added fontDir option to font-face declarations")]),B("0.4.2"),p([C("update deps to fix security issues")]),B("0.4.3"),p([C("added @keyframes for animations")])])])},"/404/":function _(){return r("404 - not found")}};var M={"url":"/","pre":{"theme":"light"}};M.url=window.location.pathname;var N={"go":function go(a){return function(c){if(!window.history)return!0;var d=a.to;var f=a.e?a.e:a;f.preventDefault();var e=c.url;var g=e.split("#"),h=b(g,2),i=h[0],j=h[1],k=j===void 0?"":j;if(d){e=d.replace(window.location.origin,"");var l=e.split("#"),m=b(l,2),n=m[0],o=m[1],p=o===void 0?"":o;i=n,k=p;var q=c.hash?"#".concat(c.hash):"";var r=c.url+q;e!==r&&(window.history&&window.history.pushState({uri:i},"",e),!k&&window.scrollTo(0,0))}else e=f.state?f.state.uri:"/";return k&&window.setTimeout(function(){var a=document.getElementById(k);a&&window.scrollTo(0,a.offsetTop)},10),{url:i,hash:k,prev:c.url}}},"pre":{"changeTheme":function changeTheme(a){return{theme:a}},"clip":function clip(a){if(typeof document!=="undefined"&&typeof document.execCommand==="function"){var b=document.createElement("textarea");b.id="copy",b.innerHTML=a,document.body.appendChild(b);var c=document.getElementById("copy");c.select(),document.execCommand("copy"),document.body.removeChild(c)}}}};var O=function view(a,b){var c=L[a.url]?a.url:"/404/";var d=L[c];if(a.pages){var e=a.pages[c];for(var f in e)a[f]=e[f]}if(b.pages){var g=b.pages[c];for(var h in g)b[h]=g[h]}return r({"class":"wrapper",oncreate:function oncreate(){typeof window!=="undefined"&&b.go&&window.addEventListener("popstate",b.go)}},[K,d?r({"class":"page"},d(a,b)):r({"class":"page"},"404 - not found"),F.View])};var P=document;var d=P.getElementById("magic");!d&&(d=P.createElement("div"),d.id="magic",P.body.appendChild(d)),o(M,N,O,d);
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"hyperapp":2}],2:[function(require,module,exports){
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.hyperapp={})}(this,function(e){"use strict";e.h=function(e,n){for(var t=[],r=[],o=arguments.length;2<o--;)t.push(arguments[o]);for(;t.length;){var l=t.pop();if(l&&l.pop)for(o=l.length;o--;)t.push(l[o]);else null!=l&&!0!==l&&!1!==l&&r.push(l)}return"function"==typeof e?e(n||{},r):{nodeName:e,attributes:n||{},children:r,key:n&&n.key}},e.app=function(e,n,t,r){var o,l=[].map,u=r&&r.children[0]||null,i=u&&function n(e){return{nodeName:e.nodeName.toLowerCase(),attributes:{},children:l.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:n(e)})}}(u),f=[],m=!0,a=v(e),c=function e(r,o,l){for(var n in l)"function"==typeof l[n]?function(e,t){l[e]=function(e){var n=t(e);return"function"==typeof n&&(n=n(h(r,a),l)),n&&n!==(o=h(r,a))&&!n.then&&d(a=p(r,v(o,n),a)),n}}(n,l[n]):e(r.concat(n),o[n]=v(o[n]),l[n]=v(l[n]));return l}([],a,v(n));return d(),c;function g(e){return"function"==typeof e?g(e(a,c)):null!=e?e:""}function s(){o=!o;var e=g(t);for(r&&!o&&(u=function e(n,t,r,o,l){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var u=k(o,l);n.insertBefore(u,t),null!=r&&T(n,t,r),t=u}else if(null==r.nodeName)t.nodeValue=o;else{x(t,r.attributes,o.attributes,l=l||"svg"===o.nodeName);for(var i={},f={},a=[],c=r.children,s=o.children,d=0;d<c.length;d++){a[d]=t.childNodes[d];var v=N(c[d]);null!=v&&(i[v]=[a[d],c[d]])}for(var d=0,p=0;p<s.length;){var v=N(c[d]),h=N(s[p]=g(s[p]));if(f[v])d++;else if(null==h||h!==N(c[d+1]))if(null==h||m)null==v&&(e(t,a[d],c[d],s[p],l),p++),d++;else{var y=i[h]||[];v===h?(e(t,y[0],y[1],s[p],l),d++):y[0]?e(t,t.insertBefore(y[0],a[d]),y[1],s[p],l):e(t,a[d],null,s[p],l),f[h]=s[p],p++}else null==v&&T(t,a[d],c[d]),d++}for(;d<c.length;)null==N(c[d])&&T(t,a[d],c[d]),d++;for(var d in i)f[d]||T(t,i[d][0],i[d][1])}return t}(r,u,i,i=e)),m=!1;f.length;)f.pop()()}function d(){o||(o=!0,setTimeout(s))}function v(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function p(e,n,t){var r={};return e.length?(r[e[0]]=1<e.length?p(e.slice(1),n,t[e[0]]):n,v(t,r)):n}function h(e,n){for(var t=0;t<e.length;)n=n[e[t++]];return n}function N(e){return e?e.key:null}function y(e){return e.currentTarget.events[e.type](e)}function b(e,n,t,r,o){if("key"===n);else if("style"===n)if("string"==typeof t)e.style.cssText=t;else for(var l in"string"==typeof r&&(r=e.style.cssText=""),v(r,t)){var u=null==t||null==t[l]?"":t[l];"-"===l[0]?e.style.setProperty(l,u):e.style[l]=u}else"o"===n[0]&&"n"===n[1]?(n=n.slice(2),e.events?r||(r=e.events[n]):e.events={},(e.events[n]=t)?r||e.addEventListener(n,y):e.removeEventListener(n,y)):n in e&&"list"!==n&&"type"!==n&&"draggable"!==n&&"spellcheck"!==n&&"translate"!==n&&!o?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function k(e,n){var t="string"==typeof e||"number"==typeof e?document.createTextNode(e):(n=n||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName),r=e.attributes;if(r){r.oncreate&&f.push(function(){r.oncreate(t)});for(var o=0;o<e.children.length;o++)t.appendChild(k(e.children[o]=g(e.children[o]),n));for(var l in r)b(t,l,r[l],null,n)}return t}function x(e,n,t,r){for(var o in v(n,t))t[o]!==("value"===o||"checked"===o?e[o]:n[o])&&b(e,o,t[o],n[o],r);var l=m?t.oncreate:t.onupdate;l&&f.push(function(){l(e,n)})}function T(e,n,t){function r(){e.removeChild(function e(n,t){var r=t.attributes;if(r){for(var o=0;o<t.children.length;o++)e(n.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}var o=t.attributes&&t.attributes.onremove;o?o(n,r):r()}}});

},{}]},{},[1]);
