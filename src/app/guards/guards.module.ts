import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPortalGuard } from './admin-portal.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AdminPortalGuard
  ]
})
export class GuardsModule { }
