import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndustriesRoutingModule } from './industries-routing.module';
import { IndustriesComponent } from './industries/industries.component';

@NgModule({
  imports: [
    CommonModule,
    IndustriesRoutingModule
  ],
  declarations: [IndustriesComponent]
})
export class IndustriesModule { }
