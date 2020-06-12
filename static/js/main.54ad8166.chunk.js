(this["webpackJsonptast-organizer"]=this["webpackJsonptast-organizer"]||[]).push([[0],{48:function(e,t,a){e.exports=a(61)},57:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n,r=a(0),i=a.n(r),c=a(12),l=a.n(c),o=a(23),s=a(22),u=a(42),d=(a(57),a(16)),m=a(17),p=a(19),f=a(18),E=a(65),h=a(63),v=0,b=function(e){return{type:"CLOSE_NOTIFICATION",notificationId:e}},y=function(e){return e.children},k=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={tasks:{name:"",duration:""},editId:"",show:!1},e.nameAddHandler=function(t){e.setState({name:t.target.value})},e.durationAddHandler=function(t){e.setState({duration:t.target.value})},e.taskChangeHandler=function(t,a){e.setState({show:!0,editId:t})},e.handleClose=function(){e.setState({show:!1})},e.handleConfirm=function(){e.setState({show:!1}),e.props.editTaskHandler(e.state.editId,e.state.name,e.state.duration)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=i.a.createElement("p",{className:"text-center"},"Please add task");return this.props.tasks&&(t=this.props.tasks.map((function(t,a){return i.a.createElement("tbody",{key:t.id+a},i.a.createElement("tr",{className:"text-success"},i.a.createElement("td",null,t.name),i.a.createElement("td",null,t.duration," second"),i.a.createElement("td",null,i.a.createElement(E.a,{vibrant:"outline-primary",onClick:function(){return e.taskChangeHandler(t.id)}},"Edit"),i.a.createElement("button",{className:"btn btn-outline-primary ml-2",onClick:function(){return e.props.deleteTaskHandler(t.id+a)}},"Delete"))))}))),i.a.createElement(y,null,i.a.createElement("div",{className:"float-left"},i.a.createElement("h4",null,"Task Table")),i.a.createElement("input",{type:"text",placeholder:"Name",onChange:this.nameAddHandler,value:this.state.name}),i.a.createElement("input",{type:"number",min:"1",placeholder:"Duration",onChange:this.durationAddHandler,value:this.state.duration}),i.a.createElement("div",{className:"float-right"},i.a.createElement("button",{className:"btn btn-secondary mb-3",onClick:function(){return e.props.addTaskHandler(e.state.name,e.state.duration)}},"Add Task")),i.a.createElement("div",{className:"table-responsive"},i.a.createElement("table",{className:"table table-striped table-hover table-bordered table-md"},i.a.createElement("thead",{className:"thead-dark"},i.a.createElement("tr",null,i.a.createElement("th",null,"Task Name"),i.a.createElement("th",null,"Task Duration"),i.a.createElement("th",null,"Actions"))),t),i.a.createElement(h.a,{show:this.state.show,onHide:this.handleClose},i.a.createElement(h.a.Header,{closeButton:!0},i.a.createElement(h.a.Title,null,"Modal heading")),i.a.createElement(h.a.Body,null,i.a.createElement("input",{type:"text",placeholder:"name",onChange:this.nameAddHandler,value:this.state.name}),i.a.createElement("input",{min:"1",type:"number",placeholder:"duration",onChange:this.durationAddHandler,value:this.state.duration})),i.a.createElement(h.a.Footer,null,i.a.createElement(E.a,{variant:"secondary",onClick:this.handleClose},"Close"),i.a.createElement(E.a,{variant:"primary",onClick:this.handleConfirm},"Save Changes")))))}}]),a}(r.Component),N=Object(s.b)((function(e){return{tasks:e.tasks}}),(function(e){return{addTaskHandler:function(t,a){return e(function(e,t){return function(a){setTimeout((function(){a(function(e,t){return{type:"ADD_TASK",name:e,duration:t}}(e,t))}),0)}}(t,a))},deleteTaskHandler:function(t){return e(function(e){return{type:"DELETE_TASK",taskId:e}}(t))},editTaskHandler:function(t,a,n){return e(function(e,t,a){return{type:"EDIT_TASK",name:t,duration:a,taskId:e}}(t,a,n))}}}))(k),O=a(32),T=function(e){var t=["#E74C3C","#884EA0","#E67E22","#17A589","#2E86C1","#CB4335","#616A6B","#A3E4D7","#A569BD","#EC7063","#145A32"],a=0,n=Object(O.a)(e.tasks).sort((function(e,t){return e.duration-t.duration})).map((function(e){if((a+=+e.duration)<=60)return e})).map((function(e,a){if(void 0!==e)return i.a.createElement("div",{key:a,style:{height:"".concat(10*+e.duration,"px"),background:"".concat(t[a%11]),display:"flex",justifyContent:"center",alignItems:"center"}},"".concat(e.name))}));return i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-10"},i.a.createElement("div",{className:"card",style:{position:"relative",height:"600px",border:"2px solid gray"}},i.a.createElement("div",{style:{position:"absolute",top:"".concat(10*e.ctr,"px"),right:"0",width:"100%",height:"2px",border:"3px solid #73AD21",textAlign:"right"}},"Curernt Position"),n)),i.a.createElement("div",{className:"col-md-2"},i.a.createElement("div",{className:"row",style:{height:"100px"}},i.a.createElement("div",{className:"col-md-12"},"0 second")),i.a.createElement("div",{className:"row",style:{height:"100px"}},i.a.createElement("div",{className:"col-md-12"},"10 second")),i.a.createElement("div",{className:"row",style:{height:"100px"}},i.a.createElement("div",{className:"col-md-12"},"20 second")),i.a.createElement("div",{className:"row",style:{height:"100px"}},i.a.createElement("div",{className:"col-md-12"},"30 second")),i.a.createElement("div",{className:"row",style:{height:"100px"}},i.a.createElement("div",{className:"col-md-12"},"40 second")),i.a.createElement("div",{className:"row",style:{height:"100px"}},i.a.createElement("div",{className:"col-md-12"},"50 second")),i.a.createElement("div",{className:"row",style:{height:"100px"}},i.a.createElement("div",{className:"col-md-12"},"60 second")))))},g=a(64),C=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={counterState:e.props.ctr},e}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(){var e=this,t=0,a=Object(O.a)(this.props.tasks).sort((function(e,t){return e.duration-t.duration})).map((function(e){if((t+=+e.duration)<=60)return e})).filter((function(e){return void 0!==e})),n=0;this.props.valid&&a.forEach((function(t){e.props.ctr===n&&e.state.counterState!==e.props.ctr&&(e.setState({counterState:e.props.ctr}),e.props.notificationHandler(new Date,t.name,n)),n+=Math.floor(t.duration)}))}},{key:"render",value:function(){var e=this;console.log(this.props.notifications);var t=i.a.createElement("p",{style:{textAlign:"center"}},"Start the timer");return this.props.valid&&(t=this.props.notifications.map((function(t,a){return i.a.createElement(g.a,{key:a,show:!0,onClose:function(){return e.props.closeNotificationHandler(t.id)},className:"mb-2"},i.a.createElement(g.a.Header,null,i.a.createElement("i",{className:"fas fa-bell"}),"\xa0",i.a.createElement("strong",{className:"mr-auto"},t.name," has Started")))}))),i.a.createElement(y,null,i.a.createElement("div",{className:"float-left"},i.a.createElement("h4",null,"Live Timer")),i.a.createElement("div",{className:"float-left ml-5 mb-2"},i.a.createElement("button",{disabled:this.props.play,onClick:function(){return e.props.playTimerHandler(e.props.ctr)},className:"btn btn-outline-primary mr-2"},i.a.createElement("i",{className:"fas fa-play-circle"}),"\xa0start"),i.a.createElement("button",{disabled:this.props.pause,onClick:this.props.pauseTimerHandler,className:"btn btn-outline-secondary mr-2"},i.a.createElement("i",{className:"fas fa-pause-circle"}),"\xa0pause"),i.a.createElement("button",{onClick:this.props.resetTimerHandler,className:"btn btn-outline-secondary"},i.a.createElement("i",{className:"fas fa-redo"}),"\xa0reset"),i.a.createElement("div",{className:"float-right ml-3"},i.a.createElement("p",{style:{textAlign:"center"}},this.props.play?"Your timer is running":-1===this.props.ctr?"Your timer is ready":"Your timer is pasued"))),i.a.createElement("div",{className:"mt-5"},i.a.createElement(T,{tasks:this.props.tasks,ctr:this.props.ctr})),i.a.createElement("div",{className:"container","aria-live":"polite","aria-atomic":"true",style:{position:"relative",minHeight:"200px"}},i.a.createElement("div",{style:{position:"absolute",top:0,left:"150px",textAlign:"center"}},i.a.createElement("div",{className:"container pb-2 mb-5"},t))))}}]),a}(r.Component),j=Object(s.b)((function(e){return{tasks:e.tasks,ctr:e.counter,play:e.play,pause:e.pause,valid:e.valid,notifications:e.notifications}}),(function(e){return{playTimerHandler:function(t){return e((function(e){clearInterval(n),n=setInterval((function(){e({type:"PLAY_TIMER"}),61===++v&&(v=0,clearInterval(n),e({type:"RESET_TIMER"}))}),1e3)}))},pauseTimerHandler:function(){return e((function(e){setTimeout((function(){clearInterval(n),e({type:"PAUSE_TIMER"})}),0)}))},resetTimerHandler:function(){return e((function(e){v=0,setTimeout((function(){clearInterval(n),e({type:"RESET_TIMER"})}),0)}))},notificationHandler:function(t,a,n){return e(function(e,t,a){return function(n){n({type:"PUSH_NOTIFICATION",id:e,name:t,duration:a}),setTimeout((function(){n(b(e))}),1e4)}}(t,a,n))},closeNotificationHandler:function(t){return e(b(t))}}}))(C),A=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"container-fluid"},i.a.createElement("h1",{className:"display-4"},i.a.createElement("strong",null,"Automated Task Organizer")),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-6 mt-5"},i.a.createElement(j,null)),i.a.createElement("div",{className:"col-md-6 mt-5"},i.a.createElement(N,null))))}}]),a}(r.Component),I=(a(58),a(59),a(46)),w=a(5),S=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement(I.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(w.c,null,i.a.createElement(w.a,{path:"/task-organizer",exact:!0,component:A}),i.a.createElement(w.a,{path:"/",component:A}))))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(7),x={tasks:[{id:1,name:"task 1",duration:15},{id:2,name:"task 2",duration:2.5},{id:3,name:"task 3",duration:25},{id:4,name:"task 4",duration:40},{id:5,name:"task 5",duration:10},{id:6,name:"task 6",duration:15},{id:7,name:"task 7",duration:20}],counter:-1,play:!1,pause:!0,valid:!1,notifications:[]},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;if("ADD_TASK"===t.type&&t.name&&t.duration)return Object(H.a)(Object(H.a)({},e),{},{tasks:e.tasks.concat({id:new Date,name:t.name,duration:t.duration})});if("DELETE_TASK"===t.type){var a=e.tasks.filter((function(e,a){return e.id+a!==t.taskId}));return Object(H.a)(Object(H.a)({},e),{},{tasks:a})}if("EDIT_TASK"===t.type){var n=e.tasks.filter((function(e){return e.id!==t.taskId}));if(t.name&&t.duration)return Object(H.a)(Object(H.a)({},e),{},{tasks:n.concat({id:new Date,name:t.name,duration:t.duration})})}if("PLAY_TIMER"===t.type)return Object(H.a)(Object(H.a)({},e),{},{counter:e.counter+1,play:!0,pause:!1,valid:!0});if("PAUSE_TIMER"===t.type)return Object(H.a)(Object(H.a)({},e),{},{play:!1,pause:!0,valid:!0});if("RESET_TIMER"===t.type)return Object(H.a)(Object(H.a)({},e),{},{counter:-1,play:!1,pause:!0,valid:!1,notifications:[]});if("PUSH_NOTIFICATION"===t.type)return Object(H.a)(Object(H.a)({},e),{},{notifications:e.notifications.concat({id:t.id,name:t.name,duration:t.duration})});if("CLOSE_NOTIFICATION"===t.type){var r=e.notifications.filter((function(e){if(e.id!==t.notificationId)return e}));return Object(H.a)(Object(H.a)({},e),{},{notifications:r})}return e},D=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,M=Object(o.d)(_,D(Object(o.a)((function(e){return function(t){return function(a){console.log("[Middleware] dispatching",a);var n=t(a);return console.log("[Middleware] next state",e.getState()),n}}}),u.a)));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(s.a,{store:M},i.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.54ad8166.chunk.js.map