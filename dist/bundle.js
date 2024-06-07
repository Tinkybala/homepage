(()=>{"use strict";var n,t,e,o,r,i,a,c,p,s,l,d,f,u,g={208:(n,t,e)=>{e.d(t,{A:()=>h});var o=e(601),r=e.n(o),i=e(314),a=e.n(i),c=e(417),p=e.n(c),s=new URL(e(114),e.b),l=new URL(e(99),e.b),d=new URL(e(842),e.b),f=a()(r()),u=p()(s),g=p()(l),x=p()(d);f.push([n.id,`@font-face{\n    font-family: roboto;\n    src: url(${u});\n}\n\n@font-face{\n    font-family: roboto-bold;\n    src: url(${g})\n}\n\n@font-face{\n    font-family: roboto-light;\n    src: url(${x});\n}\n\n*{\n    --periwinkle-light: #dCd6f7;\n    --periwinkle: #A6B1E1;\n    --puce: #b4869f;\n    --china-rose: #985F6F;\n    --english-violet: #4E4C67;\n\n    font-family: roboto;\n}\n\nmain{\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n}\n\nbody{\n    margin: 0;\n} \n\n\nheader img{\n    max-width: 700px;\n    object-fit: contain;\n    margin-left: 100px;\n}\n\n.about{\n    background-color: white;\n    margin-right: 100px;\n    margin-block: 50px;\n    box-shadow: var(--english-violet) 5px 5px 5px;\n    display: flex;\n    flex-direction: column;\n}\n\n\n\nheader{\n    position: relative;\n}\n\n.header-bg{\n    position: absolute;\n    background-color: var(--periwinkle-light);\n    height: 100%;\n    width: 100%;\n    top: 0;\n    transform: skewY(-10deg) translateY(-100px);\n    z-index: -1;\n    transform-origin: top left;\n    box-shadow: lightgray 0px 5px 5px;\n}\n\n.header-content{\n    display: flex;\n    flex-direction: row;\n    margin-top: 100px;\n    margin-bottom: 70px;\n}\n\n\n.about h1{\n    font-size: 100px;\n    font-family: roboto-bold;\n    padding-left: 20px;\n}\n\n.about p{\n    font-family: roboto-light;\n    font-size: 50px;\n    padding-left: 20px;\n    margin-right: 20px;\n}\n\n\n.grid-container{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-column-gap: 20px;\n    grid-row-gap: 30px;\n    margin-left: 100px;\n    margin-right: 100px;\n}\n.project{\n    display: flex;\n    flex-direction: column;\n    max-height: 700px;\n    max-width: 600px;\n    border: black 2px solid;\n    box-shadow:slategrey 0px 4px 3px;\n    border-radius: 7px;\n}\n\n.project img{\n    width: 100%;\n    height: 60%;\n    object-fit: fill;\n    border-radius: 7px;\n}\n\nsection h1{\n    margin-left: 100px;\n}\n\n.project h2{\n    padding-left: 50px;\n    font-size: 30px;\n}\n\n.project p{\n    padding-left: 50px;\n    font-size: 20px;\n}\n\nfooter{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    background-color: var(--periwinkle-light);\n    max-height: 500px;\n    margin-top: 50px;\n    justify-content: space-around;\n}\n\nfooter img{\n    max-width: 500px;\n    object-fit: cover;\n    padding-block: 50px;\n}\n\n.contact{\n    padding-top: 50px;\n}\n\n.contact h1{\n    margin-top: 0px;\n    font-size: 80px;\n    font-family: roboto-bold;\n}\n\nsection h1{\n    font-size: 70px;\n}\n\n.contact p{\n    font-size: 30px;\n}\n\nbutton{\n    width: 80px;\n    height: 80px;\n    background-color: transparent;\n    border: none;\n    will-change: transform;\n}\n\nbutton:hover{\n    animation: shake 0.5s;\n}\n\n@keyframes shake{\n    0%{\n        transform: rotateZ(0deg);\n    }\n    25%{\n        transform: rotateZ(10deg);\n    }\n    75%{\n        transform: rotateZ(-10deg);\n    }\n    100%{\n        transform: rotateZ(0deg);\n    }\n}\n\nbutton:active{\n    border: none;\n}\n\n.buttons{\n    align-self: flex-end;\n    margin-right: 20px;\n    display: flex;\n    flex-direction: row;\n    margin-bottom: 20px;\n}\n\ni{\n    font-size: 50px;\n}\n\nbutton img{\n    width:50px;\n    height: 50px;\n    margin-left: 0px;\n}\n.contact div{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n.contact div img{\n    width: 40px;\n   padding: 0px;\n}\n.contact div p{\n    margin: 0px;\n    margin-left: 10px;\n}\n\n\n@media(max-width: 600px){\n    .header-content{\n        display: flex;\n        flex-direction: column;\n\n    }\n    .about{\n        margin-right: 0px;\n        box-shadow: none;\n    }\n    .about h1{\n        font-size: 50px;\n    }\n    .about p{\n        font-size: 25px;\n    }\n    header img{\n        margin-inline: 20px;\n    }\n    .header-bg{\n        transform: skewY(-10deg) translateY(-700px);\n    }\n\n    .buttons{\n        align-self: center;\n        display: flex;\n        flex-direction: row;\n    }\n\n    button{\n        width: 40px;\n        height: 40px;\n    }\n\n    i{\n        font-size: 25px;\n    }\n\n    button img{\n        width:25px;\n        height: 25px;\n        margin: 0px;\n    }\n\n    section{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n\n    section h1{\n        margin-left: 0px;\n        font-size: 50px;\n    }\n\n    footer{\n        display: flex;\n        flex-direction: column;\n    }\n\n    .contact{\n        display: flex;\n        flex-direction: column;\n    }\n\n    .contact h1{\n        padding-top: 0px;\n        font-size: 50px;\n        align-self: center\n    }\n\n    .contact p{\n        padding-left: 20px;\n        padding-right: 20px;\n        font-size: 20px;\n    }\n\n    footer img{\n        padding: 0;\n        padding-top: 10px;\n    }\n\n    .grid-container{\n        display: flex;\n        flex-direction: column;\n        margin-left: 20px;\n        margin-right: 20px;\n    }\n\n    .project{\n        align-items: center;\n    }\n\n    .project h2{\n        padding: 0px;\n        text-align: center;\n        padding: 0px;\n        font-size: 15px;\n    }\n\n    .project p{\n        padding: 0px;\n    }\n\n    .contact div{\n        padding-left: 20px;\n    }\n\n    .contact div img{\n        width: 20px;\n        padding: 0px;\n    }\n}`,""]);const h=f},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var p=this[c][0];null!=p&&(a[p]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},417:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var p=n[c],s=o.base?p[0]+o.base:p[0],l=i[s]||0,d="".concat(s," ").concat(l);i[s]=l+1;var f=e(d),u={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==f)t[f].references++,t[f].updater(u);else{var g=r(u,o);o.byIndex=c,t.splice(c,0,{identifier:d,updater:g,references:1})}a.push(d)}return a}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);t[c].references--}for(var p=o(n,r),s=0;s<i.length;s++){var l=e(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=p}}},659:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},99:(n,t,e)=>{n.exports=e.p+"f80816a5455d171f948d.ttf"},842:(n,t,e)=>{n.exports=e.p+"333da16a3f3cc391d087.ttf"},114:(n,t,e)=>{n.exports=e.p+"fc2b5060f7accec5cf74.ttf"}},x={};function h(n){var t=x[n];if(void 0!==t)return t.exports;var e=x[n]={id:n,exports:{}};return g[n](e,e.exports,h),e.exports}h.m=g,h.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return h.d(t,{a:t}),t},h.d=(n,t)=>{for(var e in t)h.o(t,e)&&!h.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},h.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),h.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;h.g.importScripts&&(n=h.g.location+"");var t=h.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var e=t.getElementsByTagName("script");if(e.length)for(var o=e.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=e[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),h.p=n})(),h.b=document.baseURI||self.location.href,h.nc=void 0,n=h(72),t=h.n(n),e=h(825),o=h.n(e),r=h(659),i=h.n(r),a=h(56),c=h.n(a),p=h(540),s=h.n(p),l=h(113),d=h.n(l),f=h(208),(u={}).styleTagTransform=d(),u.setAttributes=c(),u.insert=i().bind(null,"head"),u.domAPI=o(),u.insertStyleElement=s(),t()(f.A,u),f.A&&f.A.locals&&f.A.locals,document.querySelector(".buttons").addEventListener("click",(function(n){switch(console.log(n.target.className),n.target.className){case"github":case"devicon-github-original colored":window.open("https://github.com/Tinkybala","_blank"),console.log("click");break;case"linkedin":case"devicon-linkedin-plain colored":window.open("https://sg.linkedin.com/","_blank");break;case"instagram":window.open("https://www.instagram.com/","_blank")}}))})();