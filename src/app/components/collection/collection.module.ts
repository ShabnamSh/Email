import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionRoutingModule } from './collection-routing.module';
import { SidebarModule } from "../../sidebar/sidebar.module";
import { CollectionComponent } from "./collection.component";
import { DxCalendarModule, DxButtonModule, DxTemplateModule, DxTextAreaModule, DxDataGridModule, DxSelectBoxModule } from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    CollectionRoutingModule,
    SidebarModule,
    DxCalendarModule, DxButtonModule, 
    DxTemplateModule, DxTextAreaModule, DxDataGridModule, DxSelectBoxModule
  ],
  declarations: [CollectionComponent]
})
export class CollectionModule { }
