(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{5673:function(n,t,e){"use strict";e.d(t,{DC:function(){return s},Hx:function(){return f},Y5:function(){return p},bI:function(){return u},xc:function(){return l}});var r=e(5861),a=e(7757),c=e.n(a),o=e(1912),i="b78238cdc81751fa548b93a11051a80f";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e=a.length>1?a[1]:void 0,n.prev=2,n.next=5,o.Z.get("trending/all/day?api_key=".concat(i,"&page=").concat(t),e);case 5:return r=n.sent,n.abrupt("return",r.data);case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(c().mark((function n(t,e,r){var a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=").concat(e,"&include_adult=false"),r);case 3:return a=n.sent,n.abrupt("return",a.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e,r){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(t,"?api_key=b78238cdc81751fa548b93a11051a80f&language=en-US"),e);case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(t,"/reviews?api_key=b78238cdc81751fa548b93a11051a80f&language=en-US"),e);case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(t,"/credits?api_key=b78238cdc81751fa548b93a11051a80f&language=en-US"),e);case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e){return n.apply(this,arguments)}}()},2940:function(n,t,e){"use strict";e.d(t,{z:function(){return i}});var r,a=e(168),c=e(6444).ZP.button(r||(r=(0,a.Z)(["\n  padding: 8px 16px;\n  margin: 0 auto;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  background: linear-gradient(145deg, #0d013e, #2711ba);\n  box-shadow: 2px 6px 8px #2e2bc2, -2px -2px 6px #1d06eb;\n  transition: 250ms transform ease-in-out, 300ms box-shadow ease-out,\n    150ms color ease-in;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    color: #ffbb00;\n    transform: scale(1.1);\n    box-shadow: 2px 6px 8px #b8c501, -2px -2px 6px #fbff00;\n  }\n"]))),o=e(184),i=function(n){var t=n.onClick;return(0,o.jsx)(c,{onClick:t,type:"button",children:"Show more"})}},4761:function(n,t,e){"use strict";e.d(t,{s:function(){return S}});var r,a,c,o,i,s,u,p,f,l=e(168),d=e(6444),x=e(1087),h=d.ZP.li(r||(r=(0,l.Z)(["\n  flex-basis: calc((100% - 3 * 20px) / 4);\n  border-radius: 4px;\n  color: #ffffff;\n  background: linear-gradient(145deg, #0d013e, #2711ba);\n  box-shadow: 2px 6px 8px #2e2bc2, -2px -2px 6px #1d06eb;\n  // transition: 250ms transform ease-in-out, 300ms box-shadow ease-out,\n  //   150ms color ease-in;\n  &:hover,\n  &:focus {\n    color: #ffbb00;\n    // transform: scale(1.02);\n    // box-shadow: 2px 6px 8px #b8c501, -2px -2px 6px #fbff00;\n    cursor: pointer;\n  }\n"]))),v=(0,d.ZP)(x.OL)(a||(a=(0,l.Z)(["\n  text-decoration: none;\n  color: #ffffff;\n  &.active {\n    color: #ffbb00;\n    background: linear-gradient(145deg, #1b0181, #0149a8);\n  }\n"]))),g=d.ZP.div(c||(c=(0,l.Z)(["\n  display: block;\n"]))),b=d.ZP.img(o||(o=(0,l.Z)(["\n  width: 100%;\n  object-fit: cover;\n  height: 545px;\n"]))),m=d.ZP.div(i||(i=(0,l.Z)(["\n  padding: 20px 10px;\n"]))),Z=d.ZP.h1(s||(s=(0,l.Z)(["\n  font-size: 22px;\n  font-weight: 500;\n  height: 80px;\n"]))),w=d.ZP.p(u||(u=(0,l.Z)(["\n  font-weight: 500;\n"]))),k=d.ZP.span(p||(p=(0,l.Z)(["\n  font-weight: 400;\n"]))),y=e(2014),j=e(7689),_=e(184),P=function(n){var t=n.movie,e=t.title,r=t.name,a=t.poster_path,c=t.release_date,o=t.id,i=(0,j.TH)();return(0,_.jsx)(h,{children:(0,_.jsxs)(v,{to:"/movies/".concat(o),state:{from:i},children:[(0,_.jsx)(g,{children:(0,_.jsx)(b,{src:(0,y.v)(a),alt:e||r})}),(0,_.jsxs)(m,{children:[(0,_.jsx)(Z,{children:e||r}),(0,_.jsxs)(w,{children:["Release date:",(0,_.jsxs)(k,{children:[" ",c||"not found"]})]})]})]})})},F=d.ZP.ul(f||(f=(0,l.Z)(["\n  max-width: calc(100vw - 48px);\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px;\n"]))),S=function(n){var t=n.movies;return(0,_.jsx)(F,{children:t.map((function(n){return(0,_.jsx)(P,{movie:n},n.id)}))})}},2497:function(){},4814:function(n,t,e){"use strict";e.d(t,{$:function(){return p}});var r,a,c=e(168),o=e(6444),i=o.ZP.section(r||(r=(0,c.Z)(["\n  padding: 20px 0;\n"]))),s=o.ZP.h1(a||(a=(0,c.Z)(["\n  font-size: 28px;\n  text-align: center;\n"]))),u=e(184),p=function(n){var t=n.title,e=n.children;return(0,u.jsxs)(i,{children:[(0,u.jsx)(s,{children:t}),e]})}},2014:function(n,t,e){"use strict";e.d(t,{v:function(){return r}});var r=function(n){return n?n.startsWith("/https")?n.slice(1):"https://image.tmdb.org/t/p/w500/".concat(n):"https://placeholder.pics/svg/300/7050FF-2716FF/FFFFFF/Not%20found"}},9544:function(n,t,e){"use strict";e.r(t);var r=e(3433),a=e(5861),c=e(9439),o=e(7757),i=e.n(o),s=e(4761),u=e(2940),p=e(4814),f=e(5673),l=e(4585),d=e(2497),x=e(2791),h=e(184);t.default=function(){var n=(0,x.useState)([]),t=(0,c.Z)(n,2),e=t[0],o=t[1],v=(0,x.useState)(1),g=(0,c.Z)(v,2),b=g[0],m=g[1],Z=(0,x.useState)(!1),w=(0,c.Z)(Z,2),k=w[0],y=w[1];return(0,x.useEffect)((function(){function n(){return n=(0,a.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,y(!0),n.next=4,(0,f.DC)(t);case 4:if(e=n.sent,o((function(n){return 1===t?e.results:[].concat((0,r.Z)(n),(0,r.Z)(e.results))})),!e.results){n.next=8;break}return n.abrupt("return",(function(){return(0,d.notify)()}));case 8:return n.abrupt("return",e.results);case 11:n.prev=11,n.t0=n.catch(0),o([]),console.log(n.t0.message);case 15:return n.prev=15,y(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,11,15,18]])}))),n.apply(this,arguments)}!function(t){n.apply(this,arguments)}(b)}),[b]),(0,h.jsxs)("main",{children:[(0,h.jsx)(p.$,{title:"Trending",children:!!e.length&&(0,h.jsx)(s.s,{movies:e})}),!!e.length&&b<=100&&(0,h.jsx)(u.z,{onClick:function(){m((function(n){return n+1}))}}),k&&(0,h.jsx)(l.a,{})]})}}}]);
//# sourceMappingURL=544.31167fb6.chunk.js.map