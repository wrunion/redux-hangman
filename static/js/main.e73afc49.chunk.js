(this.webpackJsonphangman=this.webpackJsonphangman||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/image0.bbde16d0.png"},,,,,function(e,t,a){e.exports=a.p+"static/media/image1.1b639a73.png"},function(e,t,a){e.exports=a.p+"static/media/image2.d9b64e23.png"},function(e,t,a){e.exports=a.p+"static/media/image3.af97f420.png"},function(e,t,a){e.exports=a.p+"static/media/image4.d30ae963.png"},function(e,t,a){e.exports=a.p+"static/media/image5.1fac6aba.png"},function(e,t,a){e.exports=a.p+"static/media/image6.0e6181dd.png"},function(e,t,a){e.exports=a.p+"static/media/image7.bdcfcb3a.png"},,,,function(e,t,a){e.exports=a(38)},,,,,function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(2),l=a.n(c),s=(a(28),a(10)),m=a(11),i=a(22),u=a(21);var o=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a=t.target.letter.value;e.handleSubmit(a.toUpperCase()),document.getElementById("letter").value=""}},n.a.createElement("p",null,n.a.createElement("input",{type:"text",id:"letter",placeholder:"Submit a Letter",maxLength:"1",required:!0})),n.a.createElement("button",{type:"submit"},"Submit A letter")))},g=a(4),p=a(20),d=a(1),E={targetWord:"BANANA",targetWordArray:["B","A","N","A","N","A"],numOfWrongGuesses:0,numOfRightGuesses:0,letterArray:[],displayArray:["_","_","_","_","_","_"],win:!1,lose:!1};var f=function(e){return n.a.createElement("div",{className:"LetterDisplay"},n.a.createElement("h4",null,"You have guessed:"),e.letterArray.join(""))},y=a(8),v=a.n(y),b=a(13),A=a.n(b),h=a(14),O=a.n(h),W=a(15),N=a.n(W),j=a(16),D=a.n(j),I=a(17),R=a.n(I),_=a(18),L=a.n(_),H=a(19),x=a.n(H);a(35);var G=function(e){var t=e.number;return 0===t?n.a.createElement("div",{className:"HangmanImage"},n.a.createElement("img",{src:v.a,alt:""})):t?1===t?n.a.createElement("div",{className:"HangmanImage"},n.a.createElement("img",{src:A.a,alt:""})):2===t?n.a.createElement("div",{className:"HangmanImage"},n.a.createElement("img",{src:O.a,alt:""})):3===t?n.a.createElement("div",{className:"HangmanImage"},n.a.createElement("img",{src:N.a,alt:""})):4===t?n.a.createElement("div",{className:"HangmanImage"},n.a.createElement("img",{src:D.a,alt:""})):5===t?n.a.createElement("div",{className:"HangmanImage"},n.a.createElement("img",{src:R.a,alt:""})):6===t?n.a.createElement("div",{className:"HangmanImage"},n.a.createElement("img",{src:L.a,alt:""})):t>=7?n.a.createElement("div",{className:"HangmanImage"},n.a.createElement("img",{src:x.a,alt:""}),n.a.createElement("h2",null,"You Lose!")):n.a.createElement("div",{className:"HangmanImage"},n.a.createElement("img",{src:v.a,alt:""})):void 0};a(36);var T=function(e){return n.a.createElement("div",{className:"WordDisplay"},n.a.createElement("h2",null,e.displayArray))},w=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).handleLetterInput=function(t){var a=e.props,r=a.letterAction,n=a.checkLetter,c=a.renderWordDisplay;r(t),n(t),c(t)},e}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(G,{number:this.props.numOfWrongGuesses}),n.a.createElement(T,{displayArray:this.props.displayArray}),n.a.createElement(o,{handleSubmit:this.handleLetterInput}),n.a.createElement(f,{letterArray:this.props.letterArray}))}}]),a}(r.Component),S=Object(g.b)((function(e){return{letterArray:e.letterArray,targetWordArray:e.targetWordArray,targetWord:e.targetWord,numOfWrongGuesses:e.numOfWrongGuesses,numOfRightGuesses:e.numOfRightGuesses,displayArray:e.displayArray,win:e.win,lose:e.lose}}),{letterAction:function(e){return{type:"ADD_LETTER",letter:e}},checkLetter:function(e){return{type:"CHECK_LETTER",letter:e}},renderWordDisplay:function(e){return{type:"RENDER_WORD_DISPLAY",letter:e}}})(w);a(37);var C=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("h1",null,"Hangman"),n.a.createElement(S,null))},k=a(3);l.a.render(n.a.createElement(g.a,{store:Object(k.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LETTER":return Object(d.a)(Object(d.a)({},e),{},{letterArray:[].concat(Object(p.a)(e.letterArray),[t.letter])});case"CHECK_LETTER":var a=e.targetWord.includes(t.letter);return a?Object(d.a)(Object(d.a)({},e),{},{numOfRightGuesses:e.numOfRightGuesses+=1}):Object(d.a)(Object(d.a)({},e),{},{numOfWrongGuesses:e.numOfWrongGuesses+=1});case"RENDER_WORD_DISPLAY":var r=t.letter;return Object(d.a)(Object(d.a)({},e),{},{displayArray:e.targetWordArray.map((function(t){return r===t?r:e.letterArray.includes(t)?t:"_"}))});default:return e}}))},n.a.createElement(C,null)),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.e73afc49.chunk.js.map