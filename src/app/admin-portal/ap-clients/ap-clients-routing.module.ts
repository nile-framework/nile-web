import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApClientsComponent } from './ap-clients/ap-clients.component';

const routes: Routes = [
  { path: '', component: ApClientsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApClientsRoutingModule { }
