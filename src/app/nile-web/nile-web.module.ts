import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';  // every module needs to impor the shared module

import { NileWebCoreModule } from './nile-web-core/nile-web-core.module';  // NileWeb core module, NOT the app/core module

import { NileWebRoutingModule } from './nile-web-routing.module';
import { HomeModule } from './home/home.module';
import { NileWebComponent } from './nile-web.component';


@NgModule({
  imports: [
    SharedModule,
    HomeModule,
    NileWebCoreModule,
    NileWebRoutingModule,
  ],
  declarations: [
    NileWebComponent,
  ]
})
export class NileWebModule { }
