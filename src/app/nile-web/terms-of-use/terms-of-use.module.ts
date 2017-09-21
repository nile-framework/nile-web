import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsOfUseRoutingModule } from './terms-of-use-routing.module';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';

@NgModule({
  imports: [
    CommonModule,
    TermsOfUseRoutingModule
  ],
  declarations: [TermsOfUseComponent]
})
export class TermsOfUseModule { }
