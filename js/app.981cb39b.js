(function(t){function e(e){for(var r,u,l=e[0],c=e[1],s=e[2],f=0,p=[];f<l.length;f++)u=l[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);i&&i(e);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,l=1;l<n.length;l++){var c=n[l];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/smol-alchemy/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var i=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("vue-tabs",{attrs:{"active-tab-color":"#141c2a","active-text-color":"#df1233"}},[n("v-tab",{attrs:{title:"Cottage"}},[n("Cottage")],1),n("v-tab",{attrs:{title:"Garden"}},[n("Garden")],1),n("v-tab",{attrs:{title:"Forest"}},[n("Forest")],1)],1)],1)},a=[],u=n("4d48"),l=(n("4bf4"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Your grandfather's cottage. ")])}),c=[],s={name:"Cottage",components:{},data:function(){return{}},methods:{}},i=s,f=n("2877"),p=Object(f["a"])(i,l,c,!1,null,null,null),d=p.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" A quaint garden plot. ")])},b=[],h={name:"Garden",components:{},data:function(){return{}},methods:{}},m=h,_=Object(f["a"])(m,v,b,!1,null,null,null),g=_.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" A spoopy forest. "),n("br"),n("br"),n("CollectButton")],1)},O=[],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{on:{click:t.harvest}},[t._v("Forage")]),n("br"),n("p",[t._v(t._s(t.seeds)+" seeds found")])])},x=[],w={data:function(){return{seeds:0}},methods:{harvest:function(){this.seeds=this.seeds+1}}},P=w,T=Object(f["a"])(P,j,x,!1,null,null,null),C=T.exports,$={name:"Forest",components:{CollectButton:C},data:function(){return{}},methods:{}},E=$,F=Object(f["a"])(E,y,O,!1,null,null,null),S=F.exports,k={name:"App",components:{VueTabs:u["VueTabs"],VTab:u["VTab"],Cottage:d,Garden:g,Forest:S}},G=k,M=(n("034f"),Object(f["a"])(G,o,a,!1,null,null,null)),V=M.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(V)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.981cb39b.js.map