import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApCitiesRoutingModule } from './ap-cities-routing.module';
import { ApCitiesComponent } from './ap-cities/ap-cities.component';

@NgModule({
  imports: [
    CommonModule,
    ApCitiesRoutingModule
  ],
  declarations: [ApCitiesComponent]
})
export class ApCitiesModule { }
