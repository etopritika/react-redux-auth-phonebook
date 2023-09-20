"use strict";(self.webpackChunkreact_redux_auth_phonebook=self.webpackChunkreact_redux_auth_phonebook||[]).push([[527],{527:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(791),r=n(434),s=n(439),c=n(361),i=function(e){return e.contacts.contacts.items},o=function(e){return e.contacts.contacts.isLoading},u=function(e){return e.contacts.filter},l={contacts__list:"Contacts_contacts__list__oD9-W"},d=n(184);function m(){var e=(0,r.v9)(i),t=(0,r.v9)(u),n=(0,a.useState)([]),o=(0,s.Z)(n,2),m=o[0],f=o[1],h=(0,r.I0)();(0,a.useEffect)((function(){f(e.filter((function(e){return e.name.toLowerCase().includes(t)})))}),[t,e]);var x=""===t?e:m;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("ul",{className:l.contacts__list,children:x.map((function(e){return(0,d.jsxs)("li",{children:[(0,d.jsxs)("span",{children:[(0,d.jsx)("b",{children:e.name}),": ",e.number]}),(0,d.jsx)("button",{className:l.delete__button,onClick:function(){return t=e.id,void h((0,c.GK)(t));var t},type:"button",children:"Delete"})]},e.id)}))})})}var f=n(771),h="Filter_filter__container__yLJ5F";function x(){var e=(0,a.useState)(""),t=(0,s.Z)(e,2),n=t[0],c=t[1],i=(0,r.I0)();return(0,d.jsx)("div",{className:h,children:(0,d.jsxs)("label",{children:["Find contacts by name",(0,d.jsx)("input",{type:"text",name:"filter",value:n,onChange:function(e){var t=e.currentTarget.value;c(t),i((0,f.W1)(t.toLowerCase()))}})]})})}var p="ContactForm_submit__form__3Vuh1",_=function(){var e=(0,a.useState)(""),t=(0,s.Z)(e,2),n=t[0],o=t[1],u=(0,a.useState)(""),l=(0,s.Z)(u,2),m=l[0],f=l[1],h=(0,r.I0)(),x=(0,r.v9)(i),_=function(e){var t=e.currentTarget,n=t.name,a=t.value;"name"===n?o(a):"number"===n&&f(a)},v=function(){o(""),f("")};return(0,d.jsxs)("form",{className:p,onSubmit:function(e){e.preventDefault();var t={name:n,number:m};x.find((function(e){return e.name===t.name}))?alert("".concat(t.name," is already in contacts!")):(h((0,c.uK)(t)),v())},children:[(0,d.jsxs)("label",{children:["Name",(0,d.jsx)("input",{type:"text",name:"name",value:n,onChange:_,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,d.jsxs)("label",{children:["Number",(0,d.jsx)("input",{type:"tel",name:"number",value:m,onChange:_,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,d.jsx)("button",{type:"submit",children:"Add contacts"})]})},v={container:{minHeight:"calc(100vh - 50px)",maxWidth:"960px",margin:"auto",display:"flex",flexDirection:"column",alignItems:"center"},title:{fontWeight:500,fontSize:48,textAlign:"center",marginBottom:12,marginTop:0}};function b(){var e=(0,r.I0)(),t=(0,r.v9)(o);return(0,a.useEffect)((function(){e((0,c.yF)())}),[e]),(0,d.jsxs)("main",{style:v.container,children:[(0,d.jsx)("h1",{style:v.title,children:"Your contacts"}),(0,d.jsx)(_,{}),(0,d.jsx)(x,{}),(0,d.jsx)("div",{children:t&&"Request in progress..."}),(0,d.jsx)(m,{})]})}}}]);
//# sourceMappingURL=527.30c82c11.chunk.js.map