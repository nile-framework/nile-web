import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingFormComponent } from './landing-form/landing-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LandingFormComponent
  ],
  exports: [
    LandingFormComponent
  ],
})
export class ComponentsModule { }
