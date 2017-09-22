import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApLandingRoutingModule } from './ap-landing-routing.module';
import { ApLandingComponent } from './ap-landing/ap-landing.component';

@NgModule({
  imports: [
    CommonModule,
    ApLandingRoutingModule
  ],
  declarations: [ApLandingComponent]
})
export class ApLandingModule { }
