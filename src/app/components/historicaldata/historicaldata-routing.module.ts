import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoricaldataComponent } from "./historicaldata.component";

const routes: Routes = [
  {
    path: '',
    component: HistoricaldataComponent
  }
];

export const HistoricaldataRoutingModule = RouterModule.forChild(routes);



