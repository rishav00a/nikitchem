(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{tXIL:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),i=u("BKks"),o=u("yTNM"),e=u("47AC"),c=u("ZZ/e"),a=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),r=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),b={0:a,1:r},s=function(){function l(l,n,u,t,i,o,e){this.location=l,this.route=n,this.router=u,this._apiservice=t,this.storageService=i,this.plt=o,this.resolver=e,this.listdata=[],this.items=[],this.api_called=!1}return l.prototype.ngOnInit=function(){var l=this;this.page=this.route.snapshot.paramMap.get("page"),this.listpagedetails=i.a[this.page],this.plt.ready().then(function(){l.loadItems()}),this.storageService.dataValue.subscribe(function(n){l.initItemss().then(function(l){})})},l.prototype.loadItems=function(){var l=this;this.storageService.getItems(this.listpagedetails.storage_key).then(function(n){l.listdata=n,l.createComponent(l.listdata),l.api_called||l.listdata&&0!=l.listdata.length||l.initItemss()})},l.prototype.initItemss=function(){var l=this;return new Promise(function(n,u){l._apiservice.getListData(l.page).subscribe(function(u){console.log(u),l.api_called=!0,l.storageService.addItem(l.listpagedetails.storage_key,u).then(function(u){l.loadItems(),n()})})})},l.prototype.doRefresh=function(l){this.initItemss().then(function(n){return l.target.complete()})},l.prototype.navigateCreatePage=function(){this.router.navigateByUrl("/create/"+this.page)},l.prototype.createComponent=function(l){this.entry.clear();var n=this.resolver.resolveComponentFactory(b[this.listpagedetails.add_new_component_index]);this.componentRef=this.entry.createComponent(n),this.componentRef.instance.listdata=l},l}(),p=function(){return function(){}}(),f=u("pMnS"),h=u("oBZk"),m=u("Ip0R"),g=u("ZYCi"),d=t.vb({encapsulation:0,styles:[["ion-card-content[_ngcontent-%COMP%]{background:#fff;padding:0}"]],data:{}});function w(l){return t.Rb(0,[t.Nb(402653184,1,{entry:0}),(l()(),t.xb(1,0,null,null,12,"ion-header",[],null,null,null,h.ob,h.r)),t.wb(2,49152,null,0,c.C,[t.h,t.n],null,null),(l()(),t.xb(3,0,null,0,10,"ion-toolbar",[],null,null,null,h.Sb,h.V)),t.wb(4,49152,null,0,c.Cb,[t.h,t.n],null,null),(l()(),t.xb(5,0,null,0,2,"ion-title",[],null,null,null,h.Rb,h.U)),t.wb(6,49152,null,0,c.Ab,[t.h,t.n],null,null),(l()(),t.Pb(7,0,[""," List"])),(l()(),t.xb(8,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,h.ab,h.d)),t.wb(9,49152,null,0,c.m,[t.h,t.n],null,null),(l()(),t.xb(10,0,null,0,3,"ion-button",[["color","light"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.location.back()&&t),t},h.Z,h.c)),t.wb(11,49152,null,0,c.l,[t.h,t.n],{color:[0,"color"]},null),(l()(),t.xb(12,0,null,0,1,"ion-icon",[["name","arrow-back"],["slot","icon-only"]],null,null,null,h.pb,h.s)),t.wb(13,49152,null,0,c.D,[t.h,t.n],{name:[0,"name"]},null),(l()(),t.xb(14,0,null,null,13,"ion-content",[],null,null,null,h.ib,h.l)),t.wb(15,49152,null,0,c.v,[t.h,t.n],null,null),(l()(),t.xb(16,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],function(l,n,u){var t=!0;return"ionRefresh"===n&&(t=!1!==l.component.doRefresh(u)&&t),t},h.Db,h.F)),t.wb(17,49152,null,0,c.db,[t.h,t.n],null,null),(l()(),t.xb(18,0,null,0,1,"ion-refresher-content",[["pullingIcon","arrow-dropdown"],["pullingText","Pull to refresh"],["refreshingSpinner","circles"],["refreshingText","Refreshing..."]],null,null,null,h.Cb,h.G)),t.wb(19,49152,null,0,c.eb,[t.h,t.n],{pullingIcon:[0,"pullingIcon"],pullingText:[1,"pullingText"],refreshingSpinner:[2,"refreshingSpinner"],refreshingText:[3,"refreshingText"]},null),(l()(),t.xb(20,16777216,[[1,3],["componentcontainer",1]],0,1,"template",[],null,null,null,null,null)),(l()(),t.Pb(-1,null,["\n      "])),(l()(),t.xb(22,0,null,0,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,h.lb,h.n)),t.wb(23,49152,null,0,c.x,[t.h,t.n],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),t.xb(24,0,null,0,3,"ion-fab-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.navigateCreatePage()&&t),t},h.kb,h.o)),t.wb(25,49152,null,0,c.y,[t.h,t.n],null,null),(l()(),t.xb(26,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,h.pb,h.s)),t.wb(27,49152,null,0,c.D,[t.h,t.n],{name:[0,"name"]},null)],function(l,n){l(n,11,0,"light"),l(n,13,0,"arrow-back"),l(n,19,0,"arrow-dropdown","Pull to refresh","circles","Refreshing..."),l(n,23,0,"end","bottom"),l(n,27,0,"add")},function(l,n){l(n,7,0,n.component.listpagedetails.title)})}function x(l){return t.Rb(0,[(l()(),t.xb(0,0,null,null,1,"app-listpage",[],null,null,null,w,d)),t.wb(1,114688,null,0,s,[m.f,g.a,g.m,o.a,e.a,c.Mb,t.k],null,null)],function(l,n){l(n,1,0)},null)}var v=t.tb("app-listpage",s,x,{},{},[]),I=t.vb({encapsulation:0,styles:[["ion-card-content[_ngcontent-%COMP%]{background:#fff;padding:0}"]],data:{}});function k(l){return t.Rb(0,[(l()(),t.xb(0,0,null,null,1,"ion-icon",[["color","success"],["name","md-checkmark-circle-outline"],["slot","start"]],null,null,null,h.pb,h.s)),t.wb(1,49152,null,0,c.D,[t.h,t.n],{color:[0,"color"],name:[1,"name"]},null)],function(l,n){l(n,1,0,"success","md-checkmark-circle-outline")},null)}function _(l){return t.Rb(0,[(l()(),t.xb(0,0,null,null,1,"ion-icon",[["color","danger"],["name","ios-close-circle-outline"],["slot","start"]],null,null,null,h.pb,h.s)),t.wb(1,49152,null,0,c.D,[t.h,t.n],{color:[0,"color"],name:[1,"name"]},null)],function(l,n){l(n,1,0,"danger","ios-close-circle-outline")},null)}function y(l){return t.Rb(0,[(l()(),t.xb(0,0,null,null,8,"ion-item",[],null,null,null,h.wb,h.x)),t.wb(1,49152,null,0,c.I,[t.h,t.n],null,null),(l()(),t.ob(16777216,null,0,1,null,k)),t.wb(3,16384,null,0,m.k,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.ob(16777216,null,0,1,null,_)),t.wb(5,16384,null,0,m.k,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.Pb(6,0,[" "," "])),(l()(),t.xb(7,0,null,0,1,"div",[["class","item-note"],["slot","end"]],null,null,null,null,null)),(l()(),t.Pb(8,null,[" "," "]))],function(l,n){l(n,3,0,n.context.$implicit.is_active),l(n,5,0,!n.context.$implicit.is_active)},function(l,n){l(n,6,0,n.context.$implicit.location_name),l(n,8,0,n.context.$implicit.assigned_salesman)})}function R(l){return t.Rb(0,[(l()(),t.xb(0,0,null,null,16,"ion-card",[],null,null,null,h.fb,h.e)),t.wb(1,49152,null,0,c.n,[t.h,t.n],null,null),(l()(),t.xb(2,0,null,0,8,"ion-item",[],null,null,null,h.wb,h.x)),t.wb(3,49152,null,0,c.I,[t.h,t.n],null,null),(l()(),t.xb(4,0,null,0,1,"ion-icon",[["name","pin"],["slot","start"]],null,null,null,h.pb,h.s)),t.wb(5,49152,null,0,c.D,[t.h,t.n],{name:[0,"name"]},null),(l()(),t.xb(6,0,null,0,2,"ion-label",[],null,null,null,h.xb,h.A)),t.wb(7,49152,null,0,c.O,[t.h,t.n],null,null),(l()(),t.Pb(-1,0,["Location Name"])),(l()(),t.xb(9,0,null,0,1,"div",[["class","item-note"],["slot","end"]],null,null,null,null,null)),(l()(),t.Pb(-1,null,[" Salesman "])),(l()(),t.xb(11,0,null,0,5,"ion-card-content",[],null,null,null,h.bb,h.f)),t.wb(12,49152,null,0,c.o,[t.h,t.n],null,null),(l()(),t.xb(13,0,null,0,3,"ion-list",[],null,null,null,h.yb,h.B)),t.wb(14,49152,null,0,c.P,[t.h,t.n],null,null),(l()(),t.ob(16777216,null,0,1,null,y)),t.wb(16,278528,null,0,m.j,[t.W,t.S,t.w],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,5,0,"pin"),l(n,16,0,u.listdata)},null)}function F(l){return t.Rb(0,[(l()(),t.xb(0,0,null,null,1,"app-list-location",[],null,null,null,R,I)),t.wb(1,114688,null,0,a,[],null,null)],function(l,n){l(n,1,0)},null)}var P=t.tb("app-list-location",a,F,{listdata:"listdata"},{},[]),S=t.vb({encapsulation:0,styles:[[""]],data:{}});function $(l){return t.Rb(0,[(l()(),t.xb(0,0,null,null,1,"ion-icon",[["color","success"],["name","md-checkmark-circle-outline"],["slot","end"]],null,null,null,h.pb,h.s)),t.wb(1,49152,null,0,c.D,[t.h,t.n],{color:[0,"color"],name:[1,"name"]},null)],function(l,n){l(n,1,0,"success","md-checkmark-circle-outline")},null)}function C(l){return t.Rb(0,[(l()(),t.xb(0,0,null,null,1,"ion-icon",[["color","danger"],["name","ios-close-circle-outline"],["slot","end"]],null,null,null,h.pb,h.s)),t.wb(1,49152,null,0,c.D,[t.h,t.n],{color:[0,"color"],name:[1,"name"]},null)],function(l,n){l(n,1,0,"danger","ios-close-circle-outline")},null)}function D(l){return t.Rb(0,[(l()(),t.xb(0,0,null,null,6,"ion-button",[["color","success"],["fill","outline"]],null,null,null,h.Z,h.c)),t.wb(1,49152,null,0,c.l,[t.h,t.n],{color:[0,"color"],fill:[1,"fill"],href:[2,"href"]},null),(l()(),t.xb(2,0,null,0,1,"ion-icon",[["name","logo-whatsapp"]],null,null,null,h.pb,h.s)),t.wb(3,49152,null,0,c.D,[t.h,t.n],{name:[0,"name"]},null),(l()(),t.xb(4,0,null,0,2,"ion-card-subtitle",[],null,null,null,h.db,h.h)),t.wb(5,49152,null,0,c.q,[t.h,t.n],null,null),(l()(),t.Pb(6,0,["",""]))],function(l,n){l(n,1,0,"success","outline","https://api.whatsapp.com/send?phone="+n.parent.context.$implicit.whats_app),l(n,3,0,"logo-whatsapp")},function(l,n){l(n,6,0,n.parent.context.$implicit.whats_app)})}function O(l){return t.Rb(0,[(l()(),t.xb(0,0,null,null,7,"ion-button",[["color","tertiary"],["fill","outline"]],null,null,null,h.Z,h.c)),t.wb(1,49152,null,0,c.l,[t.h,t.n],{color:[0,"color"],fill:[1,"fill"],href:[2,"href"]},null),(l()(),t.xb(2,0,null,0,1,"ion-icon",[["name","mail"]],null,null,null,h.pb,h.s)),t.wb(3,49152,null,0,c.D,[t.h,t.n],{name:[0,"name"]},null),(l()(),t.xb(4,0,null,0,3,"ion-card-subtitle",[],null,null,null,h.db,h.h)),t.wb(5,49152,null,0,c.q,[t.h,t.n],null,null),(l()(),t.Pb(6,0,["",""])),t.Lb(7,1)],function(l,n){l(n,1,0,"tertiary","outline","mailto:"+n.parent.context.$implicit.user_email),l(n,3,0,"mail")},function(l,n){var u=t.Qb(n,6,0,l(n,7,0,t.Hb(n.parent.parent,0),n.parent.context.$implicit.user_email));l(n,6,0,u)})}function W(l){return t.Rb(0,[(l()(),t.xb(0,0,null,null,8,"ion-col",[["size","6"],["size-sm",""]],null,null,null,h.hb,h.k)),t.wb(1,49152,null,0,c.u,[t.h,t.n],{size:[0,"size"]},null),(l()(),t.xb(2,0,null,0,6,"ion-chip",[],null,null,null,h.gb,h.j)),t.wb(3,49152,null,0,c.t,[t.h,t.n],null,null),(l()(),t.xb(4,0,null,0,1,"ion-icon",[["color","primary"],["name","pin"]],null,null,null,h.pb,h.s)),t.wb(5,49152,null,0,c.D,[t.h,t.n],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.xb(6,0,null,0,2,"ion-label",[],null,null,null,h.xb,h.A)),t.wb(7,49152,null,0,c.O,[t.h,t.n],null,null),(l()(),t.Pb(8,0,["",""]))],function(l,n){l(n,1,0,"6"),l(n,5,0,"primary","pin")},function(l,n){l(n,8,0,n.context.$implicit.location)})}function z(l){return t.Rb(0,[(l()(),t.xb(0,0,null,null,7,"ion-item",[],null,null,null,h.wb,h.x)),t.wb(1,49152,null,0,c.I,[t.h,t.n],null,null),(l()(),t.xb(2,0,null,0,5,"ion-grid",[],null,null,null,h.nb,h.q)),t.wb(3,49152,null,0,c.B,[t.h,t.n],null,null),(l()(),t.xb(4,0,null,0,3,"ion-row",[],null,null,null,h.Eb,h.H)),t.wb(5,49152,null,0,c.jb,[t.h,t.n],null,null),(l()(),t.ob(16777216,null,0,1,null,W)),t.wb(7,278528,null,0,m.j,[t.W,t.S,t.w],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,7,0,n.parent.context.$implicit.assigned_location)},null)}function T(l){return t.Rb(0,[(l()(),t.xb(0,0,null,null,31,"ion-card",[],null,null,null,h.fb,h.e)),t.wb(1,49152,null,0,c.n,[t.h,t.n],null,null),(l()(),t.xb(2,0,null,0,12,"ion-item",[],null,null,null,h.wb,h.x)),t.wb(3,49152,null,0,c.I,[t.h,t.n],null,null),(l()(),t.xb(4,0,null,0,3,"ion-thumbnail",[["slot","start"]],null,null,null,h.Qb,h.T)),t.wb(5,49152,null,0,c.zb,[t.h,t.n],null,null),(l()(),t.xb(6,0,null,0,1,"ion-img",[],null,null,null,h.qb,h.t)),t.wb(7,49152,null,0,c.E,[t.h,t.n],{src:[0,"src"]},null),(l()(),t.xb(8,0,null,0,2,"ion-card-title",[],null,null,null,h.eb,h.i)),t.wb(9,49152,null,0,c.r,[t.h,t.n],null,null),(l()(),t.Pb(10,0,[""," ",""])),(l()(),t.ob(16777216,null,0,1,null,$)),t.wb(12,16384,null,0,m.k,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.ob(16777216,null,0,1,null,C)),t.wb(14,16384,null,0,m.k,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.xb(15,0,null,0,14,"ion-item",[],null,null,null,h.wb,h.x)),t.wb(16,49152,null,0,c.I,[t.h,t.n],null,null),(l()(),t.xb(17,0,null,0,12,"ion-row",[],null,null,null,h.Eb,h.H)),t.wb(18,49152,null,0,c.jb,[t.h,t.n],null,null),(l()(),t.xb(19,0,null,0,6,"ion-button",[["fill","outline"]],null,null,null,h.Z,h.c)),t.wb(20,49152,null,0,c.l,[t.h,t.n],{fill:[0,"fill"],href:[1,"href"]},null),(l()(),t.xb(21,0,null,0,1,"ion-icon",[["name","call"]],null,null,null,h.pb,h.s)),t.wb(22,49152,null,0,c.D,[t.h,t.n],{name:[0,"name"]},null),(l()(),t.xb(23,0,null,0,2,"ion-card-subtitle",[],null,null,null,h.db,h.h)),t.wb(24,49152,null,0,c.q,[t.h,t.n],null,null),(l()(),t.Pb(25,0,["",""])),(l()(),t.ob(16777216,null,0,1,null,D)),t.wb(27,16384,null,0,m.k,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.ob(16777216,null,0,1,null,O)),t.wb(29,16384,null,0,m.k,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.ob(16777216,null,0,1,null,z)),t.wb(31,16384,null,0,m.k,[t.W,t.S],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,7,0,n.context.$implicit.profile_pic),l(n,12,0,n.context.$implicit.is_active),l(n,14,0,!n.context.$implicit.is_active),l(n,20,0,"outline","tel:"+n.context.$implicit.mobile_no),l(n,22,0,"call"),l(n,27,0,n.context.$implicit.whats_app),l(n,29,0,n.context.$implicit.user_email),l(n,31,0,n.context.$implicit.assigned_location.length>0)},function(l,n){l(n,10,0,n.context.$implicit.user_first_name,n.context.$implicit.user_last_name),l(n,25,0,n.context.$implicit.mobile_no)})}function Z(l){return t.Rb(0,[t.Jb(0,m.h,[]),(l()(),t.ob(16777216,null,null,1,null,T)),t.wb(2,278528,null,0,m.j,[t.W,t.S,t.w],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,n.component.listdata)},null)}function j(l){return t.Rb(0,[(l()(),t.xb(0,0,null,null,1,"app-list-salesman",[],null,null,null,Z,S)),t.wb(1,114688,null,0,r,[],null,null)],function(l,n){l(n,1,0)},null)}var E=t.tb("app-list-salesman",r,j,{listdata:"listdata"},{},[]),M=u("gIcY"),L=function(){return function(){}}(),N=function(){return function(){}}();u.d(n,"ListpagePageModuleNgFactory",function(){return q});var q=t.ub(p,[],function(l){return t.Eb([t.Fb(512,t.k,t.jb,[[8,[f.a,v,P,E]],[3,t.k],t.C]),t.Fb(4608,m.m,m.l,[t.y,[2,m.u]]),t.Fb(4608,M.r,M.r,[]),t.Fb(4608,c.c,c.c,[t.E,t.g]),t.Fb(4608,c.Ib,c.Ib,[c.c,t.k,t.u,m.c]),t.Fb(4608,c.Nb,c.Nb,[c.c,t.k,t.u,m.c]),t.Fb(1073742336,m.b,m.b,[]),t.Fb(1073742336,M.p,M.p,[]),t.Fb(1073742336,M.e,M.e,[]),t.Fb(1073742336,c.Eb,c.Eb,[]),t.Fb(1073742336,L,L,[]),t.Fb(1073742336,N,N,[]),t.Fb(1073742336,g.o,g.o,[[2,g.u],[2,g.m]]),t.Fb(1073742336,p,p,[]),t.Fb(1024,g.k,function(){return[[{path:":page",component:s}]]},[])])})}}]);