(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{413:function(e,r,t){"use strict";t(122);var o=t(89);r.a=Object(o.a)("flex")},457:function(e,r,t){"use strict";t.r(r);t(205);var o={data:function(){return{email:"",pwd:"",emailError:!1,emailErrorMessage:"",pwdErrorMessage:"",pwdError:!1,password:!0}},methods:{validateEamil:function(){var em=this.email;return/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(em)?(this.emailError=!1,this.emailErrorMessage="",!0):(this.emailError=!0,this.emailErrorMessage="Invalied Eamil Adress",!1)},passwordValidation:function(){var e=this.pwd,r=-1!=e.search(/[0-9]/g),t=-1!=e.search(/[A-Z]/g),o=-1==e.search(/ /g);return r?t?o?(this.pwdError=!1,this.pwdErrorMessage="",!0):(this.pwdError=!0,this.pwdErrorMessage="their should be no space inbetween the words",!1):(this.pwdError=!0,this.pwdErrorMessage="should have atlease 1 Capital letter",!1):(this.pwdError=!0,this.pwdErrorMessage="should have atlease 1 number",!1)},validator:function(){this.validateEamil()?console.log("email passed"):console.log("email failed"),this.passwordValidation()?console.log("password passed"):console.log("password failed")}}},l=t(45),n=t(63),d=t.n(n),c=t(195),m=t(387),w=t(406),v=t(413),h=t(401),E=t(402),f=t(388),component=Object(l.a)(o,function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-container",[t("v-form",{on:{submit:function(r){return r.preventDefault(),e.validator()}}},[t("v-card",{staticClass:"pa-2",staticStyle:{"border-radius":"30px 0 30px 0","max-width":"500px",margin:"10px auto"}},[t("h2",{staticClass:"my-2 text-center"},[e._v("Login")]),e._v(" "),t("v-layout",{attrs:{column:""}},[t("v-flex",{attrs:{xs12:""}},[t("v-text-field",{attrs:{error:e.emailError,"error-messages":e.emailErrorMessage,color:"green",outlined:"",type:"email",label:"User Name or Email Address"},model:{value:e.email,callback:function(r){e.email=r},expression:"email"}})],1),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("v-text-field",{attrs:{error:e.pwdError,"error-messages":e.pwdErrorMessage,color:"green","append-icon":e.password?"mdi-eye-off":"mdi-eye",type:e.password?"password":"text",outlined:"",label:"Password"},on:{"click:append":function(r){e.password=!e.password}},model:{value:e.pwd,callback:function(r){e.pwd=r},expression:"pwd"}})],1),e._v(" "),t("v-btn",{attrs:{type:"submit",xs12:"",outlined:"",large:"",color:"success"}},[e._v("Login")])],1),e._v(" "),t("p",{staticClass:"my-2 py-2 text-center"},[e._v("\n        Dont have a account?\n        "),t("nuxt-link",{staticClass:"green--text",attrs:{to:"/user/regester"}},[e._v("Signup")])],1)],1)],1)],1)},[],!1,null,null,null);r.default=component.exports;d()(component,{VBtn:c.a,VCard:m.a,VContainer:w.a,VFlex:v.a,VForm:h.a,VLayout:E.a,VTextField:f.a})}}]);