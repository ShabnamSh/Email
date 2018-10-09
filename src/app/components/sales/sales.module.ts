import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from "./sales.component";
import { SidebarModule } from "../../sidebar/sidebar.module";
import { DxCalendarModule, DxButtonModule, DxTemplateModule, DxTextAreaModule, DxDataGridModule, DxSelectBoxModule } from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    SalesRoutingModule,
    SidebarModule,
    DxButtonModule, DxTemplateModule, DxTextAreaModule, DxDataGridModule,
    DxSelectBoxModule, DxCalendarModule
  ],
  declarations: [SalesComponent]
})
export class SalesModule { }
