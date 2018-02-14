import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminGuard } from '../admin.guard';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';


const routes: Routes = [
  { path: '', component: AdminPortalComponent,  children: [ //REMEMBER to add this: --> canActivate: [AdminGuard],
    { path: '', loadChildren: 'app/admin-portal/ap-home/ap-home.module#ApHomeModule' },
    { path: 'cities', loadChildren: 'app/admin-portal/ap-cities/ap-cities.module#ApCitiesModule' },
    { path: 'clients', loadChildren: 'app/admin-portal/ap-clients/ap-clients.module#ApClientsModule' },
    { path: 'current-orders', loadChildren: 'app/admin-portal/ap-current-orders/ap-current-orders.module#ApCurrentOrdersModule' },
    { path: 'drivers', loadChildren: 'app/admin-portal/ap-drivers/ap-drivers.module#ApDriversModule' },
    { path: 'vendors', loadChildren: 'app/admin-portal/ap-vendors/ap-vendors.module#ApVendorsModule' },
    { path: 'industries', loadChildren: 'app/admin-portal/ap-industries/ap-industries.module#ApIndustriesModule'}
  ]},
  { path: 'landing', loadChildren: 'app/admin-portal/ap-landing/ap-landing.module#ApLandingModule'},
  // add more routes here
  // { path: '', loadChildren: }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPortalRoutingModule { }
