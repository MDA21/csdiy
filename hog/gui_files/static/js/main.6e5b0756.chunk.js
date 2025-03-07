(this["webpackJsonphog-gui"]=this["webpackJsonphog-gui"]||[]).push([[0],{53:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var r,a,c=n(0),s=n(19),i=n.n(s),o=(n(53),n(11)),j=n(37),l=n(6),u=(n(54),n(46)),b=n(39),h=n(29),O=n(20),x=n.n(O),d=n(47),g=n(23),f=n(15),p=n(13),m=n(8),v=n(9),y=n(1),w=v.a.div(r||(r=Object(m.a)(["\n  font-size: 1.25rem;\n  width: 100%;\n  text-align: center;\n  margin: 20px;\n"])));function C(e){var t=e.numRolls;return Object(y.jsxs)(w,{children:[Object(y.jsxs)("p",{children:["It is the ",Object(y.jsx)("b",{children:"COMPUTER\u2018s"})," turn."]}),Object(y.jsxs)("p",{children:["The computer rolls ",t," dice."]})]})}var k=v.a.div(a||(a=Object(m.a)(["\n  margin-top: 15px;\n"])));function R(e){var t=e.gameRules,n=e.onGameRulesChange;return Object(y.jsxs)(k,{children:[Object(y.jsx)("h5",{children:"Enable game rules:"}),Object.entries(t).map((function(e){var t=Object(l.a)(e,2),r=t[0],a=t[1];return Object(y.jsx)(h.a.Check,{custom:!0,inline:!0,type:"switch",id:"rule-checkbox-".concat(r),checked:a,label:r,onChange:function(){return n(r,!a)}},r)}))]})}var S,I=n(25),P=n(34),E=v.a.div(S||(S=Object(m.a)(["\n  margin-top: 15px;\n"])));function G(e){var t=e.strategy,n=e.onStrategyChange,r="Pick a strategy",a=t||r,s=Object(c.useState)(a),i=Object(l.a)(s,2),o=i[0],j=i[1];return Object(y.jsxs)(E,{children:[Object(y.jsx)("h5",{children:"Play against the computer:"}),Object(y.jsxs)(P.a,{className:"mb-3",children:[Object(y.jsx)(P.a.Prepend,{children:Object(y.jsx)(P.a.Checkbox,{"aria-label":"Checkbox for following text input",checked:!!t,onChange:function(e){e.target.checked?n(o):n(null)}})}),Object(y.jsxs)(I.a,{as:"select",onChange:function(e){j(e.target.value),n(e.target.value)},value:o,children:[Object(y.jsx)("option",{disabled:!0,hidden:!0,children:r}),Object(y.jsx)("option",{children:"boar_strategy"}),Object(y.jsx)("option",{children:"sus_strategy"}),Object(y.jsx)("option",{children:"final_strategy"})]})]})]})}var _,N,M=n(48);function T(e){var t=e.messages;return t?t.map((function(e,t){return Object(y.jsx)(M.a,{variant:"dark",children:e},t)})):null}var B=v.a.div(_||(_=Object(m.a)(["\n  text-align: center;\n  width: 100%;\n"]))),A=v.a.img(N||(N=Object(m.a)(["\n  width: 120px;\n  height: 120px;\n  margin: 10px;\n"])));function z(e){var t=e.rolls.map((function(e,t){return Object(y.jsx)(A,{src:"/dice_graphic.svg?num="+e},t)}));return Object(y.jsx)(B,{children:t})}function F(){return L.apply(this,arguments)}function L(){return(L=Object(g.a)(x.a.mark((function e(){var t,n,r,a=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",n=a.length>1&&void 0!==a[1]?a[1]:{},e.next=4,fetch(t,{method:"POST",mode:"same-origin",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"manual",body:JSON.stringify(n)});case 4:if(200===(r=e.sent).status){e.next=7;break}throw new Error("Error ".concat(r.status,"."));case 7:return e.abrupt("return",r.json());case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D,H,J,U,V=n(28),Y=["ZERO","ONE"],W=["#28a745","#17a2b8"],Z=["white","white"],q=v.a.div(D||(D=Object(m.a)(["\n  font-size: 1.25rem;\n  width: 100%;\n  text-align: center;\n  margin-top: 20px;\n"])));function K(e){var t=e.playerIndex,n=e.boarBrawl,r=e.onClick,a=n?0:1,s=Object(c.useState)(a),i=Object(l.a)(s,2),o=i[0],j=i[1];return Object(y.jsxs)(q,{children:[Object(y.jsxs)("p",{children:["It is Player"," ",Object(y.jsxs)("b",{children:[Y[t],"\u2018s"]})," ","turn."]}),Object(y.jsxs)("p",{children:["Roll"," ",Object(y.jsx)("input",{type:"number",min:a,max:10,value:o,onChange:function(e){var t=Math.max(Math.min(10,e.target.value),a);j(e.target.value&&t)}})," ","Dice.",Object(y.jsxs)(V.a,{variant:"info",size:"lg",style:{marginLeft:"10px"},onClick:function(){r(o)},children:[" ","Roll!"]})]}),Object(y.jsx)("p",{})]})}function Q(e){return new Promise((function(t){return setTimeout(t,e)}))}function X(e){var t=e.numRolls,n=function(){return Array(t).fill().map((function(){return Math.floor(6*Math.random())+1}))},r=Object(c.useState)(n),a=Object(l.a)(r,2),s=a[0],i=a[1];return function(e,t){var n=Object(c.useRef)(e);n.current=e,Object(c.useEffect)((function(){if(null!==t){var e=setInterval((function(){return n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){i(n)}),200),Object(y.jsx)(z,{rolls:s})}var $,ee=v.a.div(H||(H=Object(m.a)(["\n  width: 150px;\n  border: solid black 2px;\n  font-weight: bold;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n"]))),te=v.a.div(J||(J=Object(m.a)(["\n  width: 100%;\n  height: 130px;\n  line-height: 130px;\n  font-size: 48pt;\n  background: ",";\n"])),(function(e){return e.isCurrent?"white":"transparent"})),ne=v.a.div(U||(U=Object(m.a)(["\n  width: 100%;\n  line-height: 30px;\n  background: ",";\n  color: white;\n"])),(function(e){return e.isCurrent?"#17a2b8":"grey"}));function re(e){var t=e.score,n=e.playerIndex,r=e.currentPlayer===n;return Object(y.jsxs)(ee,{children:[Object(y.jsx)(te,{isCurrent:r,children:t}),Object(y.jsxs)(ne,{isCurrent:r,children:[r?"\u279c ":"","Player ",Y[n]]})]})}var ae,ce=v.a.div($||($=Object(m.a)(["\n  display: flex;\n  justify-content: space-evenly;\n"])));function se(e){var t=e.scores,n=e.currentPlayer;return Object(y.jsx)(ce,{children:t.map((function(e,t){return Object(y.jsx)(re,{score:e,playerIndex:t,currentPlayer:n},t)}))})}var ie=v.a.div(ae||(ae=Object(m.a)(["\n  text-align: center;\n  margin-top: 30px;\n  font-weight: bold;\n  font-size: 24px;\n  width: 100%;\n  color: ",";\n  background: ",";\n  padding: 5px;\n"])),(function(e){return e.color}),(function(e){return e.bgColor}));function oe(e){var t=e.winner;e.onRestart,e.onStrategyChange;return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(p.a,{children:Object(y.jsxs)(ie,{color:Z[t],bgColor:W[t],children:["Player ",Y[t]," has won! Congratulations!"]})})})}var je="WAITING_FOR_INPUT",le="DISPLAYING_COMPUTER_MOVE",ue="ROLLING_DICE",be="DISPLAYING_CHANGE",he="GAME_OVER",Oe=100;function xe(e){var t,n=e.onRestart,r=e.strategy,a=e.onStrategyChange,s=e.gameRules,i=e.onGameRulesChange,j=Object(c.useState)(je),u=Object(l.a)(j,2),b=u[0],h=u[1],O=Object(c.useState)([]),m=Object(l.a)(O,2),v=m[0],w=m[1],k=Object(c.useState)(0),S=Object(l.a)(k,2),I=S[0],P=S[1],E=Object(c.useState)([0,0]),_=Object(l.a)(E,2),N=_[0],M=_[1],B=Object(c.useState)(0),A=Object(l.a)(B,2),L=A[0],D=A[1],H=Object(c.useState)([]),J=Object(l.a)(H,2),U=J[0],V=J[1],Y=Object(c.useRef)([]),W=Object(c.useRef)([]),Z=function(){var e=Object(g.a)(x.a.mark((function e(t){var n,a,c,i,o,j,u,b,O,g=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g.length>1&&void 0!==g[1]?g[1]:I,h(ue),D(t),Y.current.push(t),e.next=6,Promise.all([F("/take_turn",{prevRolls:W.current,moveHistory:Y.current,goal:Oe,gameRules:s})].concat([t&&Q(1e3)]));case 6:if(n=e.sent,a=Object(l.a)(n,1),c=a[0],i=c.message,o=c.rolls,j=c.finalScores,u=c.who,w(o.slice(W.current.length)),M(j),h(be),b=[],i&&b.push(i),V(b),W.current=o,e.t0=r,!e.t0){e.next=24;break}return e.next=24,Q(2500);case 24:if(P(u),!(Math.max.apply(Math,Object(d.a)(j))>=Oe)){e.next=29;break}h(he),e.next=41;break;case 29:if(1!==u||!r){e.next=40;break}return e.next=32,F("/strategy",{name:r,scores:N});case 32:return O=e.sent,D(O),h(le),e.next=37,Q(2500);case 37:return e.abrupt("return",Z(O,u));case 40:h(je);case 41:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=(t={},Object(o.a)(t,je,Object(y.jsx)(z,{rolls:v})),Object(o.a)(t,ue,Object(y.jsx)(X,{numRolls:L})),Object(o.a)(t,be,Object(y.jsx)(z,{rolls:v})),Object(o.a)(t,he,null),Object(o.a)(t,le,Object(y.jsx)(C,{numRolls:L})),t)[b];return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(p.a,{children:Object(y.jsx)(f.a,{children:Object(y.jsx)(se,{scores:N,currentPlayer:I})})}),b!==le&&b!==he&&Object(y.jsx)(p.a,{children:Object(y.jsx)(K,{playerIndex:I,boarBrawl:s["Boar Brawl"],onClick:Z})}),Object(y.jsx)(p.a,{children:Object(y.jsx)(f.a,{children:q})}),Object(y.jsx)(p.a,{children:Object(y.jsx)(f.a,{children:Object(y.jsx)(T,{messages:U})})}),b===he&&Object(y.jsx)(oe,{winner:N[0]>N[1]?0:1,onRestart:n,onStrategyChange:a}),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(p.a,{children:Object(y.jsx)(f.a,{children:Object(y.jsx)(R,{gameRules:s,onGameRulesChange:i})})}),Object(y.jsx)(p.a,{children:Object(y.jsx)(f.a,{children:Object(y.jsx)(G,{strategy:r,onStrategyChange:a})})})]})]})}function de(e){var t=e.onClick;return Object(y.jsx)(V.a,{variant:"secondary",onClick:t,children:"New Game"})}n(62);function ge(){var e=Object(c.useState)(0),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),s=Object(l.a)(a,2),i=s[0],O=s[1],x=Object(c.useState)({"Boar Brawl":!1,"Sus Fuss":!1}),d=Object(l.a)(x,2),g=d[0],f=d[1],p=function(){r((function(e){return e+1}))};return Object(y.jsxs)(u.a,{children:[Object(y.jsxs)(b.a,{bg:"dark",variant:"dark",className:"justify-content-between hognav",children:[Object(y.jsxs)(b.a.Brand,{children:["The Game of ",Object(y.jsx)("strong",{children:"Hog"})]}),Object(y.jsx)(h.a,{inline:!0,children:Object(y.jsx)(de,{onClick:p})})]}),Object(y.jsx)(xe,{style:{paddingTop:"10px"},strategy:i,onStrategyChange:function(e){O(e),p()},gameRules:g,onGameRulesChange:function(e,t){f(Object(j.a)(Object(j.a)({},g),{},Object(o.a)({},e,t))),p()},onRestart:p},n)]})}i.a.render(Object(y.jsx)(ge,{}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.6e5b0756.chunk.js.map