import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ApplyDriverRoutingModule } from './apply-driver-routing.module';
import { ApplyDriverComponent } from './apply-driver/apply-driver.component';

@NgModule({
  imports: [
    SharedModule,
    ApplyDriverRoutingModule
  ],
  declarations: [ApplyDriverComponent]
})
export class ApplyDriverModule { }
