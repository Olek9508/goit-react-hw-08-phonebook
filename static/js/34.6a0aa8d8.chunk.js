"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[34],{3034:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var r,a,o,i,s,c,d,p,x,l,u,m,f,h=t(2791),b=t(9434),g=t(5705),j=t(5264),Z=t(494),w=t(3433),v=function(n){return n.contacts.items},y=function(n){return n.contacts.isLoading},k=function(n){return n.filter},C=function(n){var e=v(n),t=k(n);return t?(0,w.Z)(e).sort((function(n,e){return n.name.localeCompare(e.name)})).filter((function(n){return n.name.toUpperCase().includes(t.toUpperCase())})):(0,w.Z)(e).sort((function(n,e){return n.name.localeCompare(e.name)}))},z=t(168),A=t(6088),F=A.Z.section(r||(r=(0,z.Z)(["\npadding-top: 55px;\npadding-bottom: 55px;\n"]))),N=(0,A.Z)(g.l0)(a||(a=(0,z.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  width: 600px;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 40px;\n  color: white;\n"]))),I=A.Z.label(o||(o=(0,z.Z)(["\n  width: 60px;\n  margin-right: 10px;\n  color: white;\ntext-shadow: 0 0 20px #7f00ff,\n             0 0 30px #9831ff,\n             0 0 40px #ac59ff;\n"]))),_=A.Z.input(i||(i=(0,z.Z)(["\n  width: 200px;\n  height: 20px;\n  border-radius: 5px;\n  border: solid 1px;\n  \n  &:not(:last-child) {\n    margin-right: 20px;\n  }\n"]))),q=A.Z.button(s||(s=(0,z.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 15px;\n  width: 180px;\n  font-size: 16px;\n  padding: 1.5rem;  \n  margin-top: 25px;\n  background: transparent;\n  text-align: center;\n  border-radius: 5px;\n  cursor: pointer;\n  color: rgb(127, 255, 0);\n  border: rgb(127, 255, 0) 0.125em solid;\n  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em rgb(127, 255, 0);\n  box-shadow: inset 0 0 0.5em 0 rgb(127, 255, 0), 0 0 0.5em 0 rgb(127, 255, 0);\n:hover,\n:focus{\n  background-color: rgb(127, 255, 0);\n  color: black;\n  border-color: transparent;\ntransition-duration: 250ms;\n}\n"]))),L=t(184),E=function(){var n=(0,b.v9)(v),e=(0,b.I0)();return(0,L.jsx)(F,{children:(0,L.jsx)("div",{children:(0,L.jsx)(g.J9,{initialValues:{name:"",number:""},onSubmit:function(t,r){var a=r.resetForm;n.find((function(n){return t.name.toLowerCase()===n.name.toLowerCase()}))?j.Notify.failure("".concat(t.name," is already in contacts")):e((0,Z.uK)(t))&&a()},children:(0,L.jsxs)(N,{children:[(0,L.jsx)(I,{children:"Name"}),(0,L.jsx)(g.gN,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",as:_,required:!0}),(0,L.jsx)(I,{children:"Number"}),(0,L.jsx)(g.gN,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",as:_,required:!0}),(0,L.jsx)(q,{variant:"contained",type:"submit",children:"Add contact"})]})})})})},J=t(7803),K=A.Z.div(c||(c=(0,z.Z)(["\ndisplay: flex;\njustify-content: center;\n"]))),P=A.Z.h3(d||(d=(0,z.Z)(["\n  margin-bottom: 10px;\n  color: white;\ntext-shadow: 0 0 20px #7f00ff,\n             0 0 30px #9831ff,\n             0 0 40px #ac59ff;\n"]))),S=A.Z.input(p||(p=(0,z.Z)(["\n  width: 200px;\n  height: 20px;\n  border-radius: 5px;\n  border: solid 1px;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n"]))),U=function(){var n=(0,b.I0)(),e=(0,b.v9)(k);return(0,L.jsx)("section",{children:(0,L.jsx)(K,{children:(0,L.jsxs)(P,{children:["Find contact by name: ",(0,L.jsx)("br",{}),(0,L.jsx)(S,{type:"text",name:"filter",value:e,onChange:function(e){var t=e.target.value;n((0,J.h)(t))},title:"Search field",required:!0})]})})})},B=t(7981),D=A.Z.ul(x||(x=(0,z.Z)(["\n  margin-top: 30px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n"]))),G=A.Z.li(l||(l=(0,z.Z)(["\n  margin-bottom: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-basis: calc((100% - 60px) / 3);\n"]))),M=(A.Z.p(u||(u=(0,z.Z)(["\n  margin-bottom: 10px;\n"]))),A.Z.p(m||(m=(0,z.Z)(["\n  text-transform: capitalize;\n  color: white;\n  text-shadow:0 0 20px rgba(127,0,255,0),\n             0 0 30px #9831ff,\n             0 0 40px #ac59ff;\n"])))),V=A.Z.button(f||(f=(0,z.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 180px;\n  font-size: 16px;\n  color: #e04848;\n  padding: 1.5rem;\n  border-radius: 5px;\n  border-color: transparent;\n  margin-top: 25px;\n  background: transparent;\n  text-align: center;\n  border-radius: 5px;\n  cursor: pointer;\n  box-shadow: 0 0 50px 15px #e04848;\n  border: #e04848 0.125em solid;\n  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em #e04848;\n  box-shadow: inset 0 0 0.5em 0 #e04848, 0 0 0.5em 0 #e04848;\n  :hover,\n:focus{\n  background-color: #e04848;\n  color: black;\n  border-color: transparent;\ntransition-duration: 250ms;\n}\n"]))),$=function(){var n=(0,b.I0)(),e=(0,b.v9)(C),t=(0,b.v9)(y);return(0,h.useEffect)((function(){n((0,Z.yF)())}),[n]),(0,L.jsx)("section",{children:(0,L.jsxs)("div",{children:[(0,L.jsx)("h2",{children:"Contacts:"}),0===e.length?(0,L.jsx)("h2",{children:"Phonebook is empty"}):(0,L.jsxs)(D,{children:[t&&(0,L.jsx)(B.a,{}),e.map((function(e){var t=e.id,r=e.name,a=e.number;return(0,L.jsxs)(G,{children:[(0,L.jsx)(M,{children:r}),(0,L.jsx)(M,{children:a}),(0,L.jsx)(V,{variant:"contained",onClick:function(){n((0,Z.GK)(t))},children:"Delete contact"})]},t)}))]})]})})},H=function(){var n=(0,b.I0)();return(0,h.useEffect)((function(){n((0,Z.yF)())}),[n]),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(E,{}),(0,L.jsx)(U,{}),(0,L.jsx)($,{})]})}}}]);
//# sourceMappingURL=34.6a0aa8d8.chunk.js.map