import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { icaComponent } from './independent-contractor-agreement/ica.component';

const routes: Routes = [
  { path: '', component: icaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class icaRoutingModule { }
