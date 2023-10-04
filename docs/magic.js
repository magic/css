function e(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},o=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),o.forEach(function(t){var o,r;o=e,r=s[t],t in o?Object.defineProperty(o,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[t]=r})}return e}function t(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);s.push.apply(s,o)}return s})(Object(t)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}),e}function s(e,t){if(null==e)return{};var s,o,r=function(e,t){if(null==e)return{};var s,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)s=n[o],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)s=n[o],!(t.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}(()=>{let{h:o,app:r}=(()=>{var e={},t=[],s=t.map,o=Array.isArray,r="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout,n=function(e){var t="";if("string"==typeof e)return e;if(o(e)&&e.length>0)for(var s,r=0;r<e.length;r++)""!==(s=n(e[r]))&&(t+=(t&&" ")+s);else for(var r in e)e[r]&&(t+=(t&&" ")+r);return t},i=function(e,t){var s={};for(var o in e)s[o]=e[o];for(var o in t)s[o]=t[o];return s},a=function(e){return e.reduce(function(e,t){return e.concat(t&&!0!==t?"function"==typeof t[0]?[t]:a(t):0)},t)},l=function(e,t){if(e!==t)for(var s in i(e,t)){var r,n;if(e[s]!==t[s]&&(r=e[s],n=t[s],!(o(r)&&o(n))||r[0]!==n[0]||"function"!=typeof r[0]))return!0;t[s]=e[s]}},c=function(e,t,s){for(var o,r,n=0,i=[];n<e.length||n<t.length;n++)o=e[n],i.push((r=t[n])?!o||r[0]!==o[0]||l(r[1],o[1])?[r[0],r[1],r[0](s,r[1]),o&&o[2]()]:o:o&&o[2]());return i},f=function(e,t,s,o,r,a){if("key"===t);else if("style"===t)for(var l in i(s,o))s=null==o||null==o[l]?"":o[l],"-"===l[0]?e[t].setProperty(l,s):e[t][l]=s;else"o"===t[0]&&"n"===t[1]?((e.actions||(e.actions={}))[t=t.slice(2)]=o)?s||e.addEventListener(t,r):e.removeEventListener(t,r):!a&&"list"!==t&&t in e?e[t]=null==o?"":o:null!=o&&!1!==o&&("class"!==t||(o=n(o)))?e.setAttribute(t,o):e.removeAttribute(t)},p=function(e,t,s){var o=e.props,r=3===e.type?document.createTextNode(e.name):(s=s||"svg"===e.name)?document.createElementNS("http://www.w3.org/2000/svg",e.name,{is:o.is}):document.createElement(e.name,{is:o.is});for(var n in o)f(r,n,null,o[n],t,s);for(var i=0,a=e.children.length;i<a;i++)r.appendChild(p(e.children[i]=h(e.children[i]),t,s));return e.node=r},u=function(e){return null==e?null:e.key},d=function(e,t,s,o,r,n){if(s===o);else if(null!=s&&3===s.type&&3===o.type)s.name!==o.name&&(t.nodeValue=o.name);else if(null==s||s.name!==o.name)t=e.insertBefore(p(o=h(o),r,n),t),null!=s&&e.removeChild(s.node);else{var a,l,c,m,y=s.props,g=o.props,w=s.children,v=o.children,b=0,x=0,k=w.length-1,j=v.length-1;for(var C in n=n||"svg"===o.name,i(y,g))("value"===C||"selected"===C||"checked"===C?t[C]:y[C])!==g[C]&&f(t,C,y[C],g[C],r,n);for(;x<=j&&b<=k&&null!=(c=u(w[b]))&&c===u(v[x]);)d(t,w[b].node,w[b],v[x]=h(v[x++],w[b++]),r,n);for(;x<=j&&b<=k&&null!=(c=u(w[k]))&&c===u(v[j]);)d(t,w[k].node,w[k],v[j]=h(v[j--],w[k--]),r,n);if(b>k)for(;x<=j;)t.insertBefore(p(v[x]=h(v[x++]),r,n),(l=w[b])&&l.node);else if(x>j)for(;b<=k;)t.removeChild(w[b++].node);else{for(var C=b,O={},N={};C<=k;C++)null!=(c=w[C].key)&&(O[c]=w[C]);for(;x<=j;){if(c=u(l=w[b]),m=u(v[x]=h(v[x],l)),N[c]||null!=m&&m===u(w[b+1])){null==c&&t.removeChild(l.node),b++;continue}null==m||1===s.type?(null==c&&(d(t,l&&l.node,l,v[x],r,n),x++),b++):(c===m?(d(t,l.node,l,v[x],r,n),N[m]=!0,b++):null!=(a=O[m])?(d(t,t.insertBefore(a.node,l&&l.node),a,v[x],r,n),N[m]=!0):d(t,l&&l.node,null,v[x],r,n),x++)}for(;b<=k;)null==u(l=w[b++])&&t.removeChild(l.node);for(var C in O)null==N[C]&&t.removeChild(O[C].node)}}return o.node=t},m=function(e,t){for(var s in e)if(e[s]!==t[s])return!0;for(var s in t)if(e[s]!==t[s])return!0},y=function(e){return"object"==typeof e?e:w(e)},h=function(e,t){return 2===e.type?((!t||!t.lazy||m(t.lazy,e.lazy))&&((t=y(e.lazy.view(e.lazy))).lazy=e.lazy),t):e},g=function(e,t,s,o,r,n){return{name:e,props:t,children:s,node:o,type:n,key:r}},w=function(s,o){return g(s,e,t,o,void 0,3)},v=function(t){return 3===t.nodeType?w(t.nodeValue,t):g(t.nodeName.toLowerCase(),e,s.call(t.childNodes,v),t,void 0,1)};return{h:function(t,s){for(var r,n=[],i=[],a=arguments.length;a-- >2;)n.push(arguments[a]);for(;n.length>0;)if(o(r=n.pop()))for(var a=r.length;a-- >0;)n.push(r[a]);else!1===r||!0===r||null==r||i.push(y(r));return s=s||e,"function"==typeof t?t(s,i):g(t,s,i,void 0,s.key)},app:function(e){var t={},s=!1,n=e.view,i=e.node,l=i&&v(i),f=e.subscriptions,p=[],u=function(e){g(this.actions[e.type],e)},m=function(e){return t!==e&&(t=e,f&&(p=c(p,a([f(t)]),g)),n&&!s&&r(w,s=!0)),t};let{middleware:h=e=>e}=e,g=h((e,s)=>"function"==typeof e?g(e(t,s)):o(e)?"function"==typeof e[0]||o(e[0])?g(e[0],"function"==typeof e[1]?e[1](s):e[1]):(a(e.slice(1)).map(function(e){e&&e[0](g,e[1])},m(e[0])),t):m(e));var w=function(){s=!1,i=d(i.parentNode,i,l,l=y(n(t)),u)};g(e.init)}}})(),n=e=>(t={},s)=>{let r=(e,...t)=>t.some(t=>t===typeof e);if(r(s,"undefined")){if(t.props)return o(e,{},[t]);r(t,"string","number","function")||Array.isArray(t)?(s=t,t={}):r(t.View,"function")&&(s=t.View,t={})}return o(e,t,s)},i=n("a");n("abbr"),n("address"),n("animate"),n("animateMotion"),n("animateTransform"),n("area"),n("article"),n("aside"),n("audio"),n("b"),n("base"),n("bdi"),n("bdo"),n("blockquote"),n("body"),n("br");let a=n("button");n("canvas"),n("caption");let l=n("circle");n("cite"),n("clipPath");let c=n("code");n("col"),n("colgroup"),n("data"),n("datalist"),n("dd"),n("defs"),n("del"),n("desc"),n("description"),n("details"),n("dfn"),n("dialog"),n("discard");let f=n("div");n("dl"),n("dt"),n("ellipse"),n("em"),n("embed"),n("feBlend"),n("feColorMatrix"),n("feComponentTransfer"),n("feComposite"),n("feConvolveMatrix"),n("feDiffuseLighting"),n("feDisplacementMap"),n("feDistantLight"),n("feDropShadow"),n("feFlood"),n("feFuncA"),n("feFuncB"),n("feFuncG"),n("feFuncR"),n("feGaussianBlur"),n("feImage"),n("feMerge"),n("feMergeNode"),n("feMorphology"),n("feOffset"),n("fePointLight"),n("feSpecularLighting"),n("feSpotLight"),n("feTile"),n("feTurbulence"),n("fieldset"),n("figcaption"),n("figure"),n("filter");let p=n("footer");n("foreignObject"),n("form");let u=n("g");n("h1");let d=n("h2"),m=n("h3"),y=n("h4"),h=n("h5");n("h6"),n("hatch"),n("hatchpath"),n("head");let g=n("header");n("hgroup"),n("hr"),n("html"),n("i"),n("iframe"),n("image");let w=n("img"),v=n("input");n("ins"),n("kbd"),n("label"),n("legend");let b=n("li");n("line"),n("linearGradient"),n("link");let x=n("main");n("map"),n("mark"),n("marker"),n("mask"),n("mesh"),n("meshgradient"),n("meshpatch"),n("meshrow"),n("meta"),n("metadata"),n("meter"),n("mpath");let k=n("nav");n("noscript"),n("object"),n("ol"),n("optgroup"),n("option"),n("output");let j=n("p");n("param");let C=n("path");n("pattern"),n("picture"),n("polygon"),n("polyline");let O=n("pre");n("progress"),n("q"),n("radialGradient"),n("rb"),n("rect"),n("rp"),n("rt"),n("rtc"),n("ruby"),n("s"),n("samp"),n("script"),n("section"),n("select"),n("set"),n("small"),n("solidcolor"),n("source");let N=n("span");n("stop"),n("strong"),n("style"),n("sub"),n("summary"),n("sup");let $=n("svg");n("symbol"),n("table"),n("tbody"),n("td"),n("template"),n("text"),n("textPath"),n("textarea"),n("tfoot"),n("th"),n("thead"),n("time"),n("title"),n("tr"),n("track"),n("tspan"),n("u");let P=n("ul");n("unknown"),n("use"),n("video"),n("view"),n("wbr");let F=()=>f({class:"Credits"},["made with a few bits of ",E({to:"https://magic.github.io/",target:"_blank",rel:"noopener"},"magic")]),M=(e,t=[])=>p({class:"Footer"},[f({class:"Container"},[F(),t])]),A=e=>{if("string"==typeof e)e={project:e};else if(!e.project)return;let{branch:t="master",host:s="github"}=e,{project:o=!1}=e,r="",n=o;o.startsWith("@")?(r="@",o=o.substr(1)):n=o.split("/")[1];let i=[["npm",(e=o)=>e&&{to:`https://www.npmjs.com/package/${n}`,src:`https://img.shields.io/npm/v/${r}${e}?color=blue`}],["node",(e=o)=>e&&{src:`https://img.shields.io/node/v/${r}${e}?color=blue`}],["license",(e=o)=>e&&{src:`https://img.shields.io/npm/l/${r}${e}?color=blue`}],["travis",(e=o)=>e&&{to:`https://travis-ci.com/${e}`,src:`https://img.shields.io/travis/com/${e}/${t}`}],["appveyor",(e=o)=>{if(e){let[s,o]=e.split("/");return{to:`https://ci.appveyor.com/project/${s=s.replace(/-/g,"")}/${o}/branch/${t}`,src:`https://img.shields.io/appveyor/ci/${s}/${o}/${t}.svg`}}}],["coveralls",(e=o)=>({to:`https://coveralls.io/${s}/${e}`,src:`https://img.shields.io/coveralls/${s}/${e}/${t}.svg`})],["snyk",(e=o)=>e&&{to:`https://snyk.io/test/${s}/${e}`,src:`https://img.shields.io/snyk/vulnerabilities/github/${e}.svg`}]].map(([t,s])=>s(e[t]));if(i.length)return P({class:"GitBadges"},i.map(({to:e,src:t})=>{if(!t)return;let s=L({src:t,height:"23"});return e?b(E({to:e},s)):b(s)}))},S=(e={},t=[])=>{let{logo:s,menu:o,logotext:r,hash:n,url:i}=e;if(s||o||r)return g({class:"Header"},[T(),r&&j(r),o&&B({url:i,hash:n,menu:o}),t])},L=e=>{"string"==typeof e&&(e={src:e});let{loading:t="lazy"}=e;if(e.src)return e.hasOwnProperty("alt")||(e.title?e.alt=e.title:e.alt=""),e.loading=t,w(e)},z=(e={})=>$({class:"LightSwitch icon",onclick:U.changeTheme,height:25,width:25,viewBox:"0 0 352 460"},[C({d:"M149 48C96 48 48 95 47 143c-1 13 19 17 20 0-1-35 48-75 83-75 15 0 12-22-1-20z"}),C({d:"M176 0C74 0 0 83 0 176c9 91 84 118 100 204h20c-16-92-97-138-100-204C22 70 105 21 176 20zM95 400c2 68 20 48 40 60h82c20-12 38 8 40-60z"}),C({d:"M175 0c102 0 177 83 177 176-9 91-86 118-102 204h-20c16-92 99-138 102-204-2-106-86-155-157-156z"})]),E=(e,t)=>{var{to:o,action:r=U.go,text:n}=e,a=s(e,["to","action","text"]);let{href:l,nofollow:c,noreferrer:f}=a,p=s(a,["href","nofollow","noreferrer"]);o=o||l||"",p.href=o,n&&t?n=[n,t]:n||(n=t||o);let u="/"===o[0]||"#"===o[0];return u?p.onclick=[r,q.preventDefault]:(p.target="_blank",p.rel="noopener",c&&(p.rel+=" nofollow"),f&&(p.rel+=" noreferrer")),i(p,n)},T=()=>E({to:"/css/",class:"Logo"},[$({viewBox:"0 0 512 444"},[C({d:"M512 444L256 0 0 444z",fill:"#663695"}),l({cx:"256",cy:"294",r:"130",fill:"#fff"}),l({cx:"256",cy:"281",r:"40",fill:"#663695"}),C({d:"M256 350v44m24-44l1 13c1 27 29 27 29-7m-160-72s46-47 106-47c59 0 106 47 106 47s-47 43-106 43c-60 0-106-43-106-43zm65-75a134 134 0 0189 2",class:"stroke"}),C({d:"M256 81v53m184 270l-43-29M72 404l43-29",class:"stroke white"})])]),B=(s={})=>{let{collapse:o=!0,menu:r,hash:n}=s,{class:i="",url:a}=s;return i.includes("Menu")||(i=`Menu ${i}`.trim()),n&&!a.endsWith(n)&&(a+=`#${n}`),k({className:i},P(r.map(s=>W(t(e({},s),{url:a,collapse:o})))))},W=t=>{let{collapse:o,items:r=[],text:n,url:i}=t,a=s(t,["collapse","items","text","url"]),l={class:{}},{to:c}=a;c===i&&(l.class.active=!0);let f=[],p=!o||i.includes(c);return p&&r.length&&(f=P(r.map(t=>W(e({url:i,collapse:o},t))))),b(l,[c?E(a,n):N(a,n),f])},D=({nospy:e={},cookies:t=[]})=>{let{show:s,title:o="Privacy Notice",content:r="This app neither saves, collects, nor shares any data about you.",buttonText:n="Awesome!"}=e;return s?f({class:"NoSpy"},[f({class:"Background",onclick:U.nospy.toggle}),f({class:"Container"},[o&&m(o),r&&j(r),v({onclick:U.nospy.toggle,value:n,type:"button"})])]):f({class:"NoSpy"},$({class:"icon",onclick:U.nospy.toggle,width:"25",height:"25",viewBox:"0 0 512 512"},[u([C({d:`
M507,208c-1-7-7-12-14-13c-7-1-13,3-16,9
c-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11
C393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14
c2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29
c6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0
C115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256
C512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66
C57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0
C259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128
c0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256
c11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z
`}),l({cx:"192",cy:"128",r:"32"}),l({cx:"128",cy:"256",r:"32"}),l({cx:"288",cy:"384",r:"32"}),l({cx:"272",cy:"272",r:"16"}),l({cx:"400",cy:"336",r:"16"}),l({cx:"176",cy:"368",r:"16"})])]))},I=({page:e,state:t},s)=>{let o={id:"Magic",class:t.pageClass};return x(o,f({class:{Wrapper:!0}},[S(t),f({class:"Page",id:"page"},e(t)),M(t),s]))},R=(t,s)=>{"string"==typeof t?t={content:t}:s?t=e({content:s},t):Array.isArray(t)&&(t={content:t.join("")});let{content:o,lines:r=!0}=t;return f({class:{Pre:!0,lines:r&&"false"!==r}},[f({class:"menu"},[a({onclick:[U.pre.clip,e=>({e,content:o})]},"copy")]),O(o.trim().split("\n").map(R.Line))])};R.Comment=e=>N({class:"comment"},e),R.Line=e=>c({class:"line"},R.Words(e)),R.Word=e=>{if(!e)return"";let t=e.includes("://"),s=e.startsWith("mailto:")||e.includes("@")&&e.includes(".");if(t||s)return E({to:e,text:e});let o="";return("state"===e?o="state":"actions"===e?o="actions":"effects"===e?o="effects":"subscriptions"===e?o="subscriptions":q.pre.keywords.includes(e)?o="keyword":q.pre.builtins.includes(e)?o="builtin":q.pre.booleans.includes(e)&&(o="boolean"),o)?N({class:o},e):e},R.Words=e=>{let[t,...s]=e.split(q.pre.commentRegex),o=!t.endsWith(":")&&s.length;if(o)return[R.Words(t),R.Comment(s.join("").split(q.pre.wordRegex).map(R.Word))];let r=[],n=e;if(e.replace(q.pre.stringRegex,e=>{if(n){let[t,s]=n.split(e);t&&r.push(t.split(q.pre.wordRegex).map(R.Word).filter(e=>e)),n=s}r.push(N({class:"string"},e))}),n!==e)return n&&r.push(n.split(q.pre.wordRegex).map(R.Word).filter(e=>e)),r;let i=e.split(q.pre.wordRegex).filter(e=>e);return i.map(R.Word)};let q={pre:{booleans:["true","false"],builtins:["Array","Object","String","Number","RegExp","Null","Symbol","Set","WeakSet","Map","WeakMap","setInterval","setTimeout","Promise","JSON","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],commentRegex:/(\/\/)/gim,keywords:["let","this","long","package","float","goto","private","class","if","short","while","protected","with","debugger","case","continue","volatile","interface","instanceof","super","synchronized","throw","extends","final","export","throws","try","import","double","enum","boolean","abstract","function","implements","typeof","transient","break","default","do","static","void","int","new","async","native","switch","else","delete","null","public","var","await","byte","finally","catch","in","return","for","get","const","char","module","exports","require","npm","install","=>"],stringRegex:/("|')(.*?)\1/gim,wordRegex:/( )/gim},preventDefault:e=>(e.preventDefault(),e)},U={changeTheme:s=>t(e({},s),{pageClass:t(e({},s.pageClass),{light:"dark"===s.theme}),theme:"dark"===s.theme?"light":"dark"}),go:(s,o)=>{let r=o.currentTarget.href.replace(window.location.origin,""),[n,i=""]=r.split("#");if(n===s.url&&i===s.hash)return i&&(window.location.hash=i),s;let a=s.pages&&s.pages[n]&&s.pages[n].title;a&&(document.title=s.title=a),n!==s.url?i||window.scrollTo({top:0}):window.location.hash=i;let{scrollY:l}=window;return window.history.pushState({url:n,hash:i,scrollY:l},s.title,r),t(e({},s),{url:n,hash:i,prev:s.url})},nospy:{toggle:t=>(t.nospy.show=!t.nospy.show,e({},t))},pop:(s,o)=>{let{pathname:r,hash:n}=window.location;n=n.substring(1);let i=0;return o.state&&(r=o.state.url,n=o.state.hash,i=o.state.scrollY||0),n?window.location.hash=n:window.scroll({top:i}),t(e({},s),{url:r,hash:n})},pre:{clip:(e,{content:t})=>{if("undefined"!=typeof document&&"function"==typeof document.execCommand){let e=document.createElement("textarea");e.id="copy",e.innerHTML=t,document.body.appendChild(e);let s=document.getElementById("copy");s.select(),document.execCommand("copy"),document.body.removeChild(s)}return e}}},V={listenPopState:(e,t)=>{let s=s=>e(t,s);return addEventListener("popstate",s),()=>removeEventListener("popstate",s)}},G={"/css/":e=>[d(e.title),j("parse/stringify/write css in js"),j("NO dynamic css, css gets output as css file. whenever possible, use dynamic classes instead."),j(["if there is absolute need for dynamic css,"," feel free to use the style property of the"," html tag / webcomponent you want to dynamically change,"," unfortunately, this library will not help you with that."]),A("@magic/css"),d({id:"installation"},"installation"),R("npm install --save-exact @magic/css"),d({id:"usage"},"usage:"),y({id:"cli"},"cli:"),j("@magic/css includes a cli script that can handle most usecases the internal javascript api allows."),j(["to use this cli from any directory, ",R("npm install -g @magic.css")," is a useful shortcut."," after the global install, you can just call `mcss` from anywhere in your terminal to see the help."]),R(`
@magic/css
commands:
stringify - convert css in js to css
parse     - convert css in js to an array of key value pairs
full      - get a full result object.

flags:
--minified - output minified css - alias: ["--m", "-m"]
--help     - alias: ["-h"]
--out      - directory to write output files to. omit to print to stdout - alias: ["--o", "-o"]
--in       - directory with source files, needs index.js to exist - alias: ["--i", "-i"]

examples:
mcss parse --in ./css --out ./css
mcss stringify --in ./styles --out ./css
`),m({id:"import"},"import"),R("import css from '@magic/css'"),d({id:"api"},"api"),m({id:"api-css"},"css (full result)"),R(`
import css from 'css'

const style = {
  body: {
    color: 'green',
  },
  '.class': {
    color: 'orange',
  },
  '#id': {
    color: 'purple'
  },
}

const result = await css(style)

// returns
Object {
  // nicely formatted css string
  css: 'body {\\n  color: green;\\n}\\n.class {\\n  color: orange;\\n}\\n#id{\\n  color: purple;\\n}\\n',
  // minimal whitespace
  minified: 'body{color:green}.class{color:orange}#id{color:purple}',
  // array of used classes if any
  classes: ['.class'],
  // array of used ids if any
  ids: ['#id'],
  // array of used selectors
  selectors: [],
  //ast of this css object
  parsed: [],
}`),m({id:"api-parse"},"parse"),R(`
const style = {
  '.className': {
    '#id': {
      color: 'orange',
    },
  },
}

const ast = css.parse(style)
// ast
[['.className #id', { color: 'orange' } ]]
`),m({id:"api-stringify"},"stringify"),R(`
const style = {
  '.className': {
    '#id': {
      color: 'white',
    },
  },
}

await css.stringify(style)
// minified string
\`.className #id{color:white;}\`
`),m({id:"api-write"},"write to filesystem"),R(`
const style = {
  '.className': {
    '#id': {
      color: opts.textColor,
    },
  },
}

// writes styles to ./out.css
css.write(style)
// writes styles to ./outfile.css
css.write(style, { OUTFILE: './outfile.css' })`),d({id:"styles"},"styles"),j(["styles are a javascript object."," the keys are selectors and the values are nested objects of css rules,"," where the keys of the objects are assumed to be selectors"," unless the value associated with the key is not an object"]),R(`
const style = {
'.className': {
  color: 'green',
},
}
await css.stringify(style)
// .className { color:green; }`),m({id:"styles-pseudo-classes"},"pseudo classes: (:hover, :active)"),j("css pseudo classes in nested css get found if their object key starts with a &"),R(`
const style = {
'div': {
  color: 'red',
  '&:hover': {
    color: 'green',
  },
},
}

await css.stringify(style)
// div { color: red; }
// div:hover { color: green; }`),m({id:"styles-selector-nesting"},"selector nesting"),R(`
const style = {
'div': {
  'p, &:hover': {
    color: 'red',
  },
},
}
await css.stringify(style)
// div p, div:hover { color: red; }`),m({id:"styles-prefix-without-space"},"prefix without space"),j(["to prefix the parent of the selector using the child selectors,"," add a & at the end of any selectors but the last one."]),R(`
const style = {
  '.class': {
    'p&, :hover': {
      color: 'orange',
    },
  },
}

await css.stringify(style)

// p.class, .class:hover { color: orange; }
`),m({id:"styles-prefix-all-without-space"},"prefix all without space"),j(["if the & is at the end of a selector,"," the & will be applied to each of them."]),R(`
const style = {
  '.class': {
    'div, p&': {
      color: 'orange';
    },
  },
}

await css.stringify(style)

// div.class, p.class { color: orange; }
`),m({id:"styles-prefix-with-space"},"prefix with space"),j("to prefix the parent with a space, use a double && instead of a single &"),R(`
const style = {
  '#id': {
    '.class2&&, .class3': {
      color: 'orange';
    },
  },
}

await css.stringify(style)

// .class2 #id, #id.class3 { color: orange; }
`),m({id:"styles-prefix-all-with-space"},"prefix all with space"),j(["if the && is at the end of a selector,"," the && will be applied to each of them."]),R(`
const style = {
  '.class': {
    'div, p&&': {
      color: 'orange';
    },
  },
}

await css.stringify(style)

// div .class, p .class { color: orange; }
`),m({id:"styles-media-queries"},"media queries"),j("Mediaqueries can use the vars.widths object to determine appropriate breakpoint sizes."),j("Default widths:"),R(`
vars.widths = {
  tablet: '500px',
  laptop: '900px',
  desktop: '1200px',
  agency: '1600px',
}
`),j("Usage of the vars.widths in media queries:"),R(`
const style = {
  [\`@media screen and(min-width: \${vars.widths?.tablet || '500px'})\`]: {
    '#id': {
      color: opts.textColor,
    },
  },
}

await css.stringify(style)
// css string
\`
@media screen and (min-width: 500px) {
  #id {
    color: green;
  }
}
\``),m({id:"styles-keyframes"},"keyframes for animations"),R(`
const style = {
'@keyframes anim-name': {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  }
}

await css.stringify(style)

// css string
\`
@keyframes anim-name {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
\``),m({id:"styles-webfonts"},"webfonts"),y("Font V2"),j("This approach allows definition of font-style, font-weight, and local font names."),h("Pseudocode"),R(`
@font-face: {
  family: 'name',
  url: '/fonts/',
  styles: {
    (normal|italic): {
      weight: ['LocalName', 'Local Name']
    }
  }
}
`),R(`
const style = {
    '@font-face': {
      family: 'font-name',
      url: '/fonts/',
      styles: {
        normal: {
          400: ['FontName', 'Font Name'],
          600: ['FontNameBold', 'Font Name Bold']
        },
        italic: {
          400: ['FontNameItalic', 'Font Name Italic'],
        },
      },
    },
  }

  const out = await css.stringify(style)

  // out.css string
  @font-face {
    font-family: 'font-name';
    font-style: normal;
    font-weight: 400;
    src:
      local('FontName'),
      local('Font Name'),
      url('/fonts/font-name-400-normal.woff2') format('woff2');
  }

  @font-face {
    font-family: 'font-name';
    font-style: normal;
    font-weight: 600;
    src:
      local('FontNameBold'),
      local('Font Name Bold'),
      url('/fonts/font-name-600-normal.woff2') format('woff2');
  }

  @font-face {
    font-family: 'font-name';
    font-style: italic;
    font-weight: 400;
    src:
      local('FontNameItalic'),
      local('Font Name Italic'),
      url('/fonts/font-name-400-italic.woff2') format('woff2');
  }
  `),y("Font V1 - DEPRECATED"),j("This approach does not allow definition of local fonts to load, and therefore is deprecated."),R(`
  const style = {
    '@font-face': {
      family: 'font-name',
      url: '/fonts/',
      styles: ['normal', 'italic'],
      weights: [400, 600],
    },
  }

  const out = await css.stringify(style)

  // out.css string

  @font-face {
    font-family: 'font-name';
    font-style: normal;
    font-weight: normal;
    src: url('/fonts/font-name-400-normal.eot');
    src: url('/fonts/font-name-400-normal.eot#iefix') format('embedded-opentype'),',
    url('/fonts/font-name-400-normal.ttf') format('truetype'),',
    url('/fonts/font-name-400-normal.woff') format('woff'),',
    url('/fonts/font-name-400-normal.woff2') format('woff2'),',
    url('/fonts/font-name-400-normal.svg#font-name') format('svg');',
  }

  // ... repeated for all styles and weights that were defined
  `),y({id:"styles-css-overload"},"css overload"),j("Css allows overloads for props, to provide fallback values for old browsers"),R(`
{
  body: {
    color: ['green', 'red'],
  },
}
  `),j("turns into"),R(`
body {
  color: green;
  color: red;
}
`),d({id:"source"},"source"),j(["the source for this page is in the ",E({to:"https://github.com/magic/css/tree/master/example"},"example directory")," and gets built and published to github using ",E({to:"https://github.com/magic/core"},"@magic/core")])],"/css/404/":()=>f("404 - not found.")};r({init:t(e({},{description:"parse/stringify/write css in js",logotext:"@magic/css",menu:[{text:"installation",to:"/css/#installation"},{text:"cli",to:"/css/#cli"},{text:"import",to:"/css/#import"},{items:[{text:"css (full result)",to:"/css/#api-css"},{text:"parse",to:"/css/#api-parse"},{text:"stringify",to:"/css/#api-stringify"},{text:"write to filesystem",to:"/css/#api-write"}],text:"api",to:"/css/#api"},{items:[{text:":pseudo classes",to:"/css/#styles-pseudo-classes"},{text:"selector nesting",to:"/css/#styles-selector-nesting"},{text:"prefix w/ space",to:"/css/#styles-prefix-with-space"},{text:"prefix all w/ space",to:"/css/#styles-prefix-all-with-space"},{text:"prefix w/o space",to:"/css/#styles-prefix-without-space"},{text:"prefix all w/o space",to:"/css/#styles-prefix-all-without-space"},{text:"media queries",to:"/css/#styles-media-queries"},{text:"keyframes",to:"/css/#styles-keyframes"},{text:"webfonts",to:"/css/#styles-webfonts"},{text:"overloads",to:"/css/#styles-css-overload"}],text:"styles",to:"/css/#styles"},{text:"source",to:"/css/#source"}],nospy:{show:!1},pageClass:{},pages:{"/css/404/":{description:"404 - not found.",title:"404 - not found"}},root:"/css/",theme:"dark",title:"@magic/css",url:"/css/"}),{url:window.location.pathname,hash:window.location.hash.substr(1)}),subscriptions:e=>[[V.listenPopState,U.pop]],view:e=>{let t=G[e.url]?e.url:"/404/",s=G[t],o=e.pages&&e.pages[t];return o&&Object.keys(o).forEach(t=>{e[t]=o[t]}),e.url=t,I({page:s,state:e},[D(e),z(e)])},node:document.getElementById("Magic")})})();