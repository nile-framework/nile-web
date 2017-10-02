import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { clientGuard } from '../client.guard';
import { clientPortalComponent } from './client-portal/client-portal.component';

 
const routes: Routes = [
  { path: '', component: clientPortalComponent,  children: [ //REMEMBER to add this: --> canActivate: [clientGuard],
    { path: '', loadChildren: 'app/client-portal/ap-home/ap-home.module#ApHomeModule' },
    { path: 'jobsites', loadChildren: 'app/client-portal/ap-jobsites/ap-jobsites.module#ApJobsitesModule'},
    { path: 'orders', loadChildren: 'app/client-portal/ap-orders/ap-orders.module#ApOrdersModule'},
    { path: 'vendors', loadChildren: 'app/client-portal/ap-vendors/ap-vendors.module#ApVendorsModule'},
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

