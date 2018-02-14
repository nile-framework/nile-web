import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriveComponent } from './drive/drive.component';

const routes: Routes = [
  {path:'', component: DriveComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriveRoutingModule { }
