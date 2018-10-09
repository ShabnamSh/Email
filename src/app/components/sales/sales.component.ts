import { Component, OnInit } from '@angular/core';
import { XlsxtojsonService } from '../../providers/xlsxtojson.service';
import { AppService } from "../../providers/app.service";



@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  result: any;
  excelData: any;
  allMode: string;
  headerArray: any = [];
  checkBoxesMode: string;
  constructor(private xlsxToJsonService: XlsxtojsonService,public appService :AppService) {
    this.allMode = 'allPages';
    this.checkBoxesMode = 'onClick';
    this.headerArray = [
      {
        "caption": "Srl",
        "dataField": "Srl",
        "QueryHeader": 'SrlNo',
        "allowEditing": false,
        "cellTemplate": 'cellTemplate',
        "visible": true

      },
      {
        "caption": "Party Name",
        "dataField": "PartyName",
        "QueryHeader": 'PartyName',
        "allowEditing": false,
        "dataType": 'string',
        "visible": true
      },
      {
        "caption": "Invoice No.",
        "dataField": "InvoiceNo",
        "QueryHeader": 'InvoiceNo',
        "allowEditing": false,
        "dataType": 'string',
        "visible": true
      },
      {
        "caption": "Date",
        "dataField": "Date",
        "QueryHeader": 'Date',
        "allowEditing": false,
        "dataType": 'string',
        "visible": true
      },
      {
        "caption": "CB No.",
        "dataField": "CBNo",
        "QueryHeader": 'CBNo',
        "allowEditing": false,
        "dataType": 'string',
        "visible": true
      },
      {
        "caption": "Amount",
        "dataField": "Amount",
        "QueryHeader": 'Amount',
        "allowEditing": false,
        "dataType": 'string',
        "visible": true
      },
      {
        "caption": "Truck No.",
        "dataField": "TruckNo",
        "QueryHeader": 'TruckNo',
        "allowEditing": false,
        "dataType": 'string',
        "visible": true
      },
      {
        "caption": "Driver No.",
        "dataField": "DriverNo",
        "QueryHeader": 'DriverNo',
        "allowEditing": false,
        "dataType": 'string',
        "visible": true
      },
      {
        "caption": "Due Date",
        "dataField": "DueDate",
        "QueryHeader": 'DueDate',
        "allowEditing": false,
        "dataType": 'string',
        "visible": true
      },
    ]
  }


  ngOnInit() {
  }
  excelToJson(fileInput: Event) {
    let file = (<HTMLInputElement>fileInput.target).files[0];
    this.xlsxToJsonService.processFileToJson({}, file).subscribe(data => {
      console.log(data)
      debugger
      if(eval(data['sheets'].sheet1) == undefined)
      this.excelData = eval(data['sheets'].Sheet1);
      else
      this.excelData = eval(data['sheets'].sheet1);
      console.log(this.excelData);
    });
    let NameFile=file.name;
   
  }

  
  _onContentReady(e) {
    debugger
    let datasource=e.component.getDataSource().items();
    if(datasource){
     this.appService.isSalesJson(this.excelData).subscribe(data => {
      console.log(data);
    });
    }
    console.log(e);
  }
}
