import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { 
    alert('home');
  }

  ngOnInit() {
  }
  sales(){
    this.router.navigate(['sales']);
  }
  purchase(){this.router.navigate(['purchase']);}
  payment(){this.router.navigate(['paymant']);}

}
