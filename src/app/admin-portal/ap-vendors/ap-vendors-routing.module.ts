import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApVendorsComponent } from './ap-vendors/ap-vendors.component';

const routes: Routes = [
  { path: '', component: ApVendorsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApVendorsRoutingModule { }
