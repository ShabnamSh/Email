import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricaldataRoutingModule } from './historicaldata-routing.module';
import { SidebarModule } from "../../sidebar/sidebar.module";
import { HistoricaldataComponent } from "./historicaldata.component";
import { DxCalendarModule, DxButtonModule, DxTemplateModule, DxTextAreaModule, DxDataGridModule, DxSelectBoxModule } from 'devextreme-angular';


@NgModule({
  imports: [
    CommonModule,
    HistoricaldataRoutingModule,
    SidebarModule,
    DxCalendarModule, DxButtonModule, 
    DxTemplateModule, DxTextAreaModule, DxDataGridModule, DxSelectBoxModule
  ],
  declarations: [HistoricaldataComponent]
})
export class HistoricaldataModule { }
