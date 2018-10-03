import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class PurchaseRoutingModule { }

import { PurchaseComponent} from "../purchase/purchase.component";

const routes: Routes = [
  {
    path: '',
    component: PurchaseComponent
  }
];

export const PurchaseRoutingModule = RouterModule.forChild(routes);
