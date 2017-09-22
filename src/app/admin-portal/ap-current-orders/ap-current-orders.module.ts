import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApCurrentOrdersRoutingModule } from './ap-current-orders-routing.module';
import { ApCurrentOrdersComponent } from './ap-current-orders/ap-current-orders.component';

@NgModule({
  imports: [
    CommonModule,
    ApCurrentOrdersRoutingModule
  ],
  declarations: [ApCurrentOrdersComponent]
})
export class ApCurrentOrdersModule { }
