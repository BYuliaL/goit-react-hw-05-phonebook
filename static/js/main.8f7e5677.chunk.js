(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{19:function(t,e,n){t.exports={contactsList:"Contacts_contactsList__1Lr0X",contactsList__button:"Contacts_contactsList__button__2xb6F"}},24:function(t,e,n){t.exports={filter:"Filter_filter__2S1P0"}},50:function(t,e,n){},51:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(10),o=n.n(r),s=n(11),i=n(12),u=n(15),l=n(13),b=n(8),j=n(5),d=n(3),m=n(23),f=n.n(m),h={addContacts:Object(d.b)("contact/add",(function(t,e){return{payload:{id:f.a.generate(),name:t,number:e}}})),deleteContacts:Object(d.b)("contact/delete"),changeFilter:Object(d.b)("contacts/filter")},O=n(7),p=n.n(O),_=n(1),x=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(b.a)({},a,c))},t.handleSubmit=function(e){var n=t.state.name;e.preventDefault(),t.props.contacts.map((function(t){return t.name.toLowerCase()})).includes(n.toLowerCase())?alert("Name '".concat(n,"' is already in contacts")):t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(_.jsxs)("form",{onSubmit:this.handleSubmit,className:p.a.form,children:[Object(_.jsxs)("label",{className:p.a.form__label,children:["Name",Object(_.jsx)("br",{}),Object(_.jsx)("input",{className:p.a.form__input,type:"text",value:this.state.name,onChange:this.handleChange,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(_.jsx)("br",{}),Object(_.jsxs)("label",{className:p.a.form__label,children:["Namber",Object(_.jsx)("br",{}),Object(_.jsx)("input",{className:p.a.form__input,value:this.state.number,onChange:this.handleChange,type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(_.jsx)("br",{}),Object(_.jsx)("button",{className:p.a.form__button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),v=Object(j.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{onSubmit:function(e){var n=e.name,a=e.number;return t(h.addContacts(n,a))}}}))(x),C=n(6),g=n.n(C),y=n(19),N=n.n(y),k=function(t){var e=t.contacts,n=t.onDeleteContact,a=void 0===n?function(){return null}:n;return Object(_.jsx)("ul",{children:e.map((function(t){var e=t.id,n=t.name,c=t.number;return Object(_.jsxs)("li",{className:N.a.contactsList,children:[n,", ",c,Object(_.jsx)("button",{className:N.a.contactsList__button,type:"button",onClick:function(){return a(e)},children:"Delete"})]},e)}))})};k.prototype={contacts:g.a.arrayOf(g.a.shape({id:g.a.string.isRequired,name:g.a.string.isRequired,number:g.a.string.isRequired}))};var w,L=Object(j.b)((function(t){var e=t.contacts;return{contacts:function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}(e.items,e.filter)}}),(function(t){return{onDeleteContact:function(e){return t(h.deleteContacts(e))}}}))(k),A=n(24),S=n.n(A),F=Object(j.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(h.changeFilter(e.currentTarget.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(_.jsxs)("label",{className:S.a.filter,children:["Find contacts by name: ",Object(_.jsx)("br",{}),Object(_.jsx)("input",{type:"text",value:e,onChange:n})]})})),q=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)("h2",{children:"Phonebook"}),Object(_.jsx)(v,{}),Object(_.jsx)("h2",{children:"Contacts"}),Object(_.jsx)(F,{}),Object(_.jsx)(L,{})]})}}]),n}(a.Component),z=n(14),D=n(2),B=n(25),J=n.n(B),R=n(4),Z=n(26),M=n.n(Z),P=Object(d.c)([],(w={},Object(b.a)(w,h.addContacts,(function(t,e){return[e.payload].concat(Object(z.a)(t))})),Object(b.a)(w,h.deleteContacts,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),w)),T=Object(d.c)("",Object(b.a)({},h.changeFilter,(function(t,e){return e.payload}))),X=Object(D.c)({items:P,filter:T}),E={key:"contacts",storage:M.a,blacklist:["filter"]},I=[].concat(Object(z.a)(Object(d.d)({serializableCheck:{ignoredActions:[R.a,R.f,R.b,R.c,R.d,R.e]}})),[J.a]),$=Object(D.c)({contacts:Object(R.g)(E,X)}),G=Object(d.a)({reducer:$,middleware:I,devTools:!1}),H={store:G,persistor:Object(R.h)(G)},K=n(27);n(49),n(50);o.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(j.a,{store:H.store,children:Object(_.jsx)(K.a,{loading:null,persistor:H.persistor,children:Object(_.jsx)(q,{})})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={form__button:"Form_form__button__N_N_d",form__label:"Form_form__label__3BhX_"}}},[[51,1,2]]]);
//# sourceMappingURL=main.8f7e5677.chunk.js.map