(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{32:function(e,t){e.exports={RESQUEST:"SEARCH_RESQUEST",SUCCESS:"SEARCH_SUCCESS",FAILURE:"SEARCH_FAILURE"}},33:function(e,t){e.exports={RESQUEST:"EVOLUTION_RESQUEST",SUCCESS:"EVOLUTION_SUCCESS",FAILURE:"EVOLUTION_FAILURE"}},34:function(e,t){e.exports={RESQUEST:"TRIGGER_RESQUEST",SUCCESS:"TRIGGER_SUCCESS",FAILURE:"TRIGGER_FAILURE"}},37:function(e,t,a){e.exports=a(49)},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),s=a(15),l=a(6),i=a(13),u=(a(46),a(36)),m=a(7),p=a(35),E=a(32),h=a.n(E),d=a(33),v=a.n(d),f=a(34),g=a.n(f),b={SEARCH:h.a,EVOLUTION:v.a,TRIGGER:g.a},S={isLoading:!1,searchTerm:"",searchResult:null,history:[]},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.SEARCH.RESQUEST:var a=Object(p.a)(e.history);return a.push(t.searchTerm),Object(m.a)(Object(m.a)({},e),{},{isLoading:!0,searchTerm:t.searchTerm,history:a});case b.SEARCH.SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{isLoading:!1,searchResult:t.payload});case b.SEARCH.FAILURE:return Object(m.a)(Object(m.a)({},e),{},{isLoading:!1,searchResult:"NoResult"});default:return e}},y={isLoading:!1,chain:{}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.EVOLUTION.RESQUEST:return Object(m.a)(Object(m.a)({},e),{},{isLoading:!0});case b.EVOLUTION.SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{isLoading:!1,chain:t.payload});case b.EVOLUTION.FAILURE:return Object(m.a)(Object(m.a)({},e),{},{isLoading:!1,chain:{}});default:return e}},O={isLoading:!1,trigger:""},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.TRIGGER.RESQUEST:return Object(m.a)(Object(m.a)({},e),{},{isLoading:!0});case b.TRIGGER.SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{isLoading:!1,trigger:t.payload});case b.TRIGGER.FAILURE:return Object(m.a)(Object(m.a)({},e),{},{isLoading:!1,trigger:""});default:return e}},T=Object(i.combineReducers)({search:k,pokemonEvolution:R,pokemonEvolutionTrigger:N}),j=a(5),w=a.n(j),C=a(8),U=a(17);function I(e){return x.apply(this,arguments)}function x(){return(x=Object(U.a)(w.a.mark((function e(t){var a,n,r,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=fetch("https://pokeapi.co/api/v2/pokemon/".concat(t.toLowerCase())).then((function(e){if(e.ok)return e.json();throw new Error("not found")})).catch((function(e){console.log(e)})),e.next=4,a;case 4:return n=e.sent,r=n.id,e.next=8,Promise.all([fetch("https://pokeapi.co/api/v2/gender/".concat(r)).then((function(e){return e.json()})),fetch("https://pokeapi.co/api/v2/location/".concat(r)).then((function(e){return e.json()})),fetch("https://pokeapi.co/api/v2/pokemon-species/".concat(r)).then((function(e){return e.json()}))]);case 8:return c=e.sent,e.abrupt("return",{payload:{pokemonId:r,abilities:n.abilities,color:c[2].color,genders:c[0].name,locations:c[1].name,moves:n.moves,types:n.types,varieties:c[2].varieties}});case 12:return e.prev=12,e.t0=e.catch(0),console.warn("error"),e.abrupt("return",{payload:null});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}var L=w.a.mark(F),A=w.a.mark(G);function F(e){var t;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(C.b)(I,e.searchTerm);case 3:if((t=a.sent).payload){a.next=6;break}throw new Error("No data found");case 6:return a.next=8,Object(C.c)({type:b.SEARCH.SUCCESS,payload:t.payload});case 8:a.next=14;break;case 10:return a.prev=10,a.t0=a.catch(0),a.next=14,Object(C.c)({type:b.SEARCH.FAILURE});case 14:case"end":return a.stop()}}),L,null,[[0,10]])}function G(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.d)(b.SEARCH.RESQUEST,F);case 2:case"end":return e.stop()}}),A)}function H(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(U.a)(w.a.mark((function e(t){var a,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=fetch("https://pokeapi.co/api/v2/evolution-chain/".concat(t)).then((function(e){if(e.ok)return e.json();throw new Error("not found")})).catch((function(e){console.log(e)})),e.next=4,a;case 4:return n=e.sent,e.abrupt("return",{payload:n.chain.species});case 8:return e.prev=8,e.t0=e.catch(0),console.warn("error"),e.abrupt("return",{payload:null});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var _=w.a.mark(P),V=w.a.mark(B);function P(e){var t;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(C.b)(H,e.pokemonId);case 3:if((t=a.sent).payload){a.next=6;break}throw new Error("No data found");case 6:return a.next=8,Object(C.c)({type:b.EVOLUTION.SUCCESS,payload:t.payload});case 8:a.next=14;break;case 10:return a.prev=10,a.t0=a.catch(0),a.next=14,Object(C.c)({type:b.EVOLUTION.FAILURE});case 14:case"end":return a.stop()}}),_,null,[[0,10]])}function B(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.d)(b.EVOLUTION.RESQUEST,P);case 2:case"end":return e.stop()}}),V)}function J(e){return M.apply(this,arguments)}function M(){return(M=Object(U.a)(w.a.mark((function e(t){var a,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=fetch("https://pokeapi.co/api/v2/evolution-trigger/".concat(t)).then((function(e){if(e.ok)return e.json();throw new Error("not found")})).catch((function(e){console.log(e)})),e.next=4,a;case 4:return n=e.sent,e.abrupt("return",{payload:n.name});case 8:return e.prev=8,e.t0=e.catch(0),console.warn("error"),e.abrupt("return",{payload:null});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var D=w.a.mark(q),W=w.a.mark($);function q(e){var t;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(C.b)(J,e.pokemonId);case 3:if((t=a.sent).payload){a.next=6;break}throw new Error("No data found");case 6:return a.next=8,Object(C.c)({type:b.TRIGGER.SUCCESS,payload:t.payload});case 8:a.next=14;break;case 10:return a.prev=10,a.t0=a.catch(0),a.next=14,Object(C.c)({type:b.TRIGGER.FAILURE});case 14:case"end":return a.stop()}}),D,null,[[0,10]])}function $(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.d)(b.TRIGGER.RESQUEST,q);case 2:case"end":return e.stop()}}),W)}var z=w.a.mark(K);function K(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.a)([G(),B(),$()]);case 2:case"end":return e.stop()}}),z)}var X=Object(u.a)(),Y=Object(i.createStore)(T,Object(i.applyMiddleware)(X));X.run(K);var Z=a(24),ee=a(14),te=function(e){var t=e.pokedex,a=e.searchTerm,c=Object(n.useState)([{value:"Abilities",links:"#abilities"},{value:"Colors",links:"#color"},{value:"Gender",links:"#gender"},{value:"Location",links:"#location"},{value:"moves",links:"#moves"},{value:"types",links:"#types"},{value:"varieties",links:"#varieties"}]),o=Object(Z.a)(c,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sc-title"},r.a.createElement("h5",{className:"findHeader"},"Results for ",r.a.createElement("span",{className:"findSearchTerm"},'"',a,'"')),r.a.createElement("div",{id:"findSubHeader"},r.a.createElement("span",{id:"findSubHeaderLabel"},"Jump to:"),o.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement("a",{href:e.links},e.value),o.length-1!==t&&r.a.createElement("span",{className:"ghost"},"|"))})))),r.a.createElement("div",{className:"search-content"},r.a.createElement("div",{className:"search-card"},r.a.createElement("div",{className:"search-img"},r.a.createElement("img",{src:"images/pokemon.jpg",alt:""})),t.abilities&&r.a.createElement("div",{id:"abilities",className:"sc-about"},r.a.createElement("h3",null,"Abilities"),r.a.createElement("p",null,t.abilities.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},e.ability.name,", ")})))),t.color&&r.a.createElement("div",{id:"color",className:"sc-about"},r.a.createElement("h3",null,"color"),r.a.createElement("p",null,t.color.name)),t.genders&&r.a.createElement("div",{id:"gender",className:"sc-about"},r.a.createElement("h3",null,"Gender"),r.a.createElement("p",null,t.genders)),t.locations&&r.a.createElement("div",{id:"location",className:"sc-about"},r.a.createElement("h3",null,"Location"),r.a.createElement("p",null,t.locations)),t.moves&&r.a.createElement("div",{id:"moves",className:"sc-about"},r.a.createElement("h3",null,"Moves"),r.a.createElement("p",null,t.moves.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},e.move.name,", ")})))),t.types&&r.a.createElement("div",{id:"types",className:"sc-about"},r.a.createElement("h3",null,"Types"),r.a.createElement("p",null,t.types.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},e.type.name,", ")})))),t.varieties&&r.a.createElement("div",{id:"varieties",className:"sc-about"},r.a.createElement("h3",null,"Varieties"),r.a.createElement("p",null,t.varieties.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},e.pokemon.name,", ")})))),t.pokemonId&&r.a.createElement("div",{id:"chain",className:"sc-about"},r.a.createElement("h3",null,"Evolution Chain"),r.a.createElement(ee.b,{to:"/evolution_chains/".concat(t.pokemonId,"/true"),style:{color:"white",textDecoration:"underline"}},"Click Here")),t.pokemonId&&r.a.createElement("div",{id:"trigger",className:"sc-about"},r.a.createElement("h3",null,"Evolution Trigger"),r.a.createElement(ee.b,{to:"/evolution_triggers/".concat(t.pokemonId),style:{color:"white",textDecoration:"underline"}},"Click Here")))))},ae=function(e){var t=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"history-box"},r.a.createElement("h3",null,"History"),r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{key:t},e)})))))},ne=Object(s.b)((function(e){return{searchTerm:e.search.searchTerm,searchResult:e.search.searchResult,isLoading:e.search.isLoading,searchHistory:e.search.history}}),null)((function(e){var t=e.searchResult,a=e.searchHistory,n=e.searchTerm;return(t||a&&a.length>0)&&r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"search-content-wrap"},t&&("NoResult"===t?r.a.createElement("div",{className:"search-content"},r.a.createElement("div",{className:"search-card"},r.a.createElement("h5",null,"Result Not Found"))):r.a.createElement(te,{pokedex:t,history:a,searchTerm:n})),a&&a.length>0&&r.a.createElement(ae,{data:a})))})),re=Object(s.b)((function(e){return{searchResult:e.search.searchResult,isLoading:e.search.isLoading,searchHistory:e.search.history}}),(function(e){return{searchPokemon:function(t){return e({type:b.SEARCH.RESQUEST,searchTerm:t})}}}))((function(e){var t=e.searchPokemon,a=Object(n.useState)(""),c=Object(Z.a)(a,2),o=c[0],s=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header-container"},r.a.createElement("nav",{className:"header-nav"},r.a.createElement("div",{className:"search-modal"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{id:"term-label",htmlFor:"term",className:"form-label"},r.a.createElement("input",{name:"term",id:"term",className:"",type:"search","aria-label":"Search",placeholder:"Enter Pokemon Name",title:"Enter Pokemon Name",onChange:function(e){s(e.target.value)},required:!0}),r.a.createElement("i",{className:"fa fa-search","aria-hidden":"true"}))),r.a.createElement("input",{type:"button",className:"btn-search",value:"Search",onClick:function(e){o.length>3&&t(o)}}))))),r.a.createElement(ne,null))})),ce=Object(s.b)((function(e){return{evolutionChainTrigger:e.pokemonEvolutionTrigger,evolutionChainSpecies:e.pokemonEvolution,isLoading:e.pokemonEvolution.isLoading}}),(function(e){return{getPokemonEvolution:function(t){return e({type:b.EVOLUTION.RESQUEST,pokemonId:t})},getPokemonEvolutionTrigger:function(t){return e({type:b.TRIGGER.RESQUEST,pokemonId:t})}}}))((function(e){var t=e.getPokemonEvolution,a=e.evolutionChainSpecies,c=e.getPokemonEvolutionTrigger,o=e.evolutionChainTrigger,s=e.match.params,l=s.pokemonId,i=s.isChain;return Object(n.useEffect)((function(){i?t(l):c(l)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"header-nav"},r.a.createElement("div",{className:"search-modal",style:{justifyContent:"right"}},r.a.createElement(ee.b,{to:"/",className:"btn-prev"},"Back"))))),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"search-content-wrap"},r.a.createElement("div",{className:"search-content"},r.a.createElement("div",{className:"search-card"},r.a.createElement("h2",{style:{paddingBottom:"20px",color:"white"}},i?"Evolution Chain":"Evolution Trigger"),i&&r.a.createElement("div",{className:"sc-about"},r.a.createElement("p",null,r.a.createElement("span",null,"Specie Name: "),a.chain.name)),!i&&r.a.createElement("div",{className:"sc-about"},o.trigger&&r.a.createElement("p",null,r.a.createElement("span",null,"Trigger Name: "),o.trigger)))))))})),oe=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"page-bg"}),t)};var se=function(){return r.a.createElement(s.a,{store:Y},r.a.createElement(oe,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",component:re,exact:!0}),r.a.createElement(l.a,{path:"/evolution_chains/:pokemonId/:isChain",component:ce}),r.a.createElement(l.a,{path:"/evolution_triggers/:pokemonId",component:ce}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee.a,null,r.a.createElement(se,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.09ccd748.chunk.js.map