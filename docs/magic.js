"use strict";function b(a){return g(a)||c(a)||e()}function c(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function d(a,b){return g(a)||f(a,b)||e()}function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function f(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}function g(a){if(Array.isArray(a))return a}function j(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){k(a,b,c[b])})}return a}function k(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function l(a,b){if(null==a)return{};var c,d,e=m(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function m(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function n(a){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},n(a)}var o=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,i=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=i(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(!!(b&&!0!==b)&&("function"==typeof b[0]?[b]:k(b)))},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},o=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},p=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=i(d)))?a.setAttribute(b,d):a.removeAttribute(b)},q=function(a,c,d){var e=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name):document.createElement(a.name),f=a.props;for(var g in f)p(e,g,null,f[g],c,d);for(var h=0,j=a.children.length;h<j;h++)e.appendChild(q(a.children[h]=u(a.children[h]),c,d));return a.node=e},r=function(a){return null==a?null:a.key},s=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(q(e=u(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,o=e.props,t=d.children,v=e.children,w=0,x=0,y=t.length-1,z=v.length-1;for(var A in g=g||"svg"===e.name,j(n,o))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==o[A]&&p(c,A,n[A],o[A],f,g);for(;x<=z&&w<=y&&null!=(l=r(t[w]))&&l===r(v[x]);)s(c,t[w].node,t[w],v[x]=u(v[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=r(t[y]))&&l===r(v[z]);)s(c,t[y].node,t[y],v[z]=u(v[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(q(v[x]=u(v[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=r(k=t[w]),m=r(v[x]=u(v[x],k)),C[l]||null!=m&&m===r(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(s(c,k&&k.node,k,v[x],f,g),x++),w++):(l===m?(s(c,k.node,k,v[x],f,g),C[m]=!0,w++):null==(h=B[m])?s(c,k&&k.node,null,v[x],f,g):(s(c,c.insertBefore(h.node,k&&k.node),h,v[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==r(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(b,c){return b.type===a?((!c||t(c.lazy,b.lazy))&&((c=b.lazy.view(b.lazy)).lazy=b.lazy),c):b},v=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},w=function(a,e){return v(a,c,d,e,null,b)},x=function(a){return a.nodeType===b?w(a.nodeValue,a):v(a.nodeName.toLowerCase(),c,e.call(a.childNodes,x),a,null,1)},y=function(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push("object"===n(d)?d:w(d));return b=b||c,"function"==typeof a?a(b,g):v(a,b,g,null,b.key)};return{h:y,app:function app(a,b){var c={},d=!1,e=a.view,h=a.node,i=h&&x(h),j=a.subscriptions,l=[],m=function(a){p(this.actions[a.type],a)},n=function(a){return c===a||d||g(q,d=!0),c=a},p=(b||function(a){return a})(function(a,b,d){return"function"==typeof a?p(a(c,b),d||b):f(a)?"function"==typeof a[0]?p(a[0],"function"==typeof(a=a[1])?a(b):a,b):(k(a.slice(1)).map(function(a){a&&a[0](p,a[1],b)},n(a[0])),c):n(a)}),q=function(){d=!1,j&&(l=o(l,k(j(c)),p)),e&&(h=s(h.parentNode,h,i,"string"==typeof(i=e(c))?w(i):i,m))};p(a.init)},LAZY_NODE:a}}(),q=o.h,h=o.app,i=o.LAZY_NODE,r=function(a){return function(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},d=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===n(a)})};return d||(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),q(a,b,d)}},s=r("a"),a=r("button"),t=r("code"),u=r("div"),v=r("footer"),w=r("h2"),x=r("h3"),y=r("h4"),z=r("header"),A=r("img"),B=r("li"),C=r("nav"),D=r("p"),p=r("pre"),E=r("span"),F=r("ul"),G={url:"/css/",root:"/css/",logotext:"@magic/css",menu:[{to:"/#installation",text:"installation"},{to:"/#import",text:"import"},{to:"/#api",text:"api",items:[{to:"-css",text:"css (full result)"},{to:"-parse",text:"parse"},{to:"-stringify",text:"stringify"},{to:"-write",text:"write to filesystem"}]},{to:"/#styles",text:"styles",items:[{to:"-pseudo-classes",text:":pseudo classes"},{to:"-selector-nesting",text:"selector nesting"},{to:"-prefix-with-space",text:"prefix w/ space"},{to:"-prefix-all-with-space",text:"prefix all w/ space"},{to:"-prefix-without-space",text:"prefix w/o space"},{to:"-prefix-all-without-space",text:"prefix all w/o space"},{to:"-media-queries",text:"media queries"},{to:"-keyframes",text:"keyframes"},{to:"-webfonts",text:"webfonts"}]},{to:"/#changelog",text:"changelog",items:[{to:"-v-0.1.0",text:"0.1.0"},{to:"-v-0.2.0",text:"0.2.0"},{to:"-v-0.3.0",text:"0.3.0"},{to:"-v-0.4.0",text:"0.4.0"},{to:"-v-0.4.1",text:"0.4.1"},{to:"-v-0.4.2",text:"0.4.2"},{to:"-v-0.4.3",text:"0.4.3"},{to:"-v-0.4.4",text:"0.4.4"},{to:"-v-0.4.5",text:"0.4.5"},{to:"-v-0.4.6",text:"0.4.6"},{to:"-v-0.4.7",text:"0.4.7"},{to:"-v-0.5.0",text:"0.5.0"}]},{to:"/#source",text:"source"}],pre:{theme:"light"}},H={mapClickToGo:function mapClickToGo(a){return a.preventDefault(),a},listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},I=function(a){var b=a.items,c=a.hash,d=a.url,e=void 0===d?"":d,f=a.root,g=l(a,["items","hash","url","root"]),h=g["class"],i=void 0===h?"Menu":h,k=g.collapse;if(b.length)return c&&(e+="#".concat(c)),C({class:i},F(b.map(function(a){return I.Item(j({},a,{url:e,root:f,collapse:void 0===k||k}))})))};I.Item=function(a){var b=a.url,c=a.text,d=a.items,e=void 0===d?[]:d,f=a.parentTo,g=void 0===f?void 0:f,h=a.collapse,k=a.root,m=l(a,["url","text","items","parentTo","collapse","root"]);if(m.to||c){var n={class:"MenuItem"};if(g){var i=m.to.includes("://"),o=m.to.startsWith("/"),p=!g||m.to.startsWith(g);p||o||i||(!g.endsWith("/")&&!m.to.startsWith("-")&&(g="".concat(g,"/")),m.to=g+m.to)}m.to=m.to.startsWith(k)?m.to:"".concat(k).concat(m.to.substr(1));var q=b&&b.startsWith(m.to);b===m.to&&(n["class"]+=" active");var r=[];return(e.length&&q||!h)&&(r=F(e.map(function(a){return I.Item(j({parentTo:m.to,url:b,root:k,collapse:h},a))}))),B(n,[m.to?N(m,c):E(m,c),r])}};var J=function(){return v({class:"Footer"},[u({class:"Container"},["made with a few bits of ",N({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])},K=function(a){var b=a.logo,c=a.menu,d=a.tagline,e=a.logotext,f=l(a,["logo","menu","tagline","logotext"]);return(b||c||d)&&z({class:"Header"},[(b||e)&&N({to:"/",class:"LogoWrapper"},[b&&L({class:"Logo",src:b}),e&&E({class:"LogoText"},e)]),c&&I(j({},f,{items:c}))])},L=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),A(a)},M=function(a){var b=a.page,c=a.state;return u({class:"Wrapper"},[K(c),u({class:"Page"},b?b(c):"404 - not found"),J(c)])},N=function(a,b){var c=a.to,d=l(a,["to"]),e=d.href,f=d.text,g=d.nofollow,h=d.noreferrer,i=d.onclick,j=l(d,["href","text","nofollow","noreferrer","onclick"]);return c=c||e||"",j.href=c,c&&c.startsWith("/")&&!c.startsWith("//")?j.onclick=[R.go,H.mapClickToGo]:(j.target="_blank",j.rel="noopener",g&&(j.rel+=" nofollow"),h&&(j.rel+=" noreferrer")),s(j,[f,b])},O=function(a){if("string"==typeof a)a={project:a};else if(!a.project)return;var b=a,c=b.project,e=void 0!==c&&c,f=b.branch,g=void 0===f?"master":f,h=b.host,i=void 0===h?"github":h,j=[["npm",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:e;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}}],["travis",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:e;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://travis-ci.com/".concat(a,".svg?branch=").concat(g)}}],["appveyor",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:e;if(a){var b=a.split("/"),c=d(b,2),f=c[0],h=c[1];return f=f.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(f,"/").concat(h,"/branch/").concat(g),src:"https://img.shields.io/appveyor/ci/".concat(f,"/").concat(h,"/").concat(g,".svg")}}}],["coveralls",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:e;return{to:"https://coveralls.io/".concat(i,"/").concat(a),src:"https://img.shields.io/coveralls/".concat(i,"/").concat(a,"/").concat(g,".svg")}}],["greenkeeper",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:e;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}}],["snyk",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:e;return a&&{to:"https://snyk.io/test/".concat(i,"/").concat(a),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(a,".svg")}}]].map(function(b){var c=d(b,2),e=c[0],f=c[1];return f(a[e])}).filter(function(b){return b.to&&b.src});return j.length?F({class:"GitBadges"},j.map(function(a){var b=a.to,c=a.src;return B([N({to:b},L({src:c}))])})):void 0},P=function(b){"string"==typeof b&&(b={content:b,theme:"light"});var c=b,d=c.theme,f=c.content;return u({class:"Pre ".concat(d)},[u({class:"menu"},[a({onclick:[R.pre.clip,function(a){return{e:a,content:f}}]},"copy")]),p(Q.pre.format(f))])},Q={pre:function(){var a="\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require\n".trim().split(/\b/g).map(function(a){return a.trim()}),c="\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".trim().split(/\b/g).map(function(a){return a.trim()}),d=["true","false"],e=function(b){if("string"!=typeof b)return b;var e=b.split(/\b/);return b=e.map(function(b,f){if(""!==b){var g="";return"state"===b?g="state":"actions"===b?g="actions":e[f+1]&&e[f+1].includes(":")?g="colon":a.includes(b)?g="keyword":c.includes(b)?g="builtin":d.includes(b)?g="boolean":"."===e[f-1]?g="property":"."===e[f+1]&&(g="object"),g&&(b=E({class:g},b)),b}}),b},f=/([a-zA-Z0-9:+._-]+@[a-zA-Z0-9._-]+)/g,g=function(a){return a.split(f).map(function(a){if(f.test(a)){var b=a.startsWith("mailto:")?a:"mailto:".concat(a),c=a.replace("mailto:","");return N({class:"email",to:b},c)}return e(a)})},h=function(a,b){return[l(a.substring(0,b)),l(a.substring(b))]},i=function(a){return a.split(/(?= )/).map(function(a){return a.includes("://")?N({to:a},a):l(a)})},j=function(a){return a.includes("://")&&!a.includes("@")?i(a):g(a)},k=function(a){var c=a.replace(/"/g,"'"),d=c.split("'"),f=b(d),g=f[0],h=f[1],i=f.slice(2),k=i;1===k.length?k=l(k[0]):1<k.length&&(k=l(k.join("'")));var m=[];return m="undefined"==typeof h?e(a):[e(g),E({class:"string"},["'",j(h),"'"]),k],m},l=function(a){var b=a.indexOf("//"),c=a.trim();if(c.startsWith("//")){for(var d=a.search(/\S|$/),e="",f=0;f<d;f++)e+=" ";return c.startsWith("// ")||(a="".concat(e,"// ").concat(c.substr(2))),E({class:"comment"},[e,"// ",l(c.substring(3))])}return-1<b&&":"!==a[b-1]?h(a,b):2<a.indexOf("://")?i(a):a.indexOf("@")&&a.includes(".")&&!a.trim().includes(" ")?g(a):k(a)},m=function(a){return t({class:"line"},l(a))};return{format:function format(a){return a.trim().split("\n").map(m)}}}()},R={pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;return e=e.substring(1),b.state&&(d=b.state.url,e=b.state.hash),e?window.location.hash=e:window.scrollTo(0,0),j({},a,{url:d,hash:e})},go:function go(a,b){var c=b.target.href.replace(window.location.origin,""),e=c.startsWith("/")||c.startsWith("#"),f=c.startsWith(a.root);e&&!f&&(c="".concat(a.root).concat(c).replace(/\/\//g,"/"));var g=c.split("#"),h=d(g,2),i=h[0],k=h[1],l=void 0===k?"":k;if(i===a.url&&l===a.hash)return a;if(window.history.pushState({url:i,hash:l},"",c),l){var m=document.getElementById(l);m&&window.scrollTo(0,m.scrollTop),window.location.hash=l}else window.scrollTo(0,0);return j({},a,{url:i,hash:l,prev:a.url})},pre:{clip:function clip(a,b){var c=b.content;if("undefined"!=typeof document&&"function"==typeof document.execCommand){var d=document.createElement("textarea");d.id="copy",d.innerHTML=c,document.body.appendChild(d);var e=document.getElementById("copy");e.select(),document.execCommand("copy"),document.body.removeChild(e)}return a}}},S={"/css/":function css(){return[w("@magic/css"),D("parse/stringify/write css in js"),D("NO dynamic css, css gets output as css file. whenever possible, use dynamic classes instead."),D(["if there is absolute need for dynamic css,"," feel free to use the style property of the"," html tag / webcomponent you want to dynamically change,"," unfortunately, this library will not help you with that."]),O("magic/css"),w({id:"installation"},"installation"),P("npm install @magic/css"),w({id:"usage"},"usage"),x({id:"import"},"import"),P("import css from '@magic/css'"),w({id:"api"},"api"),x({id:"api-css"},"css (full result)"),P("\nimport css from 'css'\n\nconst style = {\n  body: {\n    color: 'green',\n  },\n  '.class': {\n    color: 'orange',\n  },\n  '#id': {\n    color: 'purple'\n  },\n}\n\ncss(style)\n\n// returns\nObject {\n  // nicely formatted css string\n  css: 'body {\\n  color: green;\\n}\\n.class {\\n  color: orange;\\n}\\n#id{\\n  color: purple;\\n}\\n',\n  // minimal whitespace\n  minified: 'body{color:green}.class{color:orange}#id{color:purple}',\n  // array of used classes if any\n  classes: ['.class'],\n  // array of used ids if any\n  ids: ['#id'],\n  // array of used selectors\n  selectors: [],\n  //ast of this css object\n  parsed: [],\n}"),x({id:"api-parse"},"parse"),P("\nconst style = {\n  '.className': {\n    '#id': {\n      color: 'orange',\n    },\n  },\n}\n\ncss.parse(style)\n// ast"),x({id:"api-stringify"},"stringify"),P("\nconst style = {\n  '.className': {\n    '#id': {\n      color: 'white',\n    },\n  },\n}\n\nawait css.stringify(style)\n// minified string\n`.className #id{color:white;}`\n"),x({id:"api-write"},"write to filesystem"),P("\nconst style = {\n  '.className': {\n    '#id': {\n      color: opts.textColor,\n    },\n  },\n}\n\n// writes styles to ./out.css\ncss.write(style)\n// writes styles to ./outfile.css\ncss.write(style, { OUTFILE: './outfile.css' })"),w({id:"styles"},"styles"),D(["styles are a javascript object."," the keys are selectors and the values are nested objects of css rules,"," where the keys of the objects are assumed to be selectors"," unless the value associated with the key is not an object"]),P("\nconst style = {\n'.className': {\n  color: 'green',\n},\n}\nawait css.stringify(style)\n// .className { color:green; }"),x({id:"styles-pseudo-classes"},"pseudo classes: (:hover, :active)"),D("css pseudo classes in nested css get found if their object key starts with a &"),P("\nconst style = {\n'div': {\n  color: 'red',\n  '&:hover': {\n    color: 'green',\n  },\n},\n}\n\nawait css.stringify(style)\n// div { color: red; }\n// div:hover { color: green; }"),x({id:"styles-selector-nesting"},"selector nesting"),P("\nconst style = {\n'div': {\n  'p, &:hover': {\n    color: 'red',\n  },\n},\n}\nawait css.stringify(style)\n// div p, div:hover { color: red; }"),x({id:"styles-prefix-without-space"},"prefix without space"),D(["to prefix the parent of the selector using the child selectors,"," add a & at the end of any selectors but the last one."]),P("\nconst style = {\n  '.class': {\n    'p&, :hover': {\n      color: 'orange',\n    },\n  },\n}\n\nawait css.stringify(style)\n\n// p.class, .class:hover { color: orange; }\n"),x({id:"styles-prefix-all-without-space"},"prefix all without space"),D(["if the & is at the end of a selector,"," the & will be applied to each of them."]),P("\nconst style = {\n  '.class': {\n    'div, p&': {\n      color: 'orange';\n    },\n  },\n}\n\nawait css.stringify(style)\n\n// div.class, p.class { color: orange; }\n"),x({id:"styles-prefix-with-space"},"prefix with space"),D("to prefix the parent with a space, use a double && instead of a single &"),P("\nconst style = {\n  '#id': {\n    '.class2&&, .class3': {\n      color: 'orange';\n    },\n  },\n}\n\nawait css.stringify(style)\n\n// .class2 #id, #id.class3 { color: orange; }\n"),x({id:"styles-prefix-all-with-space"},"prefix all with space"),D(["if the && is at the end of a selector,"," the && will be applied to each of them."]),P("\nconst style = {\n  '.class': {\n    'div, p&&': {\n      color: 'orange';\n    },\n  },\n}\n\nawait css.stringify(style)\n\n// div .class, p .class { color: orange; }\n"),x({id:"styles-media-queries"},"media queries"),P("\nconst style = {\n  '@media screen and (min-width: 500px)': {\n    '#id': {\n      color: opts.textColor,\n    },\n  },\n}\n\nawait css.stringify(style)\n// css string\n`\n@media screen and (min-width: 500px) {\n  #id {\n    color: green;\n  }\n}\n`"),x({id:"styles-keyframes"},"keyframes for animations"),P("\nconst style = {\n'@keyframes anim-name': {\n  from {\n    opacity: 0,\n  },\n  to {\n    opacity: 1,\n  }\n}\n\nawait css.stringify(style)\n\n// css string\n`\n@keyframes anim-name {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n`"),x({id:"styles-webfonts"},"webfonts"),P("\nconst style = {\n  '@font-face': {\n    fontFamily: 'font-name',\n    fontDir: '/fonts/',\n    fontStyle: 'normal',\n    fontWeight: 'normal',\n  },\n}\n\nawait css.stringify(style)\n// css string\n`\n@font-face {\n  font-family: \"font-name\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('/fonts/font-name.eot');\n  src: url('/fonts/font-name.eot#iefix') format('embedded-opentype'),',\n  url('/fonts/font-name.ttf') format('truetype'),',\n  url('/fonts/font-name.woff') format('woff'),',\n  url('/fonts/font-name.woff2') format('woff2'),',\n  url('/fonts/font-name.svg#font-name') format('svg');',\n}\n`"),u({id:"changelog"},[w("CHANGELOG"),y({id:"changelog-v-0.1.0"},"0.1.0"),F([B("return classes and ids as separate objects additionally to selectors")]),y({id:"changelog-v-0.2.0"},"0.2.0"),F([B("Added media queries")]),y({id:"changelog-v-0.3.0"},"0.3.0"),F([B("returns a promise! no longer sync"),B("autoprefixer and postcss added")]),y({id:"changelog-v-0.4.0"},"0.4.0"),F([B("supports @font-face declarations")]),y({id:"changelog-v-0.4.1"},"0.4.1"),F([B("added fontDir option to font-face declarations")]),y({id:"changelog-v-0.4.2"},"0.4.2"),F([B("update deps to fix security issues")]),y({id:"changelog-v-0.4.3"},"0.4.3"),F([B("added @keyframes for animations")]),y({id:"changelog-v-0.4.4"},"0.4.4"),F([B("css.parse now converts deep arrays into one object before parsing")]),y({id:"changelog-v-0.4.5"},"0.4.5"),F([B("css.stringify now makes a bit nicer mediaquery and keyframe links."),B("css.parse should now order media queries to the end of the css.")]),y({id:"changelog-v-0.4.6"},"0.4.6"),F([B("css.parse does a better job of keeping order of incoming objects intact")]),y({id:"changelog-v-0.4.7"},"0.4.7"),F([B(["FIX: multiple parent selectors 'h1,h2,h3' that should get appended"," with a &:hover etc suffix now correctly append that suffix to every parent"]),B("FEATURE: & can be at the end of a selector to prepend a parent")])]),y({id:"changelog-v-0.5.0"},"0.5.0"),F([B(["FIX: css gets returned in almost the same order it got passed in."," turns out that javascript objects do not make this as easy as hoped."])]),y({id:"changelog-v-0.5.0"},"0.6.0"),F([B(["use esmodules"])]),y({id:"changelog-v-0.7.0"},"0.7.0"),D("update @magic/types to not break if es modules get passed into the styles"),y("0.7.1"),D("update @magic/deep to use ecmascript module version"),w({id:"source"},"source"),D(["the source for this page is in the ",N({to:"https://github.com/magic/css/tree/master/example"},"example directory")," and gets built and published to github using ",N({to:"https://github.com/magic/core"},"@magic/core")])]},"/css/404/":function css404(){return u("404 - not found")}};h({init:function init(){return j({},G,{url:window.location.pathname})},subscriptions:function subscriptions(){return[[H.listenPopState,R.pop]]},view:function view(a){var b=S[a.url]?a.url:"/404/",c=S[b];if(a.pages){var d=a.pages[b];for(var e in d)a[e]=d[e]}return u({id:"Magic"},M({page:c,state:a}))},node:document.getElementById("Magic")});