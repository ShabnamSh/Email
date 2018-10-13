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
  selector: 'app-purchasehistorical',
  templateUrl: './purchasehistorical.component.html',
  styleUrls: ['./purchasehistorical.component.css']
})
export class PurchasehistoricalComponent implements OnInit {

  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  allMode: string;
  checkBoxesMode: string;
  headerPurchase:any=[];
  dataSourcePurchase:any=[];
  constructor(private xlsxToJsonService: XlsxtojsonService, public appService: AppService, private http: HttpClient, public toastr: ToastrManager) {
    this.allMode = 'allPages';
    this.checkBoxesMode = 'onClick';
    this.headerPurchase = [
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
        "caption": "Supplier Name",
        "dataField": "SupplierName",
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

    ];
   }

  ngOnInit() {
  }


  excelToJson(fileInput: Event) {
    let file = (<HTMLInputElement>fileInput.target).files[0];
    this.xlsxToJsonService.processFileToJson({}, file).subscribe(data => {
      console.log(data)
      if (eval(data['sheets'].sheet1) == undefined)
  
  this.dataSourcePurchase = eval(data['sheets'].Sheet1);
      else
        this.dataSourcePurchase = eval(data['sheets'].sheet1);
      console.log(this.dataSourcePurchase);

    });
    console.log(this.dataSourcePurchase);
    let NameFile = file.name;

  }

}
