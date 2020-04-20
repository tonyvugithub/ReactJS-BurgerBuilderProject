webpackJsonp([1],{180:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function o(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var u=t(0),l=t.n(u),c=t(7),s=t(8),A=t(181),d=t(52),p=t(53),b=t(193),h=t.n(b),g=t(10),m=t(12),f=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),C=function(e){function n(){var e,t,o,u;i(this,n);for(var l=arguments.length,c=Array(l),s=0;s<l;s++)c[s]=arguments[s];return t=o=a(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(c))),o.state={singinForm:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Email Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,changedAfterMount:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,changedAfterMount:!1}},isInSignupMode:!0},o.inputChangeHandler=function(e,n){var t=Object(m.b)(o.state.singinForm,r({},n,Object(m.b)(o.state.singinForm[n],{value:e.target.value,valid:Object(m.a)(e.target.value,o.state.singinForm[n].validation),changedAfterMount:!0})));o.setState({singinForm:t})},o.submitHandler=function(e){e.preventDefault(),o.props.onAuthenticate(o.state.singinForm.email.value,o.state.singinForm.password.value,o.state.isInSignupMode)},o.switchAuthModeHandler=function(){o.setState(function(e){return{isInSignupMode:!e.isInSignupMode}})},u=t,a(o,u)}return o(n,e),f(n,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,n=[];for(var t in this.state.singinForm)n.push({id:t,config:this.state.singinForm[t]});var r=this.props.loading?l.a.createElement(p.a,null):n.map(function(n){return l.a.createElement(A.a,{key:n.id,elementType:n.config.elementType,elementConfig:n.config.elementConfig,value:n.config.value,invalid:!n.config.valid,errorMessage:n.config.errorMessage,shouldValidate:n.config.validation,isChangedAfterMount:n.config.changedAfterMount,onchange:function(t){return e.inputChangeHandler(t,n.id)}})}),i=this.props.error?l.a.createElement("p",null,this.props.error.message):null,a=this.props.isAuthenticated?l.a.createElement(s.c,{to:this.props.authRedirectPath}):null;return l.a.createElement("div",{className:h.a.Authenticate},a,i,l.a.createElement("form",{onSubmit:this.submitHandler},r,l.a.createElement(d.a,{btnType:"Proceed"},this.state.isInSignupMode?"Signup":"Signin")),l.a.createElement(d.a,{onclick:this.switchAuthModeHandler,btnType:"Cancel"},"Swith to ",this.state.isInSignupMode?"Signin":"Signup"))}}]),n}(u.Component),_=function(e){return{loading:e.authenticate.loading,error:e.authenticate.error,isAuthenticated:null!==e.authenticate.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.authenticate.authRedirectPath}},x=function(e){return{onAuthenticate:function(n,t,r){return e(g.a(n,t,r))},onSetAuthRedirectPath:function(){return e(g.j("/"))}}};n.default=Object(c.b)(_,x)(C)},181:function(e,n,t){"use strict";var r=t(0),i=t.n(r),a=t(182),o=t.n(a),u=function(e){var n=null,t=[o.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.isChangedAfterMount&&t.push(o.a.Invalid),e.elementType){case"input":n=i.a.createElement("input",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.onchange}));break;case"textarea":n=i.a.createElement("textarea",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.onchange}));break;case"select":n=i.a.createElement("select",{className:t.join(" "),value:e.value,onChange:e.onchange},e.elementConfig.options.map(function(e){return i.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:n=i.a.createElement("input",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.onchange}))}var r=null;return e.invalid&&e.isChangedAfterMount&&(r=i.a.createElement("p",{className:o.a.ValidationError},e.errorMessage)),i.a.createElement("div",{className:o.a.Input},i.a.createElement("label",{className:o.a.Label},e.label),n,r)};n.a=u},182:function(e,n,t){var r=t(183);"string"===typeof r&&(r=[[e.i,r,""]]);var i={};i.transform=void 0;t(177)(r,i);r.locals&&(e.exports=r.locals)},183:function(e,n,t){n=e.exports=t(176)(!0),n.push([e.i,".Input-module__Input__2GO9p{width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.Input-module__Label__1Cyzj{font-weight:700;display:block;margin-bottom:8px}.Input-module__InputElement__1Uyb4{outline:none;border:1px solid #ccc;background-color:#fff;font:inherit;padding:6px 10px;display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.Input-module__InputElement__1Uyb4:focus{outline:none;background-color:#ccc}.Input-module__Invalid__1dxIO{border:1px solid red;background-color:#f5998e}.Input-module__ValidationError__2sgDL{color:red;margin:5px 0}","",{version:3,sources:["F:/files/Seneca/ExtraCirriculum/React Study/burger project/withRedux/src/components/UI/Input/Input.module.css"],names:[],mappings:"AAAA,4BACE,WAAY,AACZ,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAChC,AAED,4BACE,gBAAkB,AAClB,cAAe,AACf,iBAAmB,CACpB,AAED,mCACE,aAAc,AACd,sBAAuB,AACvB,sBAAwB,AACxB,aAAc,AACd,iBAAkB,AAClB,cAAe,AACf,WAAY,AACZ,8BAA+B,AACvB,qBAAuB,CAChC,AAED,yCACE,aAAc,AACd,qBAAuB,CACxB,AAED,8BACE,qBAAsB,AACtB,wBAAqC,CACtC,AAED,sCACE,UAAW,AACX,YAAc,CACf",file:"Input.module.css",sourcesContent:[".Input {\r\n  width: 100%;\r\n  padding: 10px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.Label {\r\n  font-weight: bold;\r\n  display: block;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.InputElement {\r\n  outline: none;\r\n  border: 1px solid #ccc;\r\n  background-color: white;\r\n  font: inherit;\r\n  padding: 6px 10px;\r\n  display: block;\r\n  width: 100%;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.InputElement:focus {\r\n  outline: none;\r\n  background-color: #ccc;\r\n}\r\n\r\n.Invalid{\r\n  border: 1px solid red;\r\n  background-color: rgb(245, 153, 142);\r\n}\r\n\r\n.ValidationError {\r\n  color: red;\r\n  margin: 5px 0;\r\n} "],sourceRoot:""}]),n.locals={Input:"Input-module__Input__2GO9p",Label:"Input-module__Label__1Cyzj",InputElement:"Input-module__InputElement__1Uyb4",Invalid:"Input-module__Invalid__1dxIO",ValidationError:"Input-module__ValidationError__2sgDL"}},193:function(e,n,t){var r=t(194);"string"===typeof r&&(r=[[e.i,r,""]]);var i={};i.transform=void 0;t(177)(r,i);r.locals&&(e.exports=r.locals)},194:function(e,n,t){n=e.exports=t(176)(!0),n.push([e.i,".Authenticate-module__Authenticate__t-6K0{margin:20px auto;width:80%;text-align:center;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;border:1px solid #eee;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.Authenticate-module__Input__3i5Gn{display:block;width:100%}@media (min-width:600px){.Authenticate-module__ContactData__970Vf{width:500px}.Authenticate-module__Input__3i5Gn{display:block;width:400px}}","",{version:3,sources:["F:/files/Seneca/ExtraCirriculum/React Study/burger project/withRedux/src/containers/Authenticate/Authenticate.module.css"],names:[],mappings:"AAAA,0CACE,iBAAkB,AAClB,UAAW,AACX,kBAAmB,AACnB,kCAAmC,AAC3B,0BAA2B,AACnC,sBAAuB,AACvB,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAChC,AAED,mCACE,cAAe,AACf,UAAY,CACb,AAED,yBACE,yCACE,WAAa,CACd,AACD,mCACE,cAAe,AACf,WAAa,CACd,CACF",file:"Authenticate.module.css",sourcesContent:[".Authenticate {\r\n  margin: 20px auto;\r\n  width: 80%;\r\n  text-align: center;\r\n  -webkit-box-shadow: 0 2px 3px #ccc;\r\n          box-shadow: 0 2px 3px #ccc;\r\n  border: 1px solid #eee;\r\n  padding: 10px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.Input {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n@media (min-width: 600px){\r\n  .ContactData{\r\n    width: 500px;\r\n  }\r\n  .Input {\r\n    display: block;\r\n    width: 400px;\r\n  }\r\n}"],sourceRoot:""}]),n.locals={Authenticate:"Authenticate-module__Authenticate__t-6K0",Input:"Authenticate-module__Input__3i5Gn",ContactData:"Authenticate-module__ContactData__970Vf"}}});
//# sourceMappingURL=1.c72cf853.chunk.js.map