import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home.component";

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class HomeRoutingModule { }

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    
  }
];
export const HomeRoutingModule = RouterModule.forChild(routes);
