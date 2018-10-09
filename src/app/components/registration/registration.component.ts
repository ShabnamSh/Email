import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AppService } from "../../providers/app.service";
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import data_grid from 'devextreme/ui/data_grid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  register: any = {};
  userAllType: any = {};
  constructor(public appService: AppService, private router: Router, ) {
    let userDetails=this.appService.getGlobalVariables('userDetails');
    if(userDetails == undefined){
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
    this.appService.userType().subscribe(data => {
      this.userAllType = data;
    });
  }
  
  onSubmit() {
    console.log(this.register);
    let isAlreadyRegistered;
    debugger
    this.appService.isRegistration(this.register).subscribe(data => {
      debugger
      isAlreadyRegistered = data[0];
      if (isAlreadyRegistered !=undefined) {
        if (isAlreadyRegistered.Email == this.register.email) {
          this.router.navigate(['login']);
        } else {
          alert('Registration Successful');
        }
      }
    });
    

  }

  resetForm(f:NgForm){
    f.reset();

  }

}
