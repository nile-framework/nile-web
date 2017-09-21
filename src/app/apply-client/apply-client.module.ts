import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ApplyClientRoutingModule } from './apply-client-routing.module';
import { ApplyClientComponent } from './apply-client/apply-client.component';

import { ApplyClientCoreModule } from './apply-client-core/apply-client-core.module';

@NgModule({
  imports: [
    SharedModule,
    ApplyClientRoutingModule,
    ApplyClientCoreModule
  ],
  declarations: [ApplyClientComponent]
})
export class ApplyClientModule { }
