import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplyClientComponent } from './apply-client/apply-client.component';

const routes: Routes = [
  { path: '', component: ApplyClientComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplyClientRoutingModule { }
