import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApVendorsRoutingModule } from './ap-vendors-routing.module';
import { ApVendorsComponent } from './ap-vendors/ap-vendors.component';

@NgModule({
  imports: [
    CommonModule,
    ApVendorsRoutingModule
  ],
  declarations: [ApVendorsComponent]
})
export class ApVendorsModule { }
