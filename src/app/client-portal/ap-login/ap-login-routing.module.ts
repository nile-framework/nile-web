import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApLoginComponent } from './ap-login/ap-login.component';

const routes: Routes = [
  { path: '', component: ApLoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApLoginRoutingModule { }
