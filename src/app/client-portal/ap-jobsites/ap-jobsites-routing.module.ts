import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApJobsitesComponent } from './ap-jobsites/ap-jobsites.component';

const routes: Routes = [
  { path: '', component: ApJobsitesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApJobsitesRoutingModule { }

