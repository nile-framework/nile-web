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

  form: FormGroup;

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
    this.form = this._fb.group({
      clientEmail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }}