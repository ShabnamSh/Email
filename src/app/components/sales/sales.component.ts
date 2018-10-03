import { Component, OnInit } from '@angular/core';
import { XlsxtojsonService } from '../../providers/xlsxtojson.service';



@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  result: string;
  excelData: any;
  allMode: string;
  checkBoxesMode: string;
  constructor(private xlsxToJsonService: XlsxtojsonService) {
    this.allMode = 'allPages';
    this.checkBoxesMode = 'onClick'
  }

  ngOnInit() {
  }
  excelToJson(fileInput: Event) {
    //   debugger
    let file = (<HTMLInputElement>fileInput.target).files[0];
    debugger
    this.xlsxToJsonService.processFileToJson({}, file).subscribe(data => {
      debugger
      console.log(data)
      this.result = JSON.stringify(data['sheets'].sheet1);
      console.log(this.result);
      this.excelData=eval(data['sheets'].sheet1);
      console.log(this.excelData);
    });
  }
  _onContentReady(e){
    debugger
  console.log(e);
  }
}
