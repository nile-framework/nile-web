import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { icaRoutingModule } from './ica-routing.module';
import { icaComponent } from './independent-contractor-agreement/ica.component';

@NgModule({
  imports: [
    CommonModule,
    icaRoutingModule
  ],
  declarations: [icaComponent]
})
export class icaModule { }
