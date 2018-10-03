import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseComponent } from "./purchase.component";


@NgModule({
  imports: [
    CommonModule,
    PurchaseRoutingModule
  ],
  declarations: [PurchaseComponent]
})
export class PurchaseModule { }
