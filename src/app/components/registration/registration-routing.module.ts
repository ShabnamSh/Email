import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class RegistrationRoutingModule { }



import { RegistrationComponent} from "../../components/registration/registration.component";

const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent
  }
];

export const RegistrationRoutingModule = RouterModule.forChild(routes);