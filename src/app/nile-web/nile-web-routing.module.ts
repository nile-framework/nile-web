import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NileWebComponent } from './nile-web.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'', component: NileWebComponent, children: [
    {path:'', component: HomeComponent },
    {path: 'drive', loadChildren:'app/nile-web/drive/drive.module#DriveModule'  }

  ]}

  // more routes here
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NileWebRoutingModule { }
