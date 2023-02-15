"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[532],{532:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var r=n(861),a=n(439),s=n(757),i=n.n(s),c=n(87),o=n(689),u=n(791),l=n(691),v=n(952),d="movieDetails_blocks_wrapper__mqbKy",p="movieDetails_button__pnWLJ",_="movieDetails_container__DMXsQ",m="movieDetails_title__zhbPy",f="movieDetails_popularity__QEaYF",h="movieDetails_title_overview__URY4R",x="movieDetails_overview_text__yFKVt",g="movieDetails_title_genres__-bDxt",w="movieDetails_genres_text__51oiO",j="movieDetails_genres_container__Kk1kn",b="movieDetails_additional_container__+5HaF",k="movieDetails_additional_container_item__2dONx",y="movieDetails_additional_title__vu4XR",D="movieDetails_cast__McVl5",N="movieDetails_reviews__Lk2PQ",Z=n(184),S=function(){var e=(0,u.useState)(null),t=(0,a.Z)(e,2),n=t[0],s=t[1],S=(0,u.useState)(!1),U=(0,a.Z)(S,2),F=U[0],O=U[1],C=(0,o.UO)().movieId,L=(0,o.TH)(),P=(0,o.s0)(),R={color:"#2196f3"};return(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,O(!0),e.next=4,(0,v.TP)(C);case 4:t=e.sent,s(t),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:return e.prev=10,O(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,8,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[C]),(0,Z.jsxs)(Z.Fragment,{children:[F&&(0,Z.jsx)(l.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:d,colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]}),n&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("button",{className:p,onClick:function(){var e,t;return P(null!==(e=null===L||void 0===L||null===(t=L.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/")},children:"Go back"}),(0,Z.jsxs)("div",{className:_,children:[(0,Z.jsx)("div",{children:(0,Z.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(n.poster_path),alt:n.title})}),(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("h3",{className:m,children:[n.title,"(",new Date(n.release_date).getFullYear(),")"]}),(0,Z.jsxs)("p",{className:f,children:["User Score: ",n.popularity]}),(0,Z.jsxs)("div",{className:"movie_overview",children:[(0,Z.jsx)("h3",{className:h,children:"Overview"}),(0,Z.jsx)("p",{className:x,children:n.overview})]}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)("h3",{className:g,children:"Genres"}),(0,Z.jsx)("div",{className:j,children:n.genres.map((function(e){var t=e.id,n=e.name;return(0,Z.jsx)("p",{className:w,children:n},t)}))})]})]})]})]}),!F&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("hr",{}),(0,Z.jsx)("h2",{className:y,children:"Additional Information"}),(0,Z.jsxs)("ul",{className:b,children:[(0,Z.jsx)("li",{className:k,children:(0,Z.jsx)(c.OL,{to:"/movies/".concat(C,"/cast"),style:function(e){return e.isActive?R:void 0},state:L.state,children:(0,Z.jsx)("p",{className:D,children:"Cast"})})}),(0,Z.jsx)("li",{className:k,children:(0,Z.jsx)(c.OL,{to:"/movies/".concat(C,"/reviews"),style:function(e){return e.isActive?R:void 0},state:L.state,children:(0,Z.jsx)("p",{className:N,children:"Reviews"})})})]}),(0,Z.jsx)("hr",{}),(0,Z.jsx)(o.j3,{})]})]})}},952:function(e,t,n){n.d(t,{Df:function(){return u},M1:function(){return p},TP:function(){return v},q:function(){return l},tx:function(){return d}});var r=n(861),a=n(757),s=n.n(a),i=n(912),c="bc1d17da9749fdffed6664a4ab50ba73",o="https://api.themoviedb.org/3/",u=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o,"trending/movie/day?api_key=").concat(c,"&language=en-US&include_adult=false"));case 2:return t=e.sent,n=t.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o,"search/movie?api_key=").concat(c,"&query=").concat(t,"&language=en-US&include_adult=false"));case 2:return n=e.sent,r=n.data.results,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o,"movie/").concat(t,"?api_key=").concat(c,"&language=en-US&page=1"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return n=e.sent,r=n.data.results,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(c,"&language=en-US&page=1"));case 2:return n=e.sent,r=n.data.cast,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=532.ab512dcc.chunk.js.map