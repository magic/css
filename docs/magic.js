"use strict";function b(a){return l(a)||c(a)||j()}function c(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function d(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){e(a,b,c[b])})}return a}function e(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function f(a,b){if(null==a)return{};var c,d,e=g(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function g(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function i(a,b){return l(a)||k(a,b)||j()}function j(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function k(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}function l(a){if(Array.isArray(a))return a}function m(a){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},m(a)}var n=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,i=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=i(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(!!(b&&!0!==b)&&("function"==typeof b[0]?[b]:k(b)))},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},n=function(c,a){for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},o=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||n(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},p=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=i(d)))?a.setAttribute(b,d):a.removeAttribute(b)},q=function(a,c,d){var e=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name):document.createElement(a.name),f=a.props;for(var g in f)p(e,g,null,f[g],c,d);for(var h=0,j=a.children.length;h<j;h++)e.appendChild(q(a.children[h]=u(a.children[h]),c,d));return a.node=e},r=function(a){return null==a?null:a.key},s=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(q(e=u(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,o=e.props,t=d.children,v=e.children,w=0,x=0,y=t.length-1,z=v.length-1;for(var A in g=g||"svg"===e.name,j(n,o))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==o[A]&&p(c,A,n[A],o[A],f,g);for(;x<=z&&w<=y&&null!=(l=r(t[w]))&&l===r(v[x]);)s(c,t[w].node,t[w],v[x]=u(v[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=r(t[y]))&&l===r(v[z]);)s(c,t[y].node,t[y],v[z]=u(v[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(q(v[x]=u(v[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=r(k=t[w]),m=r(v[x]=u(v[x],k)),C[l]||null!=m&&m===r(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(s(c,k&&k.node,k,v[x],f,g),x++),w++):(l===m?(s(c,k.node,k,v[x],f,g),C[m]=!0,w++):null==(h=B[m])?s(c,k&&k.node,null,v[x],f,g):(s(c,c.insertBefore(h.node,k&&k.node),h,v[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==r(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(b,c){return b.type===a?((!c||t(c.lazy,b.lazy))&&((c=b.lazy.view(b.lazy)).lazy=b.lazy),c):b},v=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},w=function(a,e){return v(a,c,d,e,null,b)},x=function(a){return a.nodeType===b?w(a.nodeValue,a):v(a.nodeName.toLowerCase(),c,e.call(a.childNodes,x),a,null,1)},y=function(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push("object"===m(d)?d:w(d));return b=b||c,"function"==typeof a?a(b,g):v(a,b,g,null,b.key)};return{h:y,app:function app(a,b){var c={},d=!1,e=a.view,h=a.node,i=h&&x(h),j=a.subscriptions,l=[],m=function(a){p(this.actions[a.type],a)},n=function(a){return c!==a&&(j&&(l=o(l,k([j(a)]),p)),!d&&g(q,d=!0)),c=a},p=(b||function(a){return a})(function(a,b,d){return"function"==typeof a?p(a(c,b),d||b):f(a)?"function"==typeof a[0]?p(a[0],"function"==typeof(a=a[1])?a(b):a,b):(k(a.slice(1)).map(function(a){a&&a[0](p,a[1],b)},n(a[0])),c):n(a)}),q=function(){d=!1,e&&(h=s(h.parentNode,h,i,"string"==typeof(i=e(c))?w(i):i,m))};p(a.init)}}}(),o=n.h,h=n.app,q=function(a){return function(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},d=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===m(a)})};return d||(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),o(a,b,d)}},r=q("a"),a=q("button"),s=q("code"),t=q("div"),u=q("footer"),v=q("h2"),w=q("h3"),x=q("h4"),y=q("header"),z=q("img"),A=q("input"),B=q("label"),C=q("li"),D=q("main"),E=q("nav"),F=q("p"),p=q("pre"),G=q("span"),H=q("ul"),I={cookies:{},description:"parse/stringify/write css in js",gdpr:{allowAllCookiesButtonText:"Allow all",allowCookieButtonText:"Allow selected",cookieButtonText:"Awesome.",cookieText:"We are using the following cookies on this page",denyCookieButtonText:"Deny all",noCookieButtonText:"Awesome.",noCookieText:"This page does neither save, collect, nor share any personal data about you.",show:!0,title:"Magic Privacy Information"},logotext:"@magic/css",menu:[{text:"installation",to:"/#installation"},{text:"import",to:"/#import"},{items:[{text:"css (full result)",to:"-css"},{text:"parse",to:"-parse"},{text:"stringify",to:"-stringify"},{text:"write to filesystem",to:"-write"}],text:"api",to:"/#api"},{items:[{text:":pseudo classes",to:"-pseudo-classes"},{text:"selector nesting",to:"-selector-nesting"},{text:"prefix w/ space",to:"-prefix-with-space"},{text:"prefix all w/ space",to:"-prefix-all-with-space"},{text:"prefix w/o space",to:"-prefix-without-space"},{text:"prefix all w/o space",to:"-prefix-all-without-space"},{text:"media queries",to:"-media-queries"},{text:"keyframes",to:"-keyframes"},{text:"webfonts",to:"-webfonts"}],text:"styles",to:"/#styles"},{items:[{text:"0.1.0",to:"-v-0.1.0"},{text:"0.2.0",to:"-v-0.2.0"},{text:"0.3.0",to:"-v-0.3.0"},{text:"0.4.0",to:"-v-0.4.0"},{text:"0.4.1",to:"-v-0.4.1"},{text:"0.4.2",to:"-v-0.4.2"},{text:"0.4.3",to:"-v-0.4.3"},{text:"0.4.4",to:"-v-0.4.4"},{text:"0.4.5",to:"-v-0.4.5"},{text:"0.4.6",to:"-v-0.4.6"},{text:"0.4.7",to:"-v-0.4.7"},{text:"0.5.0",to:"-v-0.5.0"}],text:"changelog",to:"/#changelog"},{text:"source",to:"/#source"}],pageClass:{},root:"/css/",theme:"dark",title:"@magic/css",url:"/css/"},J={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}},mapClickToGo:function mapClickToGo(a){return a.preventDefault(),a}},K=function(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return u({class:"Footer"},[t({class:"Container"},[b,t({class:"Credits"},["made with a few bits of ",Q({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])]),L(a)])},L=function(a){var b=a.gdpr,c=a.cookies;if(b.show)return c=Object.entries(c),t({class:{Gdpr:!0,show:b.show}},[A({type:"checkbox",name:"show-hide",id:"show-hide",checked:!b.show}),t({class:"Container"},[b.title&&w(b.title),b.content&&F(b.content),c.length?[b.cookieText&&F(b.cookieText),H(c.sort(function(a){var b=i(a,2),c=b[0],d=b[1].required;return d?0:1}).map(function(a){var b=i(a,2),c=b[0],d=b[1],e=d.info,f=d.allowed;return C([A({type:"checkbox",title:"allow",checked:void 0!==f&&f,onchange:[X.gdpr.allow,{name:c}]}),B([c,e&&[" - ",e]])])}))]:F(b.noCookieText),c.length?[B({class:"button",for:"show-hide",onclick:[X.gdpr.close,{allowed:!0}]},b.allowAllCookiesButtonText),B({class:"button",for:"show-hide",onclick:X.gdpr.close},b.allowCookieButtonText),B({class:"button",for:"show-hide",onclick:[X.gdpr.close,{allowed:!1}]},b.denyCookieButtonText)]:B({class:"button",for:"show-hide",onclick:X.gdpr.close},b.noCookieButtonText)])])},M=function(a){if("string"==typeof a)a={project:a};else if(!a.project)return;var b=a,c=b.project,d=void 0!==c&&c,e=b.branch,f=void 0===e?"master":e,g=b.host,h=void 0===g?"github":g,j=[["npm",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}}],["travis",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://travis-ci.com/".concat(a,".svg?branch=").concat(f)}}],["appveyor",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;if(a){var b=a.split("/"),c=i(b,2),e=c[0],g=c[1];return e=e.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(e,"/").concat(g,"/branch/").concat(f),src:"https://img.shields.io/appveyor/ci/".concat(e,"/").concat(g,"/").concat(f,".svg")}}}],["coveralls",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return{to:"https://coveralls.io/".concat(h,"/").concat(a),src:"https://img.shields.io/coveralls/".concat(h,"/").concat(a,"/").concat(f,".svg")}}],["greenkeeper",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}}],["snyk",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://snyk.io/test/".concat(h,"/").concat(a),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(a,".svg")}}]].map(function(b){var c=i(b,2),d=c[0],e=c[1];return e(a[d])}).filter(function(b){return b.to&&b.src});return j.length?H({class:"GitBadges"},j.map(function(a){var b=a.to,c=a.src;return C([Q({to:b},O({src:c}))])})):void 0},N=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],c=a.logo,d=a.menu,e=a.tagline,g=a.logotext,h=f(a,["logo","menu","tagline","logotext"]);return c||d||e?y({class:"Header"},[(c||g)&&Q({to:h.root,class:"Logo"},[c&&O(c),g&&G(g)]),d&&R({state:h,items:d}),b]):void 0},O=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),z(a)},P=function(){0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return a({class:"LightSwitch",onclick:X.changeTheme})},Q=function(a,b){var c=a.to,d=f(a,["to"]),e=d.href,g=d.text,h=d.nofollow,i=d.noreferrer,j=d.onclick,k=f(d,["href","text","nofollow","noreferrer","onclick"]);c=c||e||"",k.href=c;var l=c.startsWith("/");return l?k.onclick=[X.go,J.mapClickToGo]:(k.target="_blank",k.rel="noopener",h&&(k.rel+=" nofollow"),i&&(k.rel+=" noreferrer")),r(k,[g,b])},R=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a.items,c=a["class"],e=void 0===c?"Menu":c,f=a.collapse,g=a.state;if(b.length)return g.hash&&(g.url+="#".concat(g.hash)),E({className:e},H(b.map(function(a){return S(d({},a,{state:g,collapse:void 0===f||f}))})))},S=function(a){var b=a.text,c=a.items,e=void 0===c?[]:c,g=a.state,h=a.parentTo,i=void 0===h?void 0:h,j=a.collapse,k=f(a,["text","items","state","parentTo","collapse"]),l=g.url,m=g.root;if(k.to||b){var n={class:{}},o=k.to;o.startsWith("/#")&&(o=o.substr(1));var p=k.to[0],q="/"===p||"-"===p||"#"===p;if(i&&q)if("-"===p)o=i+o;else if("#"===p)o=i+o;else{var u=o.split("/")[1];if(u){var v=i.endsWith("/".concat(u,"/"));!v&&q&&(o=i+o)}}var r=o.startsWith(m);m&&q&&!r&&(o=m+o),k.to=o.replace(/\/\//g,"/");var s=l&&l.includes(k.to);l.endsWith(k.to)&&(n["class"].active=!0);var t=[];return(e.length&&s||!j)&&(t=H(e.map(function(a){return S(d({parentTo:k.to,state:g,collapse:j},a))}))),C(n,[k.to?Q(k,b):G(k,b),t])}},T=function(a){var b=a.page,c=a.state;b=b?b(c):"404 - not found";var d={id:"Magic",class:c.pageClass};return D(d,t({class:{Wrapper:!0}},V({state:c,page:b})))},U=function(b){"string"==typeof b&&(b={content:b});var c=b,d=c.content;return t({class:"Pre"},[t({class:"menu"},[a({onclick:[X.pre.clip,function(a){return{e:a,content:d}}]},"copy")]),p(W.pre.format(d))])},V=function(a){var b=a.page,c=a.state;return[N(c),t({class:"Page"},b),K(c)]},W={pre:function(){var a="\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require\n".trim().split(/\b/g).map(function(a){return a.trim()}),c="\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".trim().split(/\b/g).map(function(a){return a.trim()}),d=["true","false"],e=function(b){if("string"!=typeof b)return b;var e=b.split(/\b/);return b=e.map(function(b,f){if(""!==b){var g="";return"state"===b?g="state":"actions"===b?g="actions":e[f+1]&&e[f+1].includes(":")?g="colon":a.includes(b)?g="keyword":c.includes(b)?g="builtin":d.includes(b)?g="boolean":"."===e[f-1]?g="property":"."===e[f+1]&&(g="object"),g&&(b=G({class:g},b)),b}}),b},f=/([a-zA-Z0-9:+._-]+@[a-zA-Z0-9._-]+)/g,g=function(a){return a.split(f).map(function(a){if(f.test(a)){var b=a.startsWith("mailto:")?a:"mailto:".concat(a),c=a.replace("mailto:","");return Q({class:"email",to:b},c)}return e(a)})},h=function(a,b){return[l(a.substring(0,b)),l(a.substring(b))]},i=function(a){return a.split(/(?= )/).map(function(a){return a.includes("://")?Q({to:a},a):l(a)})},j=function(a){return a.includes("://")&&!a.includes("@")?i(a):g(a)},k=function(a){var c=a.replace(/"/g,"'"),d=c.split("'"),f=b(d),g=f[0],h=f[1],i=f.slice(2),k=i;1===k.length?k=l(k[0]):1<k.length&&(k=l(k.join("'")));var m=[];return m="undefined"==typeof h?e(a):[e(g),G({class:"string"},["'",j(h),"'"]),k],m},l=function(a){var b=a.indexOf("//"),c=a.trim();if(c.startsWith("//")){for(var d=a.search(/\S|$/),e="",f=0;f<d;f++)e+=" ";return c.startsWith("// ")||(a="".concat(e,"// ").concat(c.substr(2))),G({class:"comment"},[e,"// ",l(c.substring(3))])}return-1<b&&":"!==a[b-1]?h(a,b):2<a.indexOf("://")?i(a):a.indexOf("@")&&a.includes(".")&&!a.trim().includes(" ")?g(a):k(a)},m=function(a){return s({class:"line"},l(a))};return{format:function format(a){return a.trim().split("\n").map(m)}}}()},X={changeTheme:function changeTheme(a){return d({},a,{pageClass:d({},a.pageClass,{light:"dark"===a.theme}),theme:"dark"===a.theme?"light":"dark"})},gdpr:{allow:function allow(a,b){return a.cookies[b.name].allowed=!0,d({},a)},close:function close(a,b){var c=b.allowed,e=a.cookies;return"boolean"==typeof c&&Object.entries(a.cookies).forEach(function(a){var b=i(a,2),f=b[0],g=b[1];e[f]=d({},g,{allowed:c})}),[d({},a,{gdpr:d({},a.gdpr,{show:!1}),cookies:e}),[Y.gdpr.writeLocalStorage,{key:"gdpr",value:{cookies:a.cookies||[],show:!1}}]]},load:function load(a){return[a,[Y.gdpr.readLocalStorage,{key:"gdpr",action:X.gdpr.show}]]},show:function show(a,b){return d({},a,{gdpr:d({},a.gdpr,b.value)})}},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),e=c.split("#"),f=i(e,2),g=f[0],h=f[1],j=void 0===h?"":h;if(g===a.url&&j===a.hash)return a;if(window.history.pushState({url:g,hash:j},"",c),j){var k=document.getElementById(j);k&&window.scrollTo(0,k.scrollTop),window.location.hash=j}else window.scrollTo(0,0);return d({},a,{url:g,hash:j,prev:a.url})},pop:function pop(a,b){var c=window.location,e=c.pathname,f=c.hash;return f=f.substring(1),b.state&&(e=b.state.url,f=b.state.hash),f?window.location.hash=f:window.scrollTo(0,0),d({},a,{url:e,hash:f})},pre:{clip:function clip(a,b){var c=b.content;if("undefined"!=typeof document&&"function"==typeof document.execCommand){var d=document.createElement("textarea");d.id="copy",d.innerHTML=c,document.body.appendChild(d);var e=document.getElementById("copy");e.select(),document.execCommand("copy"),document.body.removeChild(e)}return a}}},Y={gdpr:{readLocalStorage:function readLocalStorage(a,b){var c=b.key,d=b.action,e=window.localStorage||{},f=e[c];"undefined"!=typeof f&&(f=JSON.parse(f)),a(d,{key:c,value:f})},writeLocalStorage:function writeLocalStorage(a,b){var c=b.key,d=b.value,e=window.localStorage||{};e[c]=JSON.stringify(d)}}},Z={"/css/":function css(a){return[v(a.title),F("parse/stringify/write css in js"),F("NO dynamic css, css gets output as css file. whenever possible, use dynamic classes instead."),F(["if there is absolute need for dynamic css,"," feel free to use the style property of the"," html tag / webcomponent you want to dynamically change,"," unfortunately, this library will not help you with that."]),M("magic/css"),v({id:"installation"},"installation"),U("npm install @magic/css"),v({id:"usage"},"usage"),w({id:"import"},"import"),U("import css from '@magic/css'"),v({id:"api"},"api"),w({id:"api-css"},"css (full result)"),U("\nimport css from 'css'\n\nconst style = {\n  body: {\n    color: 'green',\n  },\n  '.class': {\n    color: 'orange',\n  },\n  '#id': {\n    color: 'purple'\n  },\n}\n\ncss(style)\n\n// returns\nObject {\n  // nicely formatted css string\n  css: 'body {\\n  color: green;\\n}\\n.class {\\n  color: orange;\\n}\\n#id{\\n  color: purple;\\n}\\n',\n  // minimal whitespace\n  minified: 'body{color:green}.class{color:orange}#id{color:purple}',\n  // array of used classes if any\n  classes: ['.class'],\n  // array of used ids if any\n  ids: ['#id'],\n  // array of used selectors\n  selectors: [],\n  //ast of this css object\n  parsed: [],\n}"),w({id:"api-parse"},"parse"),U("\nconst style = {\n  '.className': {\n    '#id': {\n      color: 'orange',\n    },\n  },\n}\n\ncss.parse(style)\n// ast"),w({id:"api-stringify"},"stringify"),U("\nconst style = {\n  '.className': {\n    '#id': {\n      color: 'white',\n    },\n  },\n}\n\nawait css.stringify(style)\n// minified string\n`.className #id{color:white;}`\n"),w({id:"api-write"},"write to filesystem"),U("\nconst style = {\n  '.className': {\n    '#id': {\n      color: opts.textColor,\n    },\n  },\n}\n\n// writes styles to ./out.css\ncss.write(style)\n// writes styles to ./outfile.css\ncss.write(style, { OUTFILE: './outfile.css' })"),v({id:"styles"},"styles"),F(["styles are a javascript object."," the keys are selectors and the values are nested objects of css rules,"," where the keys of the objects are assumed to be selectors"," unless the value associated with the key is not an object"]),U("\nconst style = {\n'.className': {\n  color: 'green',\n},\n}\nawait css.stringify(style)\n// .className { color:green; }"),w({id:"styles-pseudo-classes"},"pseudo classes: (:hover, :active)"),F("css pseudo classes in nested css get found if their object key starts with a &"),U("\nconst style = {\n'div': {\n  color: 'red',\n  '&:hover': {\n    color: 'green',\n  },\n},\n}\n\nawait css.stringify(style)\n// div { color: red; }\n// div:hover { color: green; }"),w({id:"styles-selector-nesting"},"selector nesting"),U("\nconst style = {\n'div': {\n  'p, &:hover': {\n    color: 'red',\n  },\n},\n}\nawait css.stringify(style)\n// div p, div:hover { color: red; }"),w({id:"styles-prefix-without-space"},"prefix without space"),F(["to prefix the parent of the selector using the child selectors,"," add a & at the end of any selectors but the last one."]),U("\nconst style = {\n  '.class': {\n    'p&, :hover': {\n      color: 'orange',\n    },\n  },\n}\n\nawait css.stringify(style)\n\n// p.class, .class:hover { color: orange; }\n"),w({id:"styles-prefix-all-without-space"},"prefix all without space"),F(["if the & is at the end of a selector,"," the & will be applied to each of them."]),U("\nconst style = {\n  '.class': {\n    'div, p&': {\n      color: 'orange';\n    },\n  },\n}\n\nawait css.stringify(style)\n\n// div.class, p.class { color: orange; }\n"),w({id:"styles-prefix-with-space"},"prefix with space"),F("to prefix the parent with a space, use a double && instead of a single &"),U("\nconst style = {\n  '#id': {\n    '.class2&&, .class3': {\n      color: 'orange';\n    },\n  },\n}\n\nawait css.stringify(style)\n\n// .class2 #id, #id.class3 { color: orange; }\n"),w({id:"styles-prefix-all-with-space"},"prefix all with space"),F(["if the && is at the end of a selector,"," the && will be applied to each of them."]),U("\nconst style = {\n  '.class': {\n    'div, p&&': {\n      color: 'orange';\n    },\n  },\n}\n\nawait css.stringify(style)\n\n// div .class, p .class { color: orange; }\n"),w({id:"styles-media-queries"},"media queries"),U("\nconst style = {\n  '@media screen and (min-width: 500px)': {\n    '#id': {\n      color: opts.textColor,\n    },\n  },\n}\n\nawait css.stringify(style)\n// css string\n`\n@media screen and (min-width: 500px) {\n  #id {\n    color: green;\n  }\n}\n`"),w({id:"styles-keyframes"},"keyframes for animations"),U("\nconst style = {\n'@keyframes anim-name': {\n  from {\n    opacity: 0,\n  },\n  to {\n    opacity: 1,\n  }\n}\n\nawait css.stringify(style)\n\n// css string\n`\n@keyframes anim-name {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n`"),w({id:"styles-webfonts"},"webfonts"),U("\nconst style = {\n  '@font-face': {\n    fontFamily: 'font-name',\n    fontDir: '/fonts/',\n    fontStyle: 'normal',\n    fontWeight: 'normal',\n  },\n}\n\nawait css.stringify(style)\n// css string\n`\n@font-face {\n  font-family: \"font-name\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('/fonts/font-name.eot');\n  src: url('/fonts/font-name.eot#iefix') format('embedded-opentype'),',\n  url('/fonts/font-name.ttf') format('truetype'),',\n  url('/fonts/font-name.woff') format('woff'),',\n  url('/fonts/font-name.woff2') format('woff2'),',\n  url('/fonts/font-name.svg#font-name') format('svg');',\n}\n`"),t({id:"changelog"},[v("CHANGELOG"),x({id:"changelog-v-0.1.0"},"0.1.0"),H([C("return classes and ids as separate objects additionally to selectors")]),x({id:"changelog-v-0.2.0"},"0.2.0"),H([C("Added media queries")]),x({id:"changelog-v-0.3.0"},"0.3.0"),H([C("returns a promise! no longer sync"),C("autoprefixer and postcss added")]),x({id:"changelog-v-0.4.0"},"0.4.0"),H([C("supports @font-face declarations")]),x({id:"changelog-v-0.4.1"},"0.4.1"),H([C("added fontDir option to font-face declarations")]),x({id:"changelog-v-0.4.2"},"0.4.2"),H([C("update deps to fix security issues")]),x({id:"changelog-v-0.4.3"},"0.4.3"),H([C("added @keyframes for animations")]),x({id:"changelog-v-0.4.4"},"0.4.4"),H([C("css.parse now converts deep arrays into one object before parsing")]),x({id:"changelog-v-0.4.5"},"0.4.5"),H([C("css.stringify now makes a bit nicer mediaquery and keyframe links."),C("css.parse should now order media queries to the end of the css.")]),x({id:"changelog-v-0.4.6"},"0.4.6"),H([C("css.parse does a better job of keeping order of incoming objects intact")]),x({id:"changelog-v-0.4.7"},"0.4.7"),H([C(["FIX: multiple parent selectors 'h1,h2,h3' that should get appended"," with a &:hover etc suffix now correctly append that suffix to every parent"]),C("FEATURE: & can be at the end of a selector to prepend a parent")])]),x({id:"changelog-v-0.5.0"},"0.5.0"),H([C(["FIX: css gets returned in almost the same order it got passed in."," turns out that javascript objects do not make this as easy as hoped."])]),x({id:"changelog-v-0.5.0"},"0.6.0"),H([C(["use esmodules"])]),x({id:"changelog-v-0.7.0"},"0.7.0"),F("update @magic/types to not break if es modules get passed into the styles"),x("0.7.1"),F("update @magic/deep to use ecmascript module version"),F("update postcss, autoprefixer"),v({id:"source"},"source"),F(["the source for this page is in the ",Q({to:"https://github.com/magic/css/tree/master/example"},"example directory")," and gets built and published to github using ",Q({to:"https://github.com/magic/core"},"@magic/core")]),P(a)]},"/css/404/":function css404(){return t("404 - not found")}};h({init:function init(){return X.gdpr.load(d({},I,{url:window.location.pathname}))},subscriptions:function subscriptions(){return[[J.listenPopState,X.pop]]},view:function view(a){var b=Z[a.url]?a.url:"/404/",c=Z[b];return a.pages&&a.pages[b]&&Object.keys(a.pages[b]).forEach(function(c){a[c]=a.pages[b][c]}),T({page:c,state:a})},node:document.getElementById("Magic")});