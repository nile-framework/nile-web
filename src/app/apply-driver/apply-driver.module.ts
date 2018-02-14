import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { ApplyDriverRoutingModule } from './apply-driver-routing.module';
import { ApplyDriverComponent } from './apply-driver/apply-driver.component';

import { ApplyDriverCoreModule } from './apply-driver-core/apply-driver-core.module';

import { WizardStepComponent } from './wizard/wizard-step.component';
import { WizardComponent } from './wizard/wizard.component';

@NgModule({
  imports: [
    SharedModule,
    ApplyDriverRoutingModule,
    ApplyDriverCoreModule,
    FormsModule
  ],
  declarations: [
    ApplyDriverComponent,
    WizardStepComponent,
    WizardComponent
  ]
})
export class ApplyDriverModule { }
