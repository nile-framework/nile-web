import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplyClientRoutingModule } from './apply-client-routing.module';
import { ApplyClientComponent } from './apply-client/apply-client.component';

@NgModule({
  imports: [
    CommonModule,
    ApplyClientRoutingModule
  ],
  declarations: [ApplyClientComponent]
})
export class ApplyClientModule { }
