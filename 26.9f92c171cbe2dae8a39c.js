(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"f+ep":function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),o=u("mrSG"),e=u("ZZ/e"),i=u("gIcY"),r=(u("J9tS"),u("P6uZ")),s=function(){function n(n,l,u,t,o,e,i,r,s){this.menu=n,this._formBuilder=l,this.authenticationService=u,this.route=t,this.toastController=o,this.loadingController=e,this.router=i,this._ngZone=r,this.events=s,this.nextURL="/dashboard/",this.returnUrl="/dashboard/",this.error=""}return n.prototype.ionViewWillEnter=function(){this.menu.enable(!1)},n.prototype.ngOnInit=function(){var n=this;this.loginForm=this._formBuilder.group({username:["",[i.o.required]],password:["",i.o.required]}),this.user={username:"",password:""},this.route.paramMap.subscribe(function(l){var u=l.get("returnUrl");u&&(n.nextURL=u)}),this.authenticationService.currentUserValue&&this.router.navigate([this.returnUrl]),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/dashboard"},n.prototype.login=function(){return o.b(this,void 0,void 0,function(){var n,l=this;return o.e(this,function(u){switch(u.label){case 0:return this.loginForm.valid?[4,this.loadingController.create({message:"Please Wait",duration:2e4})]:[3,3];case 1:return[4,(n=u.sent()).present()];case 2:u.sent(),this.authenticationService.login(this.user.username,this.user.password).pipe(Object(r.a)()).subscribe(function(u){l.authenticationService.getProfileInfo().subscribe(function(u){n.dismiss(),l._ngZone.run(function(){l.router.navigate([l.returnUrl])})},function(u){console.log(u),n.dismiss(),l.presentToast("Some Error Occured !!!"),l.error=u})},function(u){console.log(u),n.dismiss(),l.presentToast("Incorrect User or Password"),l.error=u}),u.label=3;case 3:return[2]}})})},n.prototype.logout=function(){this.authenticationService.logout()},n.prototype.presentToast=function(n){return o.b(this,void 0,void 0,function(){return o.e(this,function(l){switch(l.label){case 0:return[4,this.toastController.create({message:n,duration:2e3})];case 1:return l.sent().present(),[2]}})})},n}(),b=function(){return function(){}}(),a=u("pMnS"),c=u("oBZk"),g=u("pW6c"),d=u("ZYCi"),p=t.vb({encapsulation:0,styles:[[".login-content[_ngcontent-%COMP%]{background:0 0}.login-content[_ngcontent-%COMP%]   .logo-row[_ngcontent-%COMP%]{padding-top:50px;padding-bottom:20px}.login-content[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%]{background:#ebf3f5;padding:20px 20px 0;margin-top:30px;border-radius:10px}.login-content[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{align-items:center;text-align:center}.login-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{border-radius:10px!important;padding-left:30px!important;font-size:.9em;margin-bottom:10px;border:none;box-shadow:.5px .5px .5px #263238}.login-content[_ngcontent-%COMP%]   .forgot-col[_ngcontent-%COMP%]{margin:0 16px;padding-bottom:20px}.login-content[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]{border-bottom-color:#263238!important;box-shadow:none!important}.login-content[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{background:#263238;border-radius:30px!important;border:1px solid #fff;padding:1em 3em;color:#fff;outline:0}.login-content[_ngcontent-%COMP%]   .forgot-btn[_ngcontent-%COMP%]{color:#000;font-size:.8em;background:0 0}.login-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{background-color:#ff0}.login-content[_ngcontent-%COMP%]   .form-col[_ngcontent-%COMP%]{max-width:350px}"]],data:{}});function h(n){return t.Rb(0,[(n()(),t.xb(0,0,null,null,68,"ion-content",[["class","login-content"],["padding",""]],null,null,null,c.ib,c.l)),t.wb(1,49152,null,0,e.v,[t.h,t.n],null,null),(n()(),t.xb(2,0,null,0,66,"ion-grid",[],null,null,null,c.nb,c.q)),t.wb(3,49152,null,0,e.B,[t.h,t.n],null,null),(n()(),t.xb(4,0,null,0,64,"ion-row",[["class","main-row"],["justify-content-center",""]],null,null,null,c.Eb,c.H)),t.wb(5,49152,null,0,e.jb,[t.h,t.n],null,null),(n()(),t.xb(6,0,null,0,62,"ion-col",[["class","form-col"]],null,null,null,c.hb,c.k)),t.wb(7,49152,null,0,e.u,[t.h,t.n],null,null),(n()(),t.xb(8,0,null,0,8,"ion-row",[["class","logo-row"]],null,null,null,c.Eb,c.H)),t.wb(9,49152,null,0,e.jb,[t.h,t.n],null,null),(n()(),t.xb(10,0,null,0,1,"ion-col",[],null,null,null,c.hb,c.k)),t.wb(11,49152,null,0,e.u,[t.h,t.n],null,null),(n()(),t.xb(12,0,null,0,2,"ion-col",[["width-67",""]],null,null,null,c.hb,c.k)),t.wb(13,49152,null,0,e.u,[t.h,t.n],null,null),(n()(),t.xb(14,0,null,0,0,"img",[["src","assets/circle-cropped.png"]],null,null,null,null,null)),(n()(),t.xb(15,0,null,0,1,"ion-col",[],null,null,null,c.hb,c.k)),t.wb(16,49152,null,0,e.u,[t.h,t.n],null,null),(n()(),t.xb(17,0,null,0,51,"div",[["class","login-box"]],null,null,null,null,null)),(n()(),t.xb(18,0,null,null,50,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,u){var o=!0;return"submit"===l&&(o=!1!==t.Hb(n,20).onSubmit(u)&&o),"reset"===l&&(o=!1!==t.Hb(n,20).onReset()&&o),o},null,null)),t.wb(19,16384,null,0,i.q,[],null,null),t.wb(20,540672,null,0,i.d,[[8,null],[8,null]],{form:[0,"form"]},null),t.Mb(2048,null,i.a,null,[i.d]),t.wb(22,16384,null,0,i.j,[[4,i.a]],null,null),(n()(),t.xb(23,0,null,null,33,"ion-row",[],null,null,null,c.Eb,c.H)),t.wb(24,49152,null,0,e.jb,[t.h,t.n],null,null),(n()(),t.xb(25,0,null,0,31,"ion-col",[],null,null,null,c.hb,c.k)),t.wb(26,49152,null,0,e.u,[t.h,t.n],null,null),(n()(),t.xb(27,0,null,0,29,"ion-list",[["inset",""]],null,null,null,c.yb,c.B)),t.wb(28,49152,null,0,e.P,[t.h,t.n],{inset:[0,"inset"]},null),(n()(),t.xb(29,0,null,0,13,"ion-item",[["lines","none"]],null,null,null,c.wb,c.x)),t.wb(30,49152,null,0,e.I,[t.h,t.n],{lines:[0,"lines"]},null),(n()(),t.xb(31,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,c.xb,c.A)),t.wb(32,49152,null,0,e.O,[t.h,t.n],{position:[0,"position"]},null),(n()(),t.Pb(-1,0,["Username"])),(n()(),t.xb(34,0,null,0,8,"ion-input",[["formControlName","username"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var o=!0,e=n.component;return"ionBlur"===l&&(o=!1!==t.Hb(n,37)._handleBlurEvent()&&o),"ionChange"===l&&(o=!1!==t.Hb(n,37)._handleInputEvent(u.target.value)&&o),"ngModelChange"===l&&(o=!1!==(e.user.username=u)&&o),o},c.tb,c.w)),t.wb(35,16384,null,0,i.n,[],{required:[0,"required"]},null),t.Mb(1024,null,i.f,function(n){return[n]},[i.n]),t.wb(37,16384,null,0,e.Qb,[t.n],null,null),t.Mb(1024,null,i.g,function(n){return[n]},[e.Qb]),t.wb(39,671744,null,0,i.c,[[3,i.a],[6,i.f],[8,null],[6,i.g],[2,i.s]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Mb(2048,null,i.h,null,[i.c]),t.wb(41,16384,null,0,i.i,[[4,i.h]],null,null),t.wb(42,49152,null,0,e.H,[t.h,t.n],{required:[0,"required"],type:[1,"type"]},null),(n()(),t.xb(43,0,null,0,13,"ion-item",[["lines","none"]],null,null,null,c.wb,c.x)),t.wb(44,49152,null,0,e.I,[t.h,t.n],{lines:[0,"lines"]},null),(n()(),t.xb(45,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,c.xb,c.A)),t.wb(46,49152,null,0,e.O,[t.h,t.n],{position:[0,"position"]},null),(n()(),t.Pb(-1,0,["Password"])),(n()(),t.xb(48,0,null,0,8,"ion-input",[["formControlName","password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var o=!0,e=n.component;return"ionBlur"===l&&(o=!1!==t.Hb(n,51)._handleBlurEvent()&&o),"ionChange"===l&&(o=!1!==t.Hb(n,51)._handleInputEvent(u.target.value)&&o),"ngModelChange"===l&&(o=!1!==(e.user.password=u)&&o),o},c.tb,c.w)),t.wb(49,16384,null,0,i.n,[],{required:[0,"required"]},null),t.Mb(1024,null,i.f,function(n){return[n]},[i.n]),t.wb(51,16384,null,0,e.Qb,[t.n],null,null),t.Mb(1024,null,i.g,function(n){return[n]},[e.Qb]),t.wb(53,671744,null,0,i.c,[[3,i.a],[6,i.f],[8,null],[6,i.g],[2,i.s]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Mb(2048,null,i.h,null,[i.c]),t.wb(55,16384,null,0,i.i,[[4,i.h]],null,null),t.wb(56,49152,null,0,e.H,[t.h,t.n],{required:[0,"required"],type:[1,"type"]},null),(n()(),t.xb(57,0,null,null,5,"ion-row",[],null,null,null,c.Eb,c.H)),t.wb(58,49152,null,0,e.jb,[t.h,t.n],null,null),(n()(),t.xb(59,0,null,0,3,"ion-col",[["class","forgot-col"]],null,null,null,c.hb,c.k)),t.wb(60,49152,null,0,e.u,[t.h,t.n],null,null),(n()(),t.xb(61,0,null,0,1,"button",[["class","submit-btn"],["full",""],["ion-button",""],["type","submit"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.login()&&t),t},null,null)),(n()(),t.Pb(-1,null,["Login"])),(n()(),t.xb(63,0,null,null,5,"ion-row",[],null,null,null,c.Eb,c.H)),t.wb(64,49152,null,0,e.jb,[t.h,t.n],null,null),(n()(),t.xb(65,0,null,0,3,"ion-col",[["class","forgot-col"]],null,null,null,c.hb,c.k)),t.wb(66,49152,null,0,e.u,[t.h,t.n],null,null),(n()(),t.xb(67,0,null,0,1,"button",[["block",""],["class","forgot-btn"],["clear",""],["ion-button",""]],null,null,null,null,null)),(n()(),t.Pb(-1,null,["Forgot Password ?"]))],function(n,l){var u=l.component;n(l,20,0,u.loginForm),n(l,28,0,""),n(l,30,0,"none"),n(l,32,0,"floating"),n(l,35,0,""),n(l,39,0,"username",u.user.username),n(l,42,0,"","text"),n(l,44,0,"none"),n(l,46,0,"floating"),n(l,49,0,""),n(l,53,0,"password",u.user.password),n(l,56,0,"","password")},function(n,l){n(l,18,0,t.Hb(l,22).ngClassUntouched,t.Hb(l,22).ngClassTouched,t.Hb(l,22).ngClassPristine,t.Hb(l,22).ngClassDirty,t.Hb(l,22).ngClassValid,t.Hb(l,22).ngClassInvalid,t.Hb(l,22).ngClassPending),n(l,34,0,t.Hb(l,35).required?"":null,t.Hb(l,41).ngClassUntouched,t.Hb(l,41).ngClassTouched,t.Hb(l,41).ngClassPristine,t.Hb(l,41).ngClassDirty,t.Hb(l,41).ngClassValid,t.Hb(l,41).ngClassInvalid,t.Hb(l,41).ngClassPending),n(l,48,0,t.Hb(l,49).required?"":null,t.Hb(l,55).ngClassUntouched,t.Hb(l,55).ngClassTouched,t.Hb(l,55).ngClassPristine,t.Hb(l,55).ngClassDirty,t.Hb(l,55).ngClassValid,t.Hb(l,55).ngClassInvalid,t.Hb(l,55).ngClassPending)})}function m(n){return t.Rb(0,[(n()(),t.xb(0,0,null,null,1,"app-login",[],null,null,null,h,p)),t.wb(1,114688,null,0,s,[e.Hb,i.b,g.a,d.a,e.Rb,e.Gb,d.m,t.E,e.e],null,null)],function(n,l){n(l,1,0)},null)}var f=t.tb("app-login",s,m,{},{},[]),w=u("Ip0R");u.d(l,"LoginPageModuleNgFactory",function(){return C});var C=t.ub(b,[],function(n){return t.Eb([t.Fb(512,t.k,t.jb,[[8,[a.a,f]],[3,t.k],t.C]),t.Fb(4608,w.m,w.l,[t.y,[2,w.u]]),t.Fb(4608,i.r,i.r,[]),t.Fb(4608,e.c,e.c,[t.E,t.g]),t.Fb(4608,e.Ib,e.Ib,[e.c,t.k,t.u,w.c]),t.Fb(4608,e.Nb,e.Nb,[e.c,t.k,t.u,w.c]),t.Fb(4608,i.b,i.b,[]),t.Fb(1073742336,w.b,w.b,[]),t.Fb(1073742336,i.p,i.p,[]),t.Fb(1073742336,i.e,i.e,[]),t.Fb(1073742336,e.Eb,e.Eb,[]),t.Fb(1073742336,i.m,i.m,[]),t.Fb(1073742336,d.o,d.o,[[2,d.u],[2,d.m]]),t.Fb(1073742336,b,b,[]),t.Fb(1024,d.k,function(){return[[{path:"",component:s}]]},[])])})}}]);