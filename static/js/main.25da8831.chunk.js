(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{201:function(e,t,n){e.exports=n.p+"static/media/apple.aee8ef16.jpg"},202:function(e,t,n){e.exports=n.p+"static/media/banana.0dc6b21c.jpg"},203:function(e,t,n){e.exports=n.p+"static/media/biking.90729f1f.jpg"},204:function(e,t,n){e.exports=n.p+"static/media/breakfast.c6aad687.jpg"},205:function(e,t,n){e.exports=n.p+"static/media/coffee.38b4b447.jpg"},206:function(e,t,n){e.exports=n.p+"static/media/dinner.ee95a330.jpg"},207:function(e,t,n){e.exports=n.p+"static/media/dogtrekking.fdc3ab2b.jpg"},208:function(e,t,n){e.exports=n.p+"static/media/football.1384ea9f.jpg"},209:function(e,t,n){e.exports=n.p+"static/media/gaming.85eb8f74.jpg"},210:function(e,t,n){e.exports=n.p+"static/media/hotdog.1334c1b1.jpg"},211:function(e,t,n){e.exports=n.p+"static/media/jogging.96847ee6.jpg"},212:function(e,t,n){e.exports=n.p+"static/media/lunch.087b7f7f.jpg"},213:function(e,t,n){e.exports=n.p+"static/media/snack.0e59343b.jpg"},214:function(e,t,n){e.exports=n.p+"static/media/swimming.0b87dec8.jpg"},215:function(e,t,n){e.exports=n.p+"static/media/walking.9f8b24eb.jpg"},216:function(e,t,n){e.exports=n.p+"static/media/work.e6ff49f5.jpg"},220:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(24),o=n.n(r),c=(n(90),n(30)),s=n(31),l=n(40),m=n(32),u=n(41),p=n(10),d=n(17),g=n.n(d),f=n(9),k=n.n(f),h=n(52),w=n.n(h),I=n(33),S=n.n(I),b=n(34),v=n.n(b),j=Object(p.withStyles)(function(e){return{chip:{margin:e.spacing.unit}}})(function(e){return i.a.createElement(S.a,{avatar:i.a.createElement(v.a,null,e.icon),label:e.name,onDelete:function(){return e.click(e.uniqueName,e.calories)},className:e.classes.chip,color:"secondary"})}),E=function(e){if(0==e.intakeItemsToShow.length)return i.a.createElement("div",{className:w.a.caloriesIntake},"Go get some food \ud83c\udf55 below \u2b07 ");var t=e.intakeItemsToShow.map(function(t,n){return i.a.createElement(j,{key:t.name+n,name:t.name,calories:t.calories,description:t.description,icon:t.icon,uniqueName:t.uniqueName,click:function(t,n){return e.clickShowedIntakeItem(t,n)}})});return i.a.createElement("div",{className:w.a.caloriesIntake},t)},y=n(53),x=n.n(y),N=Object(p.withStyles)(function(e){return{chip:{margin:e.spacing.unit}}})(function(e){return i.a.createElement(S.a,{avatar:i.a.createElement(v.a,null,e.icon),label:e.name,onDelete:function(){return e.click(e.uniqueName,e.calories)},className:e.classes.chip,color:"primary"})}),B=function(e){if(0==e.burnItemsToShow.length)return i.a.createElement("div",{className:x.a.caloriesBurn},"Choose some excersices \ud83c\udfd3 below \u2b07 ");var t=e.burnItemsToShow.map(function(t,n){return i.a.createElement(N,{key:t.name+n,name:t.name,calories:t.calories,description:t.description,icon:t.icon,uniqueName:t.uniqueName,click:function(t,n){return e.clickShowedBurnItem(t,n)}})});return i.a.createElement("div",{className:x.a.caloriesBurn},t)},T=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(e){return i.a.createElement(g.a,{className:this.props.classes.paper},i.a.createElement("div",{className:this.props.classes.comparsion},i.a.createElement(E,{intakeItemsToShow:this.props.intakeItemsToShow,clickShowedIntakeItem:this.props.clickShowedIntakeItem}),i.a.createElement(B,{burnItemsToShow:this.props.burnItemsToShow,clickShowedBurnItem:this.props.clickShowedBurnItem})),i.a.createElement(g.a,{className:this.props.classes.paper},i.a.createElement(k.a,{gutterBottom:!0,variant:"h4",component:"h4"},this.props.verdict)))}}]),t}(a.Component),O=Object(p.withStyles)(function(e){return{root:{flexGrow:1},paper:{padding:2*e.spacing.unit,textAlign:"center",color:e.palette.text.secondary,margin:e.spacing.unit},panel:{display:"flex",alignItems:"stretch",flexDirection:"row"},comparsion:{display:"flex",flexDirection:"row",minHeight:"10vh"}}})(T),D=n(80),C=n.n(D),H=n(81),q=n.n(H),A=n(18),J=n.n(A),_=n(82),G=n.n(_),L=n(83),V=n.n(L),W=Object(p.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(function(e){return i.a.createElement("div",{className:e.classes.root},i.a.createElement(C.a,{position:"static"},i.a.createElement(q.a,null,i.a.createElement(G.a,{className:e.classes.menuButton,color:"inherit","aria-label":"Menu"},i.a.createElement(V.a,null)),i.a.createElement(k.a,{className:e.classes.grow,variant:"h6",color:"inherit"},"CaloriesApp"),i.a.createElement(J.a,{color:"inherit"},"Login"))))}),F=n(35),z=n.n(F),U=n(36),M=n.n(U),P=n(39),R=n.n(P),Y=n(38),$=n.n(Y),K=n(37),Q=n.n(K),X=Object(p.withStyles)({card:{maxWidth:245,margin:".5em"},media:{height:150}})(function(e){return i.a.createElement("div",null,i.a.createElement(z.a,{className:e.classes.card},i.a.createElement(M.a,null,i.a.createElement(Q.a,{className:e.classes.media,image:n(78)("./".concat(e.img.toLowerCase(),".jpg")),title:"calories intake item"}),i.a.createElement($.a,null,i.a.createElement(k.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.name),i.a.createElement(k.a,{component:"p"},e.description),i.a.createElement(k.a,{component:"p"},e.calories,"kcal"))),i.a.createElement(R.a,null,i.a.createElement(J.a,{onClick:function(){return e.click(e.name,e.calories,e.uniqueName)},variant:"contained",size:"small",color:"secondary"},"ADD"))))}),Z=Object(p.withStyles)({card:{maxWidth:245,margin:"1em"},media:{height:150}})(function(e){return i.a.createElement("div",null,i.a.createElement(z.a,{className:e.classes.card},i.a.createElement(M.a,null,i.a.createElement(Q.a,{className:e.classes.media,image:n(78)("./".concat(e.img.toLowerCase(),".jpg")),title:"item to burn"}),i.a.createElement($.a,null,i.a.createElement(k.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.name),i.a.createElement(k.a,{component:"p"},e.description),i.a.createElement(k.a,{component:"p"},e.calories,"kcal"))),i.a.createElement(R.a,null,i.a.createElement(J.a,{onClick:function(){return e.click(e.name,e.calories,e.uniqueName)},size:"small",color:"primary",variant:"contained"},"ADD"))))}),ee=Object(p.withStyles)(function(e){return{root:{flexGrow:1},paper:{padding:.5*e.spacing.unit,textAlign:"center",color:e.palette.text.secondary,margin:e.spacing.unit},panel:{display:"flex",alignItems:"stretch",flexDirection:"row"}}})(function(e){var t=e.intakeItems.map(function(t,n){return i.a.createElement(X,{key:t.name+n,name:t.name,calories:t.calories,description:t.description,icon:t.icon,img:t.img,click:function(t,n,a){return e.clickIntakeItem(t,n,a)}})}),n=e.burnItems.map(function(t,n){return i.a.createElement(Z,{key:t.name+n,name:t.name,calories:t.calories,description:t.description,icon:t.icon,uniqueName:t.name+Date.now(),img:t.img,click:function(t,n,a){return e.clickBurnItem(t,n,a)}})});return i.a.createElement("div",{className:e.classes.panel},i.a.createElement(g.a,{className:e.classes.paper},i.a.createElement(k.a,{color:"secondary",variant:"h5"},"TOTAL FOOD: ",e.caloriesIntakeSum," kcal"),i.a.createElement("div",{style:{display:"flex",flexFlow:"row",flexWrap:"wrap",justifyContent:"center"}},t)),i.a.createElement(g.a,{className:e.classes.paper},i.a.createElement(k.a,{color:"primary",variant:"h5"},"TOTAL ACTIVITY: ",e.caloriesBurnSum," kcal"),i.a.createElement("div",{style:{display:"flex",flexFlow:"row",flexWrap:"wrap",justifyContent:"center"}},n)))}),te=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={intakeItems:[{name:"breakfast",calories:750,description:"200g classic breakfast",icon:"\ud83e\udd50",img:"breakfast"},{name:"coffee",calories:200,description:"250ml coffee with milk & sugar",icon:"\u2615",img:"coffee"},{name:"snack",calories:100,description:"100g favorite snack",icon:"\ud83c\udf70",img:"snack"},{name:"apple",calories:50,description:"1 juicy apple",icon:"\ud83c\udf4f",img:"apple"},{name:"lunch",calories:788,description:"300g classic lunch",icon:"\ud83e\udd57",img:"lunch"},{name:"banana",calories:100,description:"1 average banana",icon:"\ud83c\udf4c",img:"banana"},{name:"hotdog",calories:100,description:"1 looking good hotdog",icon:"\ud83c\udf2d",img:"hotdog"},{name:"dinner",calories:788,description:"300g classic dinner",icon:"\ud83c\udf72",img:"dinner"}],burnItems:[{name:"work",calories:800,description:"8h office job",icon:"\ud83d\udc68\u200d\ud83c\udfeb",img:"work"},{name:"walking",calories:267,description:"1h walking",icon:"\ud83d\udc5f",img:"walking"},{name:"dogtrekking",calories:267,description:"1h dogtrekking",icon:"\ud83d\udc29",img:"dogtrekking"},{name:"gaming",calories:81,description:"1h playing videogame (hard-lever)",icon:"\ud83c\udfae",img:"gaming"},{name:"jogging",calories:773,description:"1h jogging",icon:"\ud83e\udd38\u200d",img:"jogging"},{name:"biking",calories:596,description:"1h riding bike",icon:"\ud83d\udeb4\u200d",img:"biking"},{name:"football",calories:494,description:"1h hard football game",icon:"\u26bd",img:"football"},{name:"swimming",calories:492,description:"1h swiming game",icon:"\ud83c\udfca\u200d",img:"swimming"}],intakeItemsToShow:[],burnItemsToShow:[],caloriesIntakeSum:0,caloriesBurnSum:0,verdict:"[*TIP] Go ahead, eat some snack \ud83c\udf69 by clicking ADD below"},n.clickIntakeItemHandler=function(e,t,a){n.state.caloriesIntakeSum>=6e3||(n.addIntakeItemsToShow(e),n.setState(function(e){return{caloriesIntakeSum:e.caloriesIntakeSum+t}},function(){return n.setVerdictHandler()}))},n.addIntakeItemsToShow=function(e){var t=JSON.parse(JSON.stringify(n.state.intakeItems)).filter(function(t){return t.name==e});t[0].uniqueName=Date.now(),n.setState(function(e){return{intakeItemsToShow:e.intakeItemsToShow.concat(t[0])}})},n.clickBurnItemsHandler=function(e,t,a){n.state.caloriesBurnSum>=6e3?console.log(n.state.caloriesBurnSum):(n.addBurnItemsToShow(e),n.setState(function(e){return{caloriesBurnSum:e.caloriesBurnSum+t}},function(){return n.setVerdictHandler()}))},n.addBurnItemsToShow=function(e){var t=JSON.parse(JSON.stringify(n.state.burnItems)).filter(function(t){return t.name==e});t[0].uniqueName=Date.now(),n.setState(function(e){return{burnItemsToShow:e.burnItemsToShow.concat(t[0])}})},n.clickShowedIntakeItemHandler=function(e,t){n.removeIntakeItemsToShow(e),n.setState(function(e){return{caloriesIntakeSum:e.caloriesIntakeSum-t}},function(){return n.setVerdictHandler()})},n.removeIntakeItemsToShow=function(e){var t=JSON.parse(JSON.stringify(n.state.intakeItemsToShow)).filter(function(t){return t.uniqueName!==e});n.setState({intakeItemsToShow:t})},n.clickShowedBurnItemsHandler=function(e,t){n.removeBurnItemsToShow(e),n.setState(function(e){return{caloriesBurnSum:e.caloriesBurnSum-t}})},n.removeBurnItemsToShow=function(e){var t=JSON.parse(JSON.stringify(n.state.burnItemsToShow)).filter(function(t){return t.uniqueName!==e});n.setState({burnItemsToShow:t},function(){return n.setVerdictHandler()})},n.setVerdictHandler=function(){n.state.caloriesIntakeSum>=6e3?n.setState({verdict:"calories intake above reasonable limits"}):n.state.caloriesBurnSum>=6e3?n.setState({verdict:"calories burn above reasonable limits"}):n.state.caloriesIntakeSum>n.state.caloriesBurnSum?n.setState({verdict:"you ate ".concat(n.state.caloriesIntakeSum-n.state.caloriesBurnSum,"kCal too many. Consider some activity \ud83c\udff8")}):n.state.caloriesIntakeSum<n.state.caloriesBurnSum?n.setState({verdict:"you ate ".concat(n.state.caloriesBurnSum-n.state.caloriesIntakeSum,"kCal too few! Refill deficit \ud83c\udf2d")}):n.setState({verdict:"Perfect! Go ahead, eat some cookie \ud83c\udf69"})},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(W,null),i.a.createElement(O,{intakeItemsToShow:this.state.intakeItemsToShow,burnItemsToShow:this.state.burnItemsToShow,clickShowedIntakeItem:this.clickShowedIntakeItemHandler,clickShowedBurnItem:this.clickShowedBurnItemsHandler,verdict:this.state.verdict}),i.a.createElement(ee,{intakeItems:this.state.intakeItems,burnItems:this.state.burnItems,clickIntakeItem:this.clickIntakeItemHandler,clickBurnItem:this.clickBurnItemsHandler,caloriesIntakeSum:this.state.caloriesIntakeSum,caloriesBurnSum:this.state.caloriesBurnSum}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},52:function(e,t,n){e.exports={caloriesIntake:"CaloriesIntake_caloriesIntake__8zOko"}},53:function(e,t,n){e.exports={caloriesBurn:"CaloriesBurn_caloriesBurn__2aVm6"}},78:function(e,t,n){var a={"./apple.jpg":201,"./banana.jpg":202,"./biking.jpg":203,"./breakfast.jpg":204,"./coffee.jpg":205,"./dinner.jpg":206,"./dogtrekking.jpg":207,"./football.jpg":208,"./gaming.jpg":209,"./hotdog.jpg":210,"./jogging.jpg":211,"./lunch.jpg":212,"./snack.jpg":213,"./swimming.jpg":214,"./walking.jpg":215,"./work.jpg":216};function i(e){var t=r(e);return n(t)}function r(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id=78},85:function(e,t,n){e.exports=n(220)},90:function(e,t,n){}},[[85,2,1]]]);
//# sourceMappingURL=main.25da8831.chunk.js.map