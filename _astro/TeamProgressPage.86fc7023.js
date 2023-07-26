import{h as v,_ as F,p as T}from"./hooks.module.7cc4e70a.js";import{u as J}from"./use-team-id.3d0ab368.js";import{a as K}from"./http.82ebf0f1.js";import{p as j}from"./page.c1a8a472.js";import{o as e}from"./jsxRuntime.module.afbf92fe.js";import{k as D}from"./preact.module.7b19fc78.js";import{u as H}from"./use-toast.fb52de5d.js";import{u as O}from"./index.c54070cf.js";import{b as Q}from"./team.12f2469e.js";import{g as V,s as W}from"./browser.bcc09af3.js";import{E as X}from"./external-link.a7a2cda9.js";import{u as G}from"./use-auth.13ac07ad.js";import{D as Z}from"./index.es.ebad3893.js";import{S as ee}from"./Spinner.95905af5.js";/* empty css                       */import{u as re}from"./use-outside-click.85d1a62f.js";import{u as se}from"./use-keydown.41d75069.js";import{a as S,u as te}from"./resource-progress.b09662c1.js";import{C as ne}from"./close.3a539829.js";import"./jwt.f0e0aa9c.js";import"./index.a98c85f5.js";import"./toast.1fe7142d.js";function ae(p){const{member:n,onShowResourceProgress:o,isMyProgress:m=!1}=p,g=n?.progress?.sort((l,c)=>c.done-l.done),[h,u]=v(!1);return e(D,{children:e("div",{className:"flex h-full min-h-[270px] flex-col overflow-hidden rounded-md border",children:[e("div",{className:"relative flex items-center gap-3 border-b p-3",children:[e("img",{src:n.avatar?`https://dodrc8eu8m09s.cloudfront.net/avatars/${n.avatar}`:"/images/default-avatar.png",alt:n.name||"",className:"h-8 w-8 rounded-full"}),e("div",{className:"inline-grid w-full",children:[!m&&e("h3",{className:"truncate font-medium",children:n.name}),m&&e("div",{className:"inline-grid grid-cols-[auto,32px] items-center gap-1.5",children:[e("h3",{className:"truncate font-medium",children:n.name}),e("span",{className:"rounded-md bg-red-500 px-1 py-0.5 text-xs text-white",children:"You"})]}),e("p",{className:"truncate text-sm text-gray-500",children:n.email})]})]}),e("div",{className:"relative flex grow flex-col space-y-2 p-3",children:[(h?g:g.slice(0,4)).map(l=>e("button",{onClick:()=>o(l.resourceId),className:"group relative overflow-hidden rounded-md border p-2 hover:border-gray-300 hover:text-black focus:outline-none",children:[e("span",{className:"relative z-10 flex items-center justify-between text-sm",children:[e("span",{className:"inline-grid",children:e("span",{className:"truncate",children:l.resourceTitle})}),e("span",{className:"ml-1.5 shrink-0 text-xs text-gray-400",children:[l.done," / ",l.total]})]}),e("span",{className:"absolute inset-0 bg-gray-100 group-hover:bg-gray-200",style:{width:`${l.done/l.total*100}%`}})]},l.resourceId)),g.length>4&&!h&&e("button",{onClick:()=>u(!0),className:"text-sm text-gray-400 underline",children:["+ ",g.length-4," more"]}),h&&e("button",{onClick:()=>u(!1),className:"text-sm text-gray-400 underline",children:"- Show less"}),g.length===0&&e("div",{className:"text-sm text-gray-500",children:"No progress"})]})]},n._id)})}function oe(p){const{onShowResourceProgress:n}=p,{members:o,resourceTitle:m,resourceId:g}=p.roadmap,{t:h}=V(),u=G(),[l,c]=v(!1);return e(D,{children:e("div",{className:"flex h-full min-h-[270px] flex-col rounded-md border",children:[e("div",{className:"flex items-center gap-3 border-b p-3",children:e("div",{className:"flex min-w-0 flex-grow items-center justify-between",children:[e("h3",{className:"truncate font-medium",children:m}),e("a",{href:`/${g}?t=${h}`,className:"group mb-0.5 flex shrink-0 items-center justify-between text-base font-medium leading-none text-black",target:"_blank",children:e("img",{alt:"link",src:X,className:"ml-2 h-4 w-4 opacity-20 transition-opacity group-hover:opacity-100"})})]})}),e("div",{className:"relative flex grow flex-col space-y-2 p-3",children:[(l?o:o.slice(0,4)).map(s=>{const N=u?.email===s?.member?.email;return s.progress?e("button",{className:`group relative w-full overflow-hidden rounded-md border p-2 hover:border-gray-300 hover:text-black focus:outline-none ${N?"border-green-500 hover:border-green-600":""}`,onClick:()=>{n(s.member,s.progress?.resourceId)},children:[e("span",{className:"relative z-10 flex items-center justify-between gap-1 text-sm",children:[e("span",{className:"inline-grid grid-cols-[20px_auto] gap-3",children:[e("img",{src:s.member.avatar?`https://dodrc8eu8m09s.cloudfront.net/avatars/${s.member.avatar}`:"/images/default-avatar.png",alt:s.member.name||"",className:"h-5 w-5 shrink-0 rounded-full"}),e("span",{className:"inline-grid grid-cols-[auto,32px] items-center",children:e("span",{className:"mr-[5px] truncate",children:s?.member?.name})})]}),e("span",{className:"shrink-0 text-xs text-gray-400",children:[s?.progress?.done," / ",s?.progress?.total]})]}),e("span",{className:`absolute inset-0 ${N?"bg-green-100 group-hover:bg-green-200":"bg-gray-100 group-hover:bg-gray-200"}`,style:{width:`${s?.progress?.done/s?.progress?.total*100}%`}})]},s?.member._id):null}),o.length>4&&!l&&e("button",{onClick:()=>c(!0),className:"text-sm text-gray-400 underline",children:["+ ",o.length-4," more"]}),l&&e("button",{onClick:()=>c(!1),className:"text-sm text-gray-400 underline",children:"- Show less"}),o.length===0&&e("div",{className:"text-sm text-gray-500",children:"No progress"})]})]})})}function le(p){const{resourceId:n,member:o,resourceType:m,onShowMyProgress:g,teamId:h,onClose:u}=p,c=G()?.email===o.email,s=F(null),N=F(null),[x,_]=v(!1),[I,C]=v(),[t,d]=v(!0),b=H();let y="https://roadmap.sh";m==="roadmap"?y+=`/${n}.json`:y+=`/best-practices/${n}.json`;async function $(r,a,i,f){const{error:w,response:k}=await K(`https://api.roadmap.sh/v1-get-member-resource-progress/${r}/${a}?resourceType=${i}&resourceId=${f}`);if(w||!k){b.error(w?.message||"Failed to get member progress");return}return C(k),k}async function Y(r){const i=await(await fetch(r)).json(),f=await Z(i,{fontURL:"/fonts/balsamiq.woff2"});s.current?.replaceChildren(f)}se("Escape",()=>{x||u()}),re(N,()=>{x||u()}),T(()=>{!s.current||!y||!n||!m||!h||(d(!0),Promise.all([Y(y),$(h,o._id,m,n)]).then(([r,a={}])=>{const{removed:i=[],done:f=[],learning:w=[],skipped:k=[]}=a;f.forEach(P=>S(P,"done")),w.forEach(P=>S(P,"learning")),k.forEach(P=>S(P,"skipped")),i.forEach(P=>S(P,"removed"))}).catch(r=>{console.error(r),b.error(r?.message||"Something went wrong. Please try again!")}).finally(()=>{d(!1)}))},[o]);function M(r,a){!n||!m||!c||(j.set("Updating progress"),te({resourceId:n,resourceType:m,topicId:r},a).then(()=>{S(r,a),$(h,o._id,m,n).then(i=>{C(i)})}).catch(i=>{alert("Something went wrong, please try again."),console.error(i)}).finally(()=>{j.set("")}))}async function U(r){const a=r.target?.closest("g");if(!a)return;const i=a.dataset?a.dataset.groupId:"";if(!i)return;if(a.classList.contains("removed")){r.preventDefault();return}r.preventDefault();const f=a.classList.contains("done"),w=i.replace(/^\d+-/,"");M(w,f?"pending":"done")}async function z(r){const a=r.target?.closest("g");if(!a)return;const i=a.dataset?a.dataset.groupId:"";if(!i||a.classList.contains("removed"))return;r.preventDefault();const f=i.replace(/^\d+-/,""),w=a.classList.contains("learning"),k=a.classList.contains("skipped");if(r.shiftKey){r.preventDefault(),M(f,w?"pending":"learning");return}if(r.altKey){r.preventDefault(),M(f,k?"pending":"skipped");return}}T(()=>{if(!(!o||!s.current))return s.current?.addEventListener("contextmenu",U),s.current?.addEventListener("click",z),()=>{s.current?.removeEventListener("contextmenu",U),s.current?.removeEventListener("click",z)}},[o]);const L=I?.removed||[],E=I?.done.filter(r=>!L.includes(r)).length||0,q=I?.learning.filter(r=>!L.includes(r)).length||0,A=I?.skipped.filter(r=>!L.includes(r)).length||0,R=o.progress.find(r=>r.resourceId===n)?.total||0,B=Math.round(E/R*100);return e("div",{class:"fixed left-0 right-0 top-0 z-50 h-full items-center justify-center overflow-y-auto overflow-x-hidden overscroll-contain bg-black/50",children:e("div",{class:"relative mx-auto h-full w-full max-w-4xl p-4 md:h-auto",children:e("div",{ref:N,class:"popup-body relative rounded-lg bg-white shadow pt-[1px]",children:[c&&e("div",{className:"sticky top-1 mx-1 mt-1 mb-0 rounded-xl bg-gray-900 p-4 text-gray-300",children:[e("h2",{className:"text-base mb-1.5",children:"Follow the Instructions below to update your progress"}),e("ul",{className:"flex flex-col gap-1",children:[e("li",{className:"leading-loose",children:[e("kbd",{className:"rounded-md bg-yellow-200 px-2 py-1.5 text-xs text-gray-900",children:"Right Mouse Click"})," ","on a topic to mark as"," ",e("span",{className:"font-medium text-white",children:"Done"}),"."]}),e("li",{className:"leading-loose",children:[e("kbd",{className:"rounded-md bg-yellow-200 px-2 py-1.5 text-xs text-gray-900",children:"Shift"})," ","+"," ",e("kbd",{className:"rounded-md bg-yellow-200 px-2 py-1.5 text-xs text-gray-900",children:"Click"})," ","on a topic to mark as"," ",e("span",{className:"font-medium text-white",children:"In progress"}),"."]})]})]}),e("div",{className:"p-4",children:[!c&&e("div",{className:"mb-5 mt-0 text-left md:mt-4 md:text-center",children:[e("h2",{className:"mb-1 text-lg font-bold md:text-2xl",children:[o.name,"'s Progress"]}),e("p",{className:"hidden text-xs text-gray-500 sm:text-sm md:block md:text-base",children:["You are looking at ",o.name,"'s progress."," ",e("button",{className:"text-blue-600 underline",onClick:g,children:"View your progress"}),"."]}),e("p",{className:"block text-gray-500 md:hidden",children:e("button",{className:"text-blue-600 underline",onClick:g,children:"View your progress."})})]}),e("p",{class:`-mx-4 mb-3 flex items-center justify-start border-b border-t px-4 py-2 text-sm sm:hidden ${t?"striped-loader":""}`,children:[e("span",{class:"mr-2.5 block rounded-sm bg-yellow-200 px-1 py-0.5 text-xs font-medium uppercase text-yellow-900",children:[e("span",{children:B}),"% Done"]}),e("span",{children:[e("span",{children:E})," of ",e("span",{children:R})," done"]})]}),e("p",{class:`-mx-4 mb-3 hidden items-center justify-center border-b border-t py-2 text-sm sm:flex ${t?"striped-loader":""}`,children:[e("span",{class:"mr-2.5 block rounded-sm bg-yellow-200 px-1 py-0.5 text-xs font-medium uppercase text-yellow-900",children:[e("span",{children:B}),"% Done"]}),e("span",{children:[e("span",{children:E})," completed"]}),e("span",{class:"mx-1.5 text-gray-400",children:"·"}),e("span",{children:[e("span",{"data-progress-learning":"",children:q})," in progress"]}),A>0&&e(D,{children:[e("span",{class:"mx-1.5 text-gray-400",children:"·"}),e("span",{children:[e("span",{"data-progress-skipped":"",children:A})," ","skipped"]})]}),e("span",{class:"mx-1.5 text-gray-400",children:"·"}),e("span",{children:[e("span",{"data-progress-total":"",children:R})," Total"]})]})]}),e("div",{ref:s,className:"px-4 pb-2"}),t&&e("div",{class:"flex w-full justify-center",children:e(ee,{isDualRing:!1,className:"mb-4 mt-2 h-4 w-4 animate-spin fill-blue-600 text-gray-200 sm:h-8 sm:w-8"})}),e("button",{type:"button",className:`absolute right-2.5 top-3 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:text-gray-900 lg:hidden ${c?"hover:bg-gray-800":"hover:bg-gray-100"}`,onClick:u,children:[e("img",{alt:"close",src:ne,className:"h-4 w-4"}),e("span",{class:"sr-only",children:"Close modal"})]})]})})})}const ie=[{label:"Members",value:"member"},{label:"Roadmaps",value:"roadmap"}];function Ee(){const{teamId:p}=J(),{gb:n}=V(),[o,m]=v(!0),g=H(),h=O(Q),u=G(),[l,c]=v(),[s,N]=v([]),[x,_]=v(n||"member");async function I(){const{response:t,error:d}=await K(`https://api.roadmap.sh/v1-get-team-progress/${p}`);if(d||!t){g.error(d?.message||"Failed to get team progress");return}N(t.sort((b,y)=>b.email===u?.email?-1:y.email===u?.email?1:0))}if(T(()=>{p&&I().then(()=>{j.set(""),m(!1)})},[p]),o)return null;if(!p){window.location.href="/";return}T(()=>{x&&W({gb:x})},[x]);const C=[];for(const t of h?.roadmaps||[]){const d=[];for(const b of s){const y=b.progress.find($=>$.resourceId===t);y&&d.push({member:b,progress:y})}d.length&&C.push({resourceId:t,resourceTitle:d?.[0].progress?.resourceTitle||"",resourceType:"roadmap",members:d})}return e("div",{children:[l&&e(le,{member:l.member,teamId:p,resourceId:l.resourceId,resourceType:"roadmap",onClose:()=>{c(void 0)},onShowMyProgress:()=>{c({resourceId:l.resourceId,member:s.find(t=>t.email===u?.email)})}}),e("div",{className:"flex items-center gap-2",children:ie.map(t=>e("button",{className:`rounded-md border p-1 px-2 text-sm ${x===t.value?" border-gray-400 bg-gray-200 ":""}`,onClick:()=>_(t.value),children:t.label}))}),e("div",{className:"mt-6",children:[x==="roadmap"&&e("div",{className:"grid gap-4 sm:grid-cols-2",children:C.map(t=>e(oe,{roadmap:t,onShowResourceProgress:(d,b)=>{c({resourceId:b,member:d})}},t.resourceId))}),x==="member"&&e("div",{className:"grid gap-4 sm:grid-cols-2",children:s.map(t=>e(ae,{member:t,isMyProgress:t?.email===u?.email,onShowResourceProgress:d=>{c({resourceId:d,member:t})}}))})]})]})}export{Ee as TeamProgressPage};