import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// @ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// import { AdminEffects } './store/admin.effects';

import { AdminPortalRoutingModule } from './admin-portal-routing.module';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';

@NgModule({
  imports: [
    CommonModule,
    AdminPortalRoutingModule
  ],
  declarations: [
    AdminPortalComponent,
  ]
})
export class AdminPortalModule { }
