import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  headerPaymentArray = [];
  dataSourcePaymnent = [];
  allMode: string;
  checkBoxesMode: string;
  constructor() {
    this.allMode = 'allPages';
    this.checkBoxesMode = 'onClick';
   }

  ngOnInit() {
  }

  _onContentReady(e) {

  }
  selectionChanged(e) {

  }
  excelToJson(e) {

  }


}
