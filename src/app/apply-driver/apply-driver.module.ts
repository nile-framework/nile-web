import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ApplyDriverRoutingModule } from './apply-driver-routing.module';
import { ApplyDriverComponent } from './apply-driver/apply-driver.component';

import { ApplyDriverCoreModule } from './apply-driver-core/apply-driver-core.module';

@NgModule({
  imports: [
    SharedModule,
    ApplyDriverRoutingModule,
    ApplyDriverCoreModule
  ],
  declarations: [ApplyDriverComponent]
})
export class ApplyDriverModule { }
