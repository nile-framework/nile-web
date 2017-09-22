import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApHomeComponent } from './ap-home/ap-home.component';

const routes: Routes = [
  { path: '', component: ApHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApHomeRoutingModule { }
