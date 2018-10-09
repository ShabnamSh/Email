import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';

import { SidebarModule } from "../../sidebar/sidebar.module";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    SidebarModule
    
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
