(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){e.exports=t.p+"static/media/addcircle.259374c6.png"},28:function(e){e.exports={a:"fastai-vision-model-inference--react-gh-pages"}},31:function(e,a,t){e.exports=t(71)},37:function(e,a,t){},38:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(7),r=t.n(l),s=(t(37),t(9)),c=t(10),o=t(14),m=t(11),p=t(13),h=t(3),u=t(73),g=t(75),d=t(74),v=(t(38),t(27)),f=t.n(v),y=t(12),b=t.n(y),E=t(28),O=t(29),k=t.n(O);console.log("Name is ",E.a);var j=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={overlayActive:!1,overlaySpinnerActive:!1,overlayText:"Loading..",getApiUrl:e.getApiUrl||"https://dsm.just-minimalism.com/classify-url",classifyImg:e.classifyImg,enableClassify:!0},t.handleClick=t.handleClick.bind(Object(h.a)(Object(h.a)(t))),t.handleClassify=t.handleClassify.bind(Object(h.a)(Object(h.a)(t))),t.toggleOverlay=t.toggleOverlay.bind(Object(h.a)(Object(h.a)(t))),t}return Object(p.a)(a,e),Object(c.a)(a,[{key:"exampleMapping",value:function(e){console.log("inside exampleMapping--\x3e",e,e),console.log("<--inside exampleMapping");return{animal:"This is an animal mouse!",computer:"This is a computer mouse!",micky:"This is micky mouse (and disney just made a dollar)."}[e.predictions[0][0]]}},{key:"handleClick",value:function(){this.toggleOverlay()}},{key:"toggleOverlay",value:function(){var e=this;this.setState(function(a){return{overlayActive:!e.state.overlayActive}})}},{key:"toggleSpinner",value:function(){var e=this;this.setState(function(a){return{overlaySpinnerActive:!e.state.overlaySpinnerActive}})}},{key:"handleClassify",value:function(){var e=this,a="?url="+encodeURIComponent(this.state.classifyImg);this.toggleOverlay(),this.toggleSpinner(),this.setState({overlayText:"Loading.."}),console.log("in handle classify"),f.a.get("https://dsm.just-minimalism.com/classify-url"+a).then(function(a){console.log(a),e.setState({overlayText:e.exampleMapping(a.data),enableClassify:!1}),e.toggleSpinner()})}},{key:"render",value:function(){return i.a.createElement(k.a,{active:this.state.overlayActive,spinner:this.state.overlaySpinnerActive,text:this.state.overlayText,onClick:this.handleClick},i.a.createElement("div",{className:"App-header"},i.a.createElement("img",{src:this.props.classifyImg,className:"App-logo",alt:""}),i.a.createElement(u.a,{className:"App-button-link",to:"/classify"},i.a.createElement("button",{className:"App-button",onClick:this.handleClassify,disabled:!this.state.enableClassify},"Classify..")),i.a.createElement(u.a,{to:"/",className:"App-back-link"},"Back")))}}]),a}(n.Component),C=function(e){function a(e){var t;return Object(s.a)(this,a),t=Object(o.a)(this,Object(m.a)(a).call(this,e)),console.log("we are in the component"),t.state={x:b.a,imgSrc:""},t}return Object(p.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return console.log("IN VERIFY RENDER WITH",this.props),i.a.createElement("div",{className:"App-header"},i.a.createElement("img",{src:this.props.imgSrcClean,className:"App-logo",onError:this.props.handleError,alt:""}),i.a.createElement("input",{type:"text",value:this.props.imgSrcRaw,className:"App-text-input",onChange:this.props.handleChange}),i.a.createElement(u.a,{className:"App-button-link",to:"/classify"},i.a.createElement("button",{className:"App-button"},"Next")))}}]),a}(n.Component);function A(e){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement(u.a,{className:"App-link",to:"/verify-url"},"Enter Url"),i.a.createElement("p",null,"Or"),i.a.createElement(u.a,{className:"App-link",to:"https://reactjs.org"},"Take Photo / Upload Photo")))}var I=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={classifyImg:"",verifyImgUrl:null,verifyImg:b.a,validImg:!1},t.handleChange=t.handleChange.bind(Object(h.a)(Object(h.a)(t))),t.handleError=t.handleError.bind(Object(h.a)(Object(h.a)(t))),t}return Object(p.a)(a,e),Object(c.a)(a,[{key:"handleError",value:function(e){console.log("IN ERROR WITH EVENT",e.target),this.setState(function(e){return{verifyImg:b.a}})}},{key:"handleChange",value:function(e){var a=e.target.value;this.setState(function(e){return{verifyImgUrl:a,verifyImg:a}})}},{key:"render",value:function(){var e=this;return i.a.createElement(g.a,{basename:"/fastai-vision-model-inference--react-gh-pages"},i.a.createElement("div",{className:"app-container"},i.a.createElement(d.a,{path:"/",exact:!0,component:A}),i.a.createElement(d.a,{path:"/verify-url",exact:!0,render:function(a){return i.a.createElement(C,{classifyImg:e.state.classifyImg,handleChange:e.handleChange,handleError:e.handleError,imgSrcRaw:e.state.verifyImgUrl,imgSrcClean:e.state.verifyImg})}}),i.a.createElement(d.a,{path:"/classify",exact:!0,render:function(a){return i.a.createElement(j,{classifyImg:e.state.verifyImg,handleSubmit:e.handleSubmit})}})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.6c0566e9.chunk.js.map