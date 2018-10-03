import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class SalesRoutingModule { }
import { SalesComponent} from "../sales/sales.component";

const routes: Routes = [
  {
    path: '',
    component: SalesComponent
  }
];

export const SalesRoutingModule = RouterModule.forChild(routes);

