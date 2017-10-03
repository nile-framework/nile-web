import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApLoginRoutingModule } from './ap-login-routing.module';
import { ApLoginComponent } from './ap-login/ap-login.component';

import { ApLoginCoreModule } from './ap-login-core/ap-login-core.module';

@NgModule({
  imports: [
    CommonModule,
    ApLoginRoutingModule,
    ApLoginCoreModule
  ],
  declarations: [ApLoginComponent]
})
export class ApLoginModule { }
