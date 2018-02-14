import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApDriversComponent } from './ap-drivers/ap-drivers.component';

const routes: Routes = [
  { path: '', component: ApDriversComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApDriversRoutingModule { }
