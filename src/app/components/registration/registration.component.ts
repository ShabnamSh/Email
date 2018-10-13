import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AppService } from "../../providers/app.service";
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import data_grid from 'devextreme/ui/data_grid';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  register: any = {};
  userAllType: any = {};
  constructor(public appService: AppService, private router: Router, ) {
    // let userDetails = this.appService.getGlobalVariables('userDetails');
    // if (userDetails == undefined) {
    //   this.router.navigate(['login']);
    // }
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
    let  key = CryptoJS.enc.Utf8.parse(this.register.password);
    let iv = CryptoJS.enc.Utf8.parse(this.register.password);
    let encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse("It works"), key,
      {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });

    let decrypted = CryptoJS.AES.decrypt(encrypted, key, {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });

    console.log('Encrypted :' + encrypted);
    console.log('Key :' + encrypted.key);
    console.log('Salt :' + encrypted.salt);
    console.log('iv :' + encrypted.iv);
    console.log('Decrypted : ' + decrypted);
    console.log('utf8 = ' + decrypted.toString(CryptoJS.enc.Utf8));
    this.appService.isRegistration(this.register).subscribe(data => {
      debugger
      isAlreadyRegistered = data[0];
      if (isAlreadyRegistered != undefined) {
        if (isAlreadyRegistered.Email == this.register.email) {
          this.router.navigate(['login']);
        } else {
          alert('Registration Successful');
        }
      }
    });


  }

  resetForm(f: NgForm) {
    f.reset();

  }

}
