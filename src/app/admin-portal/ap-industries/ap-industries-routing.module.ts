import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApIndustriesComponent } from './ap-industries/ap-industries.component';

const routes: Routes = [
  { path: '', component: ApIndustriesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApIndustriesRoutingModule { }
