function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function t(e){if(Array.isArray(e))return e}function n(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){var o,r;o=e,r=n[t],t in o?Object.defineProperty(o,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[t]=r})}return e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function i(e,o){return t(e)||function(e,t){var n,o,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var s=[],i=!0,a=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return s}}(e,o)||a(e,o)||n()}function a(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);if("Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o)return Array.from(o);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return e(t,n)}}!function(){var e,l,c,f,u,p,d,m,h,y,g,v,w,b,x,k,j,C,O,N,A=(e={},c=(l=[]).map,f=Array.isArray,u="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout,p=function(e){var t="";if("string"==typeof e)return e;if(f(e)&&e.length>0)for(var n,o=0;o<e.length;o++)""!==(n=p(e[o]))&&(t+=(t&&" ")+n);else for(var o in e)e[o]&&(t+=(t&&" ")+o);return t},d=function(e,t){var n={};for(var o in e)n[o]=e[o];for(var o in t)n[o]=t[o];return n},m=function(e){return e.reduce(function(e,t){return e.concat(t&&!0!==t?"function"==typeof t[0]?[t]:m(t):0)},l)},h=function(e,t){if(e!==t)for(var n in d(e,t)){var o,r;if(e[n]!==t[n]&&(o=e[n],r=t[n],!(f(o)&&f(r))||o[0]!==r[0]||"function"!=typeof o[0]))return!0;t[n]=e[n]}},y=function(e,t,n){for(var o,r,s=0,i=[];s<e.length||s<t.length;s++)o=e[s],i.push((r=t[s])?!o||r[0]!==o[0]||h(r[1],o[1])?[r[0],r[1],r[0](n,r[1]),o&&o[2]()]:o:o&&o[2]());return i},g=function(e,t,n,o,r,s){if("key"===t);else if("style"===t)for(var i in d(n,o))n=null==o||null==o[i]?"":o[i],"-"===i[0]?e[t].setProperty(i,n):e[t][i]=n;else"o"===t[0]&&"n"===t[1]?((e.actions||(e.actions={}))[t=t.slice(2)]=o)?n||e.addEventListener(t,r):e.removeEventListener(t,r):!s&&"list"!==t&&t in e?e[t]=null==o?"":o:null!=o&&!1!==o&&("class"!==t||(o=p(o)))?e.setAttribute(t,o):e.removeAttribute(t)},v=function(e,t,n){var o=e.props,r=3===e.type?document.createTextNode(e.name):(n=n||"svg"===e.name)?document.createElementNS("http://www.w3.org/2000/svg",e.name,{is:o.is}):document.createElement(e.name,{is:o.is});for(var s in o)g(r,s,null,o[s],t,n);for(var i=0,a=e.children.length;i<a;i++)r.appendChild(v(e.children[i]=j(e.children[i]),t,n));return e.node=r},w=function(e){return null==e?null:e.key},b=function(e,t,n,o,r,s){if(n===o);else if(null!=n&&3===n.type&&3===o.type)n.name!==o.name&&(t.nodeValue=o.name);else if(null==n||n.name!==o.name)t=e.insertBefore(v(o=j(o),r,s),t),null!=n&&e.removeChild(n.node);else{var i,a,l,c,f=n.props,u=o.props,p=n.children,m=o.children,h=0,y=0,x=p.length-1,k=m.length-1;for(var C in s=s||"svg"===o.name,d(f,u))("value"===C||"selected"===C||"checked"===C?t[C]:f[C])!==u[C]&&g(t,C,f[C],u[C],r,s);for(;y<=k&&h<=x&&null!=(l=w(p[h]))&&l===w(m[y]);)b(t,p[h].node,p[h],m[y]=j(m[y++],p[h++]),r,s);for(;y<=k&&h<=x&&null!=(l=w(p[x]))&&l===w(m[k]);)b(t,p[x].node,p[x],m[k]=j(m[k--],p[x--]),r,s);if(h>x)for(;y<=k;)t.insertBefore(v(m[y]=j(m[y++]),r,s),(a=p[h])&&a.node);else if(y>k)for(;h<=x;)t.removeChild(p[h++].node);else{for(var C=h,O={},N={};C<=x;C++)null!=(l=p[C].key)&&(O[l]=p[C]);for(;y<=k;){if(l=w(a=p[h]),c=w(m[y]=j(m[y],a)),N[l]||null!=c&&c===w(p[h+1])){null==l&&t.removeChild(a.node),h++;continue}null==c||1===n.type?(null==l&&(b(t,a&&a.node,a,m[y],r,s),y++),h++):(l===c?(b(t,a.node,a,m[y],r,s),N[c]=!0,h++):null!=(i=O[c])?(b(t,t.insertBefore(i.node,a&&a.node),i,m[y],r,s),N[c]=!0):b(t,a&&a.node,null,m[y],r,s),y++)}for(;h<=x;)null==w(a=p[h++])&&t.removeChild(a.node);for(var C in O)null==N[C]&&t.removeChild(O[C].node)}}return o.node=t},x=function(e,t){for(var n in e)if(e[n]!==t[n])return!0;for(var n in t)if(e[n]!==t[n])return!0},k=function(e){return"object"==typeof e?e:O(e)},j=function(e,t){return 2===e.type?((!t||!t.lazy||x(t.lazy,e.lazy))&&((t=k(e.lazy.view(e.lazy))).lazy=e.lazy),t):e},C=function(e,t,n,o,r,s){return{name:e,props:t,children:n,node:o,type:s,key:r}},O=function(t,n){return C(t,e,l,n,void 0,3)},N=function(t){return 3===t.nodeType?O(t.nodeValue,t):C(t.nodeName.toLowerCase(),e,c.call(t.childNodes,N),t,void 0,1)},{h:function(t,n){for(var o,r=[],s=[],i=arguments.length;i-- >2;)r.push(arguments[i]);for(;r.length>0;)if(f(o=r.pop()))for(var i=o.length;i-- >0;)r.push(o[i]);else!1===o||!0===o||null==o||s.push(k(o));return n=n||e,"function"==typeof t?t(n,s):C(t,n,s,void 0,n.key)},app:function(e){var t={},n=!1,o=e.view,r=e.node,s=r&&N(r),i=e.subscriptions,a=[],l=function(e){d(this.actions[e.type],e)},c=function(e){return t!==e&&(t=e,i&&(a=y(a,m([i(t)]),d)),o&&!n&&u(h,n=!0)),t},p=e.middleware,d=(void 0===p?function(e){return e}:p)(function(e,n){return"function"==typeof e?d(e(t,n)):f(e)?"function"==typeof e[0]||f(e[0])?d(e[0],"function"==typeof e[1]?e[1](n):e[1]):(m(e.slice(1)).map(function(e){e&&e[0](d,e[1])},c(e[0])),t):c(e)}),h=function(){n=!1,r=b(r.parentNode,r,s,s=k(o(t)),l)};d(e.init)}}),S=A.h,M=A.app,F=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,o=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return n.some(function(t){return t===(void 0===e?"undefined":e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e)})};if(o(n,"undefined")){if(t.props)return S(e,{},[t]);o(t,"string","number","function")||Array.isArray(t)?(n=t,t={}):o(t.View,"function")&&(n=t.View,t={})}return S(e,t,n)}},P=F("a");F("abbr"),F("address"),F("animate"),F("animateMotion"),F("animateTransform"),F("area"),F("article"),F("aside"),F("audio"),F("b"),F("base"),F("bdi"),F("bdo"),F("blockquote"),F("body"),F("br");var T=F("button");F("canvas"),F("caption");var E=F("circle");F("cite"),F("clipPath");var L=F("code");F("col"),F("colgroup"),F("data"),F("datalist"),F("dd"),F("defs"),F("del"),F("desc"),F("description"),F("details"),F("dfn"),F("dialog"),F("discard");var z=F("div");F("dl"),F("dt"),F("ellipse"),F("em"),F("embed"),F("feBlend"),F("feColorMatrix"),F("feComponentTransfer"),F("feComposite"),F("feConvolveMatrix"),F("feDiffuseLighting"),F("feDisplacementMap"),F("feDistantLight"),F("feDropShadow"),F("feFlood"),F("feFuncA"),F("feFuncB"),F("feFuncG"),F("feFuncR"),F("feGaussianBlur"),F("feImage"),F("feMerge"),F("feMergeNode"),F("feMorphology"),F("feOffset"),F("fePointLight"),F("feSpecularLighting"),F("feSpotLight"),F("feTile"),F("feTurbulence"),F("fieldset"),F("figcaption"),F("figure"),F("filter");var B=F("footer");F("foreignObject"),F("form");var I=F("g");F("h1");var W=F("h2"),D=F("h3"),R=F("h4"),q=F("h5");F("h6"),F("hatch"),F("hatchpath"),F("head");var U=F("header");F("hgroup"),F("hr"),F("html"),F("i"),F("iframe"),F("image");var V=F("img"),G=F("input");F("ins"),F("kbd"),F("label"),F("legend");var Y=F("li");F("line"),F("linearGradient"),F("link");var H=F("main");F("map"),F("mark"),F("marker"),F("mask"),F("mesh"),F("meshgradient"),F("meshpatch"),F("meshrow"),F("meta"),F("metadata"),F("meter"),F("mpath");var $=F("nav");F("noscript"),F("object"),F("ol"),F("optgroup"),F("option"),F("output");var _=F("p");F("param");var J=F("path");F("pattern"),F("picture"),F("polygon"),F("polyline");var K=F("pre");F("progress"),F("q"),F("radialGradient"),F("rb"),F("rect"),F("rp"),F("rt"),F("rtc"),F("ruby"),F("s"),F("samp"),F("script"),F("section"),F("select"),F("set"),F("small"),F("solidcolor"),F("source");var Q=F("span");F("stop"),F("strong"),F("style"),F("sub"),F("summary"),F("sup");var X=F("svg");F("symbol"),F("table"),F("tbody"),F("td"),F("template"),F("text"),F("textPath"),F("textarea"),F("tfoot"),F("th"),F("thead"),F("time"),F("title"),F("tr"),F("track"),F("tspan"),F("u");var Z=F("ul");F("unknown"),F("use"),F("video"),F("view"),F("wbr");var ee=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return B({class:"Footer"},[z({class:"Container"},[z({class:"Credits"},["made with a few bits of ",er({to:"https://magic.github.io/",target:"_blank",rel:"noopener"},"magic")]),t])])},et=function(e){if("string"==typeof e)e={project:e};else if(!e.project)return;var t=e.branch,n=void 0===t?"master":t,o=e.host,r=void 0===o?"github":o,s=e.project,a=void 0!==s&&s,l="",c=a;a.startsWith("@")?(l="@",a=a.substr(1)):c=a.split("/")[1];var f=[["npm",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return e&&{to:"https://www.npmjs.com/package/".concat(c),src:"https://img.shields.io/npm/v/".concat(l).concat(e,"?color=blue")}}],["node",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return e&&{src:"https://img.shields.io/node/v/".concat(l).concat(e,"?color=blue")}}],["license",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return e&&{src:"https://img.shields.io/npm/l/".concat(l).concat(e,"?color=blue")}}],["travis",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return e&&{to:"https://travis-ci.com/".concat(e),src:"https://img.shields.io/travis/com/".concat(e,"/").concat(n)}}],["appveyor",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;if(e){var t=i(e.split("/"),2),o=t[0],r=t[1];return o=o.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(o,"/").concat(r,"/branch/").concat(n),src:"https://img.shields.io/appveyor/ci/".concat(o,"/").concat(r,"/").concat(n,".svg")}}}],["coveralls",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return{to:"https://coveralls.io/".concat(r,"/").concat(e),src:"https://img.shields.io/coveralls/".concat(r,"/").concat(e,"/").concat(n,".svg")}}],["snyk",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return e&&{to:"https://snyk.io/test/".concat(r,"/").concat(e),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(e,".svg")}}]].map(function(t){var n=i(t,2),o=n[0];return(0,n[1])(e[o])});if(f.length)return Z({class:"GitBadges"},f.map(function(e){var t=e.to,n=e.src;if(n){var o=eo({src:n,height:"23"});return t?Y(er({to:t},o)):Y(o)}}))},en=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=e.logo,o=e.menu,r=e.logotext,s=e.hash,i=e.url;if(n||o||r)return U({class:"Header"},[es(),r&&_(r),o&&ei({url:i,hash:s,menu:o}),t])},eo=function(e){if("string"==typeof e&&(e={src:e}),e.src)return e.alt||(e.title?e.alt=e.title:(e.role="presentation",e.alt="",e.loading=e.loading||"lazy")),V(e)},er=function(e,t){var n=e.to,o=e.action,r=void 0===o?ep.go:o,i=e.text,a=s(e,["to","action","text"]),l=a.href,c=a.nofollow,f=a.noreferrer,u=s(a,["href","nofollow","noreferrer"]);return n=n||l||"",u.href=n,i&&t?i=[i,t]:i||(i=t||n),"/"===n[0]||"#"===n[0]?u.onclick=[r,eu.preventDefault]:(u.target="_blank",u.rel="noopener",c&&(u.rel+=" nofollow"),f&&(u.rel+=" noreferrer")),P(u,i)},es=function(){return er({to:"/css/",class:"Logo"},[X({viewBox:"0 0 512 444"},[J({d:"M512 444L256 0 0 444z",fill:"#663695"}),E({cx:"256",cy:"294",r:"130",fill:"#fff"}),E({cx:"256",cy:"281",r:"40",fill:"#663695"}),J({d:"M256 350v44m24-44l1 13c1 27 29 27 29-7m-160-72s46-47 106-47c59 0 106 47 106 47s-47 43-106 43c-60 0-106-43-106-43zm65-75a134 134 0 0189 2",class:"stroke"}),J({d:"M256 81v53m184 270l-43-29M72 404l43-29",class:"stroke white"})])])},ei=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.collapse,n=void 0===t||t,s=e.menu,i=e.hash,a=e.class,l=void 0===a?"":a,c=e.url;return l.includes("Menu")||(l="Menu ".concat(l).trim()),i&&!c.endsWith(i)&&(c+="#".concat(i)),$({className:l},Z(s.map(function(e){return ea(r(o({},e),{url:c,collapse:n}))})))},ea=function(e){var t=e.collapse,n=e.items,r=void 0===n?[]:n,i=e.text,a=e.url,l=s(e,["collapse","items","text","url"]),c={class:{}},f=l.to;f===a&&(c.class.active=!0);var u=[];return(!t||a.includes(f))&&r.length&&(u=Z(r.map(function(e){return ea(o({url:a,collapse:t},e))}))),Y(c,[f?er(l,i):Q(l,i),u])},el=function(e){var t=e.nospy,n=void 0===t?{}:t;e.cookies;var o=n.show,r=n.title,s=void 0===r?"Privacy Notice":r,i=n.content,a=void 0===i?"This app neither saves, collects, nor shares any data about you.":i,l=n.buttonText;return o?z({class:"NoSpy"},[z({class:"Background",onclick:ep.nospy.toggle}),z({class:"Container"},[s&&D(s),a&&_(a),G({onclick:ep.nospy.toggle,value:void 0===l?"Awesome!":l,type:"button"})])]):z({class:"NoSpy"},X({class:"icon",onclick:ep.nospy.toggle,width:"25",height:"25",viewBox:"0 0 512 512"},[I([J({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),E({cx:"192",cy:"128",r:"32"}),E({cx:"128",cy:"256",r:"32"}),E({cx:"288",cy:"384",r:"32"}),E({cx:"272",cy:"272",r:"16"}),E({cx:"400",cy:"336",r:"16"}),E({cx:"176",cy:"368",r:"16"})])]))},ec=function(e,t){var n=e.page,o=e.state;return H({id:"Magic",class:o.pageClass},z({class:{Wrapper:!0}},[en(o),z({class:"Page",id:"page"},n(o)),ee(o),t]))},ef=function(e,t){"string"==typeof e?e={content:e}:t?e=o({content:t},e):Array.isArray(e)&&(e={content:e.join("")});var n=e.content,r=e.lines,s=void 0===r||r;return z({class:{Pre:!0,lines:s&&"false"!==s}},[z({class:"menu"},[T({onclick:[ep.pre.clip,function(e){return{e:e,content:n}}]},"copy")]),K(n.trim().split("\n").map(ef.Line))])};ef.Comment=function(e){return Q({class:"comment"},e)},ef.Line=function(e){return L({class:"line"},ef.Words(e))},ef.Word=function(e){if(!e)return"";var t=e.includes("://"),n=e.startsWith("mailto:")||e.includes("@")&&e.includes(".");if(t||n)return er({to:e,text:e});var o="";return("state"===e?o="state":"actions"===e?o="actions":eu.pre.keywords.includes(e)?o="keyword":eu.pre.builtins.includes(e)?o="builtin":eu.pre.booleans.includes(e)&&(o="boolean"),o)?Q({class:o},e):e},ef.Words=function(e){var o,r=t(o=e.split(eu.pre.commentRegex))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(o)||a(o)||n(),s=r[0],l=r.slice(1);if(!s.endsWith(":")&&l.length)return[ef.Words(s),ef.Comment(l.join("").split(eu.pre.wordRegex).map(ef.Word))];var c=[],f=e;return(e.replace(eu.pre.stringRegex,function(e){if(f){var t=i(f.split(e),2),n=t[0],o=t[1];n&&c.push(n.split(eu.pre.wordRegex).map(ef.Word).filter(function(e){return e})),f=o}c.push(Q({class:"string"},e))}),f!==e)?(f&&c.push(f.split(eu.pre.wordRegex).map(ef.Word).filter(function(e){return e})),c):e.split(eu.pre.wordRegex).filter(function(e){return e}).map(ef.Word)};var eu={pre:{booleans:["true","false"],builtins:["Array","Object","String","Number","RegExp","Null","Symbol","Set","WeakSet","Map","WeakMap","setInterval","setTimeout","Promise","JSON","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],commentRegex:/(\/\/)/gim,keywords:["let","this","long","package","float","goto","private","class","if","short","while","protected","with","debugger","case","continue","volatile","interface","instanceof","super","synchronized","throw","extends","final","export","throws","try","import","double","enum","boolean","abstract","function","implements","typeof","transient","break","default","do","static","void","int","new","async","native","switch","else","delete","null","public","var","await","byte","finally","catch","in","return","for","get","const","char","module","exports","require","npm","install","=>"],stringRegex:/("|')(.*?)\1/gim,wordRegex:/( )/gim},preventDefault:function(e){return e.preventDefault(),e}},ep={changeTheme:function(e){return r(o({},e),{pageClass:r(o({},e.pageClass),{light:"dark"===e.theme}),theme:"dark"===e.theme?"light":"dark"})},go:function(e,t){var n=t.currentTarget.href.replace(window.location.origin,""),s=i(n.split("#"),2),a=s[0],l=s[1],c=void 0===l?"":l;if(a===e.url&&c===e.hash)return c&&(window.location.hash=c),e;var f=e.pages&&e.pages[a]&&e.pages[a].title;f&&(document.title=e.title=f),a!==e.url?c||window.scrollTo({top:0}):window.location.hash=c;var u=window.scrollY;return window.history.pushState({url:a,hash:c,scrollY:u},e.title,n),r(o({},e),{url:a,hash:c,prev:e.url})},nospy:{toggle:function(e){return e.nospy.show=!e.nospy.show,o({},e)}},pop:function(e,t){var n=window.location,s=n.pathname,i=n.hash;i=i.substring(1);var a=0;return t.state&&(s=t.state.url,i=t.state.hash,a=t.state.scrollY||0),i?window.location.hash=i:window.scroll({top:a}),r(o({},e),{url:s,hash:i})},pre:{clip:function(e,t){var n=t.content;if("undefined"!=typeof document&&"function"==typeof document.execCommand){var o=document.createElement("textarea");o.id="copy",o.innerHTML=n,document.body.appendChild(o);var r=document.getElementById("copy");r.select(),document.execCommand("copy"),document.body.removeChild(r)}return e}}},ed={listenPopState:function(e,t){var n=function(n){return e(t,n)};return addEventListener("popstate",n),function(){return removeEventListener("popstate",n)}}},em={"/css/":function(e){return[W(e.title),_("parse/stringify/write css in js"),_("NO dynamic css, css gets output as css file. whenever possible, use dynamic classes instead."),_(["if there is absolute need for dynamic css,"," feel free to use the style property of the"," html tag / webcomponent you want to dynamically change,"," unfortunately, this library will not help you with that."]),et("@magic/css"),W({id:"installation"},"installation"),ef("npm install --save-exact @magic/css"),W({id:"usage"},"usage:"),R({id:"cli"},"cli:"),_("@magic/css includes a cli script that can handle most usecases the internal javascript api allows."),_(["to use this cli from any directory, ",ef("npm install -g @magic.css")," is a useful shortcut."," after the global install, you can just call `mcss` from anywhere in your terminal to see the help."]),ef('\n@magic/css\ncommands:\nstringify - convert css in js to css\nparse     - convert css in js to an array of key value pairs\nfull      - get a full result object.\n\nflags:\n--minified - output minified css - alias: ["--m", "-m"]\n--help     - alias: ["-h"]\n--out      - directory to write output files to. omit to print to stdout - alias: ["--o", "-o"]\n--in       - directory with source files, needs index.js to exist - alias: ["--i", "-i"]\n\nexamples:\nmcss parse --in ./css --out ./css\nmcss stringify --in ./styles --out ./css\n'),D({id:"import"},"import"),ef("import css from '@magic/css'"),W({id:"api"},"api"),D({id:"api-css"},"css (full result)"),ef("\nimport css from 'css'\n\nconst style = {\n  body: {\n    color: 'green',\n  },\n  '.class': {\n    color: 'orange',\n  },\n  '#id': {\n    color: 'purple'\n  },\n}\n\nconst result = await css(style)\n\n// returns\nObject {\n  // nicely formatted css string\n  css: 'body {\\n  color: green;\\n}\\n.class {\\n  color: orange;\\n}\\n#id{\\n  color: purple;\\n}\\n',\n  // minimal whitespace\n  minified: 'body{color:green}.class{color:orange}#id{color:purple}',\n  // array of used classes if any\n  classes: ['.class'],\n  // array of used ids if any\n  ids: ['#id'],\n  // array of used selectors\n  selectors: [],\n  //ast of this css object\n  parsed: [],\n}"),D({id:"api-parse"},"parse"),ef("\nconst style = {\n  '.className': {\n    '#id': {\n      color: 'orange',\n    },\n  },\n}\n\nconst ast = css.parse(style)\n// ast\n[['.className #id', { color: 'orange' } ]]\n"),D({id:"api-stringify"},"stringify"),ef("\nconst style = {\n  '.className': {\n    '#id': {\n      color: 'white',\n    },\n  },\n}\n\nawait css.stringify(style)\n// minified string\n`.className #id{color:white;}`\n"),D({id:"api-write"},"write to filesystem"),ef("\nconst style = {\n  '.className': {\n    '#id': {\n      color: opts.textColor,\n    },\n  },\n}\n\n// writes styles to ./out.css\ncss.write(style)\n// writes styles to ./outfile.css\ncss.write(style, { OUTFILE: './outfile.css' })"),W({id:"styles"},"styles"),_(["styles are a javascript object."," the keys are selectors and the values are nested objects of css rules,"," where the keys of the objects are assumed to be selectors"," unless the value associated with the key is not an object"]),ef("\nconst style = {\n'.className': {\n  color: 'green',\n},\n}\nawait css.stringify(style)\n// .className { color:green; }"),D({id:"styles-pseudo-classes"},"pseudo classes: (:hover, :active)"),_("css pseudo classes in nested css get found if their object key starts with a &"),ef("\nconst style = {\n'div': {\n  color: 'red',\n  '&:hover': {\n    color: 'green',\n  },\n},\n}\n\nawait css.stringify(style)\n// div { color: red; }\n// div:hover { color: green; }"),D({id:"styles-selector-nesting"},"selector nesting"),ef("\nconst style = {\n'div': {\n  'p, &:hover': {\n    color: 'red',\n  },\n},\n}\nawait css.stringify(style)\n// div p, div:hover { color: red; }"),D({id:"styles-prefix-without-space"},"prefix without space"),_(["to prefix the parent of the selector using the child selectors,"," add a & at the end of any selectors but the last one."]),ef("\nconst style = {\n  '.class': {\n    'p&, :hover': {\n      color: 'orange',\n    },\n  },\n}\n\nawait css.stringify(style)\n\n// p.class, .class:hover { color: orange; }\n"),D({id:"styles-prefix-all-without-space"},"prefix all without space"),_(["if the & is at the end of a selector,"," the & will be applied to each of them."]),ef("\nconst style = {\n  '.class': {\n    'div, p&': {\n      color: 'orange';\n    },\n  },\n}\n\nawait css.stringify(style)\n\n// div.class, p.class { color: orange; }\n"),D({id:"styles-prefix-with-space"},"prefix with space"),_("to prefix the parent with a space, use a double && instead of a single &"),ef("\nconst style = {\n  '#id': {\n    '.class2&&, .class3': {\n      color: 'orange';\n    },\n  },\n}\n\nawait css.stringify(style)\n\n// .class2 #id, #id.class3 { color: orange; }\n"),D({id:"styles-prefix-all-with-space"},"prefix all with space"),_(["if the && is at the end of a selector,"," the && will be applied to each of them."]),ef("\nconst style = {\n  '.class': {\n    'div, p&&': {\n      color: 'orange';\n    },\n  },\n}\n\nawait css.stringify(style)\n\n// div .class, p .class { color: orange; }\n"),D({id:"styles-media-queries"},"media queries"),_("Mediaqueries can use the vars.widths object to determine appropriate breakpoint sizes."),_("Default widths:"),ef("\nvars.widths = {\n  tablet: '500px',\n  laptop: '900px',\n  desktop: '1200px',\n  agency: '1600px',\n}\n"),_("Usage of the vars.widths in media queries:"),ef("\nconst style = {\n  [`@media screen and(min-width: ${vars.widths?.tablet || '500px'})`]: {\n    '#id': {\n      color: opts.textColor,\n    },\n  },\n}\n\nawait css.stringify(style)\n// css string\n`\n@media screen and (min-width: 500px) {\n  #id {\n    color: green;\n  }\n}\n`"),D({id:"styles-keyframes"},"keyframes for animations"),ef("\nconst style = {\n'@keyframes anim-name': {\n  from: {\n    opacity: 0,\n  },\n  to: {\n    opacity: 1,\n  }\n}\n\nawait css.stringify(style)\n\n// css string\n`\n@keyframes anim-name {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n`"),D({id:"styles-webfonts"},"webfonts"),R("Font V2"),_("This approach allows definition of font-style, font-weight, and local font names."),q("Pseudocode"),ef("\n@font-face: {\n  family: 'name',\n  url: '/fonts/',\n  styles: {\n    (normal|italic): {\n      weight: ['LocalName', 'Local Name']\n    }\n  }\n}\n"),ef("\nconst style = {\n    '@font-face': {\n      family: 'font-name',\n      url: '/fonts/',\n      styles: {\n        normal: {\n          400: ['FontName', 'Font Name'],\n          600: ['FontNameBold', 'Font Name Bold']\n        },\n        italic: {\n          400: ['FontNameItalic', 'Font Name Italic'],\n        },\n      },\n    },\n  }\n\n  const out = await css.stringify(style)\n\n  // out.css string\n  @font-face {\n    font-family: 'font-name';\n    font-style: normal;\n    font-weight: 400;\n    src:\n      local('FontName'),\n      local('Font Name'),\n      url('/fonts/font-name-400-normal.woff2') format('woff2');\n  }\n\n  @font-face {\n    font-family: 'font-name';\n    font-style: normal;\n    font-weight: 600;\n    src:\n      local('FontNameBold'),\n      local('Font Name Bold'),\n      url('/fonts/font-name-600-normal.woff2') format('woff2');\n  }\n\n  @font-face {\n    font-family: 'font-name';\n    font-style: italic;\n    font-weight: 400;\n    src:\n      local('FontNameItalic'),\n      local('Font Name Italic'),\n      url('/fonts/font-name-400-italic.woff2') format('woff2');\n  }\n  "),R("Font V1 - DEPRECATED"),_("This approach does not allow definition of local fonts to load, and therefore is deprecated."),ef("\n  const style = {\n    '@font-face': {\n      family: 'font-name',\n      url: '/fonts/',\n      styles: ['normal', 'italic'],\n      weights: [400, 600],\n    },\n  }\n\n  const out = await css.stringify(style)\n\n  // out.css string\n\n  @font-face {\n    font-family: 'font-name';\n    font-style: normal;\n    font-weight: normal;\n    src: url('/fonts/font-name-400-normal.eot');\n    src: url('/fonts/font-name-400-normal.eot#iefix') format('embedded-opentype'),',\n    url('/fonts/font-name-400-normal.ttf') format('truetype'),',\n    url('/fonts/font-name-400-normal.woff') format('woff'),',\n    url('/fonts/font-name-400-normal.woff2') format('woff2'),',\n    url('/fonts/font-name-400-normal.svg#font-name') format('svg');',\n  }\n\n  // ... repeated for all styles and weights that were defined\n  "),R({id:"styles-css-overload"},"css overload"),_("Css allows overloads for props, to provide fallback values for old browsers"),ef("\n{\n  body: {\n    color: ['green', 'red'],\n  },\n}\n  "),_("turns into"),ef("\nbody {\n  color: green;\n  color: red;\n}\n"),W({id:"source"},"source"),_(["the source for this page is in the ",er({to:"https://github.com/magic/css/tree/master/example"},"example directory")," and gets built and published to github using ",er({to:"https://github.com/magic/core"},"@magic/core")])]},"/css/404/":function(){return z("404 - not found.")}};M({init:r(o({},{description:"parse/stringify/write css in js",logotext:"@magic/css",menu:[{text:"installation",to:"/css/#installation"},{text:"cli",to:"/css/#cli"},{text:"import",to:"/css/#import"},{items:[{text:"css (full result)",to:"/css/#api-css"},{text:"parse",to:"/css/#api-parse"},{text:"stringify",to:"/css/#api-stringify"},{text:"write to filesystem",to:"/css/#api-write"}],text:"api",to:"/css/#api"},{items:[{text:":pseudo classes",to:"/css/#styles-pseudo-classes"},{text:"selector nesting",to:"/css/#styles-selector-nesting"},{text:"prefix w/ space",to:"/css/#styles-prefix-with-space"},{text:"prefix all w/ space",to:"/css/#styles-prefix-all-with-space"},{text:"prefix w/o space",to:"/css/#styles-prefix-without-space"},{text:"prefix all w/o space",to:"/css/#styles-prefix-all-without-space"},{text:"media queries",to:"/css/#styles-media-queries"},{text:"keyframes",to:"/css/#styles-keyframes"},{text:"webfonts",to:"/css/#styles-webfonts"},{text:"overloads",to:"/css/#styles-css-overload"}],text:"styles",to:"/css/#styles"},{text:"source",to:"/css/#source"}],nospy:{show:!1},pageClass:{},pages:{"/css/404/":{description:"404 - not found.",title:"404 - not found"}},root:"/css/",theme:"dark",title:"@magic/css",url:"/css/"}),{url:window.location.pathname,hash:window.location.hash.substr(1)}),subscriptions:function(e){return[[ed.listenPopState,ep.pop]]},view:function(e){var t=em[e.url]?e.url:"/404/",n=em[t],o=e.pages&&e.pages[t];return o&&Object.keys(o).forEach(function(t){e[t]=o[t]}),e.url=t,ec({page:n,state:e},[el(e),function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0],X({class:"LightSwitch icon",onclick:ep.changeTheme,height:25,width:25,viewBox:"0 0 352 460"},[J({d:"M149 48C96 48 48 95 47 143c-1 13 19 17 20 0-1-35 48-75 83-75 15 0 12-22-1-20z"}),J({d:"M176 0C74 0 0 83 0 176c9 91 84 118 100 204h20c-16-92-97-138-100-204C22 70 105 21 176 20zM95 400c2 68 20 48 40 60h82c20-12 38 8 40-60z"}),J({d:"M175 0c102 0 177 83 177 176-9 91-86 118-102 204h-20c16-92 99-138 102-204-2-106-86-155-157-156z"})])}(e)])},node:document.getElementById("Magic")})}();