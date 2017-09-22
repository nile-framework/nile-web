// angular
import { Injectable } from '@angular/core';

// ngrx
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';

// RxJs
import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/exhaustMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/take';

import { CoreService } from '../core.service';
import * as App from './app.actions';


@Injectable()
export class AppEffects {

	@Effect({dispatch: false})
	displayLoading$ = this._actions$
		.ofType(App.DISPLAY_LOADING)
		.do( _ => {
			console.log('hellllllo thereere');
			this._coreService.displayLoadingDialog();
		});

	@Effect({dispatch: false})
	hideLoading$ = this._actions$
		.ofType(App.HIDE_LOADING)
		.do( _ => {
			this._coreService.closeDialog();
		});


	constructor(
		private _coreService: CoreService,
		private _actions$ : Actions
	) {

	}
}