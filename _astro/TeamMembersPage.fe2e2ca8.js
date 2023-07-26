import{_ as v,h as l,p as I}from"./hooks.module.7cc4e70a.js";import{b as R,c as P,h as S,d as E,a as $}from"./http.82ebf0f1.js";import{u as N}from"./use-outside-click.85d1a62f.js";import{u as T}from"./use-toast.fb52de5d.js";import{o as e}from"./jsxRuntime.module.afbf92fe.js";import{u as U}from"./use-auth.13ac07ad.js";import{p as w}from"./page.c1a8a472.js";import{u as C}from"./use-team-id.3d0ab368.js";import{k as D}from"./preact.module.7b19fc78.js";import{R as L}from"./RoleDropdown.0bcc7fe3.js";import{g as j}from"./browser.bcc09af3.js";import{u as _}from"./index.c54070cf.js";import{a as z}from"./team.12f2469e.js";import"./jwt.f0e0aa9c.js";import"./toast.1fe7142d.js";import"./index.a98c85f5.js";const B="/_astro/more-vertical.bfff43ef.svg";function A({member:a,onUpdateMember:n,onDeleteMember:d,isDisabled:p=!1}){const c=T(),m=v(null),[h,r]=l(!1),[b,o]=l(!1);N(m,()=>{r(!1)});async function f(){const{response:u,error:s}=await R(`https://api.roadmap.sh/v1-resend-invite/${a.teamId}/${a._id}`,{});if(s||!u){o(!1),c.error(s?.message||"Something went wrong");return}window.location.reload()}const g=[{name:"Delete",handleClick:()=>{d(),r(!1)}},{name:"Update Role",handleClick:()=>{n(),r(!1)}},...["invited"].includes(a.status)?[{name:"Resend Invite",handleClick:f}]:[]];return e("div",{className:"relative",children:[e("button",{disabled:p,onClick:()=>r(!h),className:"ml-2 flex items-center opacity-60 transition-opacity hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-30",children:e("img",{alt:"menu",src:B,className:"h-4 w-4"})}),h&&e("div",{ref:m,className:"align-right absolute right-0 top-full z-50 mt-1 w-32 rounded-md bg-slate-800 px-2 py-2 text-white shadow-md",children:e("ul",{children:g.map((u,s)=>e("li",{children:e("button",{onClick:u.handleClick,disabled:b,className:"flex w-full cursor-pointer items-center rounded p-2 text-sm font-medium text-slate-100 hover:bg-slate-700",children:u.name})},s))})})]})}function F(a){const{onClose:n}=a,d=v(null),p=v(null),[c,m]=l(""),[h,r]=l(!1),[b,o]=l(""),{teamId:f}=C();I(()=>{o(""),m(""),p?.current?.focus()},[]);const g=async s=>{if(s.preventDefault(),r(!0),o(""),c.toUpperCase()!=="LEAVE"){o("Verification text does not match"),r(!1);return}const{response:x,error:t}=await P(`https://api.roadmap.sh/v1-leave-team/${f}`,{});if(t||!x){r(!1),o(t?.message||"Something went wrong");return}window.location.href="/account?c=tl"},u=()=>{r(!1),o(""),m(""),n()};return N(d,u),e("div",{class:"popup fixed left-0 right-0 top-0 z-50 flex h-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50",children:e("div",{class:"relative h-full w-full max-w-md p-4 md:h-auto",children:e("div",{ref:d,class:"popup-body relative rounded-lg bg-white p-4 shadow",children:[e("h2",{class:"text-2xl font-semibold text-black",children:"Leave Team"}),e("p",{className:"text-gray-500",children:"You will lose access to the team, the roadmaps and progress of other team members."}),e("p",{className:"-mb-2 mt-3 text-base font-medium text-black",children:'Please type "leave" to confirm.'}),e("form",{onSubmit:g,children:[e("div",{className:"my-4",children:[e("input",{ref:p,type:"text",name:"leave-team",id:"leave-team",className:"mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 outline-none placeholder:text-gray-400 focus:border-gray-400",placeholder:'Type "leave" to confirm',required:!0,autoFocus:!0,value:c,onInput:s=>m(s.target.value)}),b&&e("p",{className:"mt-2 rounded-lg bg-red-100 p-2 text-red-700",children:b})]}),e("div",{className:"flex items-center gap-2",children:[e("button",{type:"button",disabled:h,onClick:u,className:"flex-grow cursor-pointer rounded-lg bg-gray-200 py-2 text-center",children:"Cancel"}),e("button",{type:"submit",disabled:h||c.toUpperCase()!=="LEAVE",className:"flex-grow cursor-pointer rounded-lg bg-red-500 py-2 text-white disabled:opacity-40",children:h?"Please wait ..":"Leave Team"})]})]})]})})})}function O(a){const[n,d]=l(!1);return e(D,{children:[n&&e(F,{onClose:()=>{d(!1)}}),e("button",{onClick:()=>{d(!0)},className:"flex h-7 min-w-[95px] items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-2 py-1.5 text-sm font-medium leading-none text-red-600",children:"Leave team"})]})}function V(a){const{onClose:n,onInvited:d}=a,p=v(null),c=v(null),[m,h]=l("member"),[r,b]=l(""),[o,f]=l(!1),[g,u]=l(""),{teamId:s}=C();I(()=>{c?.current?.focus()},[]);const x=async i=>{i.preventDefault(),f(!0),u("");const{response:k,error:y}=await S(`https://api.roadmap.sh/v1-invite-member/${s}`,{email:r,role:m});if(y||!k){f(!1),u(y?.message||"Something went wrong");return}f(!1),t(),d()},t=()=>{f(!1),u(""),n()};return N(p,t),e("div",{class:"popup fixed left-0 right-0 top-0 z-50 flex h-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50",children:e("div",{class:"relative h-full w-full max-w-md p-4 md:h-auto",children:e("div",{ref:p,class:"popup-body relative rounded-lg bg-white p-4 shadow",children:[e("h3",{class:"mb-1.5 text-xl sm:text-2xl font-medium",children:"Invite Member"}),e("p",{className:"mb-3 text-sm leading-none text-gray-400 hidden sm:block",children:"Enter the email and role below to invite a member."}),e("form",{onSubmit:x,children:[e("div",{className:"mt-0 sm:mt-4 my-4 flex flex-col gap-2",children:[e("input",{ref:c,type:"email",name:"invite-member",id:"invite-member",className:"mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 outline-none placeholder:text-gray-400 focus:border-gray-400",placeholder:"Enter email address",required:!0,autoFocus:!0,value:r,onInput:i=>b(i.target.value)}),e("div",{className:"flex h-[42px] w-full flex-col",children:e(L,{className:"h-full w-full",selectedRole:m,setSelectedRole:h})}),g&&e("p",{className:" rounded-md border border-red-300 bg-red-50 p-2 text-sm text-red-700",children:g})]}),e("div",{className:"flex items-center gap-2",children:[e("button",{type:"button",disabled:o,onClick:t,className:"flex-grow cursor-pointer rounded-lg bg-gray-200 py-2 text-center",children:"Cancel"}),e("button",{type:"submit",disabled:o||!r,class:"flex-grow cursor-pointer rounded-lg bg-black py-2 text-center text-white disabled:opacity-40",children:o?"Please wait ..":"Invite"})]})]})]})})})}function Y(a){const{onClose:n,onUpdated:d,member:p}=a,c=v(null),[m,h]=l(p.role),[r,b]=l(!1),[o,f]=l(""),{teamId:g}=C(),u=async x=>{x.preventDefault(),b(!0),f("");const{response:t,error:i}=await E(`https://api.roadmap.sh/v1-update-member-role/${g}/${p._id}`,{role:m});if(i||!t){b(!1),f(i?.message||"Something went wrong");return}b(!1),d()},s=()=>{b(!1),f(""),n()};return N(c,s),e("div",{class:"popup fixed left-0 right-0 top-0 z-50 flex h-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50",children:e("div",{class:"relative h-full w-full max-w-md p-4 md:h-auto",children:e("div",{ref:c,class:"popup-body relative rounded-lg bg-white p-4 shadow",children:[e("h3",{class:"mb-1.5 text-xl sm:text-2xl font-medium",children:"Update Role"}),e("p",{className:"mb-3 text-sm leading-none text-gray-400 hidden sm:block",children:"Select the role to update for this member"}),e("form",{onSubmit:u,children:[e("div",{className:"mt-0 sm:mt-4 my-4 flex flex-col gap-2",children:[e("span",{className:"mt-2 block w-full rounded-md bg-gray-100 p-2",children:p.invitedEmail}),e("div",{className:"flex h-[42px] w-full flex-col",children:e(L,{className:"h-full w-full",selectedRole:m,setSelectedRole:h})}),o&&e("p",{className:" rounded-md border border-red-300 bg-red-50 p-2 text-sm text-red-700",children:o})]}),e("div",{className:"flex items-center gap-2",children:[e("button",{type:"button",disabled:r,onClick:s,className:"flex-grow cursor-pointer rounded-lg bg-gray-200 py-2 text-center",children:"Cancel"}),e("button",{type:"submit",disabled:r||!m,class:"flex-grow cursor-pointer rounded-lg bg-black py-2 text-center text-white disabled:opacity-40",children:r?"Please wait ..":"Update Role"})]})]})]})})})}function M({role:a}){return e("span",{className:`rounded-full px-2 py-0.5 text-xs capitalize ${["admin"].includes(a)?"bg-blue-100 text-blue-700 ":"bg-gray-100 text-gray-700 "} ${["manager"].includes(a)?"bg-green-100 text-green-700":""}`,children:a})}function oe(){const{t:a}=j(),n=T(),d=_(z),[p,c]=l(),[m,h]=l(!1),[r,b]=l([]),[o,f]=l(),g=U();async function u(){const{response:t,error:i}=await $(`https://api.roadmap.sh/v1-get-team/${a}`);if(i||!t){n.error(i?.message||"Something went wrong");return}t&&f(t)}async function s(){const{response:t,error:i}=await $(`https://api.roadmap.sh/v1-get-team-member-list/${a}`);if(i||!t){n.error(i?.message||"Failed to load team member list");return}b(t)}I(()=>{a&&Promise.all([u(),s()]).finally(()=>{w.set("")})},[a]);async function x(t,i){w.set("Deleting member");const{response:k,error:y}=await P(`https://api.roadmap.sh/v1-delete-member/${t}/${i}`,{});if(y||!k){n.error(y?.message||"Something went wrong");return}n.success("Member has been deleted"),await s()}return e("div",{children:[p&&e(Y,{member:p,onUpdated:()=>{w.set("Refreshing members"),s().finally(()=>{w.set("")}),c(void 0),n.success("Member has been updated")},onClose:()=>{c(void 0)}}),m&&e(V,{onInvited:()=>{n.success("Invite sent"),s().then(()=>null),h(!1)},onClose:()=>{h(!1)}}),e("div",{children:e("div",{className:"rounded-b-sm rounded-t-md border",children:[e("div",{className:"flex items-center justify-between gap-2 border-b p-3",children:[e("p",{className:"hidden text-sm sm:block",children:[r.length," people in the team."]}),e("p",{className:"block text-sm sm:hidden",children:[r.length," members"]}),e(O,{teamId:o?._id})]}),r.map((t,i)=>e("div",{className:`flex items-center justify-between gap-2 p-3 ${i===0?"":"border-t"} ${t.status==="invited"?"bg-gray-50":""}`,children:[e("div",{className:"flex items-center gap-3",children:[e("img",{src:t.avatar?`https://dodrc8eu8m09s.cloudfront.net/avatars/${t.avatar}`:"/images/default-avatar.png",alt:t.name||"",className:"hidden h-10 w-10 rounded-full sm:block"}),e("div",{children:[e("span",{class:"mb-1 block sm:hidden",children:e(M,{role:t.role})}),e("div",{className:"flex items-center",children:[e("h3",{className:"inline-grid grid-cols-[auto_auto] items-center font-medium",children:[e("span",{className:"truncate",children:t.name}),t.userId===g?.id&&e("span",{className:"ml-2 hidden text-xs font-normal text-blue-500 sm:inline",children:"You"})]}),e("div",{className:"ml-2 flex items-center gap-0.5",children:[t.status==="invited"&&e("span",{className:"rounded-full bg-yellow-100 px-2 py-0.5 text-xs text-yellow-700",children:"Invited"}),t.status==="rejected"&&e("span",{className:"rounded-full bg-red-100 px-2 py-0.5 text-xs text-red-700",children:"Rejected"})]})]}),e("p",{className:"text-sm text-gray-500",children:t.invitedEmail})]})]}),e("div",{className:"flex items-center text-sm",children:[e("span",{class:"hidden sm:block",children:e(M,{role:t.role})}),d&&e(A,{onDeleteMember:()=>{x(a,t._id).finally(()=>{w.set("")})},isDisabled:t.userId===g?.id,onUpdateMember:()=>{c(t)},member:t})]})]}))]})}),d&&e("div",{className:"mt-4",children:e("button",{disabled:r.length>=25,onClick:()=>h(!0),className:"block w-full rounded-md border border-dashed border-gray-300 py-2 text-sm transition-colors hover:border-gray-600 hover:bg-gray-50 focus:outline-0",children:"+ Invite Member"})}),r.length>=25&&d&&e("p",{className:"mt-2 rounded-lg bg-red-100 p-2 text-red-700",children:"You have reached the maximum number of members in a team. Please reach out to us if you need more."})]})}export{oe as TeamMembersPage};