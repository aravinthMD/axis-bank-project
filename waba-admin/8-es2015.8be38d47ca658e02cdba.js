(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"R+aC":function(t,e,i){"use strict";i.r(e),i.d(e,"MarketingCheckerModule",(function(){return tt}));var a=i("ofXK"),n=i("tyNb"),o=i("fXoL"),s=i("1kSV"),c=i("3Pt+"),r=i("y1cd"),l=i("kmKP"),b=i("mAmA");function d(t,e){1&t&&o.Qb(0,"span",11)}function p(t,e){if(1&t&&(o.Ub(0,"span"),o.Ic(1),o.Tb()),2&t){const t=o.jc();o.Bb(1),o.Jc(t.launchButtonText)}}let h=(()=>{class t{constructor(t,e,i){this.userService=t,this.toasterService=e,this.ngbActiveModal=i,this.launchButtonText=r.b.LAUNCH_BUTTON_TEXT,this.rejectButtonText=r.b.REJECT_BUTTON_TEXT,this.loading=!1}ngOnInit(){console.log(this.inputData)}approveTemplate(){this.loading=!0,this.userService.updateTemplate(String(this.userService.currentUserValue.userId),r.i.APPROVED,this.inputData.id).subscribe(t=>{const{ProcessVariables:{status:e},ProcessVariables:{message:i={}}}=t;e?(this.toasterService.showSuccess(r.j.APPROVE_TEMPLATE_SUCCESS),this.loading=!1,this.close(r.g.SUCCESS)):(this.loading=!1,this.toasterService.showError(i.value))},t=>{this.loading=!1,this.toasterService.showError(t)})}close(t){this.ngbActiveModal.close(t)}}return t.\u0275fac=function(e){return new(e||t)(o.Pb(l.a),o.Pb(b.a),o.Pb(s.a))},t.\u0275cmp=o.Jb({type:t,selectors:[["app-approve-template-dialog"]],inputs:{inputData:"inputData"},decls:17,vars:3,consts:[[1,"modal-header"],[1,"modal-title"],[1,"text-message"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"modal-footer"],["type","button","ngbAutofocus","",1,"btn","btn-confirm","shadow",3,"click"],["class","spinner-border","style","width: 1rem; height: 1rem;","aria-hidden","true",4,"ngIf"],[4,"ngIf"],["type","button",1,"btn","btn-danger","shadow",3,"click"],["aria-hidden","true",1,"spinner-border",2,"width","1rem","height","1rem"]],template:function(t,e){1&t&&(o.Ub(0,"div",0),o.Ub(1,"h4",1),o.Ic(2," Approve Template -"),o.Ub(3,"span",2),o.Ic(4),o.Tb(),o.Tb(),o.Ub(5,"button",3),o.gc("click",(function(){return e.close()})),o.Ub(6,"span",4),o.Ic(7,"\xd7"),o.Tb(),o.Tb(),o.Tb(),o.Ub(8,"div",5),o.Ub(9,"span",2),o.Ic(10,"Do you want to approve the template?"),o.Tb(),o.Tb(),o.Ub(11,"div",6),o.Ub(12,"button",7),o.gc("click",(function(){return e.approveTemplate()})),o.Gc(13,d,1,0,"span",8),o.Gc(14,p,2,1,"span",9),o.Tb(),o.Ub(15,"button",10),o.gc("click",(function(){return e.close()})),o.Ic(16," Cancel "),o.Tb(),o.Tb()),2&t&&(o.Bb(4),o.Jc(e.inputData&&e.inputData.id),o.Bb(9),o.pc("ngIf",e.loading),o.Bb(1),o.pc("ngIf",!e.loading))},directives:[a.m],styles:["li[_ngcontent-%COMP%], li[_ngcontent-%COMP%] ~ span[_ngcontent-%COMP%]{font-size:20px}"]}),t})();function u(t,e){1&t&&o.Qb(0,"span",15)}function m(t,e){if(1&t&&(o.Ub(0,"span"),o.Ic(1),o.Tb()),2&t){const t=o.jc();o.Bb(1),o.Jc(t.rejectButtonText)}}let g=(()=>{class t{constructor(t,e,i){this.userService=t,this.toasterService=e,this.ngbActiveModal=i,this.rejectButtonText=r.b.REJECT_BUTTON_TEXT,this.cancelButtonText=r.b.CANCEL_BUTTON_TEXT,this.loading=!1}ngOnInit(){this.form=new c.f({reason:new c.d(null,{validators:[c.s.required]})})}rejectTemplate(){this.loading=!0,this.userService.updateTemplate(String(this.userService.currentUserValue.userId),r.i.REJECTED,this.inputData.id,this.form.value.reason).subscribe(t=>{const{ProcessVariables:{status:e},ProcessVariables:{message:i={}}}=t;e?(this.toasterService.showSuccess(r.j.REJECT_TEMPLATE_SUCCESS),this.close(r.g.SUCCESS),this.loading=!1):(this.loading=!1,this.toasterService.showError(i.value))},t=>{this.loading=!1,this.toasterService.showError(t)})}close(t){this.ngbActiveModal.close(t)}}return t.\u0275fac=function(e){return new(e||t)(o.Pb(l.a),o.Pb(b.a),o.Pb(s.a))},t.\u0275cmp=o.Jb({type:t,selectors:[["app-reject-template-dialog"]],inputs:{inputData:"inputData"},decls:20,vars:6,consts:[[1,"modal-header"],[1,"modal-title"],[1,"text-message"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup"],[1,"form-group"],["for","template"],["formControlName","reason","ngbAutofocus","",1,"form-control"],[1,"modal-footer"],["type","button",1,"btn","btn-confirm","shadow",3,"disabled","click"],["class","spinner-border","style","width: 1rem; height: 1rem;","aria-hidden","true",4,"ngIf"],[4,"ngIf"],["type","button",1,"btn","btn-danger","shadow",3,"click"],["aria-hidden","true",1,"spinner-border",2,"width","1rem","height","1rem"]],template:function(t,e){1&t&&(o.Ub(0,"div",0),o.Ub(1,"h4",1),o.Ic(2," Reject Template -"),o.Ub(3,"span",2),o.Ic(4),o.Tb(),o.Tb(),o.Ub(5,"button",3),o.gc("click",(function(){return e.close()})),o.Ub(6,"span",4),o.Ic(7,"\xd7"),o.Tb(),o.Tb(),o.Tb(),o.Ub(8,"div",5),o.Ub(9,"form",6),o.Ub(10,"div",7),o.Ub(11,"label",8),o.Ic(12,"Reason"),o.Tb(),o.Qb(13,"input",9),o.Tb(),o.Tb(),o.Tb(),o.Ub(14,"div",10),o.Ub(15,"button",11),o.gc("click",(function(){return e.rejectTemplate()})),o.Gc(16,u,1,0,"span",12),o.Gc(17,m,2,1,"span",13),o.Tb(),o.Ub(18,"button",14),o.gc("click",(function(){return e.close()})),o.Ic(19),o.Tb(),o.Tb()),2&t&&(o.Bb(4),o.Jc(e.inputData&&e.inputData.id),o.Bb(5),o.pc("formGroup",e.form),o.Bb(6),o.pc("disabled",e.form.invalid||e.loading),o.Bb(1),o.pc("ngIf",e.loading),o.Bb(1),o.pc("ngIf",!e.loading),o.Bb(2),o.Kc(" ",e.cancelButtonText," "))},directives:[c.u,c.m,c.g,c.b,c.l,c.e,a.m],styles:["mat-form-field[_ngcontent-%COMP%]{width:95%}"]}),t})();var f=i("0IaG"),T=i("jhN1"),v=i("bTqV");function U(t,e){1&t&&(o.Ub(0,"h1"),o.Ic(1,"***404***"),o.Tb())}let D=(()=>{class t{constructor(t,e){this.data=t,this.sanitizer=e,this.stat=404,console.log(t.previewData)}ngOnInit(){this.doesFileExist(this.data.previewData)}doesFileExist(t){var e=new XMLHttpRequest;e.open("GET",t,!1),e.send(),e.status===this.stat?(this.validUrl=!1,console.log("false"),this.previewUrl=null):(this.validUrl=!0,console.log(this.urlToFileSanitized),this.previewUrl=this.sanitizer.bypassSecurityTrustResourceUrl(t))}}return t.\u0275fac=function(e){return new(e||t)(o.Pb(f.a),o.Pb(T.b))},t.\u0275cmp=o.Jb({type:t,selectors:[["app-file-preview-dialog-box"]],decls:10,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-title","","align","centre"],["type","application/pdf","height","900px","width","1000px",3,"src"],[4,"ngIf"],["align","end"],["mat-button","","mat-dialog-close","",2,"background-color","#dc3545","color","white","border","none","border-radius","0.25rem","padding","0.375rem 0.75rem"]],template:function(t,e){1&t&&(o.Ub(0,"h2",0),o.Ic(1,"Preview"),o.Tb(),o.Ub(2,"span",1),o.Ic(3),o.Tb(),o.Ub(4,"mat-dialog-content"),o.Qb(5,"embed",2),o.Gc(6,U,2,0,"h1",3),o.Tb(),o.Ub(7,"mat-dialog-actions",4),o.Ub(8,"button",5),o.Ic(9,"close"),o.Tb(),o.Tb()),2&t&&(o.Bb(3),o.Kc("Template Id:",e.data.templateId,""),o.Bb(2),o.pc("src",e.previewUrl,o.Ac),o.Bb(1),o.pc("ngIf",!e.validUrl))},directives:[f.g,f.e,a.m,f.c,v.a,f.d],styles:[""]}),t})();var w=i("AytR"),P=i("SaRM"),y=i("Xa2L"),C=i("Qu3c"),S=i("NFeN");function I(t,e){1&t&&o.Qb(0,"mat-spinner",23)}function B(t,e){if(1&t&&(o.Ub(0,"th",24),o.Ic(1),o.Tb()),2&t){const t=e.$implicit;o.Bb(1),o.Jc(t)}}function M(t,e){if(1&t){const t=o.Vb();o.Ub(0,"button",30),o.gc("click",(function(){o.zc(t);const e=o.jc().$implicit;return o.jc().openApproveTemplateDialog(e)})),o.Ic(1),o.Tb()}if(2&t){const t=o.jc(2);o.Bb(1),o.Kc(" ",t.launchButtonText," ")}}function O(t,e){if(1&t){const t=o.Vb();o.Ub(0,"button",30),o.gc("click",(function(){o.zc(t);const e=o.jc().$implicit;return o.jc().openRejectTemplateDialog(e)})),o.Ic(1),o.Tb()}if(2&t){const t=o.jc(2);o.Bb(1),o.Kc(" ",t.rejectButtonText," ")}}function x(t,e){1&t&&(o.Ub(0,"button",31),o.Ic(1," Rejected "),o.Tb())}function E(t,e){1&t&&(o.Ub(0,"button",32),o.Ic(1," Approved "),o.Tb())}function k(t,e){if(1&t){const t=o.Vb();o.Ub(0,"button",33),o.gc("click",(function(){o.zc(t);const e=o.jc().$implicit;return o.jc().openFilePreviewDialog(e)})),o.Ub(1,"mat-icon"),o.Ic(2,"preview"),o.Tb(),o.Tb()}}function V(t,e){1&t&&o.Ic(0," No ")}function _(t,e){if(1&t&&(o.Ub(0,"tr"),o.Ub(1,"td"),o.Ub(2,"a"),o.Ic(3),o.Tb(),o.Tb(),o.Ub(4,"td"),o.Ic(5),o.Tb(),o.Ub(6,"td"),o.Ic(7),o.kc(8,"date"),o.Tb(),o.Ub(9,"td"),o.Ic(10),o.Tb(),o.Ub(11,"td"),o.Ic(12),o.kc(13,"date"),o.Tb(),o.Ub(14,"td"),o.Ub(15,"div",25),o.Gc(16,M,2,1,"button",26),o.Gc(17,O,2,1,"button",26),o.Gc(18,x,2,0,"button",27),o.Gc(19,E,2,0,"button",28),o.Tb(),o.Tb(),o.Ub(20,"td"),o.Gc(21,k,3,0,"ng-template",29),o.Gc(22,V,1,0,"ng-template",29),o.Tb(),o.Tb()),2&t){const t=e.$implicit;o.Bb(3),o.Jc(t.id),o.Bb(2),o.Kc(" ",t.template," "),o.Bb(2),o.Kc(" ",o.mc(8,11,t.startDate,"yyyy-MM-dd")," "),o.Bb(3),o.Jc(t.triggerTime),o.Bb(2),o.Jc(o.mc(13,14,t.endDate,"yyyy-MM-dd")),o.Bb(4),o.pc("ngIf","10"===t.status),o.Bb(1),o.pc("ngIf","10"===t.status),o.Bb(1),o.pc("ngIf","20"===t.status),o.Bb(1),o.pc("ngIf","30"===t.status),o.Bb(2),o.pc("ngIf",t.documentId),o.Bb(1),o.pc("ngIf",!t.documentId)}}let F=(()=>{class t{constructor(t,e,i,a,n,o,s){this.formBuilder=t,this.referenceService=e,this.userService=i,this.toasterService=a,this.ngbModal=n,this.previewDialog=o,this.sanitizer=s,this.launchButtonText=r.b.LAUNCH_BUTTON_TEXT,this.rejectButtonText=r.b.REJECT_BUTTON_TEXT,this.loading=!1,this.currentPage=1,this.pageSize=10,this.templates=[],this.isFilterValid=!1,this.host=w.a.host,this.newAppiyoDrive=w.a.newAppiyoDrive,this.filterOptions=[{name:"ALL",value:"40"},{name:"SUBMITTED",value:"10"},{name:"APPROVED",value:"30"},{name:"REJECTED",value:"20"}],this.tableHeaders=["Template Id","Template","Created On","Upload Time","Campaign End Date","Action","Document"],this.form=this.formBuilder.group({fromDate:[null,c.s.required],toDate:[null,c.s.required]})}ngOnInit(){this.setValidators(),this.fetchTemplates()}setValidators(){const{minDate:t,maxDate:e}=this.referenceService.getDefaultDateValidators();this.fromMinDate=t,this.fromMaxDate=e,this.toMinDate=t,this.toMaxDate=e}onFromDateChange(t){const{year:e,month:i,day:a}=t;this.toMinDate={year:e,month:i,day:a},this.validate()}onToDateChange(t){const{year:e,month:i,day:a}=t;this.fromMaxDate={year:e,month:i,day:a},this.validate()}onFilterTypeChange(t){this.validate()}validate(){this.form.valid?(this.isFilterValid=!0,this.fetchFilteredTemplates()):this.isFilterValid=!1}onPageChanged(t){this.currentPage=t,this.isFilterValid?this.fetchFilteredTemplates():this.fetchTemplates()}fetchFilteredTemplates(){this.templates=null,window.scroll(0,0),this.loading=!0;const t=this.form.controls,e=t.fromDate.value,i=t.toDate.value;this.userService.fetchCheckerScreenTemplates(this.currentPage,`${e.year}-${e.month}-${e.day}`,`${i.year}-${i.month}-${i.day}`,"","","").subscribe(t=>{const{ProcessVariables:{status:e},ProcessVariables:{message:i={}}}=t;e?(this.templates=t.ProcessVariables.templateList,this.collectionSize=t.ProcessVariables.totalCount,this.loading=!1):(this.loading=!1,this.toasterService.showError(i.value))},t=>{this.loading=!1,this.toasterService.showError(t)})}fetchTemplates(){this.templates=null,window.scroll(0,0),this.loading=!0,this.userService.fetchCheckerScreenTemplates(this.currentPage,"","","","","").subscribe(t=>{const{ProcessVariables:{status:e},ProcessVariables:{message:i={}}}=t;e?(this.templates=t.ProcessVariables.templateList,this.collectionSize=t.ProcessVariables.totalCount,this.loading=!1):(this.loading=!1,this.toasterService.showError(i.value))},t=>{this.loading=!1,this.toasterService.showError(t)})}openApproveTemplateDialog(t){const e=this.ngbModal.open(h,{centered:!0});e.componentInstance.inputData=t,e.result.then(t=>{t===r.g.SUCCESS&&(this.isFilterValid?this.fetchFilteredTemplates():this.fetchTemplates())})}openRejectTemplateDialog(t){const e=this.ngbModal.open(g,{centered:!0});e.componentInstance.inputData=t,e.result.then(t=>{t===r.g.SUCCESS&&(this.isFilterValid?this.fetchFilteredTemplates():this.fetchTemplates())})}openFilePreviewDialog(t){this.previewFileUrl=this.host+this.newAppiyoDrive+t.documentId,console.log("Preview Url"+this.previewFileUrl),this.previewDialog.open(D,{data:{previewData:this.previewFileUrl,templateId:t.id},width:"1000px"})}}return t.\u0275fac=function(e){return new(e||t)(o.Pb(c.c),o.Pb(P.a),o.Pb(l.a),o.Pb(b.a),o.Pb(s.c),o.Pb(f.b),o.Pb(T.b))},t.\u0275cmp=o.Jb({type:t,selectors:[["app-launch"]],decls:31,vars:12,consts:[[1,"loading-indicator"],[1,"uploader-status"],["mode","indeterminate",4,"ngIf"],[1,"row","p-3"],[1,"col-6"],[3,"formGroup"],[1,"form-row"],[1,"col"],[1,"input-group"],["placeholder","From Date","name","fromDate","formControlName","fromDate","ngbDatepicker","","readonly","",1,"form-control","bg-search","btn-outline-secondary",3,"maxDate","minDate","dateSelect"],["fromDate","ngbDatepicker"],[1,"input-group-append"],["type","button",1,"btn","btn-outline-secondary",3,"click"],[1,"fa","fa-calendar-check-o"],["placeholder","To Date","name","toDate","formControlName","toDate","ngbDatepicker","","readonly","",1,"form-control","bg-search","btn-outline-secondary",3,"maxDate","minDate","dateSelect"],["toDate","ngbDatepicker"],[1,"table-responsive"],[1,"table"],[1,"thead-light"],["scope","col",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center","p-2"],[3,"boundaryLinks","collectionSize","page","pageSize","pageChange"],["mode","indeterminate"],["scope","col"],["role","group","aria-label","Basic example",1,"btn-group"],["type","button","class","btn action-btn shadow",3,"click",4,"ngIf"],["type","button","class","btn rejected-btn shadow",4,"ngIf"],["type","button","class","btn approved-btn shadow",4,"ngIf"],[3,"ngIf"],["type","button",1,"btn","action-btn","shadow",3,"click"],["type","button",1,"btn","rejected-btn","shadow"],["type","button",1,"btn","approved-btn","shadow"],["mat-icon-button","","matTooltip","preview document","aria-label","Example icon-button with a preview icon",3,"click"]],template:function(t,e){if(1&t){const t=o.Vb();o.Ub(0,"div",0),o.Ub(1,"div",1),o.Gc(2,I,1,0,"mat-spinner",2),o.Tb(),o.Tb(),o.Ub(3,"div",3),o.Qb(4,"div",4),o.Ub(5,"div",4),o.Ub(6,"form",5),o.Ub(7,"div",6),o.Ub(8,"div",7),o.Ub(9,"div",8),o.Ub(10,"input",9,10),o.gc("dateSelect",(function(t){return e.onFromDateChange(t)})),o.Tb(),o.Ub(12,"div",11),o.Ub(13,"button",12),o.gc("click",(function(){return o.zc(t),o.xc(11).toggle()})),o.Qb(14,"i",13),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Ub(15,"div",7),o.Ub(16,"div",8),o.Ub(17,"input",14,15),o.gc("dateSelect",(function(t){return e.onToDateChange(t)})),o.Tb(),o.Ub(19,"div",11),o.Ub(20,"button",12),o.gc("click",(function(){return o.zc(t),o.xc(18).toggle()})),o.Qb(21,"i",13),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Ub(22,"div",16),o.Ub(23,"table",17),o.Ub(24,"thead",18),o.Ub(25,"tr"),o.Gc(26,B,2,1,"th",19),o.Tb(),o.Tb(),o.Ub(27,"tbody"),o.Gc(28,_,23,17,"tr",20),o.Tb(),o.Tb(),o.Ub(29,"div",21),o.Ub(30,"ngb-pagination",22),o.gc("pageChange",(function(t){return e.currentPage=t}))("pageChange",(function(){return e.onPageChanged(e.currentPage)})),o.Tb(),o.Tb(),o.Tb()}2&t&&(o.Bb(2),o.pc("ngIf",e.loading),o.Bb(4),o.pc("formGroup",e.form),o.Bb(4),o.pc("maxDate",e.fromMaxDate)("minDate",e.fromMinDate),o.Bb(7),o.pc("maxDate",e.toMaxDate)("minDate",e.toMinDate),o.Bb(9),o.pc("ngForOf",e.tableHeaders),o.Bb(2),o.pc("ngForOf",e.templates),o.Bb(2),o.pc("boundaryLinks",!0)("collectionSize",e.collectionSize)("page",e.currentPage)("pageSize",e.pageSize))},directives:[a.m,c.u,c.m,c.g,c.b,s.b,c.l,c.e,a.l,s.e,y.b,v.a,C.a,S.a],pipes:[a.e],styles:["tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:14px}tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{vertical-align:middle}tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#97144d!important}.table[_ngcontent-%COMP%]{margin-bottom:0!important;overflow-x:hidden}.bg-search[_ngcontent-%COMP%]{background-color:#fff!important;color:#6c757d}.action-btn[_ngcontent-%COMP%]{background-color:#97144d;border:1px solid #97144d}.action-btn[_ngcontent-%COMP%], .rejected-btn[_ngcontent-%COMP%]{color:#fff;font-size:12px;text-transform:uppercase}.rejected-btn[_ngcontent-%COMP%]{background-color:#8b0000;border:1px solid #8b0000}.approved-btn[_ngcontent-%COMP%]{color:#fff;background-color:#006400;border:1px solid #006400;font-size:12px;text-transform:uppercase}.loading-indicator[_ngcontent-%COMP%]{position:fixed;z-index:999;height:2em;width:2em;overflow:show;margin:auto;top:0;left:0;bottom:0;right:0}.mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .uploader-status[_ngcontent-%COMP%]     .mat-progress-spinner circle{stroke:#97144d!important}.example-tooltip-red[_ngcontent-%COMP%]{background:#b71c1c}"]}),t})(),A=(()=>{class t{constructor(t,e,i){this.ngbActiveModal=t,this.userService=e,this.toasterService=i,this.closeButtonText=r.b.CLOSE_BUTTON_TEXT}ngOnInit(){this.fetchViewTemplate(this.inputData)}close(){this.ngbActiveModal.close()}fetchViewTemplate(t){this.userService.fetchViewTemplate(t.id).subscribe(t=>{console.log(t);const{ProcessVariables:{status:e},ProcessVariables:{message:i={}}}=t;e?(this.sent=t.ProcessVariables.sent,this.total=t.ProcessVariables.total,this.code=t.ProcessVariables.code,this.launchedOn=t.ProcessVariables.launchedOn):this.toasterService.showError(i.value)},t=>{this.toasterService.showError(t)})}}return t.\u0275fac=function(e){return new(e||t)(o.Pb(s.a),o.Pb(l.a),o.Pb(b.a))},t.\u0275cmp=o.Jb({type:t,selectors:[["app-view-template-history-dialog"]],inputs:{inputData:"inputData"},decls:28,vars:5,consts:[[1,"modal-header"],[1,"modal-title"],[1,"text-message"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"list-group","list-group-flush"],[1,"list-group-item","d-flex","justify-content-between","align-items-center"],[1,"badge","bg-maroon","badge-pill"],[1,"modal-footer"],["type","button","ngbAutofocus","",1,"btn","btn-danger","shadow",3,"click"]],template:function(t,e){1&t&&(o.Ub(0,"div",0),o.Ub(1,"h4",1),o.Ic(2," Template launch history "),o.Qb(3,"span",2),o.Tb(),o.Ub(4,"button",3),o.gc("click",(function(){return e.close()})),o.Ub(5,"span",4),o.Ic(6,"\xd7"),o.Tb(),o.Tb(),o.Tb(),o.Ub(7,"div",5),o.Ub(8,"ul",6),o.Ub(9,"li",7),o.Ic(10," Template "),o.Ub(11,"span",8),o.Ic(12),o.Tb(),o.Tb(),o.Ub(13,"li",7),o.Ic(14," Launched On "),o.Ub(15,"span",8),o.Ic(16),o.Tb(),o.Tb(),o.Ub(17,"li",7),o.Ic(18," No of customers within Active Window "),o.Ub(19,"span",8),o.Ic(20),o.Tb(),o.Tb(),o.Ub(21,"li",7),o.Ic(22," Messages sent "),o.Ub(23,"span",8),o.Ic(24),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Ub(25,"div",9),o.Ub(26,"button",10),o.gc("click",(function(){return e.close()})),o.Ic(27),o.Tb(),o.Tb()),2&t&&(o.Bb(12),o.Jc(e.inputData.template),o.Bb(4),o.Jc(e.launchedOn),o.Bb(4),o.Jc(e.total),o.Bb(4),o.Jc(e.sent),o.Bb(3),o.Kc(" ",e.closeButtonText," "))},styles:["li[_ngcontent-%COMP%], li[_ngcontent-%COMP%] ~ span[_ngcontent-%COMP%]{font-size:20px}"]}),t})(),j=(()=>{class t{constructor(t){this.data=t,this.stat=404,console.log(t.previewData)}ngOnInit(){this.previewUrl=this.doesFileExist(this.data.previewData)}doesFileExist(t){var e=new XMLHttpRequest;return e.open("GET",t,!1),e.send(),e.status===this.stat?(console.log("false"),null):t}}return t.\u0275fac=function(e){return new(e||t)(o.Pb(f.a))},t.\u0275cmp=o.Jb({type:t,selectors:[["app-file-preview-dialog"]],decls:12,vars:2,consts:[["mat-dialog-title",""],["mat-dialog-title","","align","centre"],["type","button","aria-label","Close","mat-dialog-close","",1,"close"],["aria-hidden","true"],["type","application/pdf","height","900px","width","1000px",3,"src"],["align","end"],["mat-button","","mat-dialog-close","",2,"background-color","#dc3545","color","white","border","none","border-radius","0.25rem","padding","0.375rem 0.75rem"]],template:function(t,e){1&t&&(o.Ub(0,"h2",0),o.Ic(1,"Preview"),o.Tb(),o.Ub(2,"span",1),o.Ic(3),o.Tb(),o.Ub(4,"button",2),o.Ub(5,"span",3),o.Ic(6,"\xd7"),o.Tb(),o.Tb(),o.Ub(7,"mat-dialog-content"),o.Qb(8,"embed",4),o.Tb(),o.Ub(9,"mat-dialog-actions",5),o.Ub(10,"button",6),o.Ic(11,"close"),o.Tb(),o.Tb()),2&t&&(o.Bb(3),o.Kc("Template Id:",e.data.templateId,""),o.Bb(5),o.pc("src",e.previewUrl,o.Ac))},directives:[f.g,f.d,f.e,f.c,v.a],styles:[""]}),t})();function z(t,e){1&t&&o.Qb(0,"mat-spinner",23)}function L(t,e){if(1&t&&(o.Ub(0,"option",24),o.Ic(1),o.Tb()),2&t){const t=e.$implicit;o.pc("value",t.value),o.Bb(1),o.Jc(t.name)}}function J(t,e){if(1&t&&(o.Ub(0,"th",25),o.Ic(1),o.Tb()),2&t){const t=e.$implicit;o.Bb(1),o.Jc(t)}}function G(t,e){if(1&t){const t=o.Vb();o.Ub(0,"button",27),o.gc("click",(function(){o.zc(t);const e=o.jc().$implicit;return o.jc().deActivateTemplate(e)})),o.Ic(1),o.Tb()}if(2&t){const t=o.jc(2);o.Bb(1),o.Kc(" ",t.deactivateButtonText," ")}}function N(t,e){if(1&t){const t=o.Vb();o.Ub(0,"button",27),o.gc("click",(function(){o.zc(t);const e=o.jc().$implicit;return o.jc().activateTemplate(e)})),o.Ic(1),o.Tb()}if(2&t){const t=o.jc(2);o.Bb(1),o.Kc(" ",t.activateButtonText," ")}}function R(t,e){if(1&t){const t=o.Vb();o.Ub(0,"tr"),o.Ub(1,"td"),o.Ic(2),o.Tb(),o.Ub(3,"td"),o.Ic(4),o.kc(5,"date"),o.Tb(),o.Ub(6,"td"),o.Ic(7),o.Tb(),o.Ub(8,"td"),o.Ic(9),o.kc(10,"date"),o.Tb(),o.Ub(11,"td"),o.Gc(12,G,2,1,"button",26),o.Gc(13,N,2,1,"button",26),o.Tb(),o.Ub(14,"td"),o.Ub(15,"button",27),o.gc("click",(function(){o.zc(t);const i=e.$implicit;return o.jc().openTemplateHistoryDialog(i)})),o.Ic(16),o.Tb(),o.Tb(),o.Tb()}if(2&t){const t=e.$implicit,i=o.jc();o.Bb(2),o.Jc(t.id),o.Bb(2),o.Jc(o.mc(5,7,t.startDate,"yyyy-MM-dd")),o.Bb(3),o.Jc(t.triggerTime),o.Bb(2),o.Jc(o.mc(10,10,t.endDate,"yyyy-MM-dd")),o.Bb(3),o.pc("ngif","1"===i.isActive),o.Bb(1),o.pc("ngif","0"===i.isActive),o.Bb(3),o.Kc(" ",i.viewButtonText," ")}}let $=(()=>{class t{constructor(t,e,i,a,n,o,s){this.formBuilder=t,this.referenceService=e,this.ngbModal=i,this.userService=a,this.toasterService=n,this.previewDialog=o,this.domSanitizer=s,this.activateButtonText=r.b.ACTIVATE_BUTTON_TEXT,this.deactivateButtonText=r.b.DEACTIVATE_BUTTON_TEXT,this.viewButtonText=r.b.VIEW_BUTTON_TEXT,this.templates=[],this.loading=!1,this.isFilterValid=!1,this.checkerLogin="Launch Dashboard",this.currentPage=1,this.pageSize=10,this.doucumentPreviewUrl=w.a.newAppiyoDrive,this.host=w.a.host,this.tableHeaders=["Template Id","Created On","Upload Time","Campaign End Date","Action","Audit"],this.filterOptions=[{name:"ALL",value:"2"},{name:"Active",value:"1"},{name:"Inactive",value:"0"}],this.today=new Date,this.previewDatas="http://178.128.125.44/appiyo/d/drive/docs/5f3e9f47f2903d7b8d41f20c",this.form=this.formBuilder.group({fromDate:[null,c.s.required],toDate:[null,c.s.required],filterType:[this.filterOptions[0].value,c.s.required]}),this.setValidators()}ngOnInit(){this.setValidators(),this.fetchLauchDashBoardTemplate()}setValidators(){const{minDate:t,maxDate:e}=this.referenceService.getDefaultDateValidators();this.fromMinDate=t,this.fromMaxDate=e,this.toMinDate=t,this.toMaxDate=e}onFromDateChange(t){const{year:e,month:i,day:a}=t;this.toMinDate={year:e,month:i,day:a},this.validate()}onToDateChange(t){const{year:e,month:i,day:a}=t;this.fromMaxDate={year:e,month:i,day:a},this.validate()}onPageChanged(t){this.currentPage=t,this.isFilterValid?this.fetchFilteredLauchDashBoardTemplates():this.fetchLauchDashBoardTemplate()}onFilterTypeChange(t){this.validate()}openTemplateHistoryDialog(t){this.ngbModal.open(A,{centered:!0}).componentInstance.inputData=t}validate(){this.form.valid?(this.isFilterValid=!0,this.fetchFilteredLauchDashBoardTemplates()):this.isFilterValid=!1}fetchFilteredLauchDashBoardTemplates(){this.templates=null,window.scroll(0,0),this.loading=!0;const t=this.form.controls,e=t.fromDate.value,i=t.toDate.value,a=t.filterType.value;this.userService.fetchCheckerScreenTemplates(this.currentPage,`${e.year}-${e.month}-${e.day}`,`${i.year}-${i.month}-${i.day}`,"",this.checkerLogin,"2"===a?"":a).subscribe(t=>{const{ProcessVariables:{status:e},ProcessVariables:{message:i={}}}=t;e?(this.templates=t.ProcessVariables.templateList,this.collectionSize=t.ProcessVariables.totalCount,this.loading=!1):(this.loading=!1,this.toasterService.showError(i.value))},t=>{this.loading=!1,this.toasterService.showError(t)})}fetchLauchDashBoardTemplate(){this.templates=null,window.scroll(0,0),this.loading=!0,this.userService.fetchCheckerScreenTemplates(this.currentPage,"","","",this.checkerLogin,"").subscribe(t=>{const{ProcessVariables:{status:e},ProcessVariables:{message:i={}}}=t;e?(this.templates=t.ProcessVariables.templateList,console.log("Updated List"+this.templates),this.collectionSize=t.ProcessVariables.totalCount,this.loading=!1):(this.loading=!1,this.toasterService.showError(i.value))},t=>{this.loading=!1,this.toasterService.showError(t)})}deActivateTemplate(t){this.userService.deactivateTemplate(t.id).subscribe(t=>{const{ProcessVariables:{status:e},ProcessVariables:{message:i={}}}=t;e?(this.toasterService.showSuccess(r.j.DEACTIVATE_USER_SUCCESS),this.isFilterValid?this.fetchFilteredLauchDashBoardTemplates():this.fetchLauchDashBoardTemplate()):this.toasterService.showError(i.value),console.log(t)},t=>{this.toasterService.showError(t)})}activateTemplate(t){this.userService.activateTemplate(t.id).subscribe(t=>{const{ProcessVariables:{status:e},ProcessVariables:{message:i={}}}=t;e?(this.toasterService.showSuccess(r.j.ACTIVATE_USER_SUCCESS),this.isFilterValid?this.fetchFilteredLauchDashBoardTemplates():this.fetchLauchDashBoardTemplate()):this.toasterService.showError(i.value)},t=>{this.toasterService.showError(t)})}openFilePreviewDialog(t){this.previewDialog.open(j,{data:{previewData:this.domSanitizer.bypassSecurityTrustResourceUrl(this.previewDatas),templateId:t.id},width:"1000px"})}}return t.\u0275fac=function(e){return new(e||t)(o.Pb(c.c),o.Pb(P.a),o.Pb(s.c),o.Pb(l.a),o.Pb(b.a),o.Pb(f.b),o.Pb(T.b))},t.\u0275cmp=o.Jb({type:t,selectors:[["app-launch-dashboard"]],decls:32,vars:9,consts:[[1,"loading-indicator"],[1,"uploader-status"],["mode","indeterminate",4,"ngIf"],[1,"row","p-3"],[1,"col-6"],[3,"formGroup"],[1,"form-row"],[1,"col"],[1,"input-group"],["placeholder","From Date","name","fromDate","formControlName","fromDate","ngbDatepicker","","readonly","",1,"form-control","bg-search","btn-outline-secondary",3,"maxDate","minDate","dateSelect"],["fromDate","ngbDatepicker"],[1,"input-group-append"],["type","button",1,"btn","btn-outline-secondary",3,"click"],[1,"fa","fa-calendar-check-o"],["placeholder","To Date","name","toDate","formControlName","toDate","ngbDatepicker","","readonly","",1,"form-control","bg-search","btn-outline-secondary",3,"maxDate","minDate","dateSelect"],["toDate","ngbDatepicker"],["formControlName","filterType","title","Filter Type","id","role",1,"custom-select"],[3,"value",4,"ngFor","ngForOf"],[1,"table-responsive"],[1,"table"],[1,"thead-light"],["scope","col",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["mode","indeterminate"],[3,"value"],["scope","col"],["type","button","class","btn shadow",3,"click",4,"ngif"],["type","button",1,"btn","shadow",3,"click"]],template:function(t,e){if(1&t){const t=o.Vb();o.Ub(0,"div",0),o.Ub(1,"div",1),o.Gc(2,z,1,0,"mat-spinner",2),o.Tb(),o.Tb(),o.Ub(3,"div",3),o.Qb(4,"div",4),o.Ub(5,"div",4),o.Ub(6,"form",5),o.Ub(7,"div",6),o.Ub(8,"div",7),o.Ub(9,"div",8),o.Ub(10,"input",9,10),o.gc("dateSelect",(function(t){return e.onFromDateChange(t)})),o.Tb(),o.Ub(12,"div",11),o.Ub(13,"button",12),o.gc("click",(function(){return o.zc(t),o.xc(11).toggle()})),o.Qb(14,"i",13),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Ub(15,"div",7),o.Ub(16,"div",8),o.Ub(17,"input",14,15),o.gc("dateSelect",(function(t){return e.onToDateChange(t)})),o.Tb(),o.Ub(19,"div",11),o.Ub(20,"button",12),o.gc("click",(function(){return o.zc(t),o.xc(18).toggle()})),o.Qb(21,"i",13),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Ub(22,"div",7),o.Ub(23,"select",16),o.Gc(24,L,2,2,"option",17),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Ub(25,"div",18),o.Ub(26,"table",19),o.Ub(27,"thead",20),o.Ub(28,"tr"),o.Gc(29,J,2,1,"th",21),o.Tb(),o.Tb(),o.Ub(30,"tbody"),o.Gc(31,R,17,13,"tr",22),o.Tb(),o.Tb(),o.Tb()}2&t&&(o.Bb(2),o.pc("ngIf",e.loading),o.Bb(4),o.pc("formGroup",e.form),o.Bb(4),o.pc("maxDate",e.fromMaxDate)("minDate",e.fromMinDate),o.Bb(7),o.pc("maxDate",e.toMaxDate)("minDate",e.toMinDate),o.Bb(7),o.pc("ngForOf",e.filterOptions),o.Bb(5),o.pc("ngForOf",e.tableHeaders),o.Bb(2),o.pc("ngForOf",e.templates))},directives:[a.m,c.u,c.m,c.g,c.b,s.b,c.l,c.e,c.r,a.l,y.b,c.o,c.t],pipes:[a.e],styles:["tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:middle;font-size:14px}tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:-webkit-fill-available;color:#fff;background-color:#97144d;border:1px solid #97144d;font-size:12px}tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{vertical-align:middle;color:#97144d!important}table[_ngcontent-%COMP%]{margin-bottom:0!important}.bg-search[_ngcontent-%COMP%]{background-color:#fff!important;color:#6c757d}.loading-indicator[_ngcontent-%COMP%]{position:fixed;z-index:999;height:2em;width:2em;overflow:show;margin:auto;top:0;left:0;bottom:0;right:0}.mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .uploader-status[_ngcontent-%COMP%]     .mat-progress-spinner circle{stroke:#97144d!important}"]}),t})();function Q(t,e){1&t&&(o.Ub(0,"span",7),o.Ic(1,"Launch"),o.Tb())}function X(t,e){1&t&&o.Qb(0,"app-launch")}function K(t,e){1&t&&(o.Ub(0,"span",7),o.Ic(1,"Launch Dashboard"),o.Tb())}function H(t,e){1&t&&o.Qb(0,"app-launch-dashboard")}const q=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Jb({type:t,selectors:[["app-marketing-checker"]],decls:11,vars:0,consts:[[1,"main"],[1,"container"],[1,"row","pt-4"],[1,"col","card","shadow","p-0"],["justify","justified"],["ngbTabTitle",""],["ngbTabContent",""],[1,"tab-title"]],template:function(t,e){1&t&&(o.Ub(0,"div",0),o.Ub(1,"div",1),o.Ub(2,"div",2),o.Ub(3,"div",3),o.Ub(4,"ngb-tabset",4),o.Ub(5,"ngb-tab"),o.Gc(6,Q,2,0,"ng-template",5),o.Gc(7,X,1,0,"ng-template",6),o.Tb(),o.Ub(8,"ngb-tab"),o.Gc(9,K,2,0,"ng-template",5),o.Gc(10,H,1,0,"ng-template",6),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb())},directives:[s.j,s.g,s.i,s.h,F,$],styles:[".tab-title[_ngcontent-%COMP%]{font-size:18px}"]}),t})(),pathMatch:"full"}];let W=(()=>{class t{}return t.\u0275mod=o.Nb({type:t}),t.\u0275inj=o.Mb({factory:function(e){return new(e||t)},imports:[[n.e.forChild(q)],n.e]}),t})();var Y=i("PCNd"),Z=i("hctd");let tt=(()=>{class t{}return t.\u0275mod=o.Nb({type:t}),t.\u0275inj=o.Mb({factory:function(e){return new(e||t)},imports:[[a.c,Y.a,W,Z.a]]}),t})()}}]);