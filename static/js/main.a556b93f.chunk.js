(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{265:function(e,t,a){e.exports=a(550)},270:function(e,t,a){},273:function(e,t,a){},550:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),c=a.n(l),o=(a(270),a(166)),i=a(167),u=a.n(i),s=a(246),m=a(247),d=a(248),h=a(254),f=a(249),p=a(256),E=(a(273),a(168)),g=a.n(E),b=(a(320),{apiKey:"AIzaSyDNw7PYb0mVgoB4yLQAk8_IvYavSA2TOZA",authDomain:'"photoclub-32136.firebaseapp.com"',databaseURL:"https://photoclub-32136.firebaseio.com",projectId:"photoclub-32136",storageBucket:"photoclub-32136.appspot.com",messagingSenderId:"617068552232"});g.a.initializeApp(b);var v=g.a.firestore(),w=a(555),N=a(169),C=a(556),y=a(557),S=a(250),j=a.n(S);function x(){var e=Object(o.a)(["\n  margin: 4em ;\n  width: 90vw;\n  height: 200px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n"]);return x=function(){return e},e}function k(){var e=Object(o.a)(["\n  .cardContainer {\n    justify-content: center;\n  }\n  width: 95vw;\n  margin: 3em 1em 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n\n  .table {\n    width:300px; \n  }\n  .footer{\n    height: 100px;\n    background: #fff;\n  }\n"]);return k=function(){return e},e}var I=a(324),O=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).data=[],a.state={considering:0,join:0,NC:0,NM:0,NE:0,auth:!1,input:"",error:""},a.hash=function(e){var t,a=0;if(0===e)return a;for(t=0;t<e.length;t++)a=(a<<5)-a+e.charCodeAt(t),a|=0;return a},a.handleInput=function(e){a.setState({input:e.target.value})},a.handleSubmit=function(){-1138718691===a.hash(a.state.input)?(a.setState({input:"",auth:!0}),localStorage.setItem("auth","true")):a.setState({error:"\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u9055\u3044\u307e\u3059\u3002\u3000:("})},a.regexnc=/\d{2}NC.{3}/i,a.regexne=/\d{2}NE.{3}/i,a.regexnm=/\d{2}NM.{3}/i,a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){"true"===localStorage.getItem("auth")&&this.setState({auth:!0}),this.fetch()}},{key:"fetch",value:function(){var e=Object(s.a)(u.a.mark(function e(){var t,a=this;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=v.collection("UserDetails").doc("users").collection("users"),e.next=3,t.orderBy("date","desc").get().then(function(e){e.docs.forEach(function(e){var t=e.data();t.number.match(a.regexnc)&&a.setState({NC:a.state.NC+1}),t.number.match(a.regexne)&&a.setState({NE:a.state.NE+1}),t.number.match(a.regexnm)&&a.setState({NM:a.state.NM+1}),a.data=a.data.concat(t),"\u691c\u8a0e\u4e2d"===t.status?a.setState({considering:a.state.considering+1}):"\u5165\u90e8\u3057\u305f\u3044\uff01"===t.status&&a.setState({join:a.state.join+1})})});case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.auth?r.a.createElement(A,null,r.a.createElement(C.a.Group,null,r.a.createElement(C.a,{fluid:!0,color:"red",header:"\u5165\u90e8\u3057\u305f\u3044\uff01 : "+this.state.join}),r.a.createElement(C.a,{fluid:!0,color:"orange",header:"\u691c\u8a0e\u4e2d : "+this.state.considering})),r.a.createElement(C.a.Group,{className:"cardContainer"},r.a.createElement(C.a,{className:"card",color:"orange",header:"NC:"+this.state.NC}),r.a.createElement(C.a,{className:"card",color:"orange",header:"NE:"+this.state.NE}),r.a.createElement(C.a,{className:"card",color:"orange",header:"NM:"+this.state.NM})),r.a.createElement(w.a,{unstackable:!0,class:"table",celled:!0},r.a.createElement(w.a.Header,null,r.a.createElement(w.a.Row,null,r.a.createElement(w.a.HeaderCell,null,"\u5b66\u7c4d\u756a\u53f7"),r.a.createElement(w.a.HeaderCell,null,"\u30b9\u30c6\u30fc\u30bf\u30b9"),r.a.createElement(w.a.HeaderCell,null,"\u66f4\u65b0\u56de\u6570"))),r.a.createElement(w.a.Body,null,this.data.filter(function(e){return"\u691c\u8a0e\u4e2d"===e.status}).map(function(e){return r.a.createElement(w.a.Row,{id:I()},r.a.createElement(w.a.Cell,null,e.number),r.a.createElement(w.a.Cell,null,e.status),r.a.createElement(w.a.Cell,null,e.updateCount))})),r.a.createElement(w.a.Body,null,this.data.filter(function(e){return"\u5165\u90e8\u3057\u305f\u3044\uff01"===e.status}).map(function(e){return r.a.createElement(w.a.Row,{id:I()},r.a.createElement(w.a.Cell,null,e.number),r.a.createElement(w.a.Cell,null,e.status),r.a.createElement(w.a.Cell,null,e.updateCount))}))),r.a.createElement("div",{className:"footer"},"\xa0")):r.a.createElement(B,null,r.a.createElement("h1",null,"PassKey"),r.a.createElement(j.a,{onChange:this.handleInput,value:this.state.input}),this.state.error&&r.a.createElement("p",null," ",this.state.error),r.a.createElement(y.a,{onClick:this.handleSubmit},"Submit"))}}]),t}(n.Component),A=N.a.div(k()),B=N.a.div(x());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[265,1,2]]]);
//# sourceMappingURL=main.a556b93f.chunk.js.map