(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6],{62:function(e,t,a){"use strict";a.r(t);var r=a(14),n=a(0),c=a.n(n),i=a(20),o=a(2),l=a(26),s=[];s[0]="January",s[1]="February",s[2]="March",s[3]="April",s[4]="May",s[5]="June",s[6]="July",s[7]="August",s[8]="September",s[9]="October",s[10]="November",s[11]="December";t.default=function(e){var t=Object(n.useState)({}),a=Object(r.a)(t,2),u=a[0],m=a[1],p=Object(n.useState)(!1),b=Object(r.a)(p,2),d=b[0],h=b[1],f=Object(n.useState)(),g=Object(r.a)(f,2),j=g[0],E=g[1],w=Object(o.h)().projectId;Object(n.useEffect)((function(){h(!0),fetch("https://portfoliowebsitebackend-production.up.railway.app/projects/"+w).then((function(e){return e.json()})).then((function(e){m(e),h(!1)})).catch((function(e){h(!1),E(e.message)}))}),[w]);return d?c.a.createElement("img",{className:"centered",src:"/assets/images/cme-pl-ajax-loader.gif",alt:"Loading..."}):c.a.createElement(c.a.Fragment,null,j&&c.a.createElement(l.a,{className:"centered error message",msgHeaderClassName:"error",title:"Error",onOkButtonClick:function(e,t){E(e)}},j),c.a.createElement(i.a,{className:"heading-container"},u.name),c.a.createElement("div",{className:"container"},c.a.createElement("h2",null,function(e){var t=s[e.getMonth()],a=e.getFullYear();return"".concat(t,", ").concat(a)}(new Date(u.timePeriod))),c.a.createElement("p",null,u.description),0!==new String(new Array(u.github)[0]).length?c.a.createElement("a",{href:u.github},"GitHub Link"):"",c.a.createElement("iframe",{title:u.name,style:{margin:"auto"},width:"100%",height:"515",src:u.video,frameBorder:"5",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))}}}]);
//# sourceMappingURL=6.6279250a.chunk.js.map