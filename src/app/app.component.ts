import { Component } from '@angular/core';

declare var require: any
var  XLSX = require('xlsx');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DocumentMS';
  constructor() {

  }
  // excelToJson(e) {
  //   let input = <HTMLInputElement>document.getElementById('upload');
    
  //   input.addEventListener('change', function () {
  //     // readXlsxFile(input.files[0], { dateFormat: 'MM/DD/YY' }).then(function (data) {
  //       // document.getElementById('result').innerText = JSON.stringify(data, null, 2)
  //       // console.log(JSON.stringify(data));
  //       // document.getElementById('result').innerText =JSON.parse(data);
  //       // console.log(eval(data));
  //       // setTimeout(() => {
  //         // document.getElementById('result-table').innerHTML = '<table>' + data.map(row => '<tr>' + row.map(cell => `<td>${cell === null ? '' : cell}</td>`).join('') + '</tr>').join('') + '</table>'
  //       // }, 100);
  //     // }, (error) => {
  //     //   console.error(error)
  //     //   alert("Error while parsing Excel file. See console output for the error stack trace.")
  //     // })
  //    let url=input.value;
  //    var oReq = new XMLHttpRequest();
  //       oReq.open("GET", url, true);
  //       oReq.responseType = "arraybuffer";

  //       oReq.onload = function(e) {
  //           var arraybuffer = oReq.response;

  //           /* convert data to binary string */
  //           var data = new Uint8Array(arraybuffer);
  //           var arr = new Array();
  //           for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
  //           var bstr = arr.join("");

  //           /* Call XLSX */
  //           var workbook = XLSX.read(bstr, {
  //               type: "binary"
  //           });

  //           /* DO SOMETHING WITH workbook HERE */
  //           var first_sheet_name = workbook.SheetNames[0];
  //           /* Get worksheet */
  //           var worksheet = workbook.Sheets[first_sheet_name];
  //           console.log(XLSX.utils.sheet_to_json(worksheet, {
  //               raw: true
  //           }));
  //       }

  //       oReq.send();
  //   })
  // }
  
  

}
