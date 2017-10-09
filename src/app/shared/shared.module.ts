import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  declarations: []
})
export class SharedModule { }
