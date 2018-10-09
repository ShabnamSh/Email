import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  HttpModule} from "@angular/http";

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from "./registration.component";
import { SidebarModule } from "../../sidebar/sidebar.module";

@NgModule({
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    SidebarModule,
    FormsModule,
    HttpModule
  ],
  declarations: [RegistrationComponent]
})
export class RegistrationModule { }
