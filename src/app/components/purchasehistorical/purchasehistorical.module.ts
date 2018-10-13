import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import {  HttpModule} from "@angular/http";

import { PurchasehistoricalRoutingModule } from './purchasehistorical-routing.module';
import { PurchasehistoricalComponent } from "./purchasehistorical.component";
import { SidebarModule } from "../../sidebar/sidebar.module";
import { DxCalendarModule, DxButtonModule, DxTemplateModule, DxTextAreaModule, DxDataGridModule, DxSelectBoxModule } from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    PurchasehistoricalRoutingModule,
    SidebarModule,
    DxButtonModule, DxTemplateModule, DxTextAreaModule, DxDataGridModule,
    DxSelectBoxModule, DxCalendarModule,
    FormsModule,
    HttpModule
  ],
  declarations: [PurchasehistoricalComponent]
})
export class PurchasehistoricalModule { }
