import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// ngrx
import { Store } from '@ngrx/store';

import * as fromApp from '../../../reducers';
import * as app from '../../../core/store/app.actions';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-ap-login',
  templateUrl: './ap-login.component.html',
  styleUrls: ['./ap-login.component.css']
})
export class ApLoginComponent implements OnInit {

  login: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _afAuth: AngularFireAuth,
    private _afDb: AngularFireDatabase,
    private _appStore: Store<fromApp.State>

  ) {
    this.buildForm();
    
    // this._appStore.dispatch(new app.DisplayLoading());
  }

  ngOnInit() {
  }

  buildForm(): void {
    this.login = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }}

  onFormSubmit(): void {
    if (this.login.invalid) {
      // form invalid, tell user
      
    } else {
      // The form is valid, lets process it, tell the user we processed it,
      // and then send the user somewhere else.
      console.log('everything looked valid');

      this.createUser(this.form.value.clientEmail, this.generateRandomString()).then( user => {

      }, error => {
        console.log(error);
      })
    }
  }