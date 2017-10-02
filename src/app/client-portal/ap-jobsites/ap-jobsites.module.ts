import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApJobsitesRoutingModule } from './ap-jobsites-routing.module';
import { ApJobsitesComponent } from './ap-jobsites/ap-jobsites.component';

@NgModule({
  imports: [
    CommonModule,
    ApJobsitesRoutingModule
  ],
  declarations: [ApJobsitesComponent]
})
export class ApJobsitesModule { }
