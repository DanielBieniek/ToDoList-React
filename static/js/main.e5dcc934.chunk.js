(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{24:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(17),i=n.n(a),r=(n(24),n(10)),l=n(2),j=n(9),o=n(0),d=function(e){var t=e.loggedIn,n=e.setLoggedIn,s=Object(l.g)();return Object(o.jsxs)("header",{children:[Object(o.jsx)("span",{children:"ToDo-List"}),t?Object(o.jsx)(j.c,{role:"button",tabIndex:"0",onClick:function(){n(!1),s.push("/")}}):""]})},u=function(e){var t=e.search,n=e.setSearch;return Object(o.jsx)("div",{className:"SearchAndSort",children:Object(o.jsx)("form",{onSubmit:function(e){return e.preventDefault()},children:Object(o.jsx)("input",{id:"search",type:"text",role:"searchbox",placeholder:"Search",value:t,onChange:function(e){return n(e.target.value)}})})})},b=n(6),h=function(e){var t=e.list,n=e.handleDeleteListElement;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(b.b,{to:"/list/"+t.id,className:"ListElementLink",children:[Object(o.jsx)("span",{children:t.name}),Object(o.jsxs)("span",{children:["Created at: ",t.published_at.substring(0,10)]}),Object(o.jsxs)("span",{children:["Completed: ",t.task.filter((function(e){return!0===e.isDone})).length," Uncompleted: ",t.task.filter((function(e){return!1===e.isDone})).length," All: ",t.task.length]})]},t.id),Object(o.jsx)(j.d,{className:"trashButton",role:"button",tabIndex:"0",onClick:function(){return n(t.id)}})]})},O=function(e){var t=e.lists,n=e.setLists,c=Object(s.useState)(""),a=Object(r.a)(c,2),i=a[0],l=a[1],d=(null===t||void 0===t?void 0:t.length)?t[t.length-1].id+1:1,O={id:d,name:"ToDo List Name",task:[],published_at:(new Date).toISOString()},x=function(e){var s=t.filter((function(t){return t.id!==e}));n(s)};return Object(o.jsxs)("div",{className:"ToDoList",children:[Object(o.jsxs)("ul",{children:[Object(o.jsx)(u,{search:i,setSearch:l}),(null===t||void 0===t?void 0:t.length)?Object(o.jsx)(o.Fragment,{children:t.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())})).map((function(e){return Object(o.jsx)("li",{className:"ListElement",children:Object(o.jsx)(h,{list:e,handleDeleteListElement:x})})}))}):Object(o.jsx)("li",{className:"ListElement",children:Object(o.jsx)("span",{children:"List is empty."})})]}),Object(o.jsxs)(b.b,{to:"/list/"+d,className:"link addListButton",onClick:function(){var e=t.concat(O);n(e)},children:[" ",Object(o.jsx)(j.b,{})," "]})]})},x=function(e){var t=e.setLoggedIn,n=Object(l.g)();return Object(o.jsxs)("div",{className:"Login",children:[Object(o.jsx)("h1",{children:"Login"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",placeholder:"Email or Username"}),Object(o.jsx)("input",{type:"text",placeholder:"Password"}),Object(o.jsx)("button",{onClick:function(){t(!0),n.push("/list")},children:"Login"}),Object(o.jsx)("p",{children:"or"}),Object(o.jsx)(b.b,{to:"/register",className:"link",children:" create an account "})]})},p=function(e){var t=e.setLoggedIn,n=Object(l.g)();return Object(o.jsxs)("div",{className:"Register",children:[Object(o.jsxs)(b.b,{to:"/",className:"link",children:[" ",Object(o.jsx)(j.a,{})," "]}),Object(o.jsx)("h1",{children:"Create a new account"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",placeholder:"Username"}),Object(o.jsx)("input",{type:"text",placeholder:"Email"}),Object(o.jsx)("input",{type:"text",placeholder:"Password"}),Object(o.jsx)("input",{type:"text",placeholder:"Repeat Password"}),Object(o.jsx)("button",{onClick:function(){t(!0),n.push("/list")},children:"Create"})]})},m=n(3),f=function(e){var t=e.item,n=e.listId,s=e.handleChangeCheckbox,c=e.handleChangeTaskName,a=e.handleDeleteTask;return Object(o.jsxs)("li",{className:"TaskElement",children:[Object(o.jsx)("input",{onChange:function(){return s(n,t.id)},type:"checkbox",checked:t.isDone}),Object(o.jsx)("input",{onChange:function(e){return c(e,n,t.id)},type:"text",placeholder:"Task name",value:t.name}),Object(o.jsx)(j.d,{className:"trashButton",role:"button",tabIndex:"0",onClick:function(){return a(n,t.id)}})]},t.id)},g=function(e){var t=e.newTask,n=e.listId,s=e.handleAddTask,c=e.setNewTask;return Object(o.jsx)("li",{className:"TaskElement",children:Object(o.jsxs)("form",{onSubmit:function(e){return s(e,n)},children:[Object(o.jsx)("input",{id:"addTaskCheckBox",type:"checkbox",checked:t.isDone,onChange:function(e){return c(Object(m.a)(Object(m.a)({},t),{},{isDone:!t.isDone}))}}),Object(o.jsx)("input",{id:"addTaskText",type:"text",placeholder:"Task name",value:t.name,onChange:function(e){return c(Object(m.a)(Object(m.a)({},t),{},{name:e.target.value}))},required:!0}),Object(o.jsx)("button",{type:"submit",className:"AddTask",children:"ADD"})]})})},k=function(e){var t=e.lists,n=e.setLists,c=Object(l.g)(),a=Object(l.h)().id,i=t.filter((function(e){return e.id===parseInt(a)}))[0],j=i.task.length?i.task[i.task.length-1].id+1:1,d=Object(s.useState)({id:j,name:"",isDone:!1}),u=Object(r.a)(d,2),b=u[0],h=u[1],O=function(e,s){var c=t.map((function(t){return t.id===e?Object(m.a)(Object(m.a)({},t),{},{task:t.task.map((function(e){return e.id===s?Object(m.a)(Object(m.a)({},e),{},{isDone:!e.isDone}):e}))}):t}));n(c)},x=function(e,s,c){var a=t.map((function(t){return t.id===s?Object(m.a)(Object(m.a)({},t),{},{task:t.task.map((function(t){return t.id===c?Object(m.a)(Object(m.a)({},t),{},{name:e.target.value}):t}))}):t}));n(a)},p=function(e,s){var c=t.map((function(t){return t.id===e?Object(m.a)(Object(m.a)({},t),{},{task:t.task.filter((function(e){return e.id!==s}))}):t}));n(c)};return t.findIndex((function(e){return e.id===parseInt(a)}))<0&&c.push("/"),Object(o.jsx)("div",{className:"Tasks",children:t.findIndex((function(e){return e.id===parseInt(a)}))<0?"":Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{onChange:function(e){return function(e,s){var c=t.map((function(t){return t.id===s?Object(m.a)(Object(m.a)({},t),{},{name:e.target.value}):t}));n(c)}(e,i.id)},type:"text",placeholder:"List name",value:i.name}),Object(o.jsxs)("ul",{className:"TaskList",children:[i.task.map((function(e){return Object(o.jsx)(f,{item:e,listId:i.id,handleChangeCheckbox:O,handleChangeTaskName:x,handleDeleteTask:p})})),Object(o.jsx)(g,{newTask:b,listId:i.id,handleAddTask:function(e,s){e.preventDefault();var c=t.map((function(e){return e.id===s?Object(m.a)(Object(m.a)({},e),{},{task:e.task.concat(b)}):e}));n(c),h({id:++j,name:"",isDone:!1})},setNewTask:h})]}),Object(o.jsxs)("div",{className:"TaskNav",children:[Object(o.jsx)("span",{}),Object(o.jsx)("button",{onClick:function(){c.push("/list")},className:"SaveList",children:"SAVE"})]})]})})};var v=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)([]),i=Object(r.a)(a,2),j=i[0],u=i[1];return Object(s.useEffect)((function(){c(JSON.parse(localStorage.getItem("loggedIn"))||!1),u(JSON.parse(localStorage.getItem("ToDoList"))||[])}),[]),Object(s.useEffect)((function(){localStorage.setItem("ToDoList",JSON.stringify(j))}),[j]),Object(s.useEffect)((function(){localStorage.setItem("loggedIn",JSON.stringify(n))}),[n]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(d,{loggedIn:n,setLoggedIn:c}),Object(o.jsx)("main",{children:Object(o.jsxs)(l.d,{children:[Object(o.jsx)(l.b,{exact:!0,path:"/",children:n?Object(o.jsx)(l.a,{to:"/list"}):Object(o.jsx)(x,{setLoggedIn:c})}),Object(o.jsx)(l.b,{path:"/register",children:n?Object(o.jsx)(l.a,{to:"/list"}):Object(o.jsx)(p,{setLoggedIn:c})}),Object(o.jsx)(l.b,{exact:!0,path:"/list",children:n?Object(o.jsx)(O,{lists:j,setLists:u}):Object(o.jsx)(l.a,{to:"/"})}),Object(o.jsx)(l.b,{path:"/list/:id",children:n?Object(o.jsx)(k,{lists:j,setLists:u}):Object(o.jsx)(l.a,{to:"/"})}),Object(o.jsx)(l.b,{path:"*",children:Object(o.jsx)("div",{children:"404 - webpage not found"})})]})}),Object(o.jsx)("footer",{children:"Daniel Bieniek"})]})};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(b.a,{children:Object(o.jsx)(l.b,{path:"/",component:v})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.e5dcc934.chunk.js.map