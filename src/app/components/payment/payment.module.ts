import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from "./payment.component";
import { SidebarModule } from "../../sidebar/sidebar.module";
import { DxCalendarModule, DxButtonModule, DxTemplateModule, DxTextAreaModule, DxDataGridModule, DxSelectBoxModule } from 'devextreme-angular';


@NgModule({
  imports: [
    CommonModule,
    PaymentRoutingModule,
    SidebarModule,
    DxCalendarModule, DxButtonModule, 
    DxTemplateModule, DxTextAreaModule, DxDataGridModule, DxSelectBoxModule
  ],
  declarations: [PaymentComponent]
})
export class PaymentModule { }
