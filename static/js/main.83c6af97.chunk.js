(this["webpackJsonpreact-start"]=this["webpackJsonpreact-start"]||[]).push([[0],{25:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var i=t(0),s=t(19),c=t.n(s),n=t(9),r=t(2),o=t(8),l=(t(25),t(1));var j=function(e){var a=e.suffle;return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row justify-content-around",children:Object(l.jsxs)("div",{id:"game",className:"quiz",children:[Object(l.jsx)("header",{className:"justify-content-center align-items-center",children:Object(l.jsx)("h1",{children:"Kviz znanja"})}),Object(l.jsx)("div",{className:"options text-center",children:Object(l.jsx)(o.b,{onClick:function(){a()},to:"/choosePlayer",className:"btn btn-primary playerBtn",children:"Kliknite"})})]})})})},u=t(3);t(32);var d=function(e){var a=e.card,t=e.shuffleOption,i=e.choosenPlayer;return Object(l.jsxs)("div",{id:a.player,className:"card",children:[Object(l.jsx)("img",{src:"../img/"+a.player+".jpg",className:"card-img-top",alt:a.capitalPlayer}),Object(l.jsx)("h5",{className:"card-title",children:a.capitalPlayer}),Object(l.jsx)("p",{className:"card-text",children:a.text}),Object(l.jsxs)(o.b,{to:"/game",onClick:function(){t(),i(a.player)},id:a.player+"Btn",className:"btn btn-"+a.colorBtn,children:["Izaberite ",a.casePlayer]})]})};t(33);var b=function(e){var a=e.card,t=e.shuffleOption,i=e.choosenPlayer,s=a.map((function(e,a){return Object(l.jsx)(d,{card:e,shuffleOption:t,choosenPlayer:i},a)}));return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"addPlayer text-center",children:[Object(l.jsx)("h1",{className:"pb-3",children:"Izaberite igraca "}),Object(l.jsx)("div",{className:"row justify-content-center",children:s})]})})};t(34);var p=function(e){var a=e.options,t=e.chooseOption;return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row justify-content-around",children:Object(l.jsxs)("div",{id:"game",className:"quiz col-8",children:[Object(l.jsx)("header",{className:"justify-content-center align-items-center",children:Object(l.jsx)("h1",{children:"Izaberite oblast"})}),Object(l.jsx)("div",{className:"options text-center",children:a.map((function(e,a){return Object(l.jsx)("div",{className:"option",children:Object(l.jsx)(o.b,{to:"/quiz",onClick:function(){t(e)},className:"button optionP d-flex justify-content-center align-items-center",children:e})},a)}))})]})})})};t(35);var m=function(e){var a=e.playerQuiz,t=e.questionNumber,i=e.score,s=e.nextQuestion,c=e.editButton?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("button",{onClick:function(){s()},id:"playerBtn",className:"btn btn-primary",children:"Sledece pitanje"})}):Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("button",{id:"playerBtn",className:"btn btn-primary",children:"Sledece pitanje"})});return Object(l.jsxs)("div",{className:"player text-center col-4",children:[Object(l.jsx)("h2",{children:a.capitalPlayer}),Object(l.jsx)("img",{src:"../img/"+a.player+".jpg",className:"card-img-top",alt:a.capitalPlayer}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsxs)("p",{id:"scorePlayer",className:"lead",children:["Ukupno poena : ",i]}),Object(l.jsxs)("p",{id:"countRounds",className:"pt-1",children:["Pitanje ",t]}),c]})]})};t(36);var O=Object(u.e)((function(e,a){a.Questions,a.Responds,a.Answers,a.playerCard;var t=Object(i.useState)([{player:"ivo",capitalPlayer:"Ivo",casePlayer:"Iva",text:"Ako mene izaberete necete se pokajati. Gledajte me u oci dok pricam.",colorBtn:"primary"}]),s=Object(r.a)(t,2),c=s[0],n=s[1];Object(i.useEffect)((function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)&&_(!1),n(e.playerCard),"Proba"===e.Questions&&e.history.push("/choosePlayer")}),[]);var j=Object(i.useState)(3),u=Object(r.a)(j,2),d=u[0],b=(u[1],Object(i.useState)(1)),p=Object(r.a)(b,2),O=p[0],h=p[1],v=Object(i.useState)(0),k=Object(r.a)(v,2),x=k[0],y=k[1],f=Object(i.useState)(!1),g=Object(r.a)(f,2),P=g[0],N=g[1],S=Object(i.useState)(""),z=Object(r.a)(S,2),B=z[0],M=z[1],K=Object(i.useState)(!1),A=Object(r.a)(K,2),I=A[0],w=A[1],C=Object(i.useState)(!1),R=Object(r.a)(C,2),T=R[0],Q=R[1],q=Object(i.useState)(!1),V=Object(r.a)(q,2),J=V[0],U=V[1],G=Object(i.useState)(!1),H=Object(r.a)(G,2),D=H[0],E=H[1],F=Object(i.useState)(""),L=Object(r.a)(F,2),W=L[0],Z=L[1],X=Object(i.useState)(!0),Y=Object(r.a)(X,2),$=Y[0],_=Y[1],ee=Object(i.useState)(!1),ae=Object(r.a)(ee,2),te=ae[0],ie=ae[1],se=function(){ie(!1),d===O?(Q(!1),w(!1),U(!J),E(!D),Z(" displayNone"),N(!1)):(e.newQuestions(O),N(!1),h(O+1),M(" "),Q(!1),w(!1))},ce=function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)&&ie(!0)},ne=c.map((function(e,a){return Object(l.jsx)(m,{playerQuiz:e,questionNumber:O,score:x,nextQuestion:se,editButton:P},a)}));return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row justify-content-around",children:[$&&[ne],Object(l.jsxs)("div",{id:"game",className:"quiz col-8",children:[Object(l.jsxs)("header",{className:"justify-content-center align-items-center",children:[Object(l.jsx)("h1",{className:"questions "+W,children:e.Questions}),D&&Object(l.jsxs)("h1",{className:"questions",children:[e.playerCard[0].capitalPlayer," je ","Horhe"===e.playerCard[0].capitalPlayer||"Ivo"===e.playerCard[0].capitalPlayer||"Lav"===e.playerCard[0].capitalPlayer?"osvojio":"osvojila"," ukupno ",x," poena",Object(l.jsx)("br",{}),"***** CESTITAMO *****"]})]}),Object(l.jsxs)("div",{className:"options text-center",children:[I&&Object(l.jsx)("div",{className:"d-flex flex-column justify-content-center align-items-center h-100",children:Object(l.jsx)("h1",{className:"textCorrect mb-5",children:"Tacan odgovor!"})}),T&&Object(l.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center h-100",children:[Object(l.jsx)("h1",{className:"mb-4 textWrong",children:"Pogresan odgovor!"}),Object(l.jsxs)("h4",{className:"mb-5",children:["Tacan odgovor je: ",e.Responds]})]}),te&&[ne],e.Answers.map((function(a,t){return Object(l.jsx)("div",{className:"option"+B,children:Object(l.jsx)("div",{onClick:function(){!function(a){N(!0),ce(),e.Responds===a?(M(" displayNone"),w(!I),y(x+5)):(M(" displayNone"),Q(!T))}(a)},className:"button optionP d-flex justify-content-center align-items-center",children:a})},t)})),J&&Object(l.jsx)(o.b,{to:"/",className:"btn btn-primary playerBtn playerBtnQuiz",children:"Pokrenite novu igru"})]})]})]})})}));var h=function(){var e=[{player:"ivo",capitalPlayer:"Ivo",casePlayer:"Iva",text:"Ako mene izaberete necete se pokajati. Gledajte me u oci dok pricam.",colorBtn:"primary"},{player:"horhe",capitalPlayer:"Horhe",casePlayer:"Horhea",text:"Posle 30 godina igranja nisam najpametniji ali sam najbolji.",colorBtn:"warning"},{player:"kristina",capitalPlayer:"Kristina",casePlayer:"Kristinu",text:"Volim da igram kvizove znanja a najvise volim da pobedjujem.",colorBtn:"success"},{player:"lav",capitalPlayer:"Lav",casePlayer:"Lava",text:"Veni, vidi vici ili pametan pametniji najpametniji.",colorBtn:"secondary"},{player:"vladanka",capitalPlayer:"Vladanka",casePlayer:"Vladanku",text:"Mogu da oberem malinjak za 2 sata a i za 2 dana, jer sam u takvoj mogucnosti.",colorBtn:"info"},{player:"justina",capitalPlayer:"Justina",casePlayer:"Justinu",text:"Kunem se u Nemacku. Mi Nemci smo najpametniji hahahaha.",colorBtn:"danger"}],a=Object(i.useState)(["Dunav nastaje u Crnoj \u0161umi, a koja reka izvire u Valdajskoj gori?","SAD \u010dini 50 saveznih dr\u017eava. Od koliko saveznih dr\u017eava se sastoji Indija?","Najvi\u0161i vrh kog kontineta je Denali?","Koji norve\u0161ki grad se smatra najsevernijim gradom na svetu?","U kojoj afri\u010dkoj dr\u017eavi se nalazi vodopad Tugela, drugi najvi\u0161i vodopad na svetu posle An\u0111eoskog vodopada u Venecueli?"]),t=Object(r.a)(a,2),s=t[0],c=t[1],d=Object(i.useState)([["Volga","Don","Ural","Dnjepar"],["34","29","16","8"],["Severne Amerike","Australije","Ju\u017ene Amerike","Afrike"],["Harstad","Bode","Vardo","Hamerfest"],["U Mozambiku","U Ju\u017enoafri\u010dkoj Republici","U Zambiji","U \u010cadu"]]),m=Object(r.a)(d,2),h=m[0],v=m[1],k=Object(i.useState)(["Volga","29","Severne Amerike","Hamerfest","U Ju\u017enoafri\u010dkoj Republici"]),x=Object(r.a)(k,2),y=x[0],f=x[1],g=Object(i.useState)(["Prvi svetski rat je poceo?","Kad je bio Kosovski boj?","Za vreme drugog svetskog rata ko je bio premijer Italije?","Kad je poceo prvi srpski ustanak?","Kad je poceo drugi srpski ustanak?"]),P=Object(r.a)(g,2),N=P[0],S=P[1],z=Object(i.useState)([["1814","1914","1815","1915"],["1388","1489","1489","1389"],["Musolini","Hitler","Djovani","Cercil"],["1804","1805","1803","1806"],["1813","1814","1815","1816"]]),B=Object(r.a)(z,2),M=B[0],K=B[1],A=Object(i.useState)(["1914","1389","Musolini","1804","1815"]),I=Object(r.a)(A,2),w=I[0],C=I[1],R=Object(i.useState)([" \u010cetiri \u010doveka igrala su \u0161ah 4 sata. Koliko je sati igrao svaki od u\u010desnika?","Svaki \u0161tap ima dva kraja. Koliko krajeva ima \u0161tap i po?","Svaka od tri sestre ima brata. Koliko u toj porodici ima dece?","Kada je pe\u0161ak pre\u0161ao polovinu puta i jo\u0161 2 km, ostalo muje da pre\u0111e jo\u0161 \u010detvrtinu puta i 6 km. Koliko je du\u017eina puta?","Jedan radnik mo\u017ee zavr\u0161iti posao za 4 sata, a drugi za 12 sati. Za koje vreme bi obavili taj posao rade\u0107i zajedno?"]),T=Object(r.a)(R,2),Q=T[0],q=T[1],V=Object(i.useState)([["4 sata","2 sata","1 sat","6 sata"],["2 kraja","3 kraja","4 kraja","1 kraj"],["3 dece","2 dece","4 dece","5 dece"],["16 km","18 km","32 km","34 km"],["2 sata","3 sata","4 sata","pola sata"]]),J=Object(r.a)(V,2),U=J[0],G=J[1],H=Object(i.useState)(["4 sata","4 kraja","4 dece","32 km","za tri sata"]),D=Object(r.a)(H,2),E=D[0],F=D[1],L=Object(i.useState)(["Velika \u010cernobiljska katastrofa u Ukrajini izazvana je:","Kako se zove aktuelni predsednik Turske?","Reakcija izme\u0111u jedne baze i jedne kiseline naziva se:","Kipar je podeljen na:","Koliko ima Jevan\u0111elja u Bibliji:"]),W=Object(r.a)(L,2),Z=W[0],X=W[1],Y=Object(i.useState)([["zemljotresom","padom aviona","kvarom u nuklearnoj elektrani","sirenjem otrovnog gasa"],["Mustafa Kemal Ataturk","Melih Mahmutoglu","Red\u017eep Tajip Erdogan","Red\u017eep Melih Mahmutoglu"],["oksidacija","neutralizacija","resorbcija","redukcija"],["Gr\u010dki i Izraelski deo.","Turski i Kurdski deo","Gr\u010dki i Turski deo","Turski i Ruski deo."],["4","10","12","8"]]),$=Object(r.a)(Y,2),_=$[0],ee=$[1],ae=Object(i.useState)(["kvarom u nuklearnoj elektrani","Red\u017eep Tajip Erdogan","neutralizacija","Gr\u010dki i Turski deo","4"]),te=Object(r.a)(ae,2),ie=te[0],se=te[1],ce=Object(i.useState)(["Istorija","Matematika","Geografija","Opste obrazovanje"]),ne=Object(r.a)(ce,2),re=ne[0],oe=ne[1],le=Object(i.useState)("Proba"),je=Object(r.a)(le,2),ue=je[0],de=je[1],be=Object(i.useState)(["Proba"]),pe=Object(r.a)(be,2),me=pe[0],Oe=pe[1],he=Object(i.useState)("Proba"),ve=Object(r.a)(he,2),ke=ve[0],xe=ve[1],ye=Object(i.useState)(""),fe=Object(r.a)(ye,2),ge=fe[0],Pe=fe[1],Ne=[],Se=function(){for(var e=[],a=0;a<Ne.length+3;a++){var t=Math.floor(Math.random()*Ne.length);e.push(Ne[t]),Ne.splice(t,1)}return e},ze=Object(i.useState)([]),Be=Object(r.a)(ze,2),Me=Be[0],Ke=Be[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(o.a,{children:[Object(l.jsx)(u.a,{path:"/",exact:!0,children:Object(l.jsx)(j,{suffle:function(){for(var e=[],a=[],t=[],i=[],n=[],r=[],o=[],l=[],j=[],u=[],d=[],b=[],p=0;p<h.length+4;p++){var m=Math.floor(Math.random()*h.length);e.push(h[m]),h.splice(m,1),a.push(s[m]),s.splice(m,1),t.push(y[m]),y.splice(m,1),i.push(M[m]),M.splice(m,1),n.push(N[m]),N.splice(m,1),r.push(w[m]),w.splice(m,1),o.push(U[m]),U.splice(m,1),l.push(Q[m]),Q.splice(m,1),j.push(E[m]),E.splice(m,1),u.push(_[m]),_.splice(m,1),d.push(Z[m]),Z.splice(m,1),b.push(ie[m]),ie.splice(m,1)}v(e),c(a),f(t),S(n),K(i),C(r),q(l),G(o),F(j),X(d),ee(u),se(b)}})}),Object(l.jsx)(u.a,{path:"/choosePlayer",children:Object(l.jsx)(b,{card:e,shuffleOption:function(){for(var e=[],a=0;a<re.length+3;a++){var t=Math.floor(Math.random()*re.length);e.push(re[t]),re.splice(t,1)}oe(e)},choosenPlayer:function(a){var t=e.filter((function(e){return e.player===a}));Ke(t)}})}),Object(l.jsx)(u.a,{path:"/game",children:Object(l.jsx)(p,{options:re,chooseOption:function(e){Pe(e),"Geografija"===e?(de(s[0]),xe(y[0]),Ne=Object(n.a)(h[0]),Oe(Se(Ne))):"Istorija"===e?(de(N[0]),xe(w[0]),Ne=Object(n.a)(M[0]),Oe(Se(Ne))):"Matematika"===e?(de(Q[0]),xe(E[0]),Ne=Object(n.a)(U[0]),Oe(Se(Ne))):(de(Z[0]),xe(ie[0]),Ne=Object(n.a)(_[0]),Oe(Se(Ne)))}})}),Object(l.jsx)(u.a,{path:"/quiz",children:Object(l.jsx)(O,{Questions:ue,Answers:me,Responds:ke,options:re,playerCard:Me,newQuestions:function(e){"Geografija"===ge?(de(s[e]),xe(y[e]),Ne=Object(n.a)(h[e]),Oe(Se(Ne))):"Istorija"===ge?(de(N[e]),xe(w[e]),Ne=Object(n.a)(M[e]),Oe(Se(Ne))):"Matematika"===ge?(de(Q[e]),xe(E[e]),Ne=Object(n.a)(U[e]),Oe(Se(Ne))):(de(Z[e]),xe(ie[e]),Ne=Object(n.a)(_[e]),Oe(Se(Ne)))}})})]})})};t(37);c.a.render(Object(l.jsx)(h,{}),document.querySelector("#root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.83c6af97.chunk.js.map