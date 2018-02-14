import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApHomeRoutingModule } from './ap-home-routing.module';
import { ApHomeComponent } from './ap-home/ap-home.component';

@NgModule({
  imports: [
    CommonModule,
    ApHomeRoutingModule
  ],
  declarations: [ApHomeComponent]
})
export class ApHomeModule { }
