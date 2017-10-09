import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientGuard } from '../client.guard';
import { ClientPortalComponent } from './client-portal/client-portal.component';


const routes: Routes = [
  { path: '', component: ClientPortalComponent,  children: [ //REMEMBER to add this: --> canActivate: [ClientGuard],
  { path: '', loadChildren: 'app/client-portal/ap-home/ap-home.module#ApHomeModule' },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', loadChildren: 'app/client-portal/client-login/client-login.module#ClientLoginModule' },
]},
{ path: 'landing', loadChildren: 'app/admin-portal/ap-landing/ap-landing.module#ApLandingModule'},
// add more routes here
// { path: '', loadChildren: }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientPortalRoutingModule { }
 