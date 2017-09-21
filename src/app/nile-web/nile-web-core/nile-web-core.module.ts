import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NileWebNavbarComponent } from './nile-web-navbar/nile-web-navbar.component';
import { NileWebFooterComponent } from './nile-web-footer/nile-web-footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NileWebNavbarComponent,
    NileWebFooterComponent
  ],
  exports: [
    NileWebNavbarComponent
  ]
})
export class NileWebCoreModule { }
