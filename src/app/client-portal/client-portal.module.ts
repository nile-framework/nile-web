import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// @ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// import { clientEffects } './store/client.effects';

import { ClientPortalRoutingModule } from './client-portal-routing.module';
import { ClientPortalComponent } from './client-portal/client-portal.component';

@NgModule({
  imports: [
    CommonModule,
    ClientPortalRoutingModule,
  ],
  declarations: [
    ClientPortalComponent,
  ]
})
export class ClientPortalModule { }
