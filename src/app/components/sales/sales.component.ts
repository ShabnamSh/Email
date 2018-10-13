import { Component, OnInit, ViewChild } from '@angular/core';
import { XlsxtojsonService } from '../../providers/xlsxtojson.service';
import { AppService } from "../../providers/app.service";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Http, Headers, RequestOptions, RequestMethod, HttpModule } from '@angular/http';
import button from 'devextreme/ui/button';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgForm } from "@angular/forms";
import { DxDataGridComponent } from "devextreme-angular";

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;

  result: any;
  excelData: any;
  allMode: string;
  headerArray: any = [];
  checkBoxesMode: string;
  selectedFile: File = null;
  myFiles: string[] = [];
  sMsg: string = '';
  saleSelectedData: any = [];
  partyAllDetails: any = {};
  selectedPartyDetails: any = [];
  notExistParty = [];
  fileName:any;

  constructor(private xlsxToJsonService: XlsxtojsonService, public appService: AppService, private http: HttpClient, public toastr: ToastrManager) {
    this.allMode = 'allPages';
    this.checkBoxesMode = 'onClick';
    this.headerArray = [
      {
        "caption": "Srl",
        "dataField": "Srl",
        "QueryHeader": 'SrlNo',
        "width": 50,
        "allowEditing": false,
        cellTemplate: 'cellTemplate1',
        "visible": true,
      },
      {
        "caption": "Party Name",
        "dataField": "PartyName",
        "QueryHeader": 'PartyName',
        "allowEditing": false,
        "dataType": 'string',
        "visible": true,

      },
      {
        "caption": "Invoice No.",
        "dataField": "InvoiceNo",
        "QueryHeader": 'InvoiceNo',
        "allowEditing": false,
        "dataType": 'string',
        "visible": true,
      },
      {
        "caption": "Date",
        "dataField": "Date",
        "QueryHeader": 'Date',
        "allowEditing": false,
        "dataType": 'date',
        "visible": true,
      },
      {
        "caption": "CB No.",
        "dataField": "CBNo",
        "QueryHeader": 'CBNo',
        "allowEditing": false,
        "dataType": 'string',
        "visible": true,
      },
      {
        "caption": "Amount",
        "dataField": "Amount",
        "QueryHeader": 'Amount',
        "allowEditing": false,
        "dataType": 'string',
        "visible": true,

      },
      {
        "caption": "Truck No.",
        "dataField": "TruckNo",
        "QueryHeader": 'TruckNo',
        "allowEditing": false,
        "dataType": 'string',
        "visible": true,

      },
      {
        "caption": "Driver No.",
        "dataField": "DriverNo",
        "QueryHeader": 'DriverNo',
        "allowEditing": false,
        "dataType": 'string',
        "visible": true,
      },
      {
        "caption": "Due Date",
        "dataField": "DueDate",
        "QueryHeader": 'DueDate',
        "allowEditing": false,
        "dataType": 'date',
        "visible": true,
      },
      {
        "caption": "Invoice",
        "dataField": "invoice",
        "visible": true,
        cellTemplate: 'cellTemplate',
      },
      {
        "caption": "Transport Bill",
        "dataField": "transport",
        "visible": true,
        cellTemplate: 'cellTemplateT',
      }, {
        "caption": "Receving Copy",
        "dataField": "receiving",
        "visible": true,
        cellTemplate: 'cellTemplateR',
      },

    ];

  }

  selectionChanged(e) {
    this.saleSelectedData = [];
    for (let item in e.selectedRowsData) {
      this.saleSelectedData.push(e.selectedRowsData[item]);
    }
    console.log(this.saleSelectedData);
  }

  ngOnInit() {
    debugger
    this.appService.getPartyDetails().subscribe(data => {
      this.partyAllDetails = data;
    });

    this.appService.getSalesAllDetailsFromDb().subscribe(data =>{
      debugger
      this.excelData=data;
    });
    console.log(this.excelData);
  }

  sendDetails() {
    debugger
    let isRegistered = true;
    let nonExistParty=[];
    this.saleSelectedData.map(x => {
      this.partyAllDetails.map(y => {
        if (x.PartyName.trim() == y.PartyName.trim()) {
          this.selectedPartyDetails.push(y);
        }
      });
    });
    let tmpTabKV = [];
    if(this.selectedPartyDetails){
      this.selectedPartyDetails.map(a => {
        this.excelData.map(z => {
          if (a.PartyName.trim() === z.PartyName.trim()) {
            let msg = 'Your Payment Due Date is' + (z.DueDate);
            let no = a.MobileNo
            tmpTabKV.push({ 'phone': no, 'msg': msg });
          }
        });
      });
    }
    
   debugger
   let tempall=[]
   let party=this.partyAllDetails;
   let selectedParty=this.saleSelectedData;
    tempall = party.filter(objFromA => {
        return  !selectedParty.find(objFromB => {
        return objFromA.PartyName.trim() != objFromB.PartyName.trim();
      })
    });
    console.log(tempall);
    console.log(this.notExistParty + "this.notExistParty");
    console.log(tmpTabKV + "tmpTabKV");
    if (tmpTabKV.length > 0) {
      this.appService.getSMSDetails(tmpTabKV).subscribe(data => {
        console.log(data);
        this.showCustom();
        if (this.notExistParty.length > 0) {
          this.showCustomForNonExist();
        }
      });
    } else {
      this.showCustomForNonExist();
    }

    console.log(this.selectedPartyDetails);
    tmpTabKV = [];
  }

  excelToJson(fileInput: Event) {
    let file = (<HTMLInputElement>fileInput.target).files[0];
    this.xlsxToJsonService.processFileToJson({}, file).subscribe(data => {
      console.log(data)
      if (eval(data['sheets'].sheet1) == undefined)
        this.excelData = eval(data['sheets'].Sheet1);
      else
        this.excelData = eval(data['sheets'].sheet1);
      console.log(this.excelData);

    });
    console.log(this.excelData);
    let NameFile = file.name;
    setTimeout(() => {
      this.appService.isSalesJson(this.excelData).subscribe(data => {
        console.log(data);
      });
    }, 50);

  }

  showCustom() {
    this.toastr.customToastr(
      '<span style="color: green; font-size: 16px; text-align: center;">Message Send Successfully for Exist Party  ..!!</span>',
      null,
      {
        enableHTML: true,
        position: 'top-right',
        animate: 'null',

      }
    );
  }

  showCustomForNonExist() {
    for (let item in this.notExistParty) {
      let name = this.notExistParty[item].name
      this.toastr.customToastr(
        '<span style="color: green; font-size: 16px; text-align: center;">name Please Registered This Party</span>',
        null,
        {
          enableHTML: true,
          position: 'top-right',
          animate: 'null',

        }
      );
    }
  }


  _onContentReady(e) {
  }

  getFileDetails(e) {
    debugger
    for (var i = 0; i < e.target.files.length; i++) {
      this.myFiles.push(e.target.files[i]);
    }
     this.fileName=e.target.files[0].name;
  }

  // _onCellClick(e){
  //   console.log(e)
  // }

  uploadFiles() {
    debugger
    if(this.saleSelectedData !=undefined && this.saleSelectedData.length ==1){
      const frmData = new FormData();
      for (var i = 0; i < this.myFiles.length; i++) {
        frmData.append("fileUpload", this.myFiles[i]);
      }
      let filetypeName=[];
      let returndata:any;
      filetypeName.push({'invoiceno':this.saleSelectedData[0].InvoiceNo,'type':'Invoice'});
       this.appService.sendFileDetatis(filetypeName[0]).subscribe(data=>{
         console.log(data);
         returndata=data;
         if(returndata =="1"){
          debugger
         
         this.http.post('http://localhost:10364/Api/UserDetails/IEnumerableFileUpload', frmData)
         .subscribe(
           data => {
             this.sMsg = data as string;
             console.log(this.sMsg);
           },
           (err: HttpErrorResponse) => {
             console.log(err.message);
           }
         );
         }
       });
       debugger
       setTimeout(() => {
     
  },500);
    }else{
      alert("Please Select One Item")
    }
  }

}

