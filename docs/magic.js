(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function b(a){return l(a)||c(a)||j()}function c(a){if(Symbol.iterator in Object(a)||Object.prototype.toString.call(a)==="[object Arguments]")return Array.from(a)}function e(a,b){if(a==null)return{};var c=f(a,b);var d,e;if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(e=0;e<g.length;e++)d=g[e],!(b.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(a,d)&&(c[d]=a[d])}return c}function f(a,b){if(a==null)return{};var c={};var d=Object.keys(a);var e,f;for(f=0;f<d.length;f++)e=d[f],!(b.indexOf(e)>=0)&&(c[e]=a[e]);return c}function g(a,b){return l(a)||k(a,b)||j()}function j(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function k(a,b){var c=[];var d=!0;var e=!1;var f=undefined;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{!d&&h["return"]!=null&&h["return"]()}finally{if(e)throw f}}return c}function l(a){if(Array.isArray(a))return a}function m(a){return m=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function m(a){return typeof a}:function m(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},m(a)}var n=require("hyperapp"),o=n.app,q=n.h;var h=function(a){return function(){var b=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var d=!!(arguments.length>1&&arguments[1]!==undefined)&&arguments[1];var e=function is(a){for(var b=arguments.length,c=Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===m(a)})};return!d&&(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),q(a,b,d)}};var r=h("div");var s=h("button");var t=h("code");var u=h("pre");var v=function Pre(a){var b=!!(arguments.length>1&&arguments[1]!==undefined)&&arguments[1];return function(c,d){return r({"class":"Pre ".concat(b||c.pre.theme)},[r({"class":"menu"},[!b&&s({onclick:d.pre.changeTheme},c.pre.theme==="dark"?"light":"dark"),s({onclick:function onclick(){return d.pre.clip(a)}},"copy")]),u(LIB.PRE.format(a).map(function(a){var b=g(a,2),c=b[0],d=b[1];return t(c,d)}))])}};v.View=function(){return v.apply(void 0,arguments)};var w=h("h2");var x=h("h3");var y=h("h4");var z=h("li");var A=h("p");var B=h("ul");var C=h("a");var a=h("text");var D=function Link(a,b){var c=a.to,d=e(a,["to"]);return function(a,f){var g=d.href,h=d.text,i=d.nofollow,j=d.noreferrer,k=d.onclick,l=e(d,["href","text","nofollow","noreferrer","onclick"]);return c=c||g||"",l.href=c,c&&c.startsWith("/")&&!c.startsWith("//")?l.onclick=function(a){k&&k({e:a,to:c}),f.go({e:a,to:c})}:(l.target="_blank",l.rel="noopener",i&&(l.rel+=" nofollow"),j&&(l.rel+=" noreferrer")),C(l,[h,b])}};var E=h("img");var F=function Img(a){return function(){if(typeof a==="string"&&(a={src:a}),!!a.src)return!a.alt&&(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),E(a)}};var G=function GitBadges(a){var b=a.project,c=b!==void 0&&b,d=a.branch,e=d===void 0?"master":d;var f=Object.entries({npm:function npm(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:c;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}},travis:function travis(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:c;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://travis-ci.com/".concat(a,".svg?branch=").concat(e)}},appveyor:function appveyor(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:c;return a&&{to:"https://ci.appveyor.com/project/".concat(a,"/branch/").concat(e),src:"https://img.shields.io/appveyor/ci/".concat(a,"/").concat(e,".svg")}},coveralls:function coveralls(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:c;return a&&{to:"https://coveralls.io/github/".concat(a),src:"https://coveralls.io/repos/github/".concat(a,"/badge.svg")}},greenkeeper:function greenkeeper(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:c;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}},snyk:function snyk(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:c;return a&&{to:"https://snyk.io/test/github/".concat(a),src:"https://snyk.io/test/github/".concat(a,"/badge.svg")}}}).map(function(b){var c=g(b,2),d=c[0],e=c[1];return e(a[d])}).filter(function(b){return b.to&&b.src});return f.length?B({"class":"GitBadges"},f.map(function(a){var b=a.to,c=a.src;return z([D({to:b},F({src:c}))])})):void 0};var H={View:function View(){return I({"class":"main"},[r({"class":"wrapper"},["made with a few bits of ",D({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])}};var I=h("footer");var J={View:function View(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"menu";return function(b){typeof a==="string"&&(a={name:a});var c=a,d=c.name,f=d===void 0?"menu":d,g=c["class"],h=g===void 0?"Menu":g,j=c.items,k=j===void 0?[]:j,l=c.collapse;var n=b.url,o=b[f],p=o===void 0?[]:o;if(k=k.length?k:p,!!k.length){b.hash&&(n+="#".concat(b.hash));var q=function Item(a){var b=a.text,c=a.items,d=c===void 0?[]:c,f=e(a,["text","items"]);if(f.to||b){var g={};f.to===n&&(g["class"]="active");var h;return d&&(n.startsWith(f.to)||!(l===void 0||l))&&(h=B(d.map(function(a){return q(a)}))),z(g,[f.to?D(f,b):L(f,b),h])}};return i({"class":h.includes("Menu")?h:"Menu ".concat(h)},B(k.map(function(a){return q(a)})))}}}};var K=h("i");var i=h("nav");var L=h("span");var M=h("header");var N=function PageHead(a){return(a.logo||a.menu||a.tagline)&&M({"class":"main"},[(a.logo||a.logotext)&&D({to:"/css/","class":"logo-wrapper"},[a.logo&&F({"class":"logo",src:a.logo}),a.logotext&&L({"class":"logo-text"},a.logotext)]),J.View])};var O=h("object");var P={};(function(){var a="\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final export throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require\n".trim().split(/\b/g).map(function(a){return a.trim()});var c="\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".trim().split(/\b/g).map(function(a){return a.trim()});var d=["true","false"];var e=function wrapWords(b){if(typeof b!=="string")return b;var e=b.split(/\b/);return b=e.map(function(b,f){if(b!==""){var g="";return b==="state"?g="state":b==="actions"?g="actions":e[f+1]&&e[f+1].includes(":")?g="colon":a.includes(b)?g="keyword":c.includes(b)?g="builtin":d.includes(b)?g="boolean":e[f-1]==="."?g="property":e[f+1]==="."&&(g="object"),g&&(b=L({"class":g},b)),b}}),b};var h=function wordsByLine(a){var c=a.indexOf("//");var d=a.trim();if(d.startsWith("//")){var u=a.search(/\S|$/);var v="";for(var w=0;w<u;w++)v+=" ";return!d.startsWith("// ")&&(a="".concat(v,"// ").concat(d.substr(2))),t({"class":"line comment"},[v,"// ",h(d.substring(3))])}if(c>-1&&a[c-1]!==":"){var x=a.indexOf("//");var y=a.substring(0,x);var z=a.substring(x);return t({"class":"line"},[h(y),L({"class":"comment"},h(z))])}if(a.indexOf("://")>2)return a.split(/(?= )/).map(function(a){return a.includes("://")?D({to:a},a):h(a)});if(a.indexOf("@")&&a.includes(".")&&!a.trim().includes(" ")){a=a.replace("mailto:","");var A=a.split(/\b/g);var B=!1;var C="";var E=/[^A-Za-z0-9.:]/g;if(A.map(function(a,b){var c=!1;a==="mailto"?(c=!0,B=!0,C=a):c||a!=="@"?E.test(a)&&(B=!1):(B=!0,C=A[b-1]+a,A[b-1]=null),B&&!E.test(a)&&(C+=a)}),C){var f=a.split(C),i=g(f,2),j=i[0],k=i[1];var F=C;return C.startsWith("mailto:")?C=C.replace("mailto:",""):F="mailto:".concat(C),[j,D({"class":"email",to:F},C),k]}return a}var l=a.replace(/"/g,"'");var m=l.split("'"),n=b(m),o=n[0],p=n[1],q=n.slice(2);var r=q;r.length===1?r=h(r[0]):r.length>1&&(r=h(r.join("'")));var s=[];return s=typeof p==="undefined"?e(a):[e(o),L({"class":"string"},"'".concat(p,"'")),r],s};var i=function wrapLine(a){return[{"class":"line"},h(a)]};P.PRE={keywords:a,builtins:c,format:function format(a){return a.trim().split("\n").map(i)},wordsByLine:h,wrapWords:e}})(),window.LIB=P;var Q={"/css/":function css(){return r([w("@magic/css"),A("parse/stringify/write css in js"),A("NO dynamic css, css gets output as css file. whenever possible, use dynamic classes instead."),A("if there is absolute need for dynamic css, feel free to use the style property of the html tag / webcomponent you want to dynamically change, unfortunately, this library will not help you with that."),G({project:"magic/css",appveyor:"jaeh/css"}),w({id:"installation"},"installation"),v.View("npm install @magic/css"),w({id:"usage"},"usage"),x({id:"require"},"require"),v.View("const css = require('@magic/css')"),w({id:"api"},"api"),x({id:"api-css"},"css (full result)"),v.View("\nconst css = require('css')\n\nconst style = {\n  body: {\n    color: 'green',\n  },\n  '.class': {\n    color: 'orange',\n  },\n  '#id': {\n    color: 'purple'\n  },\n}\n\ncss(style)\n\n// returns\nObject {\n  // nicely formatted css string\n  css: 'body {\\n  color: green;\\n}\\n.class {\\n  color: orange;\\n}\\n#id{\\n  color: purple;\\n}\\n',\n  // minimal whitespace\n  minified: 'body{color:green}.class{color:orange}#id{color:purple}',\n  // array of used classes if any\n  classes: [],\n  // array of used ids if any\n  ids: [],\n  // array of used selectors\n  selectors: [],\n  //ast of this css object\n  parsed: [],\n}"),x({id:"api-parse"},"parse"),v.View("\nconst style = {\n  '.className': {\n    '#id': {\n      color: 'orange',\n    },\n  },\n}\n\ncss.parse(style)\n// ast"),x({id:"api-stringify"},"stringify"),v.View("\nconst style = {\n  '.className': {\n    '#id': {\n      color: 'white',\n    },\n  },\n}\n\nawait css.stringify(style)\n// minified string\n`.className #id{color:white;}`\n"),x({id:"api-write"},"write to filesystem"),v.View("\nconst style = {\n  '.className': {\n    '#id': {\n      color: opts.textColor,\n    },\n  },\n}\n\n// writes styles to ./out.css\ncss.write(style)\n// writes styles to ./outfile.css\ncss.write(style, { OUTFILE: './outfile.css' })"),w({id:"styles"},"styles"),A(["styles are a javascript object."," the keys are selectors and the values are nested objects of css rules,"," where the keys of the objects are assumed to be selectors"," unless the value associated with the key is not an object"]),v.View("\nconst style = {\n'.className': {\n  color: 'green',\n},\n}\nawait css.stringify(style)\n// .className { color:green; }"),x({id:"styles-pseudo-classes"},"pseudo classes: (:hover, :active)"),A("css pseudo classes in nested css get found if their object key starts with a &"),v.View("\nconst style = {\n'div': {\n  color: 'red',\n  '&:hover': {\n    color: 'green',\n  },\n},\n}\n\nawait css.stringify(style)\n// div { color: red; }\n// div:hover { color: green; }"),x({id:"styles-selector-nesting"},"selector nesting"),v.View("\nconst style = {\n'div': {\n  'p, &:hover': {\n    color: 'red',\n  },\n},\n}\nawait css.stringify(style)\n// div p, div:hover { color: red; }"),x({id:"styles-media-queries"},"media queries"),v.View("\nconst style = {\n  '@media screen and (min-width: 500px)': {\n    '#id': {\n      color: opts.textColor,\n    },\n  },\n}\n\nawait css.stringify(style)\n// css string\n`\n@media screen and (min-width: 500px) {\n  #id {\n    color: green;\n  }\n}\n`"),x({id:"styles-keyframes"},"keyframes for animations"),v.View("\nconst style = {\n'@keyframes anim-name': {\n  from {\n    opacity: 0,\n  },\n  to {\n    opacity: 1,\n  }\n}\n\nawait css.stringify(style)\n\n// css string\n`\n@keyframes anim-name {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n`"),x({id:"styles-webfonts"},"webfonts"),v.View("\nconst style = {\n  '@font-face': {\n    fontFamily: 'font-name',\n    fontDir: '/fonts/',\n    fontStyle: 'normal',\n    fontWeight: 'normal',\n  },\n}\n\nawait css.stringify(style)\n// css string\n`\n@font-face {\n  font-family: \"font-name\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('/fonts/font-name.eot');\n  src: url('/fonts/font-name.eot#iefix') format('embedded-opentype'),',\n  url('/fonts/font-name.ttf') format('truetype'),',\n  url('/fonts/font-name.woff') format('woff'),',\n  url('/fonts/font-name.woff2') format('woff2'),',\n  url('/fonts/font-name.svg#font-name') format('svg');',\n}\n`"),r({id:"changelog"},[w("CHANGELOG"),y({id:"changelog-v-0.1.0"},"0.1.0"),B([z("return classes and ids as separate objects additionally to selectors")]),y({id:"changelog-v-0.2.0"},"0.2.0"),B([z("Added media queries")]),y({id:"changelog-v-0.3.0"},"0.3.0"),B([z("returns a promise! no longer sync"),z("autoprefixer and postcss added")]),y({id:"changelog-v-0.4.0"},"0.4.0"),B([z("supports @font-face declarations")]),y({id:"changelog-v-0.4.1"},"0.4.1"),B([z("added fontDir option to font-face declarations")]),y({id:"changelog-v-0.4.2"},"0.4.2"),B([z("update deps to fix security issues")]),y({id:"changelog-v-0.4.3"},"0.4.3"),B([z("added @keyframes for animations")]),y({id:"changelog-v-0.4.4"},"0.4.4"),B([z("css.parse now converts deep arrays into one object before parsing")]),y({id:"changelog-v-0.4.5"},"0.4.5"),B([z("css.stringify now makes a bit nicer mediaquery and keyframe links."),z("css.parse should now order media queries to the end of the css.")])])])},"/404/":function _(){return r("404 - not found")}};var R={"url":"/css/","root":"/css/","logotext":"@magic/css","menu":[{to:"/css/#installation","text":"installation"},{to:"/css/#require","text":"require"},{to:"/css/#api","text":"api","items":[{to:"/css/#api-css","text":"css (full result)"},{to:"/css/#api-parse","text":"parse"},{to:"/css/#api-stringify","text":"stringify"},{to:"/css/#api-write","text":"write to filesystem"}]},{to:"/css/#styles","text":"styles","items":[{to:"/css/#styles-pseudo-classes","text":":pseudo classes"},{to:"/css/#styles-selector-nesting","text":"selector nesting"},{to:"/css/#styles-media-queries","text":"media queries"},{to:"/css/#styles-keyframes","text":"keyframes"},{to:"/css/#styles-webfonts","text":"webfonts"}]},{to:"/css/#changelog","text":"changelog","items":[{to:"/css/#changelog-v-0.1.0","text":"0.1.0"},{to:"/css/#changelog-v-0.2.0","text":"0.2.0"},{to:"/css/#changelog-v-0.3.0","text":"0.3.0"},{to:"/css/#changelog-v-0.4.0","text":"0.4.0"},{to:"/css/#changelog-v-0.4.1","text":"0.4.1"},{to:"/css/#changelog-v-0.4.2","text":"0.4.2"},{to:"/css/#changelog-v-0.4.3","text":"0.4.3"},{to:"/css/#changelog-v-0.4.4","text":"0.4.4"}]}],"pre":{"theme":"light"}};R.url=window.location.pathname,R.root="/css/";var S={"pre":{"changeTheme":function changeTheme(){return function(a){return{theme:a.theme==="dark"?"light":"dark"}}},"clip":function clip(a){if(typeof document!=="undefined"&&typeof document.execCommand==="function"){var b=document.createElement("textarea");b.id="copy",b.innerHTML=a,document.body.appendChild(b);var c=document.getElementById("copy");c.select(),document.execCommand("copy"),document.body.removeChild(c)}}},"go":function go(a){return function(b){if(typeof window==="undefined"||!window.history)return!0;var c=a.to;var d=a.e?a.e:a;d.preventDefault();var e=b.url;var f=e.split("#"),h=g(f,2),i=h[0],j=h[1],k=j===void 0?"":j;if(c){e=c.replace(window.location.origin,"");var l=e.split("#"),m=g(l,2),n=m[0],o=m[1],p=o===void 0?"":o;i=n,k=p;var q=b.hash?"#".concat(b.hash):"";var r=b.url+q;e!==r&&(window.history&&window.history.pushState({uri:i},"",e),!k&&window.scrollTo(0,0))}else i=d.state?d.state.uri:"/";return k&&window.location&&(window.location.hash=k),{url:i,hash:k,prev:b.url}}}};var T=function view(a,b){var c=Q[a.url]?a.url:"/404/";var d=Q[c];if(a.pages){var e=a.pages[c];for(var f in e)a[f]=e[f]}if(b.pages){var g=b.pages[c];for(var h in g)b[h]=g[h]}return r({"class":"wrapper",oncreate:function oncreate(){typeof window!=="undefined"&&b.go&&window.addEventListener("popstate",b.go)}},[N,d?r({"class":"page"},d(a,b)):r({"class":"page"},"404 - not found"),H.View])};var U=document;var d=U.getElementById("magic");!d&&(d=U.createElement("div"),d.id="magic",U.body.appendChild(d)),o(R,S,T,d);
},{"hyperapp":2}],2:[function(require,module,exports){
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.hyperapp={})}(this,function(e){"use strict";e.h=function(e,n){for(var t=[],r=[],o=arguments.length;2<o--;)t.push(arguments[o]);for(;t.length;){var l=t.pop();if(l&&l.pop)for(o=l.length;o--;)t.push(l[o]);else null!=l&&!0!==l&&!1!==l&&r.push(l)}return"function"==typeof e?e(n||{},r):{nodeName:e,attributes:n||{},children:r,key:n&&n.key}},e.app=function(e,n,t,r){var o,l=[].map,u=r&&r.children[0]||null,i=u&&function n(e){return{nodeName:e.nodeName.toLowerCase(),attributes:{},children:l.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:n(e)})}}(u),f=[],m=!0,a=v(e),c=function e(r,o,l){for(var n in l)"function"==typeof l[n]?function(e,t){l[e]=function(e){var n=t(e);return"function"==typeof n&&(n=n(h(r,a),l)),n&&n!==(o=h(r,a))&&!n.then&&d(a=p(r,v(o,n),a)),n}}(n,l[n]):e(r.concat(n),o[n]=v(o[n]),l[n]=v(l[n]));return l}([],a,v(n));return d(),c;function g(e){return"function"==typeof e?g(e(a,c)):null!=e?e:""}function s(){o=!o;var e=g(t);for(r&&!o&&(u=function e(n,t,r,o,l){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var u=k(o,l);n.insertBefore(u,t),null!=r&&T(n,t,r),t=u}else if(null==r.nodeName)t.nodeValue=o;else{x(t,r.attributes,o.attributes,l=l||"svg"===o.nodeName);for(var i={},f={},a=[],c=r.children,s=o.children,d=0;d<c.length;d++){a[d]=t.childNodes[d];var v=N(c[d]);null!=v&&(i[v]=[a[d],c[d]])}for(var d=0,p=0;p<s.length;){var v=N(c[d]),h=N(s[p]=g(s[p]));if(f[v])d++;else if(null==h||h!==N(c[d+1]))if(null==h||m)null==v&&(e(t,a[d],c[d],s[p],l),p++),d++;else{var y=i[h]||[];v===h?(e(t,y[0],y[1],s[p],l),d++):y[0]?e(t,t.insertBefore(y[0],a[d]),y[1],s[p],l):e(t,a[d],null,s[p],l),f[h]=s[p],p++}else null==v&&T(t,a[d],c[d]),d++}for(;d<c.length;)null==N(c[d])&&T(t,a[d],c[d]),d++;for(var d in i)f[d]||T(t,i[d][0],i[d][1])}return t}(r,u,i,i=e)),m=!1;f.length;)f.pop()()}function d(){o||(o=!0,setTimeout(s))}function v(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function p(e,n,t){var r={};return e.length?(r[e[0]]=1<e.length?p(e.slice(1),n,t[e[0]]):n,v(t,r)):n}function h(e,n){for(var t=0;t<e.length;)n=n[e[t++]];return n}function N(e){return e?e.key:null}function y(e){return e.currentTarget.events[e.type](e)}function b(e,n,t,r,o){if("key"===n);else if("style"===n)if("string"==typeof t)e.style.cssText=t;else for(var l in"string"==typeof r&&(r=e.style.cssText=""),v(r,t)){var u=null==t||null==t[l]?"":t[l];"-"===l[0]?e.style.setProperty(l,u):e.style[l]=u}else"o"===n[0]&&"n"===n[1]?(n=n.slice(2),e.events?r||(r=e.events[n]):e.events={},(e.events[n]=t)?r||e.addEventListener(n,y):e.removeEventListener(n,y)):n in e&&"list"!==n&&"type"!==n&&"draggable"!==n&&"spellcheck"!==n&&"translate"!==n&&!o?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function k(e,n){var t="string"==typeof e||"number"==typeof e?document.createTextNode(e):(n=n||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName),r=e.attributes;if(r){r.oncreate&&f.push(function(){r.oncreate(t)});for(var o=0;o<e.children.length;o++)t.appendChild(k(e.children[o]=g(e.children[o]),n));for(var l in r)b(t,l,r[l],null,n)}return t}function x(e,n,t,r){for(var o in v(n,t))t[o]!==("value"===o||"checked"===o?e[o]:n[o])&&b(e,o,t[o],n[o],r);var l=m?t.oncreate:t.onupdate;l&&f.push(function(){l(e,n)})}function T(e,n,t){function r(){e.removeChild(function e(n,t){var r=t.attributes;if(r){for(var o=0;o<t.children.length;o++)e(n.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}var o=t.attributes&&t.attributes.onremove;o?o(n,r):r()}}});

},{}]},{},[1]);
