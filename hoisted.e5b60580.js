import"./chunks/captcha.42fcfe71.js";import"./chunks/analytics.eae12ca8.js";import"./chunks/topics.bc5dc5ce.js";function x(e){return(e||"").replace(/^\d+-/,"")}function C(e){return`rgb(${e>>16&255},${e>>8&255},${255&e})`}function p(e,t={},i){let o=document.createElementNS("http://www.w3.org/2000/svg",e);for(let e in t)!t.hasOwnProperty(e)||o.setAttribute(e,t[e]);return i&&i.appendChild(o),o}const f=2.7,b=4,L=2,k={black:["#000"],gray:["#000","#333","#666","#999","#ccc","#ddd","#eee"],white:["#fff"],red:["#cf2a27","#ea9999","#eo6666","#cc0000","#990000","#660000"],orange:["#ff9900","#f9cb9c","#f6b26b","#e69138","#b45f06","#783f04"],yellow:["#ffff00","#ffe599","#ffd966","#f1c232","#bf9000","#7f6000"],green:["#009e0f","#b6d7a8","#93c47d","#6aa84f","#38761d","#274e13"],cyan:["#00ffff","#a2c4c9","#76a5af","#45818e","#134f5c","#0c343d"],blue:["#2b78e4","#9fc5f8","#6fa8dc","#597eaa","#085394","#073763"],purple:["#9900ff","#b4a7d6","#8e7cc3","#674ea7","#351c75","#20124d"],pink:["#ff00ff","#d5a6bd","#c27ba0","#a64d79","#741b47","#4c1130"]};class T{constructor(e,t){this.svgRoot=e,this.fontFamily=t,this.canvasRenderingContext2D=document.createElement("canvas").getContext("2d")}render(e,t){let i=e.typeID;i in this?this[i](e,t):console.log(`'${i}' control type not implemented`)}parseColor(e,t){return void 0===e?`rgb(${t})`:C(e)}parseFontProperties(e){var t,i,o;return{style:null!=(t=e.properties)&&t.italic?"italic":"normal",weight:null!=(i=e.properties)&&i.bold?"bold":"normal",size:null!=(o=e.properties)&&o.size?e.properties.size+"px":"13px",family:this.fontFamily}}measureText(e,t){return this.canvasRenderingContext2D.font=t,this.canvasRenderingContext2D.measureText(e)}drawRectangle(e,t){var i,o,s,n,r,a;p("rect",{x:parseInt(e.x)+f/2,y:parseInt(e.y)+f/2,width:parseInt(null!=(i=e.w)?i:e.measuredW)-f,height:parseInt(null!=(o=e.h)?o:e.measuredH)-f,rx:2,fill:this.parseColor(null==(s=e.properties)?void 0:s.color,"255,255,255"),"fill-opacity":null!=(r=null==(n=e.properties)?void 0:n.backgroundAlpha)?r:1,stroke:this.parseColor(null==(a=e.properties)?void 0:a.borderColor,"0,0,0"),"stroke-width":f},t)}addText(e,t,i,o){var s,n;let r=null!=(s=e.properties.text)?s:"",a=parseInt(e.x),d=parseInt(e.y),l=this.parseFontProperties(e),c=this.measureText(r,`${l.style} ${l.weight} ${l.size} ${l.family}`),h=p("text",{x:"center"===o?a+(null!=(n=e.w)?n:e.measuredW)/2-c.width/2:a,y:d+e.measuredH/2+c.actualBoundingBoxAscent/2,fill:i,"font-style":l.style,"font-weight":l.weight,"font-size":l.size},t);if(r.includes("{color:"))r.split(/{color:|{color}/).forEach((e=>{if(e.includes("}")){let[t,i]=e.split("}");if(!t.startsWith("#")){let e=parseInt(t.slice(-1));t=isNaN(e)?k[t][0]:k[t][e]}p("tspan",{fill:t},h).textContent=i}else{p("tspan",{},h).textContent=e}}));else{p("tspan",{},h).textContent=r}}TextArea(e,t){this.drawRectangle(e,t)}Canvas(e,t){this.drawRectangle(e,t)}Label(e,t){var i;this.addText(e,t,this.parseColor(null==(i=e.properties)?void 0:i.color,"0,0,0"),"left")}TextInput(e,t){var i;this.drawRectangle(e,t),this.addText(e,t,this.parseColor(null==(i=e.properties)?void 0:i.textColor,"0,0,0"),"center")}Arrow(e,t){var i,o,s;let n,r=parseInt(e.x),a=parseInt(e.y),{p0:d,p1:l,p2:c}=e.properties;"dotted"===(null==(i=e.properties)?void 0:i.stroke)?n="0.8 12":"dashed"===(null==(o=e.properties)?void 0:o.stroke)&&(n="28 46");let h=(c.x-d.x)*l.x,u=(c.y-d.y)*l.x;p("path",{d:`M${r+d.x} ${a+d.y}Q${r+d.x+h+u*l.y*3.6} ${a+d.y+u+-h*l.y*3.6} ${r+c.x} ${a+c.y}`,fill:"none",stroke:this.parseColor(null==(s=e.properties)?void 0:s.color,"0,0,0"),"stroke-width":4,"stroke-linecap":"round","stroke-linejoin":"round","stroke-dasharray":n},t)}Icon(e,t){var i;let o=parseInt(e.x),s=parseInt(e.y),n=10;p("circle",{cx:o+n,cy:s+n,r:n,fill:this.parseColor(null==(i=e.properties)?void 0:i.color,"0,0,0")},t),"check-circle"===e.properties.icon.ID&&p("path",{d:`M${o+4.5} ${s+n}L${o+8.5} ${s+n+4} ${o+15} ${s+n-2.5}`,fill:"none",stroke:"#fff","stroke-width":3.5,"stroke-linecap":"round","stroke-linejoin":"round"},t)}HRule(e,t){var i,o,s,n;let r,a=parseInt(e.x),d=parseInt(e.y);"dotted"===(null==(i=e.properties)?void 0:i.stroke)?r="0.8, 8":"dashed"===(null==(o=e.properties)?void 0:o.stroke)&&(r="18, 30"),p("path",{d:`M${a} ${d}L${a+parseInt(null!=(s=e.w)?s:e.measuredW)} ${d}`,fill:"none",stroke:this.parseColor(null==(n=e.properties)?void 0:n.color,"0,0,0"),"stroke-width":f,"stroke-linecap":"round","stroke-linejoin":"round","stroke-dasharray":r},t)}__group__(e,t){var i;const o=null==(i=e?.properties)?void 0:i.controlName,s=x(o),n="done"===localStorage.getItem(s);let r=p("g",{...o?{class:"clickable-group "+(n?"done":""),"data-group-id":o}:{}},t);e.children.controls.control.sort(((e,t)=>e.zOrder-t.zOrder)).forEach((t=>{t.x=parseInt(t.x,10)+parseInt(e.x,10),t.y=parseInt(t.y,10)+parseInt(e.y,10),this.render(t,r)}))}}async function $(e,t={}){if((t={padding:5,fontFamily:"balsamiq",fontURL:"https://fonts.gstatic.com/s/balsamiqsans/v3/P5sEzZiAbNrN8SB3lQQX7Pncwd4XIA.woff2",...t}).fontURL){let e=new FontFace(t.fontFamily,`url(${t.fontURL})`);await e.load(),document.fonts.add&&document.fonts.add(e)}let i=e.mockup,o=p("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:`${i.measuredW-i.mockupW-t.padding} ${i.measuredH-i.mockupH-t.padding} ${parseInt(i.mockupW)+2*t.padding} ${parseInt(i.mockupH)+2*t.padding}`,style:"font-family: balsamiq"}),s=new T(o,t.fontFamily);return i.controls.control.sort(((e,t)=>e.zOrder-t.zOrder)).forEach((e=>{s.render(e,o)})),o}class D{constructor(){this.overlayId="topic-overlay",this.contentId="topic-content",this.loaderId="topic-loader",this.topicBodyId="topic-body",this.topicActionsId="topic-actions",this.markTopicDoneId="mark-topic-done",this.markTopicPendingId="mark-topic-pending",this.closeTopicId="close-topic",this.activeRoadmapId=null,this.activeTopicId=null,this.handleTopicClick=this.handleTopicClick.bind(this),this.close=this.close.bind(this),this.resetDOM=this.resetDOM.bind(this),this.populate=this.populate.bind(this),this.handleOverlayClick=this.handleOverlayClick.bind(this),this.markAsDone=this.markAsDone.bind(this),this.markAsPending=this.markAsPending.bind(this),this.queryRoadmapElementsByTopicId=this.queryRoadmapElementsByTopicId.bind(this),this.init=this.init.bind(this)}get loaderEl(){return document.getElementById(this.loaderId)}get markTopicDoneEl(){return document.getElementById(this.markTopicDoneId)}get markTopicPendingEl(){return document.getElementById(this.markTopicPendingId)}get topicActionsEl(){return document.getElementById(this.topicActionsId)}get contentEl(){return document.getElementById(this.contentId)}get overlayEl(){return document.getElementById(this.overlayId)}resetDOM(e=!1){e?this.overlayEl.classList.add("hidden"):this.overlayEl.classList.remove("hidden"),this.loaderEl.classList.remove("hidden"),this.topicActionsEl.classList.add("hidden"),this.contentEl.replaceChildren("")}close(){this.resetDOM(!0),this.activeRoadmapId=null,this.activeTopicId=null}populate(e){this.contentEl.replaceChildren(e),this.loaderEl.classList.add("hidden"),this.topicActionsEl.classList.remove("hidden");const t=(this.activeTopicId||"").replace(/^\d+-/,"");"done"===localStorage.getItem(t)?(this.markTopicDoneEl.classList.add("hidden"),this.markTopicPendingEl.classList.remove("hidden")):(this.markTopicDoneEl.classList.remove("hidden"),this.markTopicPendingEl.classList.add("hidden"))}fetchTopicHtml(e,t){const i=t.replace(/^\d+-/,"").replaceAll(/:/g,"/");return fetch(`/${e}/${i}/`).then((e=>e.text())).then((e=>(new DOMParser).parseFromString(e,"text/html").getElementById("main-content")))}handleTopicClick(e){const{roadmapId:t,topicId:i}=e.detail;i&&t?(this.activeRoadmapId=t,this.activeTopicId=i,/^ext_link/.test(i)?window.open(`https://${i.replace("ext_link:","")}`):(this.resetDOM(),this.fetchTopicHtml(t,i).then((e=>{this.populate(e)})).catch((e=>{console.error(e),this.populate("Error loading the content!")})))):console.log("Missing topic or roadmap: ",e.detail)}queryRoadmapElementsByTopicId(e){const t=document.querySelectorAll(`[data-group-id$="-${e}"]`),i=[];return t.forEach((t=>{const o=t?.dataset?.groupId||"";new RegExp(`^\\d+-${e}$`).test(o)&&i.push(t)})),i}markAsDone(e){const t=e.replace(/^\d+-/,"");localStorage.setItem(t,"done"),this.queryRoadmapElementsByTopicId(t).forEach((e=>{e?.classList?.add("done")}))}markAsPending(e){const t=e.replace(/^\d+-/,"");localStorage.removeItem(t),this.queryRoadmapElementsByTopicId(t).forEach((e=>{e?.classList?.remove("done")}))}handleOverlayClick(e){e.target.closest(`#${this.topicBodyId}`)?((e.target.id===this.markTopicDoneId||e.target.closest(`#${this.markTopicDoneId}`))&&(this.markAsDone(this.activeTopicId),this.close()),(e.target.id===this.markTopicPendingId||e.target.closest(`#${this.markTopicPendingId}`))&&(this.markAsPending(this.activeTopicId),this.close()),(e.target.id===this.closeTopicId||e.target.closest(`#${this.closeTopicId}`))&&this.close()):this.close()}init(){window.addEventListener("topic.click",this.handleTopicClick),window.addEventListener("click",this.handleOverlayClick),window.addEventListener("keydown",(e=>{"escape"===e.key.toLowerCase()&&this.close()}))}}class R{constructor(){this.init=this.init.bind(this),this.onScroll=this.onScroll.bind(this),this.shareIconsId="page-share-icons"}get shareIconsEl(){return document.getElementById(this.shareIconsId)}onScroll(){if(window.scrollY<100||window.innerWidth<1050)return this.shareIconsEl.classList.add("hidden"),null;this.shareIconsEl.classList.remove("hidden")}init(){!this.shareIconsEl||window.addEventListener("scroll",this.onScroll,{passive:!0})}}class P{constructor(){this.roadmapId="",this.jsonUrl="",this.containerId="roadmap-svg",this.init=this.init.bind(this),this.onDOMLoaded=this.onDOMLoaded.bind(this),this.fetchRoadmapSvg=this.fetchRoadmapSvg.bind(this),this.handleRoadmapClick=this.handleRoadmapClick.bind(this),this.prepareConfig=this.prepareConfig.bind(this)}get containerEl(){return document.getElementById(this.containerId)}prepareConfig(){if(!this.containerEl)return!1;const e=this.containerEl.dataset;return this.roadmapId=e.roadmapId,this.jsonUrl=e.jsonUrl,!0}fetchRoadmapSvg(e){return e?fetch(e).then((function(e){return e.json()})).then((function(e){return $(e,{fontURL:"/fonts/balsamiq.woff2"})})):(console.error("jsonUrl not defined in frontmatter"),null)}onDOMLoaded(){!this.prepareConfig()||this.fetchRoadmapSvg(this.jsonUrl).then((e=>{document.getElementById(this.containerId).replaceChildren(e)})).catch(console.error)}handleRoadmapClick(e){const t=e.target.closest("g")||{},i=t.dataset?t.dataset.groupId:"";!i||(e.stopImmediatePropagation(),window.dispatchEvent(new CustomEvent("topic.click",{detail:{topicId:i,roadmapId:this.roadmapId}})))}init(){window.addEventListener("DOMContentLoaded",this.onDOMLoaded),window.addEventListener("click",this.handleRoadmapClick)}}const O=new P;O.init();const A=new D;A.init();const S=new R;S.init(),document.querySelectorAll("[faq-question]").forEach((e=>{e.addEventListener("click",(()=>{document.querySelectorAll("[faq-answer]").forEach((e=>{e.classList.add("hidden")}));const t=e.nextElementSibling;t&&t.classList.remove("hidden")}))}));class B{constructor(){this.triggerPopup=this.triggerPopup.bind(this),this.onDOMLoaded=this.onDOMLoaded.bind(this),this.handleClosePopup=this.handleClosePopup.bind(this),this.handleKeydown=this.handleKeydown.bind(this)}triggerPopup(e){const t=e?.target?.closest("[data-popup]")?.dataset?.popup||"unknown-popup",i=document.querySelector(`#${t}`);if(!i)return;i.classList.remove("hidden"),i.classList.add("flex");const o=i.querySelector("[autofocus]");o&&o.focus()}handleClosePopup(e){const t=e.target,i=t.closest(".popup-body"),o=t.closest(".popup");i||o&&(o.classList.add("hidden"),o.classList.remove("flex"))}handleKeydown(e){if("Escape"!==e.key)return;const t=document.querySelector(".popup:not(.hidden)");t&&(t.classList.add("hidden"),t.classList.remove("flex"))}onDOMLoaded(){document.addEventListener("click",this.triggerPopup),document.addEventListener("click",this.handleClosePopup),document.addEventListener("keydown",this.handleKeydown)}init(){window.addEventListener("DOMContentLoaded",this.onDOMLoaded)}}const M=new B;M.init();