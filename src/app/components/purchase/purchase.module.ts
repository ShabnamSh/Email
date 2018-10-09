import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseComponent } from "./purchase.component";
import { SidebarModule } from "../../sidebar/sidebar.module";


@NgModule({
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    SidebarModule
  ],
  declarations: [PurchaseComponent]
})
export class PurchaseModule { }
