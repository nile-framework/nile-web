import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplyDriverComponent } from './apply-driver/apply-driver.component';

const routes: Routes = [
  { path: '', component: ApplyDriverComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplyDriverRoutingModule { }
