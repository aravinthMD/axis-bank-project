(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Q6l2:function(e,t,o){"use strict";o.r(t),o.d(t,"ConfigureTriggerTimeModule",(function(){return E}));var i=o("ofXK"),r=o("3Pt+"),n=o("tyNb"),s=o("y1cd"),c=o("+0xr"),a=o("M9IT"),l=o("0IaG"),m=o("fXoL"),b=o("kmKP"),d=o("mAmA"),u=o("1kSV");let h=(()=>{class e{constructor(e,t,o,i,r){this.formBuilder=e,this.data=t,this.userService=o,this.toasterService=i,this.dialogRef=r,this.forms=this.formBuilder.group({FromTime:[],ToTime:[]}),this.data&&(this.blockedFrom=this.data.blockedFrom,this.blockedTo=this.data.blockedTo,this.timeZoneText=this.data.text,this.timeZoneId=this.data.id),this.configurable(this.blockedFrom,this.blockedTo)}ngOnInit(){}configurable(e,t){let o=e.split(":");const i=Number(o[0]),r=Number(o[1]);let n=t.split(":");const s=Number(n[0]),c=Number(n[1]);this.forms.controls.FromTime.setValue({hour:i,minute:r}),this.forms.controls.ToTime.setValue({hour:s,minute:c})}OnEdit(){const e=this.forms.controls,t=e.ToTime.value,o=this.userService.currentUserValue.userId,i=this.timeFormatConverter(e.FromTime.value,"00"),r=this.timeFormatConverter(t,"00");this.userService.updateTimeZonesBasedBlockedTime(this.timeZoneId,o,i,r).subscribe(e=>{if(e){console.log(e);const{ProcessVariables:{status:t}}=e;t?(this.updatedFlag=!0,this.toasterService.showSuccess(s.k.UPDATE_BLOCK_TIME_SUCCESS),this.updatedFlag=!0,this.dialogRef.close(this.updatedFlag)):this.toasterService.showError(s.k.UPDATE_BLOCK_TIME_FAILURE)}})}timeFormatConverter(e,t){let o="00"+e.minute;return` ${("00"+e.hour).substr(-2)}:${o.substr(-2)}:${t}`}}return e.\u0275fac=function(t){return new(t||e)(m.Qb(r.c),m.Qb(l.a),m.Qb(b.a),m.Qb(d.a),m.Qb(l.g))},e.\u0275cmp=m.Kb({type:e,selectors:[["app-update-trigger-time-pop-up"]],decls:27,vars:5,consts:[[1,"header","p-2"],[1,"mt-2","mb-3"],[1,"mt-4",3,"formGroup"],[1,"col-12","row","d-flex","p-0"],[1,"col-6"],[1,"form-group","pl-4"],["for","fromTimePicker"],["id","fromTimePicker","formControlName","FromTime",3,"spinners"],[1,"form-group"],["for","toTimePicker"],["id","toTimePicker","formControlName","ToTime",3,"spinners"],[1,"mt-3"],[1,"row","col-12","d-flex","justify-content-center"],[1,"btn","submit-btn","shadow","header","text-white","mr-2",3,"disabled","click"],["mat-dialog-close","",1,"btn","submit-btn","shadow","header","text-white"]],template:function(e,t){1&e&&(m.Wb(0,"div",0),m.Wb(1,"h3"),m.Mc(2,"Schedule Block Time"),m.Vb(),m.Vb(),m.Wb(3,"h4",1),m.Mc(4,"Time Zone "),m.Vb(),m.Wb(5,"span"),m.Mc(6),m.Vb(),m.Wb(7,"form",2),m.Wb(8,"div",3),m.Wb(9,"div",4),m.Wb(10,"div",5),m.Wb(11,"label",6),m.Wb(12,"b"),m.Mc(13,"From Time"),m.Vb(),m.Vb(),m.Rb(14,"ngb-timepicker",7),m.Vb(),m.Vb(),m.Wb(15,"div",4),m.Wb(16,"div",8),m.Wb(17,"label",9),m.Wb(18,"b"),m.Mc(19,"To Time"),m.Vb(),m.Vb(),m.Rb(20,"ngb-timepicker",10),m.Vb(),m.Vb(),m.Vb(),m.Vb(),m.Wb(21,"div",11),m.Wb(22,"div",12),m.Wb(23,"button",13),m.ic("click",(function(){return t.OnEdit()})),m.Mc(24,"Schedule"),m.Vb(),m.Wb(25,"button",14),m.Mc(26,"Close"),m.Vb(),m.Vb(),m.Vb()),2&e&&(m.Cb(6),m.Nc(t.timeZoneText),m.Cb(1),m.sc("formGroup",t.forms),m.Cb(7),m.sc("spinners",!1),m.Cb(6),m.sc("spinners",!1),m.Cb(3),m.sc("disabled",t.forms.invalid||!t.forms.dirty))},directives:[r.v,r.n,r.h,u.k,r.m,r.f,l.d],styles:[".header[_ngcontent-%COMP%]{background-color:#97144d}h3[_ngcontent-%COMP%]{color:#fff}.mat-dialog-container[_ngcontent-%COMP%]{width:70%!important;height:70%!important}span[_ngcontent-%COMP%]{margin-bottom:20px}"]}),e})();var f=o("kmnG"),g=o("qFsG");function p(e,t){1&e&&(m.Wb(0,"th",17),m.Mc(1," S.NO "),m.Vb())}function T(e,t){if(1&e&&(m.Wb(0,"td",18),m.Mc(1),m.Vb()),2&e){const e=t.index;m.Cb(1),m.Oc(" ",e+1," ")}}function C(e,t){1&e&&(m.Wb(0,"th",17),m.Mc(1," Time Zones "),m.Vb())}function k(e,t){if(1&e&&(m.Wb(0,"td",18),m.Mc(1),m.Vb()),2&e){const e=t.$implicit;m.Cb(1),m.Oc(" ",e.text," ")}}function v(e,t){1&e&&(m.Wb(0,"th",17),m.Mc(1," From Blocked Time "),m.Vb())}function M(e,t){if(1&e&&(m.Wb(0,"td",18),m.Mc(1),m.Vb()),2&e){const e=t.$implicit;m.Cb(1),m.Oc(" ",e.blockedFrom," ")}}function V(e,t){1&e&&(m.Wb(0,"th",17),m.Mc(1," To Blocked Time "),m.Vb())}function O(e,t){if(1&e&&(m.Wb(0,"td",18),m.Mc(1),m.Vb()),2&e){const e=t.$implicit;m.Cb(1),m.Oc(" ",e.blockedTo," ")}}function P(e,t){1&e&&(m.Wb(0,"th",17),m.Mc(1," Action "),m.Vb())}function w(e,t){if(1&e){const e=m.Xb();m.Wb(0,"td",18),m.Wb(1,"button",19),m.ic("click",(function(){m.Dc(e);const o=t.$implicit;return m.mc().OpenDialog(o)})),m.Mc(2,"Edit"),m.Vb(),m.Vb()}}function S(e,t){1&e&&m.Rb(0,"tr",20)}function _(e,t){1&e&&m.Rb(0,"tr",21)}const W=function(){return[10,20]},B=[{path:"",component:(()=>{class e{constructor(e,t,o,i){this.formBuilder=e,this.userService=t,this.toasterService=o,this.dialog=i,this.fromTime={hour:13,minute:30},this.toTime={hour:13,minute:30},this.loading=!1,this.timeZonesList=[],this.filterVal="",this.dataSource=new c.k,this.forms=this.formBuilder.group({FromTime:[null],ToTime:[null]}),this.tableHeaders=["S.NO","TimeZones","FromBlockedTime","ToBlockedTime","Action"]}ngOnInit(){this.fetchTimeZonesBasedBlockedTimes(!1)}ngAfterViewInit(){}OnSubmit(){const e=this.forms.controls,t=e.FromTime.value,o=e.ToTime.value;this.userService.updateBlockTriggerTime(`${t.hour}:${t.minute}:00`,`${o.hour}:${o.minute}:00`,Number(this.userService.currentUserValue.userId),"").subscribe(e=>{console.log()})}OnEdit(){const e=this.forms.controls,t=e.FromTime.value,o=e.ToTime.value,i=this.userService.currentUserValue.userId,r=`${t.hour}:${t.minute}:00`,n=`${o.hour}:${o.minute}:00`;this.loading=!0,this.userService.updateBlockTriggerTime(r,n,Number(i),this.id).subscribe(e=>{console.log(e);const{ProcessVariables:{status:t},ProcessVariables:{message:o={}}}=e;t?(this.forms.reset(),this.loading=!1,this.toasterService.showSuccess(s.k.UPDATE_BLOCK_TIME_SUCCESS),this.getBlockTriggerTime()):(this.toasterService.showError(s.k.UPDATE_BLOCK_TIME_FAILURE),this.loading=!1)},e=>{this.loading=!1,this.toasterService.showError(e),console.log(e)})}getBlockTriggerTime(){this.userService.getTriggerTimeBlock("1").subscribe(e=>{const{ProcessVariables:{message:t={}}}=e;console.log(e);{const{ProcessVariables:{blockedBy:t,blockedFrom:o,blockedTo:i,id:r}}=e;this.blockedBy=t,this.blockedFrom=o,this.blcokedTo=i,this.id=r,this.configurable(o,i)}})}configurable(e,t){let o=e.split(":");const i=Number(o[0]),r=Number(o[1]);let n=t.split(":");const s=Number(n[0]),c=Number(n[1]);this.forms.controls.FromTime.setValue({hour:i,minute:r}),this.forms.controls.ToTime.setValue({hour:s,minute:c})}fetchTimeZonesBasedBlockedTimes(e){this.userService.fetchTimeZonesBasedBlockedTimes().subscribe(t=>{if(t){console.log(t);const{ProcessVariables:{status:o,timeZones:i}}=t;console.log(i),o?i&&(this.dataSource=new c.k(i),e&&this.applyFilter(this.filterVal),this.dataSource.paginator=this.paginator):this.toasterService.showError(s.k.DROP_DOWN_FAILURE)}})}applyFilter(e){this.dataSource.filter=e.trim().toLowerCase()}OpenDialog(e){this.dialog.open(h,{width:"30%",height:"50%",data:e}).afterClosed().subscribe(e=>{e&&this.fetchTimeZonesBasedBlockedTimes(!0)})}}return e.\u0275fac=function(t){return new(t||e)(m.Qb(r.c),m.Qb(b.a),m.Qb(d.a),m.Qb(l.b))},e.\u0275cmp=m.Kb({type:e,selectors:[["app-configure-trigger-time"]],viewQuery:function(e,t){var o;1&e&&m.Ic(a.a,!0),2&e&&m.zc(o=m.jc())&&(t.paginator=o.first)},decls:26,vars:6,consts:[[1,"col-md-10","main"],[1,"header"],[1,"col-md-12"],[1,"filter"],["matInput","","placeholder","filter",3,"ngModel","keyup","ngModelChange"],[1,"mat-elevation-z8"],["mat-table","",3,"dataSource"],["matColumnDef","S.NO"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","TimeZones"],["matColumnDef","FromBlockedTime"],["matColumnDef","ToBlockedTime"],["matColumnDef","Action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","example-element-row",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],[3,"click"],["mat-header-row",""],["mat-row","",1,"example-element-row"]],template:function(e,t){1&e&&(m.Wb(0,"div",0),m.Wb(1,"h2",1),m.Mc(2,"Configure Block Time"),m.Vb(),m.Wb(3,"div",2),m.Wb(4,"mat-form-field",3),m.Wb(5,"input",4),m.ic("keyup",(function(e){return t.applyFilter(e.target.value)}))("ngModelChange",(function(e){return t.filterVal=e})),m.Vb(),m.Vb(),m.Wb(6,"div",5),m.Wb(7,"table",6),m.Ub(8,7),m.Kc(9,p,2,0,"th",8),m.Kc(10,T,2,1,"td",9),m.Tb(),m.Ub(11,10),m.Kc(12,C,2,0,"th",8),m.Kc(13,k,2,1,"td",9),m.Tb(),m.Ub(14,11),m.Kc(15,v,2,0,"th",8),m.Kc(16,M,2,1,"td",9),m.Tb(),m.Ub(17,12),m.Kc(18,V,2,0,"th",8),m.Kc(19,O,2,1,"td",9),m.Tb(),m.Ub(20,13),m.Kc(21,P,2,0,"th",8),m.Kc(22,w,3,0,"td",9),m.Tb(),m.Kc(23,S,1,0,"tr",14),m.Kc(24,_,1,0,"tr",15),m.Vb(),m.Rb(25,"mat-paginator",16),m.Vb(),m.Vb(),m.Vb()),2&e&&(m.Cb(5),m.sc("ngModel",t.filterVal),m.Cb(2),m.sc("dataSource",t.dataSource),m.Cb(16),m.sc("matHeaderRowDef",t.tableHeaders),m.Cb(1),m.sc("matRowDefColumns",t.tableHeaders),m.Cb(1),m.sc("pageSizeOptions",m.vc(5,W)))},directives:[f.c,g.a,r.b,r.m,r.p,c.j,c.c,c.e,c.b,c.g,c.i,a.a,c.d,c.a,c.f,c.h],styles:["button[_ngcontent-%COMP%]{color:#fff;border-radius:3px}.card-header[_ngcontent-%COMP%]{background-color:#97144d;color:#fff;padding:.75rem!important;border-top-left-radius:unset;border-top-right-radius:unset}tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:middle}tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:14px}tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;color:#97144d}tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{vertical-align:middle;color:#97144d!important;font-size:15px}table[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff;font-size:14px;background-color:#97144d;border:1px solid #97144d}table[_ngcontent-%COMP%]{width:100%;margin-bottom:0!important}.header[_ngcontent-%COMP%]{padding-left:18px;padding-bottom:24px}.filter[_ngcontent-%COMP%]{width:250px}"]}),e})(),pathMatch:"full"}];let F=(()=>{class e{}return e.\u0275mod=m.Ob({type:e}),e.\u0275inj=m.Nb({factory:function(t){return new(t||e)},imports:[[n.e.forChild(B)],n.e]}),e})();var x=o("PCNd"),D=o("hctd");let E=(()=>{class e{}return e.\u0275mod=m.Ob({type:e}),e.\u0275inj=m.Nb({factory:function(t){return new(t||e)},imports:[[i.c,r.i,F,u.d,x.a,D.a]]}),e})()}}]);