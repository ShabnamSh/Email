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
    { page: 'Home', image: '' },
    { page: 'Sales', image: '' },
    { page: 'Purchase', image: '' },
    {page: 'Payment', image: ''},
    {page: 'Collection', image: ''},
    {page: 'Historical Data', image: ''}
  ]
}
  
  ngOnInit() {
  }
  openPage(p){
    debugger
   switch (p.page) {
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
