"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[297],{5673:function(n,t,e){e.d(t,{DC:function(){return u},Hx:function(){return f},Y5:function(){return p},bI:function(){return s},xc:function(){return l}});var r=e(5861),a=e(7757),o=e.n(a),c=e(1912),i="b78238cdc81751fa548b93a11051a80f";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var n=(0,r.Z)(o().mark((function n(){var t,e,r,a=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e=a.length>1?a[1]:void 0,n.prev=2,n.next=5,c.Z.get("trending/all/day?api_key=".concat(i,"&page=").concat(t),e);case 5:return r=n.sent,n.abrupt("return",r.data);case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(t,e,r){var a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=").concat(e,"&include_adult=false"),r);case 3:return a=n.sent,n.abrupt("return",a.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e,r){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t,e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("movie/".concat(t,"?api_key=b78238cdc81751fa548b93a11051a80f&language=en-US"),e);case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t,e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("movie/".concat(t,"/reviews?api_key=b78238cdc81751fa548b93a11051a80f&language=en-US"),e);case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(t,e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("movie/".concat(t,"/credits?api_key=b78238cdc81751fa548b93a11051a80f&language=en-US"),e);case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e){return n.apply(this,arguments)}}()},2940:function(n,t,e){e.d(t,{z:function(){return i}});var r,a=e(168),o=e(6444).ZP.button(r||(r=(0,a.Z)(["\n  padding: 8px 16px;\n  margin: 0 auto;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  background: linear-gradient(145deg, #0d013e, #05983d);\n     cursor: pointer;\n  &:hover,\n  &:focus {\n    color: #5dda21;\n    transform: scale(1.1);\n    box-shadow: 2px 6px 8px #5dda21, -2px -2px 6px #5dda21;\n  }\n"]))),c=e(184),i=function(n){var t=n.onClick;return(0,c.jsx)(o,{onClick:t,type:"button",children:"Show more"})}},4761:function(n,t,e){e.d(t,{s:function(){return P}});var r,a,o,c,i,u,s,p,f,l=e(168),d=e(6444),h=e(1087),x=d.ZP.li(r||(r=(0,l.Z)(["\n  flex-basis: calc((100% - 3 * 20px) / 4);\n  border-radius: 4px;\n  color: #ffffff;\n  background: linear-gradient(145deg, #1fe509, #a8b849);\n  transition: 250ms transform ease-in-out, 300ms box-shadow ease-out,\n    150ms color ease-in;\n  &:hover,\n  &:focus {\n    color: #80ff00;\n    transform: scale(1.03);\n    box-shadow: 2px 6px 8px #17bfb1, -2px -2px 6px #00ff4b;\n    cursor: pointer;\n  }\n"]))),v=(0,d.ZP)(h.OL)(a||(a=(0,l.Z)(["\n  text-decoration: none;\n  color: #ffffff;\n  &.active {\n    color: #75e596;\n    background: linear-gradient(145deg, #b0aac9, #519fc3);\n  }\n"]))),g=d.ZP.div(o||(o=(0,l.Z)(["\n  display: block;\n"]))),b=d.ZP.img(c||(c=(0,l.Z)(["\n  width: 100%;\n  object-fit: cover;\n  height: 545px;\n"]))),m=d.ZP.div(i||(i=(0,l.Z)(["\n  padding: 20px 10px;\n"]))),Z=d.ZP.h1(u||(u=(0,l.Z)(["\n  font-size: 22px;\n  font-weight: 500;\n  height: 80px;\n"]))),w=(d.ZP.p(s||(s=(0,l.Z)(["\n  font-weight: 500;\n"]))),d.ZP.span(p||(p=(0,l.Z)(["\n  font-weight: 400;\n"]))),e(2014)),k=e(7689),y=e(184),j=function(n){var t=n.movie,e=t.title,r=t.name,a=t.poster_path,o=(t.release_date,t.id),c=(0,k.TH)();return(0,y.jsx)(x,{children:(0,y.jsxs)(v,{to:"/movies/".concat(o),state:{from:c},children:[(0,y.jsx)(g,{children:(0,y.jsx)(b,{src:(0,w.v)(a),alt:e||r})}),(0,y.jsx)(m,{children:(0,y.jsx)(Z,{children:e||r})})]})})},_=d.ZP.ul(f||(f=(0,l.Z)(["\n  max-width: calc(100vw - 48px);\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px;\n"]))),P=function(n){var t=n.movies;return(0,y.jsx)(_,{children:t.map((function(n){return(0,y.jsx)(j,{movie:n},n.id)}))})}},4814:function(n,t,e){e.d(t,{$:function(){return p}});var r,a,o=e(168),c=e(6444),i=c.ZP.section(r||(r=(0,o.Z)(["\n  padding: 20px 0;\n"]))),u=c.ZP.h1(a||(a=(0,o.Z)(["\n  font-size: 28px;\n  text-align: center;\n"]))),s=e(184),p=function(n){var t=n.title,e=n.children;return(0,s.jsxs)(i,{children:[(0,s.jsx)(u,{children:t}),e]})}},3274:function(n,t,e){e.d(t,{u:function(){return r}});var r=function(n,t){var e=new Set;return n.filter((function(n){return!e.has(n[t])&&e.add(n[t])}))}},2014:function(n,t,e){e.d(t,{v:function(){return r}});var r=function(n){return n?n.startsWith("/https")?n.slice(1):"https://image.tmdb.org/t/p/w500/".concat(n):"https://placeholder.pics/svg/300x200/29FF16-261E2A/FFC8C8-B674FF/%D0%9D%D0%B5%20%D0%B7%D0%BD%D0%B0%D0%B9%D0%B4%D0%B5%D0%BD%D0%BE"}},8297:function(n,t,e){e.r(t),e.d(t,{default:function(){return B}});var r,a,o,c,i=e(3433),u=e(5861),s=e(9439),p=e(7757),f=e.n(p),l=e(168),d=e(6444),h=d.ZP.form(r||(r=(0,l.Z)(["\n  position: absolute;\n  top: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  background: linear-gradient(145deg, #0d013e, #05983d);\n  width: 100%;\n  outline: 2px #0eddd5;\n  max-width: 600px;\n  background-color: transparent;\n  border-radius: 3px;\n  overflow: hidden;\n      cursor: pointer;\n  &:hover,\n  &:focus {\n    \n    box-shadow: 2px 6px 8px #0eddd5, -2px -2px 6px #0eddd5;\n  }\n"]))),x=d.ZP.button(a||(a=(0,l.Z)(["\n  display: inline-block;\n  background-color: transparent;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  opacity: 0.6;\n    cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),v=d.ZP.span(o||(o=(0,l.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),g=d.ZP.input(c||(c=(0,l.Z)(["\n  display: inline-block;\n  background-color: transparent;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  color: #fff;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n    color: #fff;\n  }\n"]))),b=e(3728),m=e(184),Z=function(n){var t=n.onSubmit;return(0,m.jsxs)(h,{onSubmit:function(n){n.preventDefault(),t(n.target.search.value.trim().toLowerCase()),n.currentTarget.reset()},children:[(0,m.jsxs)(x,{type:"submit",children:[(0,m.jsx)(b.Vph,{size:"30"}),(0,m.jsx)(v,{children:"Search"})]}),(0,m.jsx)(g,{name:"search",type:"text",autoComplete:"off",placeholder:"Search movies"})]})},w=e(2791),k=e(5673),y=e(9649),j=e(4761),_=e(2940),P=e(3274),S=e(1087),D=e(4814),B=function(){var n,t=(0,w.useState)(""),e=(0,s.Z)(t,2),r=e[0],a=e[1],o=(0,w.useState)([]),c=(0,s.Z)(o,2),p=c[0],l=c[1],d=(0,w.useState)(1),h=(0,s.Z)(d,2),x=h[0],v=h[1],g=(0,w.useState)(!1),b=(0,s.Z)(g,2),B=b[0],C=b[1],z=(0,w.useState)(0),F=(0,s.Z)(z,2),U=F[0],E=F[1],q=(0,S.lr)(),I=(0,s.Z)(q,2),L=I[0],H=I[1],T=null!==(n=L.get("query"))&&void 0!==n?n:"";(0,w.useEffect)((function(){var n=function(){var n=(0,u.Z)(f().mark((function n(t,e){var r;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,C(!0),n.next=4,(0,k.bI)(t,e);case 4:return r=n.sent,E(r.total_pages),l((function(n){return 1===e?r.results:[].concat((0,i.Z)(n),(0,i.Z)(r.results))})),l((function(n){return(0,P.u)(n,"id")})),n.abrupt("return",r);case 11:n.prev=11,n.t0=n.catch(0),l([]),console.log(n.t0);case 15:return n.prev=15,C(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,11,15,18]])})));return function(t,e){return n.apply(this,arguments)}}();r&&n(r,x)}),[r,x]),(0,w.useEffect)((function(){var n=function(){var n=(0,u.Z)(f().mark((function n(t,e){var r;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,T){n.next=3;break}return n.abrupt("return");case 3:return C(!0),n.next=6,(0,k.bI)(t,e);case 6:return r=n.sent,E(r.total_pages),l((function(n){return 1===e?r.results:[].concat((0,i.Z)(n),(0,i.Z)(r.results))})),l((function(n){return(0,P.u)(n,"id")})),n.abrupt("return",r);case 13:n.prev=13,n.t0=n.catch(0),l([]),console.log(n.t0);case 17:return n.prev=17,C(!1),n.finish(17);case 20:case"end":return n.stop()}}),n,null,[[0,13,17,20]])})));return function(t,e){return n.apply(this,arguments)}}();n(T,x)}),[T,x]);return(0,m.jsxs)("main",{children:[(0,m.jsx)(Z,{movieName:T,onSubmit:function(n){""!==n&&n!==r&&(H(""!==n?{query:n}:{}),l([]),a(n),v(1))}}),(0,m.jsx)(D.$,{children:(0,m.jsx)(j.s,{movies:p})}),B&&(0,m.jsx)(y.a,{}),!!p.length&&x<U&&(0,m.jsx)(_.z,{onClick:function(){v((function(n){return n+1}))}})]})}}}]);
//# sourceMappingURL=297.d72c992b.chunk.js.map