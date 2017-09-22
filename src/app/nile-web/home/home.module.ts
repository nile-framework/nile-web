import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../home/components/components.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
 