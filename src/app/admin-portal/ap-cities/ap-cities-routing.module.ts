import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApCitiesComponent } from './ap-cities/ap-cities.component';

const routes: Routes = [
  { path: '', component: ApCitiesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApCitiesRoutingModule { }
