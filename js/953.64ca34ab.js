"use strict";(globalThis["webpackChunkq_biz_app"]=globalThis["webpackChunkq_biz_app"]||[]).push([[953],{5953:(e,t,r)=>{r.r(t),r.d(t,{default:()=>G});r(9665);var a=r(9835),l=r(6970),o=r(499),n=r(8339),s=r(4813),p=r(6409);const i=e=>((0,a.dD)("data-v-1dcbf950"),e=e(),(0,a.Cn)(),e),c={class:"row bg-brand text-white q-pa-sm"},d={class:"col-6"},y={class:"col-6"},u={class:"text-h6 text-purple"},m={class:"text-subtitle2 text-grey-8"},w={class:"text-subtitle2 text-grey-8"},f={class:"text-subtitle2 text-grey-8"},b={class:"text-subtitle2 text-grey-9"},g={style:{display:"flex","justify-content":"space-between"}},v={class:""},_={style:{display:"flex","justify-content":"space-between"}},h={style:{display:"flex","justify-content":"space-between"}},x={style:{display:"flex","justify-content":"space-between"}},U={style:{display:"flex","justify-content":"space-between"}},W={class:""},k=i((()=>(0,a._)("div",null,null,-1))),P={style:{display:"flex","justify-content":"space-between"}},C={style:{display:"flex","justify-content":"space-between"}},z={style:{display:"flex","justify-content":"space-between"}},S={__name:"VoltaRegion",setup(e){const t=(0,n.tv)(),r=(0,n.yj)(),i=r.params.name.toString().replaceAll("-"," "),S=s.A.results.map((e=>e.constituency.toLowerCase())).filter((e=>e.replaceAll("-"," ")==i));!S.length&&t.push("/error/invalid-constituency-name");const q=S.length?(0,o.iH)(i):(0,o.iH)("cape coast south"),I=(0,p.yK)(s.A,q.value),D=Object.values(I[0].candidates).filter((e=>""==e.president.name||null==e.president.name?null:e)),j=Object.values(I[0].candidates).filter((e=>""==e.parliament.candidate||null==e.parliament.candidate?null:e)),N=D.map((e=>e.president.votes)).reduce(((e,t)=>e+t)),Z=j.map((e=>e.parliament.votes)).reduce(((e,t)=>e+t)),A=e=>e/N*100,L=e=>e/Z*100,Q=D.map((e=>({candidate:e.president.name,profile:e.president.profile,"filing date":e.president["filing Date"],"running mate":e.president["running mate"],"running mate profile":e.president["running mate profile"],votes:e.president.votes,percent:(0,p.WU)(A(e.president.votes)),"party name":e.party.name,"party Id":e.party.id,"party logo":e.party.logo}))).sort(((e,t)=>t.votes-e.votes)),T=j.map((e=>({candidate:e.parliament.candidate,votes:e.parliament.votes,percent:(0,p.WU)(L(e.parliament.votes)),"party name":e.party.name,"party Id":e.party.id,"party logo":e.party.logo}))).sort(((e,t)=>t.votes-e.votes)),$=Math.max(...Q.map((e=>e.votes))),R=Math.max(...T.map((e=>e.votes)));console.log(T);const G=[{name:"candidate",required:!0,label:"Candidate".toLocaleUpperCase(),align:"left",icon:null,field:e=>e.candidate,format:e=>`${e}`,sortable:!0},{name:"party Id",required:!0,label:"Party ID".toLocaleUpperCase(),align:"left",icon:null,field:e=>e["party Id"],format:e=>`${e}`,sortable:!0},{name:"votes",required:!0,label:"votes".toLocaleUpperCase(),align:"left",icon:null,field:e=>e.votes,format:e=>`${e}`,sortable:!0,sortOrder:"da"},{name:"percent",required:!0,label:"Percent".toLocaleUpperCase(),align:"left",icon:null,field:e=>e.percent,format:e=>`${e} %`,sortable:!0}],E=Q,M=T,O={page:1,rowsPerPage:12};return(0,a.bv)((()=>{const e=document.querySelector(".constituency-table table"),t=document.querySelector(".parliamentary-table table"),r=(e,t)=>Array.from(e.children[1].children).filter((e=>e.children[1].children[0].innerText==t)),a=(e,t,a)=>{r(e,t).length>0&&(r(e,t)[0].children[0].style.borderLeft=`4px solid ${a}`,r(e,t)[0].children[3].style.borderRight=`4px solid ${a}`)},l=[{party:"NPP",color:"navy"},{party:"NDC",color:"green"},{party:"GUM",color:"brown"},{party:"CPP",color:"purple"},{party:"APC",color:"cornflowerblue"},{party:"LPG",color:"chocolate"},{party:"NDP",color:"red"},{party:"IND",color:"black"},{party:"PNC",color:"orange"},{party:"GCPP",color:"teal"},{party:"GFP",color:"maroon"},{party:"PPP",color:"lime"},{party:"IND2",color:"DeepPink"},{party:"UPP",color:"teal"}];l.forEach((t=>a(e,t.party,t.color))),l.forEach((e=>a(t,e.party,e.color)));const o=e=>e.children[1].children[0].children[1].innerText,n=(e,t,r,a="text-white")=>o(e)==t?e.children[1].children[0].classList.add(r,a):null;n(e,"NPP","bg-primary"),n(e,"NDC","bg-green"),n(t,"NPP","bg-primary"),n(t,"NDC","bg-green"),n(t,"IND","bg-brand")})),(e,t)=>{const r=(0,a.up)("q-icon"),n=(0,a.up)("q-card-section"),p=(0,a.up)("q-img"),i=(0,a.up)("q-td"),S=(0,a.up)("q-badge"),q=(0,a.up)("q-tr"),D=(0,a.up)("q-table"),j=(0,a.up)("q-card");return(0,a.wg)(),(0,a.iD)("main",null,[(0,a._)("section",null,[(0,a._)("div",c,[(0,a._)("div",d,"Region: "+(0,l.zw)((0,o.SU)(s.A).region),1),(0,a._)("div",y,"Capital: "+(0,l.zw)((0,o.SU)(s.A).capital),1)])]),(0,a._)("section",null,[(0,a._)("div",null,[(0,a.Wm)(j,{class:"bg-milk-green"},{default:(0,a.w5)((()=>[(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[(0,a._)("div",u,[(0,a.Wm)(r,{name:"desktop_windows"}),(0,a.Uk)(" Constituency: "+(0,l.zw)((0,o.SU)(I)[0].constituency),1)]),(0,a._)("div",m,[(0,a.Wm)(r,{name:"code"}),(0,a.Uk)(" EC Code: "+(0,l.zw)((0,o.SU)(I)[0].code),1)]),(0,a._)("div",w,[(0,a.Wm)(r,{name:"place"}),(0,a.Uk)(" District: "+(0,l.zw)((0,o.SU)(I)[0].district),1)]),(0,a._)("div",f,[(0,a.Wm)(r,{name:"place"}),(0,a.Uk)(" Capital: "+(0,l.zw)((0,o.SU)(I)[0].capital),1)]),(0,a._)("div",b,[(0,a.Wm)(r,{name:"school"}),(0,a.Uk)(" Won By: "+(0,l.zw)((0,o.SU)(Q)[0]["party Id"]),1)])])),_:1}),(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[(0,a.Wm)(D,{title:(0,o.SU)(I)[0].constituency+" Presidential Results",rows:(0,o.SU)(E),columns:G,"row-key":"name",class:"constituency-table",pagination:O,"card-class":"bg-grey-4"},{body:(0,a.w5)((e=>[(0,a.Wm)(q,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{key:"candidate",props:e,class:"bl-ndc"},{default:(0,a.w5)((()=>[(0,a._)("div",g,[(0,a._)("div",v,(0,l.zw)(e.row.candidate),1),(0,a._)("div",null,[(0,a.Wm)(p,{src:e.row.profile,"spinner-color":"primary","spinner-size":"82px",sizes:"20px",style:{width:"40px",height:"40px"},class:""},null,8,["src"])])])])),_:2},1032,["props"]),(0,a.Wm)(i,{key:"party Id",props:e},{default:(0,a.w5)((()=>[(0,a._)("div",_,[(0,a.Uk)((0,l.zw)(e.row["party Id"])+" ",1),(0,a.Wm)(p,{src:e.row["party logo"],"spinner-color":"primary","spinner-size":"82px",style:{width:"40px",height:"40px",float:"right",clear:"both"}},null,8,["src"])])])),_:2},1032,["props"]),(0,a.Wm)(i,{key:"party name",props:e},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.row["party name"]),1)])),_:2},1032,["props"]),(0,a.Wm)(i,{key:"votes",props:e},{default:(0,a.w5)((()=>[(0,a._)("div",h,[(0,a.Wm)(S,{color:"purple"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.row.votes),1)])),_:2},1024),(0,a.Wm)(r,{color:e.row.votes==(0,o.SU)($)?"green":"red",name:e.row.votes==(0,o.SU)($)?"arrow_upward":"arrow_downward"},null,8,["color","name"])])])),_:2},1032,["props"]),(0,a.Wm)(i,{key:"percent",props:e},{default:(0,a.w5)((()=>[(0,a._)("div",x,[(0,a.Wm)(S,{color:"primary"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.row.percent)+" % ",1)])),_:2},1024)])])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["title","rows"])])),_:1}),(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[(0,a.Wm)(D,{title:(0,o.SU)(I)[0].constituency+" Parliamentary Results",rows:(0,o.SU)(M),columns:G,"row-key":"name",class:"parliamentary-table",pagination:O,"card-class":"bg-milk-green"},{body:(0,a.w5)((e=>[(0,a.Wm)(q,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{key:"candidate",props:e,class:"bl-ndc"},{default:(0,a.w5)((()=>[(0,a._)("div",U,[(0,a._)("div",W,(0,l.zw)(e.row.candidate),1),k])])),_:2},1032,["props"]),(0,a.Wm)(i,{key:"party Id",props:e},{default:(0,a.w5)((()=>[(0,a._)("div",P,[(0,a.Uk)((0,l.zw)(e.row["party Id"])+" ",1),(0,a.Wm)(p,{src:e.row["party logo"],"spinner-color":"primary","spinner-size":"82px",style:{width:"35px",height:"25px",float:"right",clear:"both"}},null,8,["src"])])])),_:2},1032,["props"]),(0,a.Wm)(i,{key:"party name",props:e},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.row["party name"]),1)])),_:2},1032,["props"]),(0,a.Wm)(i,{key:"votes",props:e},{default:(0,a.w5)((()=>[(0,a._)("div",C,[(0,a.Wm)(S,{color:"purple"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.row.votes),1)])),_:2},1024),(0,a.Wm)(r,{color:e.row.votes==(0,o.SU)(R)?"green":"red",name:e.row.votes==(0,o.SU)(R)?"arrow_upward":"arrow_downward"},null,8,["color","name"])])])),_:2},1032,["props"]),(0,a.Wm)(i,{key:"percent",props:e},{default:(0,a.w5)((()=>[(0,a._)("div",z,[(0,a.Wm)(S,{class:"q-pa-sm",color:"primary","text-color":"white",label:e.row.percent+" %"},null,8,["label"])])])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["title","rows"])])),_:1})])),_:1})])])])}}};var q=r(1639),I=r(4458),D=r(3190),j=r(2857),N=r(9497),Z=r(3532),A=r(7220),L=r(335),Q=r(990),T=r(9984),$=r.n(T);const R=(0,q.Z)(S,[["__scopeId","data-v-1dcbf950"]]),G=R;$()(S,"components",{QCard:I.Z,QCardSection:D.Z,QIcon:j.Z,QTable:N.Z,QTr:Z.Z,QTd:A.Z,QImg:L.Z,QBadge:Q.Z})}}]);