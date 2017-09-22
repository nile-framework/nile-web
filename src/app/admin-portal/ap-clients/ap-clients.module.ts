import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApClientsRoutingModule } from './ap-clients-routing.module';
import { ApClientsComponent } from './ap-clients/ap-clients.component';

@NgModule({
  imports: [
    CommonModule,
    ApClientsRoutingModule
  ],
  declarations: [ApClientsComponent]
})
export class ApClientsModule { }
