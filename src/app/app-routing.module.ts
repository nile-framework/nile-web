import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
	{ path: '', loadChildren: 'app/nile-web/nile-web.module#NileWebModule'},
	{ path: 'client-apply', loadChildren: 'app/apply-client/apply-client.module#ApplyClientModule' },
	{ path: 'admin-portal', loadChildren: 'app/admin-portal/admin-portal.module#AdminPortalModule' },
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