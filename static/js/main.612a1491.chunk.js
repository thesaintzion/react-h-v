(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{100:function(e,a,t){},101:function(e,a,t){},102:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(14),r=t.n(c),o=(t(69),t(70),t(71),t(72),t(20)),s=t(13),i=t(21),u=t(22),m=t(23),h=(t(73),t(28)),p=t(24),d=t(27),g=t.n(d),b=(t(91),t(32)),E=t.n(b),f=function(){return l.a.createElement("div",{className:"main-spinal d-flex justify-content-center align-items-center app"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col  mx-auto"},l.a.createElement("div",{className:"spin-style d-flex justify-content-center align-content-center align-items-center"},l.a.createElement("img",{src:E.a,alt:"logo"})))))},y=function(e){var a=e.component,t=e.layout;return l.a.createElement(p.a,{render:function(e){return l.a.createElement(t,null,l.a.createElement(a,null))}})},j=t(5),Y=(t(97),t(125)),k=t(122),A=t(36),O=t.n(A),L=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(c)))).state={apps:[{route:"/blog",name:"Blog",icon:"list"},{route:"/snake-game",name:"Snake Game",icon:"videogame_asset"}],darkTheme:!1,users:[],user:{},snackbarOpen:!1,num:11},t.handleClose=function(e,a){"clickaway"!==a&&t.setState({snackbarOpen:t.state.snackbarOpen=!1})},t.showSnackBar=function(e){var a;return l.a.createElement(Y.a,(a={open:t.state.snackbarOpen,anchorOrigin:{vertical:"bottom",horizontal:"center"},autoHideDuration:6e3},Object(j.a)(a,"open",!0),Object(j.a)(a,"onClose",t.handleClose),Object(j.a)(a,"message",e),a))},t.getUsers=function(){g.a.get("http://localhost:3600/api/chat_app/v1/users").then((function(e){console.log("THe Main users",e),t.setState({users:e.data.users})})).catch((function(e){console.log("Error geting users",e)}))},t.addUser=function(){t.state.user={gmail_Id:"12390348545",name:"Saint Zion ".concat(t.state.num),email:"saint".concat(t.state.num,"@gmail.com"),verified_email:"true",given_name:"Saint",family_name:"Zion",picture:"https://lh3.googleusercontent.com/a-/AOh14Giw52i45aXhJYcYR3P2b28_vd9p00_-bJTxqdt6",locale:"en"},g.a.post("http://localhost:3600/api/chat_app/v1/user2",t.state.user).then((function(e){console.log(e),t.getUsers(),t.setState({snackbarOpen:t.state.snackbarOpen=!0})})).catch((function(e){console.log("Error posting users",e)}))},t.handleThemeChange=function(e){t.setState({darkTheme:t.state.darkTheme=e.target.checked})},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getUsers()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(Y.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:this.state.snackbarOpen,autoHideDuration:6e3,onClose:this.handleClose,message:"User added.",action:l.a.createElement(l.a.Fragment,null,l.a.createElement(k.a,{size:"small","aria-label":"close",color:"inherit",onClick:this.handleClose},l.a.createElement(O.a,{fontSize:"small"})))}),l.a.createElement("div",{className:"dashboard  animated fadeInUp  ".concat(this.state.darkTheme?"bg-dark text-warning":"")},l.a.createElement("section",{className:"container"},l.a.createElement("div",{className:"mb-5"},l.a.createElement("h3",null,"Register / Sign"),l.a.createElement("button",{className:"btn  btn-outline-danger rounded-lg"},"SIGN IN WITH GOOGLE"),l.a.createElement("button",{onClick:this.addUser,className:"btn  btn-outline-dark ml-4 rounded-lg"},"AUTO ADD USER")),l.a.createElement("div",{className:"row"},this.state.users.map((function(e){return l.a.createElement("div",{key:e._id,className:"col-md-4"},l.a.createElement("div",{className:"card mb-4"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h3",null,e.name),l.a.createElement("p",null,e.email),l.a.createElement("p",null,e.gmail_Id),l.a.createElement("img",{width:"40",className:"rounded-circle shadow",src:e.picture}))))}))))))}}]),a}(l.a.Component),v=(t(100),t(124)),H=t(123),w=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(c)))).state={apps:[{route:"/blog",name:"Blog",icon:"list"},{route:"/snake-game",name:"Snake Game",icon:"videogame_asset"}],darkTheme:!1,users:[],user:{},snackbarOpen:!1,num:11},t.handleClose=function(e,a){"clickaway"!==a&&t.setState({snackbarOpen:t.state.snackbarOpen=!1})},t.showSnackBar=function(e){var a;return l.a.createElement(Y.a,(a={open:t.state.snackbarOpen,anchorOrigin:{vertical:"bottom",horizontal:"center"},autoHideDuration:6e3},Object(j.a)(a,"open",!0),Object(j.a)(a,"onClose",t.handleClose),Object(j.a)(a,"message",e),a))},t.getUsers=function(){g.a.get("http://localhost:3600/api/chat_app/v1/users").then((function(e){console.log("THe Main users",e),t.setState({users:e.data.users})})).catch((function(e){console.log("Error geting users",e)}))},t.addUser=function(){t.state.user={gmail_Id:"12390348545",name:"Saint Zion ".concat(t.state.num),email:"saint".concat(t.state.num,"@gmail.com"),verified_email:"true",given_name:"Saint",family_name:"Zion",picture:"https://lh3.googleusercontent.com/a-/AOh14Giw52i45aXhJYcYR3P2b28_vd9p00_-bJTxqdt6",locale:"en"},g.a.post("http://localhost:3600/api/chat_app/v1/user2",t.state.user).then((function(e){console.log(e),t.getUsers(),t.setState({snackbarOpen:t.state.snackbarOpen=!0})})).catch((function(e){console.log("Error posting users",e)}))},t.handleThemeChange=function(e){t.setState({darkTheme:t.state.darkTheme=e.target.checked})},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getUsers()}},{key:"render",value:function(){return l.a.createElement("div",{className:"login"},l.a.createElement("div",{className:"animated fadeInUp  ".concat(this.state.darkTheme?"bg-dark text-warning":"")},l.a.createElement("section",{className:"container"},l.a.createElement("div",null,l.a.createElement("h3",null,"Sign In"),l.a.createElement("p",null,"Login with your social accounts.")),l.a.createElement("div",null,l.a.createElement(H.a,{className:"bg-primary text-white mb-3",variant:"contained",color:"default",startIcon:l.a.createElement(v.a,null,"person")},"Facebook")),l.a.createElement("div",null,l.a.createElement(H.a,{className:"bg-danger mb-3 text-white",variant:"contained",color:"default",startIcon:l.a.createElement(v.a,null,"person")},"Google")),l.a.createElement("div",null,l.a.createElement(H.a,{className:"bg-dark mb-3 text-white",variant:"contained",color:"default",startIcon:l.a.createElement(v.a,null,"person")},"Github")))))}}]),a}(l.a.Component),B=t(49),C=(t(101),function(e){var a=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"auth"},l.a.createElement("header",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"app-brand d-flex  align-items-center w-100"},l.a.createElement("img",{src:E.a,className:"app-logo mx-auto",alt:"logo"})))),a,l.a.createElement(B.a,null)))}),N=Object(n.lazy)((function(){return Promise.all([t.e(3),t.e(4)]).then(t.bind(null,146))})),S=Object(n.lazy)((function(){return t.e(5).then(t.bind(null,147))})),T=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={users:[]},t.url="http://localhost:3600/api/no-whatsapp/v1",t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement("div",{className:"app"},l.a.createElement(n.Suspense,{fallback:l.a.createElement(f,null)},l.a.createElement(p.c,null,l.a.createElement(y,{exact:!0,path:"/",component:N,layout:S}),l.a.createElement(y,{path:"/register",component:L,layout:S}),l.a.createElement(y,{path:"/login",component:w,layout:C})))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(h.a,null,l.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},32:function(e,a){e.exports="data:image/png;base64,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"},49:function(e,a,t){"use strict";var n=t(20),l=t(13),c=t(21),r=t(22),o=t(23),s=t(0),i=t.n(s),u=function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("footer",{className:"bg-light p-3 mt-5"},"\xa9 App footer"))}}]),a}(i.a.Component);a.a=u},64:function(e,a,t){e.exports=t(102)},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},91:function(e,a,t){},97:function(e,a,t){}},[[64,1,2]]]);
//# sourceMappingURL=main.612a1491.chunk.js.map