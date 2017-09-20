import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriveRoutingModule } from './drive-routing.module';
import { DriveComponent } from './drive.component';

@NgModule({
  imports: [
    CommonModule,
    DriveRoutingModule
  ],
  declarations: [DriveComponent]
})
export class DriveModule { }
