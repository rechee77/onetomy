var x=Object.defineProperty,C=(a,e,t)=>e in a?x(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,v=(a,e,t)=>(C(a,typeof e!="symbol"?e+"":e,t),t);function y(a){return(a||"").replace(/^\d+-/,"")}function $(a){let e=a>>16&255,t=a>>8&255,i=a&255;return`rgb(${e},${t},${i})`}function h(a,e={},t){let i=document.createElementNS("http://www.w3.org/2000/svg",a);for(let s in e)!e.hasOwnProperty(s)||i.setAttribute(s,e[s]);return t&&t.appendChild(i),i}const m=2.7,D=4,P=2,T={black:["#000"],gray:["#000","#333","#666","#999","#ccc","#ddd","#eee"],white:["#fff"],red:["#cf2a27","#ea9999","#eo6666","#cc0000","#990000","#660000"],orange:["#ff9900","#f9cb9c","#f6b26b","#e69138","#b45f06","#783f04"],yellow:["#ffff00","#ffe599","#ffd966","#f1c232","#bf9000","#7f6000"],green:["#009e0f","#b6d7a8","#93c47d","#6aa84f","#38761d","#274e13"],cyan:["#00ffff","#a2c4c9","#76a5af","#45818e","#134f5c","#0c343d"],blue:["#2b78e4","#9fc5f8","#6fa8dc","#597eaa","#085394","#073763"],purple:["#9900ff","#b4a7d6","#8e7cc3","#674ea7","#351c75","#20124d"],pink:["#ff00ff","#d5a6bd","#c27ba0","#a64d79","#741b47","#4c1130"]};class L{constructor(e,t){v(this,"svgRoot"),v(this,"fontFamily"),v(this,"canvasRenderingContext2D"),this.svgRoot=e,this.fontFamily=t,this.canvasRenderingContext2D=document.createElement("canvas").getContext("2d")}render(e,t){let i=e.typeID;i in this?this[i](e,t):console.log(`'${i}' control type not implemented`)}parseColor(e,t){return e===void 0?`rgb(${t})`:$(e)}parseFontProperties(e){var t,i,s;return{style:(t=e.properties)!=null&&t.italic?"italic":"normal",weight:(i=e.properties)!=null&&i.bold?"bold":"normal",size:(s=e.properties)!=null&&s.size?e.properties.size+"px":"13px",family:this.fontFamily}}measureText(e,t){return this.canvasRenderingContext2D.font=t,this.canvasRenderingContext2D.measureText(e)}drawRectangle(e,t){var i,s,n,r,c,d;h("rect",{x:parseInt(e.x)+m/2,y:parseInt(e.y)+m/2,width:parseInt((i=e.w)!=null?i:e.measuredW)-m,height:parseInt((s=e.h)!=null?s:e.measuredH)-m,rx:P,fill:this.parseColor((n=e.properties)==null?void 0:n.color,"255,255,255"),"fill-opacity":(c=(r=e.properties)==null?void 0:r.backgroundAlpha)!=null?c:1,stroke:this.parseColor((d=e.properties)==null?void 0:d.borderColor,"0,0,0"),"stroke-width":m},t)}addText(e,t,i,s){var n,r;let c=(n=e.properties.text)!=null?n:"",d=parseInt(e.x),o=parseInt(e.y),l=this.parseFontProperties(e),u=this.measureText(c,`${l.style} ${l.weight} ${l.size} ${l.family}`),g=s==="center"?d+((r=e.w)!=null?r:e.measuredW)/2-u.width/2:d,w=o+e.measuredH/2+u.actualBoundingBoxAscent/2,I=h("text",{x:g,y:w,fill:i,"font-style":l.style,"font-weight":l.weight,"font-size":l.size},t);if(!c.includes("{color:")){let f=h("tspan",{},I);f.textContent=c;return}c.split(/{color:|{color}/).forEach(f=>{if(f.includes("}")){let[p,b]=f.split("}");if(!p.startsWith("#")){let k=parseInt(p.slice(-1));p=isNaN(k)?T[p][0]:T[p][k]}let E=h("tspan",{fill:p},I);E.textContent=b}else{let p=h("tspan",{},I);p.textContent=f}})}TextArea(e,t){this.drawRectangle(e,t)}Canvas(e,t){this.drawRectangle(e,t)}Label(e,t){var i;this.addText(e,t,this.parseColor((i=e.properties)==null?void 0:i.color,"0,0,0"),"left")}TextInput(e,t){var i;this.drawRectangle(e,t),this.addText(e,t,this.parseColor((i=e.properties)==null?void 0:i.textColor,"0,0,0"),"center")}Arrow(e,t){var i,s,n;let r=parseInt(e.x),c=parseInt(e.y),{p0:d,p1:o,p2:l}=e.properties,u;((i=e.properties)==null?void 0:i.stroke)==="dotted"?u="0.8 12":((s=e.properties)==null?void 0:s.stroke)==="dashed"&&(u="28 46");let g={x:(l.x-d.x)*o.x,y:(l.y-d.y)*o.x};h("path",{d:`M${r+d.x} ${c+d.y}Q${r+d.x+g.x+g.y*o.y*3.6} ${c+d.y+g.y+-g.x*o.y*3.6} ${r+l.x} ${c+l.y}`,fill:"none",stroke:this.parseColor((n=e.properties)==null?void 0:n.color,"0,0,0"),"stroke-width":D,"stroke-linecap":"round","stroke-linejoin":"round","stroke-dasharray":u},t)}Icon(e,t){var i;let s=parseInt(e.x),n=parseInt(e.y),r=10;h("circle",{cx:s+r,cy:n+r,r,fill:this.parseColor((i=e.properties)==null?void 0:i.color,"0,0,0")},t),e.properties.icon.ID==="check-circle"&&h("path",{d:`M${s+4.5} ${n+r}L${s+8.5} ${n+r+4} ${s+15} ${n+r-2.5}`,fill:"none",stroke:"#fff","stroke-width":3.5,"stroke-linecap":"round","stroke-linejoin":"round"},t)}HRule(e,t){var i,s,n,r;let c=parseInt(e.x),d=parseInt(e.y),o;((i=e.properties)==null?void 0:i.stroke)==="dotted"?o="0.8, 8":((s=e.properties)==null?void 0:s.stroke)==="dashed"&&(o="18, 30"),h("path",{d:`M${c} ${d}L${c+parseInt((n=e.w)!=null?n:e.measuredW)} ${d}`,fill:"none",stroke:this.parseColor((r=e.properties)==null?void 0:r.color,"0,0,0"),"stroke-width":m,"stroke-linecap":"round","stroke-linejoin":"round","stroke-dasharray":o},t)}__group__(e,t){var i;const s=((i=e?.properties)==null?void 0:i.controlName)||"",n=y(s);let r=localStorage.getItem(n)==="done";const c=s.startsWith("check:");if(!r&&c){const o=s.replace("check:",""),l=y(o);r=localStorage.getItem(l)==="done"}let d=h("g",{...s?{class:`clickable-group ${r?"done":""}`,"data-group-id":s}:{}},t);e.children.controls.control.sort((o,l)=>o.zOrder-l.zOrder).forEach(o=>{o.x=parseInt(o.x,10)+parseInt(e.x,10),o.y=parseInt(o.y,10)+parseInt(e.y,10),this.render(o,d)})}}async function B(a,e={}){if(e={padding:5,fontFamily:"balsamiq",fontURL:"https://fonts.gstatic.com/s/balsamiqsans/v3/P5sEzZiAbNrN8SB3lQQX7Pncwd4XIA.woff2",...e},e.fontURL){let o=new FontFace(e.fontFamily,`url(${e.fontURL})`);await o.load(),document.fonts.add&&document.fonts.add(o)}let t=a.mockup,i=t.measuredW-t.mockupW-e.padding,s=t.measuredH-t.mockupH-e.padding,n=parseInt(t.mockupW)+e.padding*2,r=parseInt(t.mockupH)+e.padding*2,c=h("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:`${i} ${s} ${n} ${r}`,style:"font-family: balsamiq"}),d=new L(c,e.fontFamily);return t.controls.control.sort((o,l)=>o.zOrder-l.zOrder).forEach(o=>{d.render(o,c)}),c}class A{constructor(){this.resourceId="",this.resourceType="",this.jsonUrl="",this.containerId="resource-svg",this.init=this.init.bind(this),this.onDOMLoaded=this.onDOMLoaded.bind(this),this.jsonToSvg=this.jsonToSvg.bind(this),this.handleSvgClick=this.handleSvgClick.bind(this),this.prepareConfig=this.prepareConfig.bind(this)}get containerEl(){return document.getElementById(this.containerId)}prepareConfig(){if(!this.containerEl)return!1;const e=this.containerEl.dataset;return this.resourceType=e.resourceType,this.resourceId=e.resourceId,this.jsonUrl=e.jsonUrl,!0}jsonToSvg(e){return e?fetch(e).then(function(t){return t.json()}).then(function(t){return B(t,{fontURL:"/fonts/balsamiq.woff2"})}):(console.error("jsonUrl not defined in frontmatter"),null)}onDOMLoaded(){!this.prepareConfig()||this.jsonToSvg(this.jsonUrl).then(e=>{document.getElementById(this.containerId).replaceChildren(e)}).catch(console.error)}handleSvgClick(e){const t=e.target.closest("g")||{},i=t.dataset?t.dataset.groupId:"";if(!i)return;if(e.stopImmediatePropagation(),/^ext_link/.test(i)){window.open(`https://${i.replace("ext_link:","")}`);return}if(/^check:/.test(i)){window.dispatchEvent(new CustomEvent(`${this.resourceType}.topic.toggle`,{detail:{topicId:i.replace("check:",""),resourceType:this.resourceType,resourceId:this.resourceId}}));return}const s=i.replace(/^\d+-/,"");window.dispatchEvent(new CustomEvent(`${this.resourceType}.topic.click`,{detail:{topicId:s,resourceId:this.resourceId}}))}init(){window.addEventListener("DOMContentLoaded",this.onDOMLoaded),window.addEventListener("click",this.handleSvgClick)}}const R=new A;R.init();class S{constructor(){this.init=this.init.bind(this),this.onScroll=this.onScroll.bind(this),this.shareIconsId="page-share-icons"}get shareIconsEl(){return document.getElementById(this.shareIconsId)}onScroll(){if(window.scrollY<100||window.innerWidth<1050)return this.shareIconsEl.classList.add("hidden"),null;this.shareIconsEl.classList.remove("hidden")}init(){!this.shareIconsEl||window.addEventListener("scroll",this.onScroll,{passive:!0})}}const O=new S;O.init();class M{constructor(){this.overlayId="topic-overlay",this.contentId="topic-content",this.loaderId="topic-loader",this.topicBodyId="topic-body",this.topicActionsId="topic-actions",this.markTopicDoneId="mark-topic-done",this.markTopicPendingId="mark-topic-pending",this.closeTopicId="close-topic",this.contributionTextId="contrib-meta",this.activeResourceType=null,this.activeResourceId=null,this.activeTopicId=null,this.handleRoadmapTopicClick=this.handleRoadmapTopicClick.bind(this),this.handleBestPracticeTopicClick=this.handleBestPracticeTopicClick.bind(this),this.handleBestPracticeTopicToggle=this.handleBestPracticeTopicToggle.bind(this),this.handleBestPracticeTopicPending=this.handleBestPracticeTopicPending.bind(this),this.close=this.close.bind(this),this.resetDOM=this.resetDOM.bind(this),this.populate=this.populate.bind(this),this.handleOverlayClick=this.handleOverlayClick.bind(this),this.markAsDone=this.markAsDone.bind(this),this.markAsPending=this.markAsPending.bind(this),this.querySvgElementsByTopicId=this.querySvgElementsByTopicId.bind(this),this.rightClickListener=this.rightClickListener.bind(this),this.isTopicDone=this.isTopicDone.bind(this),this.init=this.init.bind(this)}get loaderEl(){return document.getElementById(this.loaderId)}get markTopicDoneEl(){return document.getElementById(this.markTopicDoneId)}get markTopicPendingEl(){return document.getElementById(this.markTopicPendingId)}get topicActionsEl(){return document.getElementById(this.topicActionsId)}get contributionTextEl(){return document.getElementById(this.contributionTextId)}get contentEl(){return document.getElementById(this.contentId)}get overlayEl(){return document.getElementById(this.overlayId)}rightClickListener(e){const t=e.target?.closest("g")?.dataset?.groupId;!t||(e.preventDefault(),this.isTopicDone(t)?this.markAsPending(t):this.markAsDone(t))}resetDOM(e=!1){e?this.overlayEl.classList.add("hidden"):this.overlayEl.classList.remove("hidden"),this.loaderEl.classList.remove("hidden"),this.topicActionsEl.classList.add("hidden"),this.contributionTextEl.classList.add("hidden"),this.contentEl.replaceChildren("")}close(){this.resetDOM(!0),this.activeResourceId=null,this.activeTopicId=null}isTopicDone(e){const t=e.replace(/^\d+-/,"");return localStorage.getItem(t)==="done"}populate(e){this.contentEl.replaceChildren(e),this.loaderEl.classList.add("hidden"),this.topicActionsEl.classList.remove("hidden"),this.contributionTextEl.classList.remove("hidden"),this.isTopicDone(this.activeTopicId)?(this.markTopicDoneEl.classList.add("hidden"),this.markTopicPendingEl.classList.remove("hidden")):(this.markTopicDoneEl.classList.remove("hidden"),this.markTopicPendingEl.classList.add("hidden"))}renderTopicFromUrl(e){return fetch(e).then(t=>t.text()).then(t=>new DOMParser().parseFromString(t,"text/html").getElementById("main-content")).then(t=>{this.populate(t)}).catch(t=>{console.error(t),this.populate("Error loading the content!")})}handleBestPracticeTopicToggle(e){const{resourceId:t,topicId:i}=e.detail;if(!i||!t){console.log("Missing topic or bestPracticeId: ",e.detail);return}localStorage.getItem(i)==="done"?this.markAsPending(i):this.markAsDone(i)}handleBestPracticeTopicPending(e){const{resourceId:t,topicId:i}=e.detail;if(!i||!t){console.log("Missing topic or bestPracticeId: ",e.detail);return}this.markAsPending(i)}handleBestPracticeTopicClick(e){const{resourceId:t,topicId:i}=e.detail;if(!i||!t){console.log("Missing topic or bestPracticeId: ",e.detail);return}this.activeResourceType="best-practice",this.activeResourceId=t,this.activeTopicId=i,this.resetDOM(),this.renderTopicFromUrl(`/best-practices/${t}/${i.replaceAll(":","/")}`)}handleRoadmapTopicClick(e){const{resourceId:t,topicId:i}=e.detail;if(!i||!t){console.log("Missing topic or roadmap: ",e.detail);return}this.activeResourceType="roadmap",this.activeResourceId=t,this.activeTopicId=i,this.resetDOM(),this.renderTopicFromUrl(`/${t}/${i.replaceAll(":","/")}`)}querySvgElementsByTopicId(e){const t=[];return document.querySelectorAll(`[data-group-id$="-${e}"]`).forEach(i=>{const s=i?.dataset?.groupId||"";new RegExp(`^\\d+-${e}$`).test(s)&&t.push(i)}),document.querySelectorAll(`[data-group-id="${e}"]`).forEach(i=>{t.push(i)}),document.querySelectorAll(`[data-group-id="check:${e}"]`).forEach(i=>{t.push(i)}),t}markAsDone(e){const t=e.replace(/^\d+-/,"");localStorage.setItem(t,"done"),this.querySvgElementsByTopicId(t).forEach(i=>{i?.classList?.add("done")})}markAsPending(e){const t=e.replace(/^\d+-/,"");localStorage.removeItem(t),this.querySvgElementsByTopicId(t).forEach(i=>{i?.classList?.remove("done")})}handleOverlayClick(e){if(!e.target.closest(`#${this.topicBodyId}`)){this.close();return}(e.target.id===this.markTopicDoneId||e.target.closest(`#${this.markTopicDoneId}`))&&(this.markAsDone(this.activeTopicId),this.close()),(e.target.id===this.markTopicPendingId||e.target.closest(`#${this.markTopicPendingId}`))&&(this.markAsPending(this.activeTopicId),this.close()),(e.target.id===this.closeTopicId||e.target.closest(`#${this.closeTopicId}`))&&this.close()}init(){window.addEventListener("best-practice.topic.click",this.handleBestPracticeTopicClick),window.addEventListener("best-practice.topic.toggle",this.handleBestPracticeTopicToggle),window.addEventListener("roadmap.topic.click",this.handleRoadmapTopicClick),window.addEventListener("click",this.handleOverlayClick),window.addEventListener("contextmenu",this.rightClickListener),window.addEventListener("keydown",e=>{e.key.toLowerCase()==="escape"&&this.close()})}}const F=new M;F.init();