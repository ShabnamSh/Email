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
    path: 'registration',
    loadChildren: 'src/app/components/registration/registration.module#RegistrationModule'
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
  {
    path: 'collection',
    loadChildren: 'src/app/components/collection/collection.module#CollectionModule'
  },
  {
    path: 'historydata',
    loadChildren: 'src/app/components/historicaldata/historicaldata.module#HistoricaldataModule'
  },
  
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);