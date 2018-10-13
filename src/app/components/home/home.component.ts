import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../providers/app.service';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';
//,public toastr: ToastsManager, vcr: ViewContainerRef
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userType = 'Admin'
  constructor(private router: Router, public appService: AppService, public toastr: ToastrManager) {
    let userDetails = this.appService.getGlobalVariables('userDetails');
    // if (userDetails == undefined) {
    //   this.router.navigate(['login']);
    // } else {
    //   // this.toastr.setRootViewContainerRef(vcr);
    //   this.showCustom();
    // }
    this.showCustom();

  }
  ngOnInit() {
  }

  showToast(position: any = 'top-center') {
    this.toastr.infoToastr('Login Successful.', 'Home', {
      position: position
    });
  }


  showCustom() {
    this.toastr.customToastr(
      '<span style="color: green; font-size: 16px; text-align: center;">Login Successful  ..!!</span>',
      null,
      {
        enableHTML: true,
        position: 'top-right',
        animate: 'null',

      }
    );
    
  }


  openPageClick(e) {
    switch (e.target.id) {
      case 'btnSales':
        this.router.navigate(['sales']);
        break;
      case 'btnPurchase':
        this.router.navigate(['purchase']);
        break;
      case 'btnPayment':
        this.router.navigate(['payment']);
        break;
      case 'btnCollection':
        this.router.navigate(['collection']);
        break;
    }

  }

  rgistration() {
    this.router.navigate(['registration']);
  }
}
