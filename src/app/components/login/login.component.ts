import { Component, OnInit } from '@angular/core';
import { XlsxtojsonService } from '../../providers/xlsxtojson.service';
import { Router } from '@angular/router';
import { AppService } from "../../providers/app.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  result: any;
  model: any = {};
  constructor(private xlsxToJsonService: XlsxtojsonService, private router: Router,private appService:AppService) { }
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
    });
  }

  onSubmit() {
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    // debugger
    this.router.navigate(['home']);
  }

}
