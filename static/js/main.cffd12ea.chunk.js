(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,a,t){e.exports=t.p+"static/media/NDIS_logo.68346255.png"},15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(4),c=t.n(r),o=(t(15),t(5)),s=t.n(o);var m=e=>{let{categories:a,setSelectedCategory:t,selectedCategory:l}=e;return n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"category",className:"form-label"},"Select Product Category:"),n.a.createElement("select",{id:"category",className:"form-select",value:l,onChange:e=>t(e.target.value)},n.a.createElement("option",{value:""},"---Select a Category---")," ",a.map((e,a)=>n.a.createElement("option",{key:a,value:e},e))))};var i=e=>{let{selectedCategory:a,productData:t,setSelectedItem:l}=e;const r=t.filter(e=>e.SupportItemCategory===a);return n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"item",className:"form-label"},"Select Support Item:"),n.a.createElement("select",{id:"item",className:"form-select",onChange:e=>l(e.target.value)},n.a.createElement("option",{value:""},"--Select a Support Item--"),r.map((e,a)=>n.a.createElement("option",{key:a,value:e.SupportItem},e.SupportItem))))};var d=e=>{let{selectedItem:a,productData:t}=e;const l=t.find(e=>e.SupportItem===a);return l?n.a.createElement("div",{className:"price-feedback"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{className:"form-label"},"Support Item Code:"),n.a.createElement("div",{className:"item-code-box"},n.a.createElement("p",null,l.SupportItemNumber),"  ")),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{className:"form-label"},"Description:"),n.a.createElement("div",{className:"description-box"},n.a.createElement("p",null,l.Description),"  ")),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{className:"form-label"},"Price Range:"),n.a.createElement("div",{className:"price-range-box"},n.a.createElement("p",null,"Based on market data, prices for this item vary between $",l.P25," and $",l.P75)))):n.a.createElement("p",null,"No data available for the selected item.")};t(3);var u=()=>n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:"/"},"Pricing Tool"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},n.a.createElement("ul",{className:"navbar-nav"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home")))))),p=(t(16),t(1)),g=t.n(p);var v=function(){const[e,a]=Object(l.useState)([]),[t,r]=Object(l.useState)(""),[c,o]=Object(l.useState)(null),[p,v]=Object(l.useState)(!1);Object(l.useEffect)(()=>{s.a.parse("/productData.csv",{download:!0,header:!0,complete:e=>{a(e.data)}})},[]);const E=[...new Set(e.map(e=>e.SupportItemCategory))];return p?n.a.createElement("div",{className:"App"},n.a.createElement(u,null),n.a.createElement("div",{className:"header-container"},n.a.createElement("h1",null,"Provider Pricing Tool"),n.a.createElement("img",{src:g.a,alt:"NDIS Logo",style:{width:"150px",display:"inline-block",backgroundColor:"transparent",border:"none"}})),n.a.createElement("div",{className:"thank-you-container"},n.a.createElement("div",{className:"thank-you-message"},n.a.createElement("h2",null,"Thanks for using our Price Guide tool."),n.a.createElement("p",null,"If you have further questions, please do not hesitate to connect with the Assistive Technology team. Enjoy the rest of your day.")))):n.a.createElement("div",{className:"App"},n.a.createElement(u,null),n.a.createElement("div",{className:"container mt-5"},n.a.createElement("div",{className:"header-container",style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"40px"}},n.a.createElement("h1",{style:{fontSize:"3rem",textAlign:"left"}},"Provider Pricing Tool"),n.a.createElement("img",{src:g.a,alt:"NDIS Logo",style:{width:"150px",display:"inline-block",backgroundColor:"transparent",border:"none"}})),n.a.createElement(m,{categories:E,setSelectedCategory:r,selectedCategory:t}),t&&n.a.createElement(i,{selectedCategory:t,productData:e,setSelectedItem:o}),c&&e.length>0&&n.a.createElement(d,{selectedItem:c,productData:e}),c&&n.a.createElement("div",{className:"button-container"},n.a.createElement("button",{className:"reset-button",onClick:()=>{r(""),o(null)}},"Choose another"),n.a.createElement("button",{className:"finished-button",onClick:()=>{v(!0)}},"I am finished"))))};var E=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then(a=>{let{getCLS:t,getFID:l,getFCP:n,getLCP:r,getTTFB:c}=a;t(e),l(e),n(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(v,null))),E()},6:function(e,a,t){e.exports=t(17)}},[[6,1,2]]]);
//# sourceMappingURL=main.cffd12ea.chunk.js.map