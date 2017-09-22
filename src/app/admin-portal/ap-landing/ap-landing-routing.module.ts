import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApLandingComponent } from './ap-landing/ap-landing.component';

const routes: Routes = [
  { path: '', component: ApLandingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApLandingRoutingModule { }
