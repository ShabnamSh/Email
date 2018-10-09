import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../providers/app.service';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';
//,public toastr: ToastsManager, vcr: ViewContainerRef
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userType = 'Admin'
  constructor(private router: Router,public appService:AppService) {
    let userDetails=this.appService.getGlobalVariables('userDetails');
    if(userDetails == undefined){
      this.router.navigate(['login']);
    }
    // this.toastr.setRootViewContainerRef(vcr);
  }
  ngOnInit() {
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
