import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent} from "../payment/payment.component";

const routes: Routes = [
  {
    path: '',
    component: PaymentComponent
  }
];

export const PaymentRoutingModule = RouterModule.forChild(routes);
