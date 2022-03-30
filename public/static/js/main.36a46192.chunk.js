(this["webpackJsonpreact-rails-project"]=this["webpackJsonpreact-rails-project"]||[]).push([[0],{17:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(10),r=n.n(s),a=(n(9),n(11)),i=n(3),o=n(0);var j=function(e){var t=e.onEditItem,n=e.post,s=n.id,r=n.description,a=n.price,j=Object(c.useState)(a),u=Object(i.a)(j,2),l=u[0],b=u[1],d=Object(c.useState)(r),O=Object(i.a)(d,2),h=O[0],_=O[1];return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{className:"edit",onSubmit:function(e){e.preventDefault(),fetch("/posts/".concat(s),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({description:h,price:l})}).then((function(e){return e.json()})).then((function(e){t(e)}))},children:[Object(o.jsx)("label",{children:"Edit Description"}),Object(o.jsx)("input",{className:"description-field",type:"text",placeholder:r,value:h,onChange:function(e){return _(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{children:"Edit Price"}),Object(o.jsx)("input",{type:"number",placeholder:"New price",value:l,onChange:function(e){return b(parseFloat(e.target.value))}}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{type:"submit",children:"Confirm Edit"})]})})},u=function(e){var t=e.post,n=e.onItemDelete,s=e.onEditItem,r=e.onFavorite,a=Object(c.useState)(!1),u=Object(i.a)(a,2),l=u[0],b=u[1],d=Object(c.useState)(!1),O=Object(i.a)(d,2),h=O[0],_=O[1],p=t.id,x=t.item_name,m=t.description,f=t.price;function v(){_(!h),fetch("posts/".concat(p),{method:"PATCH",headers:{"Content-type":"application/json"},body:JSON.stringify({isFavorite:!0})}).then((function(e){return e.json()})).then((function(e){return r(e)}))}return Object(o.jsxs)("div",{className:"each_post",children:[Object(o.jsxs)("h3",{children:[" ",x," "]}),Object(o.jsxs)("h4",{children:[" Description: ",m]}),Object(o.jsxs)("h4",{children:["Price: $",f]}),l?Object(o.jsx)(j,{onEditItem:function(e){s(e)},post:t}):null,Object(o.jsx)("button",{onClick:function(){b(!l)},className:"each-post-btn",children:"EDIT ITEM"}),Object(o.jsx)("button",{onClick:function(){fetch("posts/".concat(p),{method:"DELETE"}).then((function(e){e.ok&&n(p)}))},className:"each-post-btn",children:"DELETE"}),h?Object(o.jsx)("button",{onClick:v,className:"each-post-btn",children:"\u2b50"}):Object(o.jsx)("button",{onClick:v,className:"each-post-btn",children:"\u2606"}),Object(o.jsx)("div",{children:"___________________________________________________________________"})]})};var l=function(e){var t=e.currentUser,n=(e.setCurrentUser,Object(c.useState)([])),s=Object(i.a)(n,2),r=s[0],a=s[1];function j(e){var t=r.filter((function(t){return t.id!==e}));a(t)}function l(e){var t=r.map((function(t){return t.id===e.id?e:t}));a(t)}function b(e){var t=r.map((function(t){return t.id===e.id?e:t}));a(t)}return Object(c.useEffect)((function(){fetch("/posts").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(o.jsxs)("div",{className:"authpage",children:[Object(o.jsx)("div",{className:"header",children:Object(o.jsxs)("h2",{children:["Welcome ",t.username,"!"]})}),Object(o.jsx)("div",{children:"___________________________________________________________________"}),r.map((function(e){return Object(o.jsx)(u,{post:e,onItemDelete:j,onEditItem:l,setPosts:a,onFavorite:b},e.id)}))]})},b=function(e){var t=e.setCurrentUser,n=Object(c.useState)(""),s=Object(i.a)(n,2),r=s[0],a=s[1],j=Object(c.useState)(""),u=Object(i.a)(j,2),l=u[0],b=u[1];return Object(o.jsxs)("div",{className:"login",children:[Object(o.jsx)("h2",{className:"unauth-header",children:"LOGIN"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:r,password:l})}).then((function(e){e.ok?e.json().then((function(e){t(e)})):e.json().then((function(e){console.log(e),alert("Invalid Username or password")}))})),a(""),b("")},children:[Object(o.jsx)("label",{children:"Username"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",name:"username",value:r,placeholder:"username",onChange:function(e){return a(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{children:"Password"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"password",name:"",value:l,placeholder:"password",onChange:function(e){return b(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{className:"unauth-button",children:"LOG IN"})]})]})},d=function(e){var t=e.setCurrentUser,n=Object(c.useState)(""),s=Object(i.a)(n,2),r=s[0],a=s[1],j=Object(c.useState)(""),u=Object(i.a)(j,2),l=u[0],b=u[1],d=Object(c.useState)(""),O=Object(i.a)(d,2),h=O[0],_=O[1];return Object(o.jsxs)("div",{className:"signup",children:[Object(o.jsx)("h2",{className:"unauth-header",children:"CREATE AN ACCOUNT"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={username:r,password:l,password_confirmation:h};fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){e.ok?e.json().then((function(e){t(e)})):e.json().then((function(e){alert("Please enter your username and password")}))}))},children:[Object(o.jsx)("label",{className:"userFormItem",children:"Username"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",name:"Username",placeholder:"Username",value:r,onChange:function(e){return a(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{className:"userFormItem",children:"Password"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"password",name:"password",placeholder:"password",value:l,onChange:function(e){return b(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{className:"userFormItem",children:"Confirm Password"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"password",name:"password",placeholder:"confirm password",value:h,onChange:function(e){return _(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{type:"submit",className:"unauth-button",children:"CREATE ACCOUNT"})]})]})};var O=function(e){var t=e.setCurrentUser;return Object(o.jsxs)("div",{className:"unauthpage",children:[Object(o.jsx)(b,{setCurrentUser:t}),Object(o.jsx)(d,{setCurrentUser:t})]})},h=n(6),_=n(2);var p=function(){return Object(o.jsxs)("div",{className:"about",children:[Object(o.jsx)("h2",{children:"About"}),Object(o.jsx)("div",{className:"text",children:Object(o.jsxs)("p",{children:["This is an application that is designed to mimic the basic functionality of craigslist. A user can create an account or login to their existing account, create posts, read through current posts, update a posts description and price or delete a post. This application will be expanded upon soon!",Object(o.jsx)("br",{}),"Thanks for visiting!"]})})]})},x=function(e){e.currentUser;var t=e.setCurrentUser;return Object(o.jsx)("div",{children:Object(o.jsxs)("nav",{className:"nav-header",children:[Object(o.jsxs)("ul",{className:"navbar",children:[Object(o.jsxs)("li",{children:[Object(o.jsx)(h.b,{to:"/",className:"nav-item",children:"HOME"})," "]}),Object(o.jsx)("li",{children:Object(o.jsx)(h.b,{to:"/about",className:"nav-item",children:"ABOUT"})}),Object(o.jsx)("li",{children:Object(o.jsx)(h.b,{to:"/new",className:"nav-item",children:"CREATE NEW POSTING"})})]}),Object(o.jsx)("button",{className:"logout-button",onClick:function(){fetch("/logout",{method:"DELETE"}).then((function(e){e.ok&&t(null)}))},children:"LOG OUT"})]})})};var m=function(e){var t=e.onPostAdd,n=Object(c.useState)(!1),s=Object(i.a)(n,2),r=s[0],a=s[1],j=Object(c.useState)(""),u=Object(i.a)(j,2),l=u[0],b=u[1],d=Object(c.useState)(""),O=Object(i.a)(d,2),h=O[0],_=O[1],p=Object(c.useState)(""),x=Object(i.a)(p,2),m=x[0],f=x[1],v=Object(c.useState)(""),g=Object(i.a)(v,2),N=g[0],C=g[1];function y(){a(!r)}return Object(o.jsxs)("div",{className:"new-item-page",children:[r?Object(o.jsx)("button",{onClick:y,className:"newpost-button",children:"HIDE FORM"}):Object(o.jsx)("button",{className:"newpost-button",onClick:y,children:"CREATE NEW POSTING"}),r?Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({item_name:l,description:h,price:m,category_id:N}),b(""),_(""),f(""),C("")},className:"newpost",children:[Object(o.jsx)("h4",{children:"CREATE POST"}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{children:"Item Name "}),Object(o.jsx)("input",{type:"text",placeholder:"item name",id:"item_name",onChange:function(e){b(e.target.value)},value:l}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{children:"Description "}),Object(o.jsx)("input",{type:"text",placeholder:"description",className:"item-description",id:"description",onChange:function(e){_(e.target.value)},value:h}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{children:"Price "}),Object(o.jsx)("input",{type:"integer",placeholder:"price",id:"price",onChange:function(e){f(e.target.value)},value:m}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{children:"Category "}),Object(o.jsxs)("select",{onChange:function(e){C(e.target.value)},children:[Object(o.jsx)("option",{id:"category_id",value:"",children:"Select One"}),Object(o.jsx)("option",{id:"category_id",value:"1",children:"Sporting"}),Object(o.jsx)("option",{id:"category_id",value:"2",children:"Tools"}),Object(o.jsx)("option",{id:"category_id",value:"3",children:"Free"})]}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{className:"add-btn",children:"ADD ITEM"})]}):null]})};var f=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(null),j=Object(i.a)(r,2),u=j[0],b=j[1],d=Object(c.useState)(!1),f=Object(i.a)(d,2),v=f[0],g=f[1];return Object(c.useEffect)((function(){fetch("/me").then((function(e){e.ok?e.json().then((function(e){b(e),g(!0)})):g(!0)}))}),[]),v?u?Object(o.jsx)("div",{children:Object(o.jsxs)(h.a,{children:[Object(o.jsx)(x,{currentUser:u,setCurrentUser:b}),Object(o.jsxs)(_.c,{children:[Object(o.jsx)(_.a,{path:"/",element:Object(o.jsx)(l,{currentUser:u,setCurrentUser:b})}),Object(o.jsx)(_.a,{path:"/about",element:Object(o.jsx)(p,{})}),Object(o.jsx)(_.a,{path:"/new",element:Object(o.jsx)(m,{onPostAdd:function(e){fetch("/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){s([].concat(Object(a.a)(n),[e]))}))}})})]})]})}):Object(o.jsx)(O,{setCurrentUser:b}):Object(o.jsx)("div",{children:"test"})};r.a.render(Object(o.jsx)(f,{}),document.getElementById("root"))},9:function(e,t,n){}},[[17,1,2]]]);
//# sourceMappingURL=main.36a46192.chunk.js.map