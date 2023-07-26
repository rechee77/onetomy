import{_ as E,h as p,p as M}from"./hooks.module.7cc4e70a.js";import{u as z}from"./use-team-id.3d0ab368.js";import{a as _}from"./http.82ebf0f1.js";import{p as B}from"./page.c1a8a472.js";import{D as F}from"./index.es.ebad3893.js";import{S as V}from"./Spinner.95905af5.js";/* empty css                       */import{u as Y}from"./use-outside-click.85d1a62f.js";import{u as q}from"./use-keydown.41d75069.js";import{a as T}from"./resource-progress.b09662c1.js";import{C as J}from"./close.3a539829.js";import{u as D}from"./use-toast.fb52de5d.js";import{o as e}from"./jsxRuntime.module.afbf92fe.js";import{k as j}from"./preact.module.7b19fc78.js";import{u as K}from"./index.c54070cf.js";import{b as O}from"./team.12f2469e.js";import{g as L,s as H}from"./browser.bcc09af3.js";import{E as Q}from"./external-link.a7a2cda9.js";import{u as A}from"./use-auth.13ac07ad.js";import"./jwt.f0e0aa9c.js";import"./index.a98c85f5.js";import"./toast.1fe7142d.js";function G(i){const{resourceId:r,member:c,resourceType:d,teamId:n,onClose:m}=i,o=E(null),l=E(null),[f,t]=p(),[b,y]=p(!0),a=D();let s="https://roadmap.sh";d==="roadmap"?s+=`/${r}.json`:s+=`/best-practices/${r}.json`;async function u(h,$,w,k){const{error:P,response:I}=await _(`https://api.roadmap.sh/v1-get-member-resource-progress/${h}/${$}?resourceType=${w}&resourceId=${k}`);if(P||!I){a.error(P?.message||"Failed to get member progress");return}return t(I),I}async function v(h){const w=await(await fetch(h)).json(),k=await F(w,{fontURL:"/fonts/balsamiq.woff2"});o.current?.replaceChildren(k)}q("Escape",()=>{m()}),Y(l,()=>{m()}),M(()=>{!o.current||!s||!r||!d||!n||Promise.all([v(s),u(n,c._id,d,r)]).then(([h,$={}])=>{const{removed:w=[],done:k=[],learning:P=[],skipped:I=[]}=$;k.forEach(x=>T(x,"done")),P.forEach(x=>T(x,"learning")),I.forEach(x=>T(x,"skipped")),w.forEach(x=>T(x,"removed"))}).catch(h=>{console.error(h),a.error(h?.message||"Something went wrong. Please try again!")}).finally(()=>{y(!1)})},[]);const g=c.progress.find(h=>h.resourceId===r),N=g?.done||0,U=g?.learning||0,S=g?.skipped||0,C=g?.total||0,R=Math.round(N/C*100);return e("div",{class:"fixed left-0 right-0 top-0 z-50 h-full items-center justify-center overflow-y-auto overflow-x-hidden overscroll-contain bg-black/50",children:e("div",{class:"relative mx-auto h-full w-full max-w-4xl p-4 md:h-auto",children:e("div",{ref:l,class:"popup-body relative rounded-lg bg-white shadow",children:[e("div",{className:"p-4",children:[e("div",{className:"mb-5 mt-0 text-left md:mt-4 md:text-center",children:[e("h2",{className:"mb-1 text-lg font-bold md:text-2xl",children:[c.name,"'s Progress"]}),e("p",{className:"hidden text-xs text-gray-500 sm:text-sm md:block md:text-base",children:["You are looking at ",c.name,"'s progress."," ",e("a",{target:"_blank",href:`/${r}?t=${n}`,className:"text-blue-600 underline",children:"View your progress"}),"."]}),e("p",{className:"block text-gray-500 md:hidden",children:["View your progress ",e("a",{target:"_blank",href:`/${r}?t=${n}`,className:"text-blue-600 underline",children:"on the roadmap page."})]})]}),e("p",{class:"-mx-4 mb-3 flex items-center justify-start border-b border-t py-2 text-sm sm:hidden px-4",children:[e("span",{class:"mr-2.5 block rounded-sm bg-yellow-200 px-1 py-0.5 text-xs font-medium uppercase text-yellow-900",children:[e("span",{children:R}),"% Done"]}),e("span",{children:[e("span",{children:N})," of ",e("span",{children:C})," done"]})]}),e("p",{class:"-mx-4 mb-3 hidden items-center justify-center border-b border-t py-2 text-sm sm:flex",children:[e("span",{class:"mr-2.5 block rounded-sm bg-yellow-200 px-1 py-0.5 text-xs font-medium uppercase text-yellow-900",children:[e("span",{children:R}),"% Done"]}),e("span",{children:[e("span",{children:N})," completed"]}),e("span",{class:"mx-1.5 text-gray-400",children:"·"}),e("span",{children:[e("span",{"data-progress-learning":"",children:U})," in progress"]}),S>0&&e(j,{children:[e("span",{class:"mx-1.5 text-gray-400",children:"·"}),e("span",{children:[e("span",{"data-progress-skipped":"",children:S})," ","skipped"]})]}),e("span",{class:"mx-1.5 text-gray-400",children:"·"}),e("span",{children:[e("span",{"data-progress-total":"",children:C})," Total"]})]})]}),e("div",{ref:o,className:"px-4 pb-2"}),b&&e("div",{class:"flex w-full justify-center",children:e(V,{isDualRing:!1,className:"mb-4 mt-2 h-4 w-4 animate-spin fill-blue-600 text-gray-200 sm:h-8 sm:w-8"})}),e("button",{type:"button",className:"popup-close absolute right-2.5 top-3 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 sm:hidden",onClick:m,children:[e("img",{src:J,className:"h-4 w-4"}),e("span",{class:"sr-only",children:"Close modal"})]})]})})})}function W(i){const{member:r,teamId:c,isMyProgress:d=!1}=i,n=r?.progress?.sort((t,b)=>b.done-t.done),[m,o]=p(null),[l,f]=p(!1);return e(j,{children:[m&&e(G,{member:r,teamId:c,resourceId:m,resourceType:"roadmap",onClose:()=>{o(null)}}),e("div",{className:"flex h-full min-h-[270px] flex-col overflow-hidden rounded-md border",children:[e("div",{className:"relative flex items-center gap-3 border-b p-3",children:[e("img",{src:r.avatar?`https://dodrc8eu8m09s.cloudfront.net/avatars/${r.avatar}`:"/images/default-avatar.png",alt:r.name||"",className:"h-8 w-8 rounded-full"}),e("div",{className:"inline-grid w-full",children:[!d&&e("h3",{className:"truncate font-medium",children:r.name}),d&&e("div",{className:"inline-grid grid-cols-[auto,32px] items-center gap-1.5",children:[e("h3",{className:"truncate font-medium",children:r.name}),e("span",{className:"rounded-md bg-red-500 py-0.5 px-1 text-xs text-white",children:"You"})]}),e("p",{className:"truncate text-sm text-gray-500",children:r.email})]})]}),e("div",{className:"relative flex grow flex-col space-y-2 p-3",children:[(l?n:n.slice(0,4)).map(t=>e("button",{onClick:()=>o(t.resourceId),className:"group relative overflow-hidden rounded-md border p-2 hover:border-gray-300 hover:text-black focus:outline-none",children:[e("span",{className:"relative z-10 flex items-center justify-between text-sm",children:[e("span",{className:"inline-grid",children:e("span",{className:"truncate",children:t.resourceTitle})}),e("span",{className:"ml-1.5 shrink-0 text-xs text-gray-400",children:[t.done," / ",t.total]})]}),e("span",{className:"absolute inset-0 bg-gray-100 group-hover:bg-gray-200",style:{width:`${t.done/t.total*100}%`}})]},t.resourceId)),n.length>4&&!l&&e("button",{onClick:()=>f(!0),className:"text-sm text-gray-400 underline",children:["+ ",n.length-4," more"]}),l&&e("button",{onClick:()=>f(!1),className:"text-sm text-gray-400 underline",children:"- Show less"}),n.length===0&&e("div",{className:"text-sm text-gray-500",children:"No progress"})]})]},r._id)]})}function X(i){const{members:r,resourceTitle:c,resourceId:d}=i.roadmap,{t:n}=L(),m=A(),[o,l]=p(!1),[f,t]=p(null),[b,y]=p(null);return e(j,{children:[f&&e(G,{member:b,teamId:n,resourceId:f,resourceType:"roadmap",onClose:()=>{t(null),y(null)}}),e("div",{className:"flex h-full min-h-[270px] flex-col rounded-md border",children:[e("div",{className:"flex items-center gap-3 border-b p-3",children:e("div",{className:"flex min-w-0 flex-grow items-center justify-between",children:[e("h3",{className:"truncate font-medium",children:c}),e("a",{href:`/${d}?t=${n}`,className:"group mb-0.5 flex shrink-0 items-center justify-between text-base font-medium leading-none text-black",target:"_blank",children:e("img",{alt:"link",src:Q,className:"ml-2 h-4 w-4 opacity-20 transition-opacity group-hover:opacity-100"})})]})}),e("div",{className:"relative flex grow flex-col space-y-2 p-3",children:[(o?r:r.slice(0,4)).map(a=>{const s=m?.email===a?.member?.email;return a.progress?e("button",{className:`group relative w-full overflow-hidden rounded-md border p-2 hover:border-gray-300 hover:text-black focus:outline-none ${s?"border-green-500 hover:border-green-600":""}`,onClick:()=>{t(a?.progress?.resourceId),y(a.member)},children:[e("span",{className:"relative z-10 flex items-center justify-between gap-1 text-sm",children:[e("span",{className:"inline-grid grid-cols-[20px_auto] gap-3",children:[e("img",{src:a.member.avatar?`https://dodrc8eu8m09s.cloudfront.net/avatars/${a.member.avatar}`:"/images/default-avatar.png",alt:a.member.name||"",className:"h-5 w-5 shrink-0 rounded-full"}),e("span",{className:"inline-grid grid-cols-[auto,32px] items-center",children:e("span",{className:"truncate mr-[5px]",children:a?.member?.name})})]}),e("span",{className:"shrink-0 text-xs text-gray-400",children:[a?.progress?.done," / ",a?.progress?.total]})]}),e("span",{className:`absolute inset-0 ${s?"bg-green-100 group-hover:bg-green-200":"bg-gray-100 group-hover:bg-gray-200"}`,style:{width:`${a?.progress?.done/a?.progress?.total*100}%`}})]},a?.member._id):null}),r.length>4&&!o&&e("button",{onClick:()=>l(!0),className:"text-sm text-gray-400 underline",children:["+ ",r.length-4," more"]}),o&&e("button",{onClick:()=>l(!1),className:"text-sm text-gray-400 underline",children:"- Show less"}),r.length===0&&e("div",{className:"text-sm text-gray-500",children:"No progress"})]})]})]})}const Z=[{label:"Members",value:"member"},{label:"Roadmaps",value:"roadmap"}];function we(){const{teamId:i}=z(),{gb:r}=L(),[c,d]=p(!0),n=D(),m=K(O),o=A(),[l,f]=p([]),[t,b]=p(r||"member");async function y(){const{response:s,error:u}=await _(`https://api.roadmap.sh/v1-get-team-progress/${i}`);if(u||!s){n.error(u?.message||"Failed to get team progress");return}f(s.sort((v,g)=>v.email===o?.email?-1:g.email===o?.email?1:0))}if(M(()=>{i&&y().finally(()=>{B.set(""),d(!1)})},[i]),c)return null;if(!i){window.location.href="/";return}M(()=>{t&&H({gb:t})},[t]);const a=[];for(const s of m?.roadmaps||[]){const u=[];for(const v of l){const g=v.progress.find(N=>N.resourceId===s);g&&u.push({member:v,progress:g})}u.length&&a.push({resourceId:s,resourceTitle:u?.[0].progress?.resourceTitle||"",resourceType:"roadmap",members:u})}return e("div",{children:[e("div",{className:"flex items-center gap-2",children:Z.map(s=>e("button",{className:`rounded-md border p-1 px-2 text-sm ${t===s.value?" border-gray-400 bg-gray-200 ":""}`,onClick:()=>b(s.value),children:s.label}))}),e("div",{className:"mt-6",children:[t==="roadmap"&&e("div",{className:"grid gap-4 sm:grid-cols-2",children:a.map(s=>e(X,{roadmap:s},s.resourceId))}),t==="member"&&e("div",{className:"grid gap-4 sm:grid-cols-2",children:l.map(s=>e(W,{teamId:i,member:s,isMyProgress:s?.email===o?.email}))})]})]})}export{we as TeamProgressPage};