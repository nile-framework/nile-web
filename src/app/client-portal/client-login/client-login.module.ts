import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientLoginRoutingModule } from './client-login-routing.module';
import { ClientLoginComponent } from './client-login/client-login.component';

@NgModule({
  imports: [
    CommonModule,
    ClientLoginModule
  ],
  declarations: [ClientLoginComponent]
})
export class ClientLoginModule { }