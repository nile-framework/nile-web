import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApDriversRoutingModule } from './ap-drivers-routing.module';
import { ApDriversComponent } from './ap-drivers/ap-drivers.component';

@NgModule({
  imports: [
    CommonModule,
    ApDriversRoutingModule
  ],
  declarations: [ApDriversComponent]
})
export class ApDriversModule { }
