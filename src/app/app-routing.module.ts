import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
	{ path: '', loadChildren: 'app/nile-web/nile-web.module#NileWebModule'},
	// { path: '', redirectTo: '/admin-portal', pathMatch: 'full'},
	{ path: 'client-apply', loadChildren: 'app/apply-client/apply-client.module#ApplyClientModule' },
	{ path: 'client-portal', loadChildren: 'app/client-portal/client-portal.module#ClientPortalModule' },
	{ path: 'driver-apply', loadChildren: 'app/apply-driver/apply-driver.module#ApplyDriverModule' },
	{ path: 'admin-portal', loadChildren: 'app/admin-portal/admin-portal.module#AdminPortalModule' },
	{ path: 'ica', loadChildren: 'app/nile-web/independent-contractor-agreement/ica.module#icaModule' },
	{ path: 'eula', loadChildren: 'app/nile-web/eula/eula.module#eulaModule' },
	{ path: 'terms-of-service', loadChildren: 'app/nile-web/terms-of-use/terms-of-use.module#TermsOfUseModule' },
	// add more root routes here.
	// { path: '', loadChildren: '' }
];


@NgModule({
	imports: [
		RouterModule.forRoot(
			appRoutes,
			// {enableTracing: true} // <-- debugging purposes only
		)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}