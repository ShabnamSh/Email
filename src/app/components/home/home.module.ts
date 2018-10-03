import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';

// import { SidebarModule } from "./../sidebar/sidebar.module";
// import { SidebarComponent } from "./../sidebar/sidebar.component";

@NgModule({
  imports: [
    // SidebarModule,
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    
  ],
  exports:  [SidebarComponent],
  declarations: [HomeComponent,SidebarComponent]
})
export class HomeModule { }
