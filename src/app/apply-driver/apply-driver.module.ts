import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplyDriverRoutingModule } from './apply-driver-routing.module';
import { ApplyDriverComponent } from './apply-driver/apply-driver.component';

@NgModule({
  imports: [
    CommonModule,
    ApplyDriverRoutingModule
  ],
  declarations: [ApplyDriverComponent]
})
export class ApplyDriverModule { }
