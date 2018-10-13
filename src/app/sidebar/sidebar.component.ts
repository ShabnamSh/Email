import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  panels:any={}
 
  constructor(private router :Router) { 
    // debugger
    this.panels=[
    { page: 'Home', image: 'glyphicon glyphicon-lock form-control-feedback' },
    { page: 'Sales', image: 'glyphicon glyphicon-envelope form-control-feedback' },
    { page: 'Purchase', image: 'glyphicon glyphicon-envelope form-control-feedback' },
    {page: 'Payment', image: 'glyphicon glyphicon-envelope form-control-feedback'},
    {page: 'Collection', image: 'glyphicon glyphicon-envelope form-control-feedback'},
    {page: 'Historical Data', image: 'glyphicon glyphicon-envelope form-control-feedback'}
  ]
}
  
  ngOnInit() {
  }
  openPage(p){
    debugger
   switch (p) {
     case 'Home':
     this.router.navigate(['home']);
       break;
       case 'Sales':
       this.router.navigate(['sales']);
       break;
       case 'Purchase':
       this.router.navigate(['purchase']);
       break;
       case 'Payment':
       this.router.navigate(['payment']);
       break;
       case 'Collection':
       this.router.navigate(['collection']);
       break;
       case 'Historical Data':
       this.router.navigate(['historydata']);
       break;
   }
  }

}
