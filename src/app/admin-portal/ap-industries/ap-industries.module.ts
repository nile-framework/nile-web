import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { ApIndustriesRoutingModule } from './ap-industries-routing.module';
import { ApIndustriesComponent } from './ap-industries/ap-industries.component';


@NgModule({
  imports: [
    SharedModule,
    // CommonModule,
    ApIndustriesRoutingModule
  ],
  declarations: [
    ApIndustriesComponent,
    
  ]
})
export class ApIndustriesModule { }
