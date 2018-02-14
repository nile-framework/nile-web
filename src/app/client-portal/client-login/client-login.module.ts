import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { ClientLoginRoutingModule } from './client-login-routing.module';
import { ClientLoginComponent } from './client-login/client-login.component';

import { ClientLoginCoreModule } from './client-login-core/client-login-core.module';

@NgModule({
  imports: [
    SharedModule,
    ClientLoginRoutingModule,
    ClientLoginCoreModule,
  ],
  declarations: [ClientLoginComponent]
})
export class ClientLoginModule { }
