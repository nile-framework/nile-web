import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPortalGuard } from './admin-portal.guard';
import { ClientPortalGuard } from './client-portal.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AdminPortalGuard,
    ClientPortalGuard
  ]
})
export class GuardsModule { }
