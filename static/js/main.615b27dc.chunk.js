(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{200:function(e,t,a){e.exports=a.p+"static/media/apple.aee8ef16.jpg"},201:function(e,t,a){e.exports=a.p+"static/media/banana.0dc6b21c.jpg"},202:function(e,t,a){e.exports=a.p+"static/media/biking.90729f1f.jpg"},203:function(e,t,a){e.exports=a.p+"static/media/breakfast.c6aad687.jpg"},204:function(e,t,a){e.exports=a.p+"static/media/coffee.75836b8f.jpg"},205:function(e,t,a){e.exports=a.p+"static/media/dinner.ee95a330.jpg"},206:function(e,t,a){e.exports=a.p+"static/media/dogtrekking.fdc3ab2b.jpg"},207:function(e,t,a){e.exports=a.p+"static/media/football.1384ea9f.jpg"},208:function(e,t,a){e.exports=a.p+"static/media/gaming.85eb8f74.jpg"},209:function(e,t,a){e.exports=a.p+"static/media/hotdog.1334c1b1.jpg"},210:function(e,t,a){e.exports=a.p+"static/media/jogging.96847ee6.jpg"},211:function(e,t,a){e.exports=a.p+"static/media/lunch.087b7f7f.jpg"},212:function(e,t,a){e.exports=a.p+"static/media/snack.26034f17.jpg"},213:function(e,t,a){e.exports=a.p+"static/media/swimming.0b87dec8.jpg"},214:function(e,t,a){e.exports=a.p+"static/media/walking.9f8b24eb.jpg"},215:function(e,t,a){e.exports=a.p+"static/media/work.e6ff49f5.jpg"},219:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(24),o=a.n(r),c=(a(89),a(30)),s=a(31),l=a(40),m=a(32),u=a(41),p=a(6),d=a.n(p),g=a(9),f=a(79),k=a.n(f),h=a(81),S=a.n(h),w=a(18),I=a.n(w),b=a(82),v=a.n(b),E=a(83),j=a.n(E),y=Object(g.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(function(e){return i.a.createElement("div",{className:e.classes.root},i.a.createElement(k.a,{position:"static"},i.a.createElement(S.a,null,i.a.createElement(v.a,{className:e.classes.menuButton,color:"inherit","aria-label":"Menu"},i.a.createElement(j.a,null)),i.a.createElement(d.a,{className:e.classes.grow,variant:"h6",color:"inherit"},"CaloriesApp (alpha)"),i.a.createElement(I.a,{onClick:function(){return e.clickClear()},color:"inherit"},"START AGAIN"))))}),x=a(17),T=a.n(x),B=a(52),N=a.n(B),O=a(33),C=a.n(O),D=a(34),A=a.n(D),H=Object(g.withStyles)(function(e){return{chip:{margin:e.spacing.unit}}})(function(e){return i.a.createElement(C.a,{avatar:i.a.createElement(A.a,null,e.icon),label:e.name,onDelete:function(){return e.click(e.uniqueName,e.calories)},className:e.classes.chip,color:"secondary"})}),q=function(e){if(0===e.intakeItemsToShow.length)return i.a.createElement("div",{className:N.a.caloriesIntake},"Go get some food ",i.a.createElement("span",{role:"img","aria-label":"Slice of Pizza"},"\ud83c\udf55")," below \u2b07 ");var t=e.intakeItemsToShow.map(function(t,a){return i.a.createElement(H,{key:t.name+a,name:t.name,calories:t.calories,description:t.description,icon:t.icon,uniqueName:t.uniqueName,click:function(t,a){return e.clickShowedIntakeItem(t,a)}})});return i.a.createElement("div",{className:N.a.caloriesIntake},t)},J=a(53),G=a.n(J),_=Object(g.withStyles)(function(e){return{chip:{margin:e.spacing.unit}}})(function(e){return i.a.createElement(C.a,{avatar:i.a.createElement(A.a,null,e.icon),label:e.name,onDelete:function(){return e.click(e.uniqueName,e.calories)},className:e.classes.chip,color:"primary"})}),V=function(e){if(0===e.burnItemsToShow.length)return i.a.createElement("div",{className:G.a.caloriesBurn},"Choose some excersices ",i.a.createElement("span",{role:"img","aria-label":"Table Tennis Paddle and Ball"},"\ud83c\udfd3")," below \u2b07 ");var t=e.burnItemsToShow.map(function(t,a){return i.a.createElement(_,{key:t.name+a,name:t.name,calories:t.calories,description:t.description,icon:t.icon,uniqueName:t.uniqueName,click:function(t,a){return e.clickShowedBurnItem(t,a)}})});return i.a.createElement("div",{className:G.a.caloriesBurn},t)},L=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(e){return i.a.createElement(T.a,{className:this.props.classes.paper},i.a.createElement("div",{style:{margin:"1em"}},i.a.createElement(d.a,{variant:"h4",component:"h4"},this.props.verdict)),i.a.createElement("div",{className:this.props.classes.comparsion},i.a.createElement(q,{intakeItemsToShow:this.props.intakeItemsToShow,clickShowedIntakeItem:this.props.clickShowedIntakeItem}),i.a.createElement(V,{burnItemsToShow:this.props.burnItemsToShow,clickShowedBurnItem:this.props.clickShowedBurnItem})))}}]),t}(n.Component),W=Object(g.withStyles)(function(e){return{root:{flexGrow:1},paper:{padding:2*e.spacing.unit,textAlign:"center",color:e.palette.text.secondary,margin:e.spacing.unit},panel:{display:"flex",alignItems:"stretch",flexDirection:"row"},comparsion:{display:"flex",flexDirection:"row",minHeight:"10vh",border:"1px dashed gray"}}})(L),z=a(35),P=a.n(z),F=a(36),R=a.n(F),U=a(39),M=a.n(U),Y=a(38),$=a.n(Y),K=a(37),Q=a.n(K),X=Object(g.withStyles)({card:{maxWidth:245,margin:".5em"},media:{height:150}})(function(e){return i.a.createElement("div",null,i.a.createElement(P.a,{className:e.classes.card},i.a.createElement(R.a,null,i.a.createElement(Q.a,{className:e.classes.media,image:a(78)("./".concat(e.img.toLowerCase(),".jpg")),title:"calories intake item"}),i.a.createElement($.a,null,i.a.createElement(d.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.name),i.a.createElement(d.a,{component:"p"},e.description),i.a.createElement(d.a,{component:"p"},e.calories,"kcal"))),i.a.createElement(M.a,null,i.a.createElement(I.a,{onClick:function(){return e.click(e.name,e.calories,e.uniqueName)},variant:"contained",size:"small",color:"primary"},"ADD"))))}),Z=Object(g.withStyles)({card:{maxWidth:245,margin:"1em"},media:{height:150}})(function(e){return i.a.createElement("div",null,i.a.createElement(P.a,{className:e.classes.card},i.a.createElement(R.a,null,i.a.createElement(Q.a,{className:e.classes.media,image:a(78)("./".concat(e.img.toLowerCase(),".jpg")),title:"item to burn"}),i.a.createElement($.a,null,i.a.createElement(d.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.name),i.a.createElement(d.a,{component:"p"},e.description),i.a.createElement(d.a,{component:"p"},e.calories,"kcal"))),i.a.createElement(M.a,null,i.a.createElement(I.a,{onClick:function(){return e.click(e.name,e.calories,e.uniqueName)},size:"small",color:"primary",variant:"contained"},"ADD"))))}),ee=Object(g.withStyles)(function(e){return{root:{flexGrow:1},paper:{padding:.5*e.spacing.unit,textAlign:"center",color:e.palette.text.secondary,margin:e.spacing.unit},panel:{display:"flex",alignItems:"stretch",flexDirection:"row"}}})(function(e){var t=e.intakeItems.map(function(t,a){return i.a.createElement(X,{key:t.name+a,name:t.name,calories:t.calories,description:t.description,icon:t.icon,img:t.img,click:function(t,a,n){return e.clickIntakeItem(t,a,n)}})}),a=e.burnItems.map(function(t,a){return i.a.createElement(Z,{key:t.name+a,name:t.name,calories:t.calories,description:t.description,icon:t.icon,uniqueName:t.name+Date.now(),img:t.img,click:function(t,a,n){return e.clickBurnItem(t,a,n)}})});return i.a.createElement("div",{className:e.classes.panel},i.a.createElement(T.a,{className:e.classes.paper},i.a.createElement(d.a,{variant:"h5"},"TOTAL FOOD: ",e.caloriesIntakeSum," kcal"),i.a.createElement("div",{style:{display:"flex",flexFlow:"row",flexWrap:"wrap",justifyContent:"center"}},t)),i.a.createElement(T.a,{className:e.classes.paper},i.a.createElement(d.a,{variant:"h5"},"TOTAL ACTIVITY: ",e.caloriesBurnSum," kcal"),i.a.createElement("div",{style:{display:"flex",flexFlow:"row",flexWrap:"wrap",justifyContent:"center"}},a)))}),te=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={intakeItems:[{name:"breakfast",calories:350,description:"200g classic breakfast",icon:"\ud83e\udd50",img:"breakfast"},{name:"coffee",calories:196,description:"250ml coffee with milk & sugar",icon:"\u2615",img:"coffee"},{name:"snack",calories:500,description:"100g favorite snack",icon:"\ud83c\udf70",img:"snack"},{name:"apple",calories:72,description:"1 juicy apple",icon:"\ud83c\udf4f",img:"apple"},{name:"lunch",calories:788,description:"300g classic lunch",icon:"\ud83e\udd57",img:"lunch"},{name:"banana",calories:102,description:"1 average banana",icon:"\ud83c\udf4c",img:"banana"},{name:"hotdog",calories:289,description:"1 looking good hotdog",icon:"\ud83c\udf2d",img:"hotdog"},{name:"dinner",calories:788,description:"300g classic dinner",icon:"\ud83c\udf72",img:"dinner"}],burnItems:[{name:"work",calories:820,description:"8h office job",icon:"\ud83d\udcbc",img:"work"},{name:"walking",calories:267,description:"1h walking",icon:"\ud83d\udc5f",img:"walking"},{name:"gaming",calories:81,description:"1h playing videogame (hard-level)",icon:"\ud83c\udfae",img:"gaming"},{name:"dogtrekking",calories:267,description:"1h dogtrekking",icon:"\ud83d\udc3a",img:"dogtrekking"},{name:"jogging",calories:773,description:"1h jogging",icon:"\ud83c\udfc3",img:"jogging"},{name:"biking",calories:596,description:"1h riding bike",icon:"\ud83d\udeb4\u200d",img:"biking"},{name:"football",calories:494,description:"1h hard football game",icon:"\u26bd",img:"football"},{name:"swimming",calories:492,description:"1h swiming",icon:"\ud83c\udfca\u200d",img:"swimming"}],intakeItemsToShow:[],burnItemsToShow:[],caloriesIntakeSum:0,caloriesBurnSum:0,verdict:"[*TIP] Go ahead, eat some snack \ud83c\udf69 by clicking ADD below"},a.clickIntakeItemHandler=function(e,t,n){a.state.caloriesIntakeSum>=6e3||(a.addIntakeItemsToShow(e),a.setState(function(e){return{caloriesIntakeSum:e.caloriesIntakeSum+t}},function(){return a.setVerdictHandler()}))},a.addIntakeItemsToShow=function(e){var t=JSON.parse(JSON.stringify(a.state.intakeItems)).filter(function(t){return t.name===e});t[0].uniqueName=Date.now(),a.setState(function(e){return{intakeItemsToShow:e.intakeItemsToShow.concat(t[0])}})},a.clickBurnItemsHandler=function(e,t,n){a.state.caloriesBurnSum>=6e3?console.log(a.state.caloriesBurnSum):(a.addBurnItemsToShow(e),a.setState(function(e){return{caloriesBurnSum:e.caloriesBurnSum+t}},function(){return a.setVerdictHandler()}))},a.addBurnItemsToShow=function(e){var t=JSON.parse(JSON.stringify(a.state.burnItems)).filter(function(t){return t.name===e});t[0].uniqueName=Date.now(),a.setState(function(e){return{burnItemsToShow:e.burnItemsToShow.concat(t[0])}})},a.clickShowedIntakeItemHandler=function(e,t){a.removeIntakeItemsToShow(e),a.setState(function(e){return{caloriesIntakeSum:e.caloriesIntakeSum-t}},function(){return a.setVerdictHandler()})},a.removeIntakeItemsToShow=function(e){var t=JSON.parse(JSON.stringify(a.state.intakeItemsToShow)).filter(function(t){return t.uniqueName!==e});a.setState({intakeItemsToShow:t})},a.clickShowedBurnItemsHandler=function(e,t){a.removeBurnItemsToShow(e),a.setState(function(e){return{caloriesBurnSum:e.caloriesBurnSum-t}})},a.removeBurnItemsToShow=function(e){var t=JSON.parse(JSON.stringify(a.state.burnItemsToShow)).filter(function(t){return t.uniqueName!==e});a.setState({burnItemsToShow:t},function(){return a.setVerdictHandler()})},a.setVerdictHandler=function(){a.state.caloriesIntakeSum>=6e3?a.setState({verdict:"calories intake above reasonable limits"}):a.state.caloriesBurnSum>=6e3?a.setState({verdict:"calories burn above reasonable limits"}):a.state.caloriesIntakeSum>a.state.caloriesBurnSum?a.setState({verdict:"you ate ".concat(a.state.caloriesIntakeSum-a.state.caloriesBurnSum,"kCal too many. Consider some activity \ud83c\udff8")}):a.state.caloriesIntakeSum<a.state.caloriesBurnSum?a.setState({verdict:"you ate ".concat(a.state.caloriesBurnSum-a.state.caloriesIntakeSum,"kCal too few! Refill deficit \ud83c\udf2d")}):a.setState({verdict:"Perfect! Go ahead, eat some cookie \ud83c\udf69"})},a.clearStateHandler=function(){a.setState({intakeItemsToShow:[],burnItemsToShow:[],caloriesIntakeSum:0,caloriesBurnSum:0,verdict:"[*TIP] Go ahead, eat some snack \ud83c\udf69 by clicking ADD below"})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(y,{clickClear:this.clearStateHandler}),i.a.createElement(W,{intakeItemsToShow:this.state.intakeItemsToShow,burnItemsToShow:this.state.burnItemsToShow,clickShowedIntakeItem:this.clickShowedIntakeItemHandler,clickShowedBurnItem:this.clickShowedBurnItemsHandler,verdict:this.state.verdict}),i.a.createElement(ee,{intakeItems:this.state.intakeItems,burnItems:this.state.burnItems,clickIntakeItem:this.clickIntakeItemHandler,clickBurnItem:this.clickBurnItemsHandler,caloriesIntakeSum:this.state.caloriesIntakeSum,caloriesBurnSum:this.state.caloriesBurnSum}),i.a.createElement("footer",{className:this.props.classes.footer},i.a.createElement(d.a,{variant:"h6",align:"center",gutterBottom:!0},"CaloriesApp (alpha)"),i.a.createElement(d.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"This Intake&Burn calories App was designed, developed and produced by a multicultural team of various beliefs, sexual orientations and gender identities.")))}}]),t}(n.Component),ae=Object(g.withStyles)(function(e){return{footer:{backgroundColor:e.palette.background.paper,padding:6*e.spacing.unit}}})(te);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},52:function(e,t,a){e.exports={caloriesIntake:"CaloriesIntake_caloriesIntake__8zOko"}},53:function(e,t,a){e.exports={caloriesBurn:"CaloriesBurn_caloriesBurn__2aVm6"}},78:function(e,t,a){var n={"./apple.jpg":200,"./banana.jpg":201,"./biking.jpg":202,"./breakfast.jpg":203,"./coffee.jpg":204,"./dinner.jpg":205,"./dogtrekking.jpg":206,"./football.jpg":207,"./gaming.jpg":208,"./hotdog.jpg":209,"./jogging.jpg":210,"./lunch.jpg":211,"./snack.jpg":212,"./swimming.jpg":213,"./walking.jpg":214,"./work.jpg":215};function i(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=78},84:function(e,t,a){e.exports=a(219)},89:function(e,t,a){}},[[84,2,1]]]);
//# sourceMappingURL=main.615b27dc.chunk.js.map