import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { clientGuard } from '../client.guard';
import { clientPortalComponent } from './client-portal/client-portal.component';

 
const routes: Routes = [
  { path: '', component: clientPortalComponent,  children: [ //REMEMBER to add this: --> canActivate: [clientGuard],
    { path: '', loadChildren: 'app/client-portal/ap-home/ap-home.module#ApHomeModule' },
    { path: 'cities', loadChildren: 'app/client-portal/ap-cities/ap-cities.module#ApCitiesModule' },
    { path: 'clients', loadChildren: 'app/client-portal/ap-clients/ap-clients.module#ApClientsModule' },
    { path: 'current-orders', loadChildren: 'app/client-portal/ap-current-orders/ap-current-orders.module#ApCurrentOrdersModule' },
    { path: 'drivers', loadChildren: 'app/client-portal/ap-drivers/ap-drivers.module#ApDriversModule' },
    { path: 'vendors', loadChildren: 'app/client-portal/ap-vendors/ap-vendors.module#ApVendorsModule' },
    { path: 'industries', loadChildren: 'app/client-portal/ap-industries/ap-industries.module#ApIndustriesModule'}
  ]},
  { path: 'landing', loadChildren: 'app/client-portal/ap-landing/ap-landing.module#ApLandingModule'},
  // add more routes here
  // { path: '', loadChildren: }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientPortalRoutingModule { }

