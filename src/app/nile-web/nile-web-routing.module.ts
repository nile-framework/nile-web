import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NileWebComponent } from './nile-web.component';

import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path:'', component: NileWebComponent, children: [
    { path:'', component: HomeComponent }, // the home page is not lazy loaded.
    { path: 'drive', loadChildren:'app/nile-web/drive/drive.module#DriveModule' },
    { path: 'sign-up', loadChildren: 'app/nile-web/sign-up/sign-up.module#SignUpModule' },
    { path: 'services', loadChildren:'app/nile-web/services/services.module#ServicesModule' },
    { path: 'industries', loadChildren:'app/nile-web/industries/industries.module#IndustriesModule' },
    { path: 'about', loadChildren: 'app/nile-web/about/about.module#AboutModule' },
    { path: 'contact', loadChildren: 'app/nile-web/contact/contact.module#ContactModule'},
    { path: 'privacy-policy', loadChildren: 'app/nile-web/privacy-policy/privacy-policy.module#PrivacyPolicyModule'},
    { path: 'ica', loadChildren: 'app/nile-web/independent-contractor-agreement/ica.module#icaModule' },
    { path: 'eula', loadChildren: 'app/nile-web/eula/eula.module#eulaModule' },
    { path: 'terms-of-service', loadChildren: 'app/nile-web/terms-of-service/terms-of-service.module#TermsOfServiceModule' },
    // add more paths below here
    // { path: '', loadChildren: '' }
  ]}

  // more routes here
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NileWebRoutingModule { }
