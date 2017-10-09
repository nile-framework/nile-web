import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import * as fromApp from '../../../reducers';

import * as app from '../../../core/store/app.actions';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent {

  client: FormGroup;
  
    constructor(
      private _fb: FormBuilder,
      private _afAuth: AngularFireAuth,
      private _afDb: AngularFireDatabase,
      private _appStore: Store<fromApp.State>
  
    ) {
      this.buildForm();
  
      // this._appStore.dispatch(new app.DisplayLoading());
    }

    ngOnInit() {}

    buildForm(): void {
      this.client = this._fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['',Validators.required],
      });
    }
    
    login() {
      const email = this.client.get('email').value;
      const password = this.client.get('password').value;
      return this._afAuth.auth.signInWithEmailAndPassword(email, password);
    }
  
    


    // Sends email allowing user to reset password
    resetPassword(email: string) {
      const fbAuth = firebase.auth();
  
      return fbAuth.sendPasswordResetEmail(email)
        .then(() => console.log('email sent'))
        .catch((error) => console.log(error))
    }

}
