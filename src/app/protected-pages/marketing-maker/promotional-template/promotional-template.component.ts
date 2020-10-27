import { Component, OnInit ,ViewChild,ElementRef,Input } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { BUTTON_TEXTS, TOASTER_MESSAGES } from "src/app/shared/utils/constant";
import { NgbDate } from "@ng-bootstrap/ng-bootstrap";
import { UserService } from "src/app/shared/services/user.service";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { TriggerTimeValidator} from "src/app/shared/validators/TriggerTimeValidator";
import timeZones from 'src/app/shared/JsonFiles/timeZone.json'
import countryCodes from 'src/app/shared/JsonFiles/countryCodes.json';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { error } from 'protractor';
import {MatDialog} from '@angular/material/dialog';
import { NgxCSVParserError } from 'ngx-csv-parser';
import { WarningDialogBoxComponent } from '../warning-dialog-box/warning-dialog-box.component';
import { NgxCsvParser } from 'ngx-csv-parser';


@Component({
  selector: "app-promotional-template",
  templateUrl: "./promotional-template.component.html",
  styleUrls: ["./promotional-template.component.scss"],
})
export class PromotionalTemplateComponent implements OnInit {

  @ViewChild("labelImport") labelImport: ElementRef;
  @ViewChild("labelImportCSV") labelImportCSV : ElementRef;

  @Input('BlockedFrom') fromBlockTime : any;
  @Input('BlockedTo') toBlockTime : any;


  FromBlockTimeHour : number;
  FromBlockTimeMinute : number;
  ToBlockTimeHour : number;
  ToBlockTimeMinute : number;

  submitButtonText = BUTTON_TEXTS.SUBMIT_BUTTON_TEXT;

  form: FormGroup;
  dropdownSettings = {};

  loading = false;
  fileToUpload: any;
  fileUploadFlag : boolean;
  documentUploadId : any;
  minDate:any;


  defaultTime = { hour: 12, minute: 0 };
  timeZones:any = timeZones;
  countryCodeList:any = countryCodes;
  filteredOptions: Observable<string[]>;
  showTemplateMessageFlag:boolean;

