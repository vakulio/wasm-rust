(()=>{var e,r,t,n,o,a,i={},s={};function c(e){var r=s[e];if(void 0!==r)return r.exports;var t=s[e]={id:e,loaded:!1,exports:{}};return i[e](t,t.exports,c),t.loaded=!0,t.exports}c.m=i,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",r="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",t="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},c.a=(o,a,i)=>{var s;i&&((s=[]).d=1);var c,l,u,d=new Set,p=o.exports,f=new Promise(((e,r)=>{u=r,l=e}));f[r]=p,f[e]=e=>(s&&e(s),d.forEach(e),f.catch((e=>{}))),o.exports=f,a((o=>{var a;c=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var a=[];a.d=0,o.then((e=>{i[r]=e,n(a)}),(e=>{i[t]=e,n(a)}));var i={};return i[e]=e=>e(a),i}}var s={};return s[e]=e=>{},s[r]=o,s})))(o);var i=()=>c.map((e=>{if(e[t])throw e[t];return e[r]})),l=new Promise((r=>{(a=()=>r(i)).r=0;var t=e=>e!==s&&!d.has(e)&&(d.add(e),e&&!e.d&&(a.r++,e.push(a)));c.map((r=>r[e](t)))}));return a.r?l:i()}),(e=>(e?u(f[t]=e):l(p),n(s)))),s&&(s.d=0)},c.d=(e,r)=>{for(var t in r)c.o(r,t)&&!c.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((r,t)=>(c.f[t](e,r),r)),[])),c.u=e=>e+".index.js",c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),c.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o={},a="rust:",c.l=(e,r,t,n)=>{if(o[e])o[e].push(r);else{var i,s;if(void 0!==t)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==a+t){i=d;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.setAttribute("data-webpack",a+t),i.src=e),o[e]=[r];var p=(r,t)=>{i.onerror=i.onload=null,clearTimeout(f);var n=o[e];if(delete o[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(t))),r)return r(t)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),s&&document.head.appendChild(i)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.v=(e,r,t,n)=>{var o=fetch(c.p+""+t+".module.wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(o,n).then((r=>Object.assign(e,r.instance.exports))):o.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,n))).then((r=>Object.assign(e,r.instance.exports)))},(()=>{var e;c.g.importScripts&&(e=c.g.location+"");var r=c.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&!e;)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e})(),(()=>{var e={179:0};c.f.j=(r,t)=>{var n=c.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=c.p+c.u(r),i=new Error;c.l(a,(t=>{if(c.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,s]=t,l=0;if(a.some((r=>0!==e[r]))){for(n in i)c.o(i,n)&&(c.m[n]=i[n]);s&&s(c)}for(r&&r(t);l<a.length;l++)o=a[l],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkrust=self.webpackChunkrust||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),async function(){let e=null;try{e=await c.e(235).then(c.bind(c,235))}catch(e){return void console.error(e)}console.log(e);const r=document.getElementById("upload"),t=new FileReader;t.onloadend=()=>{const r=t.result.replace(/^data:image\/(png|jpeg|jpg);base64,/,"");let n=e.grayscale(r);document.getElementById("new-img").setAttribute("src",n)},r.addEventListener("change",(()=>{const e=r.files[0];t.readAsDataURL(e)}))}()})();