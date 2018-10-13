import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseComponent } from "./purchase.component";
import { SidebarModule } from "../../sidebar/sidebar.module";
import { DxCalendarModule, DxButtonModule, DxTemplateModule, DxTextAreaModule, DxDataGridModule, DxSelectBoxModule } from 'devextreme-angular';


@NgModule({
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    SidebarModule,DxCalendarModule,DxButtonModule,DxTemplateModule,DxTextAreaModule,
    DxTextAreaModule,DxDataGridModule,DxSelectBoxModule
  ],
  declarations: [PurchaseComponent]
})
export class PurchaseModule { }