  templateDropDown : any[] = [];
  csvfileToUpload : boolean;
  errorCountArray : string[]  = [];
  stringErrorArray : string;
  csvfileFlag:boolean = false
  csvdocumentUploadId : any;
  csvRecords : any[];
  disableTemplateFlag : boolean;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toasterService: ToasterService,
    private warningDialog : MatDialog,
    private ngxCsvParser: NgxCsvParser
  ) {
    this.form = this.formBuilder.group({
      templateId: [null],
      template: [null],
      timeZone: [null,Validators.required],
      countryCodes: [null,Validators.required],
      campaignDate: [new Date(), Validators.required],
      triggerTime: [null, [Validators.required,TriggerTimeValidator()]],
      importFile: [null],
    });
  }

  ListOfIds : any[] = [{"text":"MultiId","value":"1"},{"text":"Ternary","value":"2"}];

  ngOnInit(): void {
    this.setMinDate();
    this.configurable();
    this.dropdownSettings = {
      singleSelection: false,
      idField: "dial_code",
      textField: "name",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      limitSelection:5
    };

    this.fetchPromotionalDropDown();

    //AutoComplete

    this.filteredOptions = this.form.controls['timeZone'].valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    // if(!value) return null;

    const filterValue = value ? value.toLowerCase() : "";

    return this.timeZones.filter(timeZone => timeZone.text.toLowerCase().includes(filterValue));
  }

  displayFn(SelectedId){
    if(!SelectedId) return '';
    let index = this.timeZones.findIndex(timeZone => timeZone.utc[0] === SelectedId);
    return this.timeZones[index].text;

  }

  setMinDate()
  {
    const date = new Date();
    console.log("Date"+date.getDate()+" "+date.getFullYear()+" "+date.getMonth())
    this.minDate = {
      year: date.getFullYear(),
      month: date.getMonth()+1,
      day: date.getDate(),
    };

  
  }

  onSubmit() {
    const fieldControls = this.form.controls;

    const campaignDate = fieldControls.campaignDate.value;
    const triggerTime = fieldControls.triggerTime.value;
    const timeZones = fieldControls.timeZone.value;
      const countryCodes = fieldControls.countryCodes.value;

    // tslint:disable-next-line: max-line-length
    const formattedDate = `${campaignDate.year}-${campaignDate.month}-${campaignDate.day}`;
    this.fileUploadFlag = fieldControls.importFile.value ? true : false;
    const templateObj = fieldControls.templateId.value ? fieldControls.templateId.value : "";
    const templateId = templateObj ? templateObj.templateId : ""; 
    const template = fieldControls.template.value ? fieldControls.template.value : "";

    this.loading = true;
    this.userService
      .createPromotionalTemplate(
        templateId,
        template,
        formattedDate,
        `${triggerTime.hour}:${triggerTime.minute}:00`,
        String(this.userService.currentUserValue.userId),this.fileUploadFlag,this.documentUploadId,this.csvdocumentUploadId,timeZones,countryCodes
      )
      .subscribe(
        (createdPromotionalMessage) => {
          const {
            ProcessVariables: { status },
            ProcessVariables: { message = {} },
          } = createdPromotionalMessage;
          if (status) {
            this.toasterService.showSuccess(
              TOASTER_MESSAGES.CREATE_PROMOTIONAL_TEMPLATE_SUCCESS
            );
            this.form.reset();
            this.form.controls['timeZone'].patchValue('');
            this.showTemplateMessageFlag = false;
            this.labelImport.nativeElement.innerText = TOASTER_MESSAGES.LABLE_MESSAGE;
            this.documentUploadId = null;
            this.loading = false;
            this.fileToUpload = null
          } else {
            this.loading = false;
            this.toasterService.showError(message.value);
          }
        },
        (error) => {
          this.loading = false;
          this.toasterService.showError(error);
        }
      );
  }

  onFileChange(files: FileList,type : any) {
    if(type === 'PDF'){
      this.labelImport.nativeElement.innerText = Array.from(files)
        .map((f) => f.name)
        .join(", ");
      }else if(type === "CSV"){
        this.labelImportCSV.nativeElement.innerText = Array.from(files)
        .map((f) => f.name)
        .join(", ");
      }
    this.fileToUpload = files.item(0);
    console.log("FiletoUpload"+this.fileToUpload);
    const userId = String(this.userService.currentUserValue.userId);
    const modifiedFile = Object.defineProperty(this.fileToUpload, "name", {
      writable: true,
      value: this.fileToUpload["name"]
    });
    modifiedFile["name"] = userId + "-" + new Date().getTime() + "-" + modifiedFile["name"];
    console.log(modifiedFile);
    this.uploadToAppiyoDrive(modifiedFile,type);
  }

  cancelFileUpload()
  {
   // this.form.setValue({importFile : ''});
    this.form.controls['importFile'].reset();
    this.fileToUpload = null;
    this.fileUploadFlag = false
    this.documentUploadId = null;
    this.labelImport.nativeElement.innerText = TOASTER_MESSAGES.LABLE_MESSAGE;
  }

  cancelCSVFileUpload(){
    this.form.controls['importCSVFile'].reset();
    this.csvfileToUpload = false;
    this.csvdocumentUploadId = null;
    this.disableTemplateFlag = false
    this.labelImportCSV.nativeElement.innerText = TOASTER_MESSAGES.LABLE_MESSAGE;
    this.csvfileFlag = false;
    this.errorCountArray = [];
  }


  uploadToAppiyoDrive(file : any,flag:string)
  {
    this.userService.uploadToAppiyoDrive(file).subscribe(
      (response) =>
      {
        console.log(response)
        if(response["ok"])
        {
          // this.documentUploadId = response["info"]["id"];
          this.setUploadId(response,flag);
          this.toasterService.showSuccess(TOASTER_MESSAGES.FILE_UPLOAD_SUCCESS);
          
        }
        else{
          this.toasterService.showError(TOASTER_MESSAGES.FILE_UPLOAD_FAILURE);
        }
      },
      (error) =>
      {
        this.toasterService.showError(TOASTER_MESSAGES.FILE_UPLOAD_FAILURE);
        console.log(error);
      }
    );
  }

  onTemplateIdChange()
  {
    if(this.form.controls['templateId'].value){
      const templateObj = this.form.controls['templateId'].value;
      const templateId = templateObj ? templateObj.message : null;
      this.form.controls['template'].setValue(templateId ? templateId : "");
      this.showTemplateMessageFlag = true;
    }
    
  }

  fetchPromotionalDropDown()
  {
    this.userService.getPromotionalDropDown().subscribe((response) =>
     {
      this.templateDropDown = response.ProcessVariables.templateIdList;
      console.log(this.templateDropDown);
    },
    (error) => {
      this.toasterService.showError(TOASTER_MESSAGES.DROP_DOWN_FAILURE);
      console.log(error);
    });
  }

  configurable(){
    let FromBlockTimeArr = this.fromBlockTime ? this.fromBlockTime.split(":") : null
    let ToBlockTimeArr = this.toBlockTime ? this.toBlockTime.split(":") : null;
 
    this.FromBlockTimeHour = FromBlockTimeArr ? Number(FromBlockTimeArr[0]) : null;
    this.FromBlockTimeMinute  = FromBlockTimeArr ? Number(FromBlockTimeArr[1]) : null;

    this.ToBlockTimeHour = ToBlockTimeArr ? Number(ToBlockTimeArr[0]) : null;
    this.ToBlockTimeMinute = ToBlockTimeArr ? Number(ToBlockTimeArr[1]) : null;
   }

   triggerTimeValidator(){
    const fieldControls = this.form.controls["triggerTime"].value;
    const validateHour : number = fieldControls.hour ? Number(fieldControls.hour) : null;
    const validateMinute : number= fieldControls.minute ? Number(fieldControls.minute) : null;

    if(validateHour > this.FromBlockTimeHour && validateHour < this.ToBlockTimeHour){
      this.warningPopUp();
    }
    else if(validateHour == this.FromBlockTimeHour || validateHour == this.ToBlockTimeHour){
      if(validateHour == this.FromBlockTimeHour && validateMinute >= this.FromBlockTimeMinute){
       this.warningPopUp();
      }
      if(validateHour == this.ToBlockTimeHour && validateMinute <= this.ToBlockTimeMinute)
      {
        this.warningPopUp();
      }

    }
  }

  warningPopUp(){
    const dialogRef = this.warningDialog.open(WarningDialogBoxComponent,{
      width : '500px',
      data : {fromTime:this.fromBlockTime,toTime:this.toBlockTime}
    })
    dialogRef.afterClosed().subscribe((result) =>{
      if(result){
        return;
      }
    })
   }

   fileChangeListener($event: any): void {
    debugger
    const files : FileList= $event.srcElement.files;
    this.labelImportCSV.nativeElement.innerText = Array.from(files)
     .map((f) => f.name)
     .join(", ");
    this.csvfileToUpload = true;
   const arr : any[] = this.validatorMethod();
    // Select the files from the event
    
 
    // Parse the file you want to select for the operation along with the configuration
    this.ngxCsvParser.parse(files[0], { header: false, delimiter: ',' })
      .pipe().subscribe((result: Array<any>) => {
 
        console.log('Result', result);

        let fileHeaderArray : any[] = result ? (result[0] ? result[0] : null) : null;

        if(!fileHeaderArray.includes("mobile")){

          this.errorCountArray.push("mobile");
        }
        if(!(!arr.some(ele => !fileHeaderArray.includes(ele)))){
             this.codeLineParser(arr,fileHeaderArray);
        }

        if(this.errorCountArray.length > 0){
        this.stringErrorArray =  this.errorMessageConstructor(this.errorCountArray);
        this.csvfileFlag = true;
        return
        }

         this.onFileChange(files,'CSV')
        this.csvRecords = result;
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });
 
  }

  //Validator for CSV
  validatorMethod(): any{
    var found = [],          // an array to collect the strings that are found
    rxp = /{([^}]+)}/g,
    templteMessage = this.form.controls['template'].value,
    // str = "a {string} with {curly} braces",
    
    curMatch;

  while( curMatch = rxp.exec( templteMessage ) ) {
    found.push( curMatch[1] );
}

console.log( found );
return found    // ["string", "curly"]
   }

   codeLineParser(arrayA : string[],arrayB : string[]){
    debugger;
    for(let i =0 ; i < arrayA.length ;i++){
          if(!arrayB.includes(arrayA[i])){
            this.errorCountArray.push(arrayA[i]);
          }
          
    }

  }

  errorMessageConstructor(errorCountArray : string[]) : string{
    let stringArray : string  = '';
    if(errorCountArray.length > 0){
         for(let i =0 ;i < errorCountArray.length ; i++){
           if(i != errorCountArray.length-1){
           stringArray = stringArray+errorCountArray[i]+ ",";
           }else{
             stringArray = stringArray+errorCountArray[i];
           }

         }
    }

    return stringArray;
  }


  setUploadId(response : any,flag : string){
    if(flag === 'PDF'){
      this.documentUploadId = response["info"]["id"]; //FOR PDF
    }

          if(flag === 'CSV'){
          this.csvdocumentUploadId = response["info"]["id"]; //FOR CSV
          this.disableTemplateFlag = true;
          }
  }



}
