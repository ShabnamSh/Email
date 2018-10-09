import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseComponent} from "../purchase/purchase.component";

const routes: Routes = [
  {
    path: '',
    component: PurchaseComponent
  }
];

export const PurchaseRoutingModule = RouterModule.forChild(routes);
