import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApCurrentOrdersComponent } from './ap-current-orders/ap-current-orders.component';

const routes: Routes = [
  { path: '', component: ApCurrentOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApCurrentOrdersRoutingModule { }
