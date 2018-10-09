import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionComponent } from "./collection.component";

const routes: Routes = [
  {
    path: '',
    component: CollectionComponent
  }
];

export const CollectionRoutingModule = RouterModule.forChild(routes);
