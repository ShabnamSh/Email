import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from "../../providers/app.service";
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  result: any;
  model: any = {};
  userAllType: any;

  constructor(private router: Router, public appService: AppService) { }
  ngOnInit() {
  }

  onSubmit() {
    debugger
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    debugger
    this.appService.loginUserDetails(JSON.stringify(this.model)).subscribe(data => {
      console.log(data[0]);
      this.result = data[0];
      if (this.result){
        this.router.navigate(['home']);
        debugger
        this.appService.loggedInUser=this.result.FirstName+"  "+ this.result.LastName
        this.appService.setGlobalVariables('userDetails', this.result.TYPE);
      }
      else
        this.router.navigate(['login']);//notification msg show
    });

  }
  resetForm(f: NgForm) {
    f.reset()
    // alert(f);
    this.model = {};
  }
}

