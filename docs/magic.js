(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
function b(a,b){return l(a)||c(a,b)||j()}function c(a,b){var c=[];var d=!0;var e=!1;var f=undefined;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{!d&&h["return"]!=null&&h["return"]()}finally{if(e)throw f}}return c}function e(a,b){if(a==null)return{};var c=f(a,b);var d,e;if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(e=0;e<g.length;e++)d=g[e],!(b.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(a,d)&&(c[d]=a[d])}return c}function f(a,b){if(a==null)return{};var c={};var d=Object.keys(a);var e,f;for(f=0;f<d.length;f++)e=d[f],!(b.indexOf(e)>=0)&&(c[e]=a[e]);return c}function g(a){return l(a)||k(a)||j()}function j(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function k(a){if(Symbol.iterator in Object(a)||Object.prototype.toString.call(a)==="[object Arguments]")return Array.from(a)}function l(a){if(Array.isArray(a))return a}function m(a){return m=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function m(a){return typeof a}:function m(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},m(a)}var n=require("hyperapp"),o=n.app,q=n.h;var h=function(a){return function(){var b=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var d=!!(arguments.length>1&&arguments[1]!==undefined)&&arguments[1];var e=function is(a){for(var b=arguments.length,c=Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===m(a)})};return!d&&(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),q(a,b,d)}};var r=h("div");var s=h("button");var t=h("code");var u=h("i");var i=h("pre");var v=h("span");var w=h("h2");var x=h("h3");var y=h("h4");var z=h("li");var A=h("p");var p=h("ul");var B={View:function View(a){var b=!!(arguments.length>1&&arguments[1]!==undefined)&&arguments[1];return function(c,d){var f="dark";return!b&&c.pre.theme==="dark"&&(f="light"),r({"class":"Pre ".concat(b||c.pre.theme)},[r({"class":"menu"},[!b&&s({onclick:function onclick(){return d.pre.changeTheme(f)}},f),s({onclick:function onclick(){return d.pre.clip(a)}},"copy")]),i(function format(a){var e=function wrapWords(a){if(typeof a!=="string")return a;var e=a.split(/\b/);return a=e.map(function(a,f){if(a!==""){var g="";return a==="state"?g="state":a==="actions"?g="actions":e[f+1]&&e[f+1].includes(":")?g="colon":j(a)?g="html":"let this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final export throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require".includes(a)?g="keyword":"Array Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array".includes(a)?g="builtin":"true false".includes(a)?g="boolean":e[f-1]==="."?g="property":e[f+1]==="."&&(g="object"),g&&(a=v({"class":g},a)),a}}),a};var h={canvas:1,video:1};var i=function wordsByLine(a){if(a.trim().startsWith("//"))return t({"class":"line comment"},a);if(a.includes("//")){var m=a.split("//");m[0]=i(m[0]);for(var n=1;n<m.length;n++)m[n]=t({"class":"comment"},"//".concat(m[n]));return t({"class":"line"},m)}var b=a.replace(/"/g,"'");var c=b.split("'"),d=g(c),f=d[0],h=d[1],j=d.slice(2);var k=j;k.length===1?k=i(k[0]):k.length>1&&(k=i(k.join("'")));var l=[];return l=typeof h==="undefined"?e(a):[e(f),v({"class":"string"},"'".concat(h,"'")),k],l};var j=function isHtmlTag(a){if(h.hasOwnProperty(a))return!0;try{var b=typeof global==="undefined"?document.createElement(a).toString()==="[object HTMLDivElement]":Object.keys(o.dependencies).includes(a);if(b)return h[a]=!0,!0}catch(a){}};a=a.replace(/^\n|\n$/g,"");var k=a.split("\n").map(function(a){return t({"class":"line"},i(a))});return k}(a))])}}};var C=h("a");var a=h("text");var D=function Link(a,b){var c=a.to,d=a.href,f=a.text,g=a.nofollow,h=a.noreferrer,i=e(a,["to","href","text","nofollow","noreferrer"]);return function(a,j){return c=c||d||"",i.href=c,c&&c.startsWith("/")&&!c.startsWith("//")?i.onclick=function(a){return j.go({e:a,to:c})}:(i.target="_blank",i.rel="noopener",g&&(i.rel+=" nofollow"),h&&(i.rel+=" noreferrer")),C(i,[f,b])}};var E=h("img");var F=function Img(a){return function(){if(typeof a==="string"&&(a={src:a}),!!a.src)return!a.alt&&(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),E(a)}};var G=function GitBadges(a){var b=a.project,c=b!==void 0&&b;var d=a.npm,e=d===void 0?c:d,f=a.travis,g=f===void 0?c:f,h=a.appveyor,i=h===void 0?c:h,j=a.coveralls,k=j===void 0?c:j,l=a.greenkeeper,m=l===void 0?c:l,n=a.branch,o=n===void 0?"master":n;if(c||e||g||i||k||m){var q=function GitBadge(a){var b=a.to,c=a.src;return z([D({to:b},F({src:c}))])};return p({"class":"GitBadges"},[e&&q({to:"https://www.npmjs.com/package/@".concat(e),src:"https://img.shields.io/npm/v/@".concat(e,".svg")}),g&&q({to:"https://travis-ci.com/".concat(g),src:"https://travis-ci.com/".concat(g,".svg?branch=").concat(o)}),i&&q({to:"https://ci.appveyor.com/project/".concat(i,"/branch/").concat(o),src:"https://img.shields.io/appveyor/ci/".concat(i,"/").concat(o,".svg")}),k&&q({to:"https://coveralls.io/github/".concat(k),src:"https://coveralls.io/repos/github/".concat(k,"/badge.svg")}),m&&q({to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(m,".svg")})])}};var H={View:function View(){return I({"class":"main"},[r({"class":"wrapper"},["made with a few bits of ",D({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])}};var I=h("footer");var J={View:function View(a){var b=a.name,c=b===void 0?"menu":b,d=a["class"],f=d===void 0?"":d,g=a.between,h=g!==void 0&&g,i=a.items,j=i===void 0?[]:i;return function(a){if(j.length||a[c]&&a[c].length)return!j.length&&(j=a[c]),K({"class":"Menu ".concat(f)},[p(j.map(function(b,d){var f=b.items,g=e(b,["items"]);var i={};var j=a.hash?"#".concat(a.hash):"";var k=a.url+j;g.to===k&&(i["class"]="active");var l;return f&&k.startsWith(g.to)&&(l=p(f.map(function(a){var b={};return a.to===k&&(b["class"]="active"),z(b,D(a))}))),[z(i,[D(g),l]),h&&d<a[c].length-1?z(h):""]}))])}}};var K=h("nav");var L=h("header");var M=function PageHead(a){return(a.logo||a.menu||a.tagline)&&L({"class":"main"},[(a.logo||a.logotext)&&D({to:"/css/","class":"logo-wrapper"},[a.logo&&F({"class":"logo",src:a.logo}),a.logotext&&v({"class":"logo-text"},a.logotext)]),J.View])};var N={"/css/":function css(){return r([w("@magic/css"),A("parse/stringify/write css in js"),A("NO dynamic css, css gets output as css file. whenever possible, use dynamic classes instead."),A("if there is absolute need for dynamic css, feel free to use the style property of the html tag / webcomponent you want to dynamically change, unfortunately, this library will not help you with that."),G({project:"magic/css",appveyor:"jaeh/css"}),w({id:"installation"},"installation"),B.View("npm install @magic/css"),w({id:"usage"},"usage"),x({id:"require"},"require"),B.View("const css = require('@magic/css')"),w({id:"api"},"api"),x({id:"api-css"},"css (full result)"),B.View("\nconst css = require('css')\n\nconst style = {\n  body: {\n    color: 'green',\n  },\n  '.class': {\n    color: 'orange',\n  },\n  '#id': {\n    color: 'purple'\n  },\n}\n\ncss(style)\n\n// returns\nObject {\n  // nicely formatted css string\n  css: 'body {\\n  color: green;\\n}\\n.class {\\n  color: orange;\\n}\\n#id{\\n  color: purple;\\n}\\n',\n  // minimal whitespace\n  minified: 'body{color:green}.class{color:orange}#id{color:purple}',\n  // array of used classes if any\n  classes: [],\n  // array of used ids if any\n  ids: [],\n  // array of used selectors\n  selectors: [],\n  //ast of this css object\n  parsed: [],\n}"),x({id:"api-parse"},"parse"),B.View("\nconst style = {\n  '.className': {\n    '#id': {\n      color: 'orange',\n    },\n  },\n}\n\ncss.parse(style)\n// ast"),x({id:"api-stringify"},"stringify"),B.View("\nconst style = {\n  '.className': {\n    '#id': {\n      color: 'white',\n    },\n  },\n}\n\nawait css.stringify(style)\n// minified string\n`.className #id{color:white;}`\n"),x({id:"api-write"},"write to filesystem"),B.View("\nconst style = {\n  '.className': {\n    '#id': {\n      color: opts.textColor,\n    },\n  },\n}\n\n// writes styles to ./out.css\ncss.write(style)\n// writes styles to ./outfile.css\ncss.write(style, { OUTFILE: './outfile.css' })"),w({id:"styles"},"styles"),A(["styles are a javascript object."," the keys are selectors and the values are nested objects of css rules,"," where the keys of the objects are assumed to be selectors"," unless the value associated with the key is not an object"]),B.View("\nconst style = {\n'.className': {\n  color: 'green',\n},\n}\nawait css.stringify(style)\n// .className { color:green; }"),x({id:"pseudo classes: (:hover, :active)"},"pseudo classes: (:hover, :active)"),A("css pseudo classes in nested css get found if their object key starts with a &"),B.View("\nconst style = {\n'div': {\n  color: 'red',\n  '&:hover': {\n    color: 'green',\n  },\n},\n}\n\nawait css.stringify(style)\n// div { color: red; }\n// div:hover { color: green; }"),x({id:"selector-nesting"},"selector nesting"),B.View("\nconst style = {\n'div': {\n  'p, &:hover': {\n    color: 'red',\n  },\n},\n}\nawait css.stringify(style)\n// div p, div:hover { color: red; }"),x({id:"media-queries"},"media queries"),B.View("\nconst style = {\n  '@media screen and (min-width: 500px)': {\n    '#id': {\n      color: opts.textColor,\n    },\n  },\n}\n\nawait css.stringify(style)\n// css string\n`\n@media screen and (min-width: 500px) {\n  #id {\n    color: green;\n  }\n}\n`"),x({id:"keyframes"},"keyframes for animations"),B.View("\nconst style = {\n'@keyframes anim-name': {\n  from {\n    opacity: 0,\n  },\n  to {\n    opacity: 1,\n  }\n}\n\nawait css.stringify(style)\n\n// css string\n`\n@keyframes anim-name {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n`"),x({id:"webfonts"},"webfonts"),B.View("\nconst style = {\n  '@font-face': {\n    fontFamily: 'font-name',\n    fontDir: '/fonts/',\n    fontStyle: 'normal',\n    fontWeight: 'normal',\n  },\n}\n\nawait css.stringify(style)\n// css string\n`\n@font-face {\n  font-family: \"font-name\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('/fonts/font-name.eot');\n  src: url('/fonts/font-name.eot#iefix') format('embedded-opentype'),',\n  url('/fonts/font-name.ttf') format('truetype'),',\n  url('/fonts/font-name.woff') format('woff'),',\n  url('/fonts/font-name.woff2') format('woff2'),',\n  url('/fonts/font-name.svg#font-name') format('svg');',\n}\n`"),r({id:"changelog"},[w("CHANGELOG"),y({id:"v-0.1.0"},"0.1.0"),p([z("return classes and ids as separate objects additionally to selectors")]),y({id:"v-0.2.0"},"0.2.0"),p([z("Added media queries")]),y({id:"v-0.3.0"},"0.3.0"),p([z("returns a promise! no longer sync"),z("autoprefixer and postcss added")]),y({id:"v-0.4.0"},"0.4.0"),p([z("supports @font-face declarations")]),y({id:"v-0.4.1"},"0.4.1"),p([z("added fontDir option to font-face declarations")]),y({id:"v-0.4.2"},"0.4.2"),p([z("update deps to fix security issues")]),y({id:"v-0.4.3"},"0.4.3"),p([z("added @keyframes for animations")]),y({id:"v-0.4.4"},"0.4.4"),p([z("css.parse now converts deep arrays into one object before parsing")])])])},"/404/":function _(){return r("404 - not found")}};var O={"url":"/css/","logotext":"@magic/css","menu":[{to:"/css/#installation","text":"installation"},{to:"/css/#require","text":"require"},{to:"/css/#api","text":"api","items":[{to:"/css/#api-css","text":"css (full result)"},{to:"/css/#api-parse","text":"parse"},{to:"/css/#api-stringify","text":"stringify"},{to:"/css/#api-write","text":"write to filesystem"}]},{to:"/css/#styles","text":"styles","items":[{to:"/css/#pseudo classes: (:hover, :active)","text":"pseudo classes: (:hover, :active)"},{to:"/css/#selector-nesting","text":"selector nesting"},{to:"/css/#media-queries","text":"media queries"},{to:"/css/#keyframes","text":"keyframes for animations"},{to:"/css/#webfonts","text":"webfonts"}]},{to:"/css/#changelog","text":"changelog","items":[{"to":"#v-0.1.0","text":"0.1.0"},{"to":"#v-0.2.0","text":"0.2.0"},{"to":"#v-0.3.0","text":"0.3.0"},{"to":"#v-0.4.0","text":"0.4.0"},{"to":"#v-0.4.1","text":"0.4.1"},{"to":"#v-0.4.2","text":"0.4.2"},{"to":"#v-0.4.3","text":"0.4.3"},{"to":"#v-0.4.4","text":"0.4.4"}]}],"pre":{"theme":"light"}};O.url=window.location.pathname;var P={"pre":{"changeTheme":function changeTheme(a){return{theme:a}},"clip":function clip(a){if(typeof document!=="undefined"&&typeof document.execCommand==="function"){var b=document.createElement("textarea");b.id="copy",b.innerHTML=a,document.body.appendChild(b);var c=document.getElementById("copy");c.select(),document.execCommand("copy"),document.body.removeChild(c)}}},"go":function go(a){return function(c){if(!window.history)return!0;var d=a.to;var f=a.e?a.e:a;f.preventDefault();var e=c.url;var g=e.split("#"),h=b(g,2),i=h[0],j=h[1],k=j===void 0?"":j;if(d){e=d.replace(window.location.origin,"");var l=e.split("#"),m=b(l,2),n=m[0],o=m[1],p=o===void 0?"":o;i=n,k=p;var q=c.hash?"#".concat(c.hash):"";var r=c.url+q;e!==r&&(window.history&&window.history.pushState({uri:i},"",e),!k&&window.scrollTo(0,0))}else i=f.state?f.state.uri:"/";return k&&window.setTimeout(function(){var a=document.getElementById(k);a&&window.scrollTo(0,a.offsetTop)},10),{url:i,hash:k,prev:c.url}}}};var Q=function view(a,b){var c=N[a.url]?a.url:"/404/";var d=N[c];if(a.pages){var e=a.pages[c];for(var f in e)a[f]=e[f]}if(b.pages){var g=b.pages[c];for(var h in g)b[h]=g[h]}return r({"class":"wrapper",oncreate:function oncreate(){typeof window!=="undefined"&&b.go&&window.addEventListener("popstate",b.go)}},[M,d?r({"class":"page"},d(a,b)):r({"class":"page"},"404 - not found"),H.View])};var R=document;var d=R.getElementById("magic");!d&&(d=R.createElement("div"),d.id="magic",R.body.appendChild(d)),o(O,P,Q,d);
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"hyperapp":2}],2:[function(require,module,exports){
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.hyperapp={})}(this,function(e){"use strict";e.h=function(e,n){for(var t=[],r=[],o=arguments.length;2<o--;)t.push(arguments[o]);for(;t.length;){var l=t.pop();if(l&&l.pop)for(o=l.length;o--;)t.push(l[o]);else null!=l&&!0!==l&&!1!==l&&r.push(l)}return"function"==typeof e?e(n||{},r):{nodeName:e,attributes:n||{},children:r,key:n&&n.key}},e.app=function(e,n,t,r){var o,l=[].map,u=r&&r.children[0]||null,i=u&&function n(e){return{nodeName:e.nodeName.toLowerCase(),attributes:{},children:l.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:n(e)})}}(u),f=[],m=!0,a=v(e),c=function e(r,o,l){for(var n in l)"function"==typeof l[n]?function(e,t){l[e]=function(e){var n=t(e);return"function"==typeof n&&(n=n(h(r,a),l)),n&&n!==(o=h(r,a))&&!n.then&&d(a=p(r,v(o,n),a)),n}}(n,l[n]):e(r.concat(n),o[n]=v(o[n]),l[n]=v(l[n]));return l}([],a,v(n));return d(),c;function g(e){return"function"==typeof e?g(e(a,c)):null!=e?e:""}function s(){o=!o;var e=g(t);for(r&&!o&&(u=function e(n,t,r,o,l){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var u=k(o,l);n.insertBefore(u,t),null!=r&&T(n,t,r),t=u}else if(null==r.nodeName)t.nodeValue=o;else{x(t,r.attributes,o.attributes,l=l||"svg"===o.nodeName);for(var i={},f={},a=[],c=r.children,s=o.children,d=0;d<c.length;d++){a[d]=t.childNodes[d];var v=N(c[d]);null!=v&&(i[v]=[a[d],c[d]])}for(var d=0,p=0;p<s.length;){var v=N(c[d]),h=N(s[p]=g(s[p]));if(f[v])d++;else if(null==h||h!==N(c[d+1]))if(null==h||m)null==v&&(e(t,a[d],c[d],s[p],l),p++),d++;else{var y=i[h]||[];v===h?(e(t,y[0],y[1],s[p],l),d++):y[0]?e(t,t.insertBefore(y[0],a[d]),y[1],s[p],l):e(t,a[d],null,s[p],l),f[h]=s[p],p++}else null==v&&T(t,a[d],c[d]),d++}for(;d<c.length;)null==N(c[d])&&T(t,a[d],c[d]),d++;for(var d in i)f[d]||T(t,i[d][0],i[d][1])}return t}(r,u,i,i=e)),m=!1;f.length;)f.pop()()}function d(){o||(o=!0,setTimeout(s))}function v(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function p(e,n,t){var r={};return e.length?(r[e[0]]=1<e.length?p(e.slice(1),n,t[e[0]]):n,v(t,r)):n}function h(e,n){for(var t=0;t<e.length;)n=n[e[t++]];return n}function N(e){return e?e.key:null}function y(e){return e.currentTarget.events[e.type](e)}function b(e,n,t,r,o){if("key"===n);else if("style"===n)if("string"==typeof t)e.style.cssText=t;else for(var l in"string"==typeof r&&(r=e.style.cssText=""),v(r,t)){var u=null==t||null==t[l]?"":t[l];"-"===l[0]?e.style.setProperty(l,u):e.style[l]=u}else"o"===n[0]&&"n"===n[1]?(n=n.slice(2),e.events?r||(r=e.events[n]):e.events={},(e.events[n]=t)?r||e.addEventListener(n,y):e.removeEventListener(n,y)):n in e&&"list"!==n&&"type"!==n&&"draggable"!==n&&"spellcheck"!==n&&"translate"!==n&&!o?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function k(e,n){var t="string"==typeof e||"number"==typeof e?document.createTextNode(e):(n=n||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName),r=e.attributes;if(r){r.oncreate&&f.push(function(){r.oncreate(t)});for(var o=0;o<e.children.length;o++)t.appendChild(k(e.children[o]=g(e.children[o]),n));for(var l in r)b(t,l,r[l],null,n)}return t}function x(e,n,t,r){for(var o in v(n,t))t[o]!==("value"===o||"checked"===o?e[o]:n[o])&&b(e,o,t[o],n[o],r);var l=m?t.oncreate:t.onupdate;l&&f.push(function(){l(e,n)})}function T(e,n,t){function r(){e.removeChild(function e(n,t){var r=t.attributes;if(r){for(var o=0;o<t.children.length;o++)e(n.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}var o=t.attributes&&t.attributes.onremove;o?o(n,r):r()}}});

},{}]},{},[1]);
