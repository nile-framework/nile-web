import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AdminPortalGuard implements CanActivate {

  authListener = this._afAuth.authState;

  constructor(
    private _afAuth: AngularFireAuth,
    private _afDb: AngularFireDatabase,
    private _router: Router
  ) {
    
  }
// help by https://github.com/angular/angularfire2/issues/282
  canActivate(): Observable<boolean> {
    return this._afAuth.authState.take(1).map( user => {
      if (user) {
        console.log('user is : ' + user);
        return true;
      } else {
        console.log('user is false');
        this._router.navigate(['/landing']);
        return false;
      }
    })
  }




  idAdministrator(): boolean {

    return;
  }


}
