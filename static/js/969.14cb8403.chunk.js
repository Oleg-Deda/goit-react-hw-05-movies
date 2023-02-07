"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[969],{5673:function(n,e,t){t.d(e,{DC:function(){return u},Hx:function(){return l},Y5:function(){return p},bI:function(){return i},xc:function(){return f}});var r=t(5861),a=t(7757),c=t.n(a),s=t(1912),o="b78238cdc81751fa548b93a11051a80f";s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var n=(0,r.Z)(c().mark((function n(){var e,t,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,t=a.length>1?a[1]:void 0,n.prev=2,n.next=5,s.Z.get("trending/all/day?api_key=".concat(o,"&page=").concat(e),t);case 5:return r=n.sent,n.abrupt("return",r.data);case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(c().mark((function n(e,t,r){var a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("search/movie?api_key=".concat(o,"&language=en-US&query=").concat(e,"&page=").concat(t,"&include_adult=false"),r);case 3:return a=n.sent,n.abrupt("return",a.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t,r){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("movie/".concat(e,"?api_key=b78238cdc81751fa548b93a11051a80f&language=en-US"),t);case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("movie/".concat(e,"/reviews?api_key=b78238cdc81751fa548b93a11051a80f&language=en-US"),t);case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("movie/".concat(e,"/credits?api_key=b78238cdc81751fa548b93a11051a80f&language=en-US"),t);case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()},4814:function(n,e,t){t.d(e,{$:function(){return p}});var r,a,c=t(168),s=t(6444),o=s.ZP.section(r||(r=(0,c.Z)(["\n  padding: 20px 0;\n"]))),u=s.ZP.h1(a||(a=(0,c.Z)(["\n  font-size: 28px;\n  text-align: center;\n"]))),i=t(184),p=function(n){var e=n.title,t=n.children;return(0,i.jsxs)(o,{children:[(0,i.jsx)(u,{children:e}),t]})}},2014:function(n,e,t){t.d(e,{v:function(){return r}});var r=function(n){return n?n.startsWith("/https")?n.slice(1):"https://image.tmdb.org/t/p/w500/".concat(n):"https://placeholder.pics/svg/300/7050FF-2716FF/FFFFFF/Not%20found"}},9969:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,c=t(5861),s=t(9439),o=t(7757),u=t.n(o),i=t(1087),p=t(7689),l=t(5673),f=t(2791),d=t(2906),v=t(4585),h=t(2014),x=t(168),g=t(6444),b=g.ZP.div(r||(r=(0,x.Z)(["\n  padding: 20px 0;\n"]))),m=t(184),j=function(n){var e=n.data,t=e.title,r=e.name,a=e.backdrop_path,c=e.poster_path,s=e.overview,o=e.genres,u=e.budget,i=e.vote_average;return(0,m.jsxs)(b,{poster:(0,h.v)(a),children:[(0,m.jsx)("img",{src:(0,h.v)(c),alt:t||r}),(0,m.jsx)("h3",{children:t||r}),(0,m.jsxs)("p",{children:["Raiting: ",(10*i).toFixed(1),"%"]}),(0,m.jsxs)("p",{children:["Genres:"," ",o.map((function(n){return n.name})).join(", ")]}),(0,m.jsxs)("p",{children:["Overview: ",s]}),(0,m.jsxs)("p",{children:["Budget: ",u]})]})},w=g.ZP.button(a||(a=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 100%;\n  padding: 0;\n  width: 24px;\n  height: 24px;\n  color: #fff;\n  border: 0;\n  background-color: transparent;\n  // box-shadow: 2px 2px 3px #2e2bc2;\n  // transition: 250ms transform ease-in-out, 300ms box-shadow ease-out,\n  //   150ms color ease-in;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    color: #ffbb00;\n    // transform: scale(1.1);\n    // box-shadow: 2px 4px 6px #b8c501;\n  }\n"]))),k=t(9126),Z=function(n){var e=n.onClick,t=n.children;return(0,m.jsxs)(w,{type:"button",onClick:e,children:[(0,m.jsx)(k.knT,{size:"24"}),t]})},_=t(4814),y=function(){var n,e,t=(0,f.useState)(null),r=(0,s.Z)(t,2),a=r[0],o=r[1],h=(0,f.useState)(!1),x=(0,s.Z)(h,2),g=x[0],b=x[1],w=(0,p.UO)().id,k=(0,p.TH)(),y=(0,p.s0)(),F=null!==(n=null===(e=k.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";(0,f.useEffect)((function(){b(!0);var n=function(){var n=(0,c.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.Y5)(e);case 3:return t=n.sent,o(t),n.abrupt("return",t);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:return n.prev=11,b(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(e){return n.apply(this,arguments)}}();n(w)}),[w]);return(0,m.jsxs)(_.$,{children:[(0,m.jsxs)(d.W2,{children:[(0,m.jsx)(Z,{onClick:function(){y(F)}}),a&&(0,m.jsx)(j,{data:a}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)(i.OL,{to:"cast",state:{from:k.state.from},children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(i.OL,{to:"reviews",state:{from:k.state.from},children:"Reviews"})})]}),(0,m.jsx)(f.Suspense,{fallback:(0,m.jsx)(v.a,{}),children:(0,m.jsx)(p.j3,{})})]}),g&&(0,m.jsx)(v.a,{})]})}}}]);
//# sourceMappingURL=969.14cb8403.chunk.js.map