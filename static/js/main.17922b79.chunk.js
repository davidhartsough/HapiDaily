(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,a){e.exports=a(363)},167:function(e,t,a){},363:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(17),l=a.n(r),s=(a(167),a(14)),i=a(40),c=a(31),m=a(32),h=Object(i.b)({goals:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=Object(m.a)(e);switch(t.type){case"CREATE_GOAL":var n={goal:t.goal,person:t.person};return a.push(n),window.localStorage.setItem("goals",JSON.stringify(a)),a;case"UPDATE_GOAL":return a[t.index]={goal:t.goal,person:t.person},window.localStorage.setItem("goals",JSON.stringify(a)),a;case"DELETE_GOAL":return a.splice(t.index,1),window.localStorage.setItem("goals",JSON.stringify(a)),a;default:return e}},impacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=Object(m.a)(e);switch(t.type){case"CREATE_IMPACT":var n={impact:t.impact,date:t.date};return a.push(n),window.localStorage.setItem("impacts",JSON.stringify(a)),a;default:return e}},people:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=Object(m.a)(e);switch(t.type){case"CREATE_PERSON":return a.push(t.name),window.localStorage.setItem("people",JSON.stringify(a)),a;case"UPDATE_PERSON":return a[t.index]=t.name,window.localStorage.setItem("people",JSON.stringify(a)),a;case"DELETE_PERSON":return a.splice(t.index,1),window.localStorage.setItem("people",JSON.stringify(a)),a;default:return e}}}),u=JSON.parse(window.localStorage.getItem("goals")),p=JSON.parse(window.localStorage.getItem("impacts")),d=JSON.parse(window.localStorage.getItem("people")),f=Object(i.c)(h,{goals:u&&Array.isArray(u)?u:[],impacts:p&&Array.isArray(p)?p:[],people:d&&Array.isArray(d)?d:[]}),b=function(e){var t=e.children;return o.a.createElement(c.a,{store:f},t)},g=a(18),v=a(19),E=a(21),y=a(20),w=a(22),k=a(16),O=a(157),S=a.n(O),C=a(158),j=a.n(C),T=a(159),x=a.n(T),P=a(68),N=a.n(P),A=a(39),G=a.n(A),I=a(26),D=a.n(I),W=a(160),L=a.n(W),M=a(69),J=a.n(M),R=a(96),_=a.n(R),B=a(97),H=a.n(B),z=a(94),F=a.n(z),K=a(95),V=a.n(K),U=a(98),Y=a.n(U),$=a(99),q=a.n($),Q=function(e){return{type:"CREATE_PERSON",name:e}},X=a(62),Z=a.n(X),ee=a(63),te=a.n(ee),ae=Object(s.withStyles)({root:{textAlign:"center",padding:"4rem"},text:{fontSize:18}})(function(e){var t=e.text,a=e.classes;return o.a.createElement("div",{className:a.root},o.a.createElement("div",{id:"background"},o.a.createElement("div",{id:"sky"}),o.a.createElement("div",{id:"sun"},o.a.createElement("div",{id:"sunrise"}),o.a.createElement("div",{id:"reflection"})),o.a.createElement("div",{id:"ocean"})),o.a.createElement(D.a,{variant:"h5",className:a.text,gutterBottom:!0},t))}),ne=["Play a game with someone","Make a card for someone","Make plans with someone","Make a gift for someone","Create art for someone","Make someone laugh","Smile at someone","Cheer someone up","Enjoy someone","Share music with someone","Share vulnerability with someone","Share a book with someone","Share a movie with someone","Share a video with someone","Share a TED Talk with someone","Share food with someone","Share a meal with someone","Share a joke with someone","Talk with someone","Catch up with someone","Have a conversation with someone","Call someone","Invite someone to dinner","Walk with someone","Watch a movie with someone","Watch a video with someone","Listen to music with someone","Eat with someone","Send someone a message","Write someone a letter","Forgive someone","Apologize to someone","Thank someone for their mentorship","Thank someone for being a role model","Thank someone for their leadership","Thank someone for their respect","Thank someone for their kindness","Thank someone for your connection","Thank someone for your relationship ","Thank someone for their friendship","Thank someone for their passion","Thank someone for their inspiration","Thank someone for their advice","Thank someone for their encouragement","Thank someone for their support","Thank someone for their care","Thank someone for their love","Thank someone for their affirmation","Thank someone for their respect","Thank someone for their help","Thank someone for their work","Thank someone for their affection","Thank someone for their understanding","Thank someone for their generosity","Thank someone for their humor","Thank someone for their strength","Thank someone for their positivity","Thank someone for their openness","Thank someone for their vulnerability","Thank someone for their thoughtfulness","Thank someone for their integrity","Thank someone for their gratitude","Give someone attention","Give someone a gift","Give someone a hug","Give someone a high-five","Give someone encouragement","Give someone a compliment","Give someone support","Give someone a meal","Bake for someone","Cook for someone","Be vulnerable with someone","Joke around with someone","Listen to someone","Laugh with someone","Help someone with their work","Help someone with their project","Help someone with their chores","Learn more about someone","Make a meal with someone","Celebrate with someone","Celebrate someone","Celebrate someone's accomplishment","Congratulate someone","Congratulate someone for their achievement","Tell someone why you are proud of them","Tell someone why you love them","Tell someone what you love about them","Tell someone what you admire about them","Tell someone why you admire them","Tell someone why you respect them","Tell someone why you appreciate them","Tell someone why you are excited for them","Tell someone why you look up to them","Tell someone why they are important to you","Tell someone why you are happy for them","Tell someone why you cherish them","Tell someone why you are inspired by them","Praise someone's kindness","Praise someone's respect","Praise someone's strength","Praise someone's strengths","Praise someone's drive","Praise someone's ambition","Praise someone's talent","Praise someone's grit","Praise someone's skill","Praise someone's values","Praise someone's principles","Praise someone's love","Praise someone's humor","Praise someone's courage","Praise someone's generosity","Praise someone's understanding","Praise someone's gratitude"],oe=a(146),re=a.n(oe),le=a(148),se=a.n(le),ie=a(147),ce=a.n(ie),me=a(23),he=a.n(me),ue=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(E.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(o)))).complete=function(){var e=a.props,t=e.index;(0,e.complete)(t)},a.edit=function(){var e=a.props,t=e.index;(0,e.edit)(t)},a}return Object(w.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.props,t=e.endGoal,a=e.classes;return o.a.createElement(re.a,{className:a.card},o.a.createElement(ce.a,null,o.a.createElement(D.a,{variant:"body1"},t)),o.a.createElement(se.a,null,o.a.createElement(he.a,{size:"small",color:"primary",onClick:this.complete},"Mark as done"),o.a.createElement(he.a,{size:"small",onClick:this.edit},"Edit")))}}]),t}(o.a.PureComponent),pe=Object(s.withStyles)({card:{marginBottom:24}})(ue),de=a(149),fe=a(41),be=a.n(fe),ge=a(156),ve=a.n(ge),Ee=a(154),ye=a(150),we=a.n(ye),ke=a(152),Oe=a.n(ke),Se=a(151),Ce=a.n(Se),je=a(153),Te=a.n(je)()({breakpoint:"xs"})(function(e){var t=e.open,a=e.close,n=e.onEnter,r=e.title,l=e.content,s=e.actions,i=e.maxWidth,c=e.classes,m=e.fullScreen;return o.a.createElement(we.a,{fullScreen:m,fullWidth:!0,maxWidth:i,open:t,onClose:a,"aria-labelledby":"".concat(r,"-dialog"),onEnter:n,classes:{paper:c.overflow}},o.a.createElement(Ce.a,{id:"edit-goal-dialog"},r),o.a.createElement(Oe.a,{className:c.overflow},l),s)}),xe=Object(s.withStyles)({overflow:{overflowY:"visible"}})(Te),Pe=function(e){return{label:e,value:e}},Ne=function(e){return e.map(function(e){return Pe(e)})},Ae=function(e){return e[Math.floor(Math.random()*e.length)]},Ge=function(e){for(var t=Object(m.a)(e),a=t.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),o=[t[n],t[a]];t[a]=o[0],t[n]=o[1]}return t},Ie={menu:function(e){return Object(de.a)({},e,{margin:0})}},De=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(E.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(o)))).state={goal:"",person:"",goals:[]},a.updateState=function(){var e=a.props,t=e.goal,n=e.person,o=e.goalList;a.setState({goal:t,person:n,goals:Ge(o)})},a.selectGoal=function(e){var t=e.value;a.setState({goal:t})},a.selectPerson=function(e){var t=e.value;a.setState({person:t})},a.save=function(){var e=a.props,t=e.save,n=e.index,o=a.state;t(n,o.goal,o.person)},a.handlePersonCreate=function(e){a.props.createPerson(e),a.setState({person:e})},a.validateNewPerson=function(e){return e.length>2},a.formatCreateLabel=function(e){return'Add "'.concat(e,'"')},a.randomize=function(){var e=a.props,t=e.goalList,n=e.people;a.setState({goal:Ae(t),person:Ae(n)})},a}return Object(w.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.props,t=e.open,a=e.close,n=e.people,r=e.classes,l=this.state,s=l.goal,i=l.person,c=l.goals;return o.a.createElement(xe,{open:t,close:a,onEnter:this.updateState,title:"Edit",maxWidth:"sm",content:o.a.createElement("div",null,o.a.createElement("div",{className:r.selection},o.a.createElement(D.a,{variant:"body1",component:"p",gutterBottom:!0},"Choose a goal:"),o.a.createElement(Ee.a,{className:r.select,styles:Ie,isSearchable:!0,onChange:this.selectGoal,options:Ne(c),value:Pe(s),name:"goal",label:"Select a goal",maxMenuHeight:240,placeholder:"Select a goal...",backspaceRemovesValue:!1})),o.a.createElement("div",{className:r.selection},o.a.createElement(D.a,{variant:"body1",component:"p",gutterBottom:!0},"Choose a person:"),o.a.createElement(ve.a,{className:r.select,styles:Ie,isSearchable:!0,onChange:this.selectPerson,options:Ne(n),value:Pe(i),name:"person",label:"Select a person",maxMenuHeight:240,placeholder:"Select a person...",backspaceRemovesValue:!1,onCreateOption:this.handlePersonCreate,isValidNewOption:this.validateNewPerson,formatCreateLabel:this.formatCreateLabel}))),actions:o.a.createElement(be.a,null,o.a.createElement(he.a,{onClick:a},"Cancel"),o.a.createElement(he.a,{onClick:this.randomize},"Randomize"),o.a.createElement(he.a,{onClick:this.save,color:"primary"},"Save"))})}}]),t}(o.a.Component),We=Object(s.withStyles)({selection:{position:"relative",marginBottom:32,minHeight:48},select:{position:"absolute",width:"100%"}})(De),Le=function(e){return e[Math.floor(Math.random()*e.length)]},Me=function(e){return e.goal.replace("someone",e.person)},Je=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(E.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(o)))).state={isCool:JSON.parse(window.localStorage.getItem("isCool"))||!1,open:!1,index:0},a.complete=function(e){var t=a.props,n=t.goals,o=t.createImpact,r=t.deleteGoal;o(Me(n[e])),r(e)},a.edit=function(e){a.setState({index:e,open:!0})},a.saveEdit=function(e,t,n){a.props.updateGoal(e,t,n),a.close()},a.close=function(){a.setState({open:!1})},a.createNewGoal=function(){a.state.isCool||(window.localStorage.setItem("isCool",JSON.stringify(!0)),a.setState({isCool:!0}));var e=a.props,t=e.people,n=e.createGoal,o=t.length?Le(t):"someone";n(Le(ne),o)},a.createNewPerson=function(e){a.props.createPerson(e)},a}return Object(w.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.goals,n=t.people,r=t.createPerson,l=t.classes,s=this.state,i=s.open,c=s.index;return o.a.createElement("div",null,!!a.length&&!!a[c]&&o.a.createElement(We,{open:i,close:this.close,index:c,goal:a[c].goal,person:a[c].person,goalList:ne,people:n,save:this.saveEdit,createPerson:r}),a.length?o.a.createElement("div",{className:l.cards},a.map(function(t,a){return o.a.createElement(pe,{key:"".concat(t.goal,"-").concat(t.person,"-").concat(a),index:a,endGoal:Me(t),complete:e.complete,edit:e.edit})})):this.state.isCool?o.a.createElement(ae,{text:"Nice! How about another goal?"}):o.a.createElement(o.a.Fragment,null,o.a.createElement(ae,{text:"Welcome. When you create goals, you'll see them here."}),o.a.createElement("div",{className:l.prompt},"Create your first goal:")),a.length<3&&o.a.createElement(Z.a,{color:"primary","aria-label":"Add",className:l.fab,onClick:this.createNewGoal},o.a.createElement(te.a,null)))}}]),t}(o.a.Component),Re=Object(s.withStyles)(function(e){return{cards:{padding:24,maxWidth:688,margin:"auto",marginBottom:48},card:{marginBottom:24},prompt:Object(k.a)({display:"none"},e.breakpoints.up("sm"),{display:"block",position:"fixed",fontSize:18,right:130,bottom:72}),fab:Object(k.a)({position:"fixed",bottom:96,right:40},e.breakpoints.up("sm"),{right:56,bottom:56})}})(Je),_e={createGoal:function(e,t){return{type:"CREATE_GOAL",goal:e,person:t}},updateGoal:function(e,t,a){return{type:"UPDATE_GOAL",index:e,goal:t,person:a}},deleteGoal:function(e){return{type:"DELETE_GOAL",index:e}},createImpact:function(e){return{type:"CREATE_IMPACT",impact:e,date:Date.now()}},createPerson:Q},Be=Object(c.b)(function(e){return{goals:e.goals,people:e.people}},_e)(Re),He=a(50),ze=a.n(He),Fe=a(64),Ke=a.n(Fe),Ve=a(65),Ue=a.n(Ve),Ye=function(e,t){return t.date-e.date},$e=Object(s.withStyles)(function(e){return{list:Object(k.a)({maxWidth:640,minWidth:300,margin:"auto",marginBottom:64,backgroundColor:"rgba(255,255,255,0.9)"},e.breakpoints.up("sm"),{backgroundColor:"rgba(255,255,255,0.8)"})}})(function(e){var t=e.impacts,a=e.classes;return t.length?o.a.createElement("div",null,o.a.createElement(ze.a,{className:a.list},t.sort(Ye).map(function(e){return o.a.createElement(Ke.a,{key:"".concat(e.impact,"-").concat(e.date)},o.a.createElement(Ue.a,{primary:e.impact,secondary:(t=e.date,new Date(t).toLocaleDateString())}));var t}))):o.a.createElement(ae,{text:"When you complete goals, you'll see them here."})}),qe=Object(c.b)(function(e){return{impacts:e.impacts}})($e),Qe=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(E.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(o)))).handleClick=function(){var e=a.props,t=e.index,n=e.item;(0,e.onClick)(t,n)},a}return Object(w.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.props.item;return o.a.createElement(Ke.a,{button:!0,onClick:this.handleClick},o.a.createElement(Ue.a,{primary:e}))}}]),t}(o.a.PureComponent),Xe=a(66),Ze=a.n(Xe),et=a(92),tt=a.n(et),at=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(E.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(o)))).state={name:"",error:!1},a.updateState=function(){var e=a.props.name;a.setState({name:e})},a.handleTextChange=function(e){var t=e.target.value;a.setState({name:t,error:t.length<1})},a.handleKeyDown=function(e){"Enter"===e.key&&(e.preventDefault(),a.save())},a.save=function(){var e=a.state,t=e.name;e.error||(a.props.save(t),a.setState({name:""}))},a}return Object(w.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.props,t=e.open,a=e.close,n=e.handleDelete,r=this.state,l=r.name,s=r.error;return o.a.createElement(xe,{open:t,close:a,onEnter:this.updateState,title:"Edit",maxWidth:"xs",content:o.a.createElement("div",null,o.a.createElement(Ze.a,{autoFocus:!0,error:s,margin:"dense",id:"name",label:"Name",value:l,onChange:this.handleTextChange,onKeyDown:this.handleKeyDown,fullWidth:!0}),!!s&&o.a.createElement(tt.a,{style:{color:"#f44336"}},"Please enter a name")),actions:o.a.createElement(be.a,null,o.a.createElement(he.a,{onClick:a},"Cancel"),o.a.createElement(he.a,{onClick:n},"Delete"),o.a.createElement(he.a,{onClick:this.save,color:"primary",disabled:s},"Save"))})}}]),t}(o.a.Component),nt=function(e,t){return e.localeCompare(t,{sensitivity:"base"})},ot=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(E.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(o)))).state={index:0,name:"",open:!1},a.close=function(){a.setState({open:!1})},a.save=function(e){a.props.updatePerson(a.state.index,e),a.setState({index:0,open:!1})},a.handleDelete=function(){a.props.deletePerson(a.state.index),a.setState({index:0,open:!1})},a.handlePersonClick=function(e,t){a.setState({index:e,name:t,open:!0})},a}return Object(w.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.people,n=t.classes,r=this.state,l=r.open,s=r.name;return o.a.createElement("div",null,o.a.createElement(ze.a,{className:n.list},a.sort(nt).map(function(t,a){return o.a.createElement(Qe,{key:"".concat(t,"-").concat(a),index:a,item:t,onClick:e.handlePersonClick})})),o.a.createElement(at,{name:s,open:l,close:this.close,handleDelete:this.handleDelete,save:this.save}))}}]),t}(o.a.Component),rt=Object(s.withStyles)(function(e){return{list:Object(k.a)({maxWidth:640,minWidth:300,margin:"auto",marginBottom:64,backgroundColor:"rgba(255,255,255,0.9)"},e.breakpoints.up("sm"),{backgroundColor:"rgba(255,255,255,0.8)"}),fab:Object(k.a)({position:"fixed",bottom:96,right:56},e.breakpoints.up("sm"),{bottom:56})}})(ot),lt=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(E.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(o)))).state={name:""},a.handleTextChange=function(e){var t=e.target;a.setState({name:t.value})},a.handleKeyDown=function(e){"Enter"===e.key&&(e.preventDefault(),a.save())},a.save=function(){var e=a.state.name;e.length>0&&a.props.save(e),a.setState({name:""})},a}return Object(w.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.props,t=e.open,a=e.close,n=this.state.name;return o.a.createElement(xe,{open:t,close:a,onEnter:this.updateState,title:"Add a person",maxWidth:"xs",content:o.a.createElement(Ze.a,{autoFocus:!0,margin:"dense",id:"name",label:"Name",value:n,onChange:this.handleTextChange,onKeyDown:this.handleKeyDown,fullWidth:!0}),actions:o.a.createElement(be.a,null,o.a.createElement(he.a,{onClick:a},"Cancel"),o.a.createElement(he.a,{onClick:this.save,color:"primary"},"Save"))})}}]),t}(o.a.Component),st=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(E.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(o)))).state={open:!1},a.handleFabClick=function(){a.setState({open:!0})},a.close=function(){a.setState({open:!1})},a.save=function(e){a.props.createPerson(e),a.setState({open:!1})},a}return Object(w.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.props,t=e.people,a=e.classes,n=e.updatePerson,r=e.deletePerson,l=this.state.open;return o.a.createElement("div",null,t.length?o.a.createElement(rt,{people:t,updatePerson:n,deletePerson:r}):o.a.createElement(ae,{text:"When you add people to include in your goals, you'll see them here."}),o.a.createElement(Z.a,{color:"primary","aria-label":"Add",className:a.fab,onClick:this.handleFabClick},o.a.createElement(te.a,null)),o.a.createElement(lt,{open:l,close:this.close,save:this.save}))}}]),t}(o.a.Component),it=Object(s.withStyles)(function(e){return{fab:Object(k.a)({position:"fixed",bottom:96,right:40},e.breakpoints.up("sm"),{right:56,bottom:56})}})(st),ct={createPerson:Q,updatePerson:function(e,t){return{type:"UPDATE_PERSON",index:e,name:t}},deletePerson:function(e){return{type:"DELETE_PERSON",index:e}}},mt=Object(c.b)(function(e){return{people:e.people}},ct)(it),ht=function(e){switch(e.tabIndex){case 0:return o.a.createElement(Be,null);case 1:return o.a.createElement(qe,null);case 2:return o.a.createElement(mt,null);default:return o.a.createElement(Be,null)}},ut=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(E.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(o)))).state={tabIndex:0},a.handleTabIndexChange=function(e,t){a.setState({tabIndex:t})},a}return Object(w.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.tabIndex;return o.a.createElement("div",null,o.a.createElement("div",{className:e.bar},o.a.createElement(S.a,{position:"fixed"},o.a.createElement(j.a,null,o.a.createElement(D.a,{className:e.title,variant:"h6",color:"inherit"},"H",o.a.createElement("span",{className:e.smallcaps},"api"),"Daily"),o.a.createElement("div",{className:e.tabs},o.a.createElement(x.a,{value:t,onChange:this.handleTabIndexChange},o.a.createElement(N.a,{className:e.tab,label:"Goals",icon:0===t?o.a.createElement(F.a,null):o.a.createElement(V.a,null)}),o.a.createElement(N.a,{className:e.tab,label:"Impacts",icon:1===t?o.a.createElement(_.a,null):o.a.createElement(H.a,null)}),o.a.createElement(N.a,{className:e.tab,label:"People",icon:2===t?o.a.createElement(Y.a,null):o.a.createElement(q.a,null)})))))),o.a.createElement("div",{className:e.content},o.a.createElement(ht,{tabIndex:t})),o.a.createElement("div",{className:e.bottom},o.a.createElement(G.a,null,o.a.createElement(L.a,{value:t,onChange:this.handleTabIndexChange,showLabels:!0},o.a.createElement(J.a,{label:"Goals",icon:0===t?o.a.createElement(F.a,null):o.a.createElement(V.a,null)}),o.a.createElement(J.a,{label:"Impacts",icon:1===t?o.a.createElement(_.a,null):o.a.createElement(H.a,null)}),o.a.createElement(J.a,{label:"People",icon:2===t?o.a.createElement(Y.a,null):o.a.createElement(q.a,null)})))))}}]),t}(o.a.Component),pt=Object(s.withStyles)(function(e){var t;return{title:{flexGrow:1},smallcaps:{fontVariant:"small-caps"},tabs:Object(k.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),tab:{minWidth:120},content:Object(k.a)({paddingTop:56},e.breakpoints.up("sm"),{paddingTop:72}),bottom:(t={display:"block"},Object(k.a)(t,e.breakpoints.up("sm"),{display:"none"}),Object(k.a)(t,"position","fixed"),Object(k.a)(t,"bottom",0),Object(k.a)(t,"left",0),Object(k.a)(t,"right",0),t)}})(ut),dt=Object(s.createMuiTheme)({palette:{primary:{main:"#1997ff",light:"#55bbff",dark:"#006acb"},secondary:{main:"#fff"}},typography:{useNextVariants:!0}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(function(){return o.a.createElement(b,null,o.a.createElement(s.MuiThemeProvider,{theme:dt},o.a.createElement(pt,null)))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[162,2,1]]]);
//# sourceMappingURL=main.17922b79.chunk.js.map