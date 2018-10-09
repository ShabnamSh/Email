import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricaldataRoutingModule } from './historicaldata-routing.module';
import { SidebarModule } from "../../sidebar/sidebar.module";
import { HistoricaldataComponent } from "./historicaldata.component";


@NgModule({
  imports: [
    CommonModule,
    HistoricaldataRoutingModule,
    SidebarModule
  ],
  declarations: [HistoricaldataComponent]
})
export class HistoricaldataModule { }
