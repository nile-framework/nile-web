import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { eulaRoutingModule } from './eula-routing.module';
import { eulaComponent } from './eula/eula.component';

@NgModule({
  imports: [
    CommonModule,
    eulaRoutingModule
  ],
  declarations: [eulaComponent]
})
export class eulaModule { }
