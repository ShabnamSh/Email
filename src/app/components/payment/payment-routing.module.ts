import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class PaymentRoutingModule { }

import { PaymentComponent} from "../payment/payment.component";

const routes: Routes = [
  {
    path: '',
    component: PaymentComponent
  }
];

export const PaymentRoutingModule = RouterModule.forChild(routes);
