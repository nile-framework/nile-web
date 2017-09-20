import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NileWebNavbarComponent } from './nile-web-navbar/nile-web-navbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NileWebNavbarComponent
  ],
  exports: [
    NileWebNavbarComponent
  ]
})
export class NileWebCoreModule { }
