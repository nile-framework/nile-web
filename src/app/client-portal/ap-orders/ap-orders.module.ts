import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApOrdersRoutingModule } from './ap-orders-routing.module';
import { ApOrdersComponent } from './ap-orders/ap-orders.component';

@NgModule({
  imports: [
    CommonModule,
    ApOrdersRoutingModule
  ],
  declarations: [ApOrdersComponent]
})
export class ApOrdersModule { }
