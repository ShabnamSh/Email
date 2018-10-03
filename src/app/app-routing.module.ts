import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './providers/auth.guard';


export const routes: Routes = [
  { //default page
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: 'src/app/components/login/login.module#LoginModule'
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: 'src/app/components/home/home.module#HomeModule'
  },
  {
    path: 'sales',
    loadChildren: 'src/app/components/sales/sales.module#SalesModule'
  },
  {
    path: 'purchase',
    loadChildren: 'src/app/components/purchase/purchase.module#PurchaseModule'
  },
  {
    path: 'payment',
    loadChildren: 'src/app/components/payment/payment.module#PaymentModule'
  },
  
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);