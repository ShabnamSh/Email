import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent} from "../sales/sales.component";

const routes: Routes = [
  {
    path: '',
    component: SalesComponent
  }
];

export const SalesRoutingModule = RouterModule.forChild(routes);

