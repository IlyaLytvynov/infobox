(this.webpackJsonpinfobox=this.webpackJsonpinfobox||[]).push([[0],[,function(e,t,n){e.exports={slide:"InfoBoxSlide_slide__28lcP",title:"InfoBoxSlide_title__2-P91",active:"InfoBoxSlide_active__YlEwk",segment:"InfoBoxSlide_segment__IH7Aq",content:"InfoBoxSlide_content__2o1kB",expand:"InfoBoxSlide_expand__24nAa",thumbnail:"InfoBoxSlide_thumbnail__378S5",footer:"InfoBoxSlide_footer__2-QKw",btn:"InfoBoxSlide_btn__2PuFR"}},function(e,t,n){e.exports={infoBox:"InfoBox_infoBox__T0Umu",slides:"InfoBox_slides__XZ5ex",slide:"InfoBox_slide__3LAv7",footer:"InfoBox_footer__2j2hs",control:"InfoBox_control__3Dv9I"}},,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(6),s=n.n(c),i=(n(13),n(4)),l=n.n(i),r=n(7),m=n(3),f=(n(15),n(2)),u=n.n(f),_=n(1),d=n.n(_),x=function(e){var t=e.img,n=e.title,c=e.description,s=e.isActive,i=e.style,l=Object(a.useState)(!1),r=Object(m.a)(l,2),f=r[0],u=r[1];return o.a.createElement("div",{style:i,className:"".concat(d.a.slide," \n        ").concat(s?d.a.active:""," ").concat(f?d.a.expand:"")},o.a.createElement("div",{className:d.a.thumbnail},o.a.createElement("img",{src:t,alt:n})),o.a.createElement("div",{className:d.a.content},o.a.createElement("div",{className:d.a.title},n),o.a.createElement("p",{className:d.a.description},"".concat(c.slice(0,50)).concat(f?"":"..."),o.a.createElement("span",{className:d.a.segment},c.slice(50)))),o.a.createElement("div",{className:d.a.footer},o.a.createElement("button",{className:d.a.btn,onClick:function(){return u(!f)}},"Toggle")))},v=function(e){var t=e.items,n=Object(a.useState)(0),c=Object(m.a)(n,2),s=c[0],i=c[1];return o.a.createElement("div",{className:u.a.infoBox},o.a.createElement("div",{className:u.a.slides},t.map((function(e,t){return o.a.createElement(x,Object.assign({key:t},e,{isActive:s===t,style:{transform:"translateX(".concat(-100*t,"%)")}}))}))),o.a.createElement("div",{className:u.a.footer},o.a.createElement("button",{className:u.a.control,onClick:function(){i(0)}},"<<<"),o.a.createElement("button",{className:u.a.control,onClick:function(){var e=s>=1?s-1:t.length-1;i(e)}},"<"),o.a.createElement("button",{className:u.a.control,onClick:function(){var e=s<t.length-1?s+1:0;i(e)}},">"),o.a.createElement("button",{className:u.a.control,onClick:function(){i(t.length-1)}},">>>")))},b=function(e){var t=Object(a.useState)([]),n=Object(m.a)(t,2),o=n[0],c=n[1];return Object(a.useEffect)((function(){function t(){return(t=Object(r.a)(l.a.mark((function t(){var n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,c(a);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),o};var p=function(){var e=b("https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/ads");return o.a.createElement(v,{items:e})};s.a.render(o.a.createElement(p,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.b3e5c590.chunk.js.map