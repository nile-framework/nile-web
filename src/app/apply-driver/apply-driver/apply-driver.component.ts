import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// ngrx
import { Store } from '@ngrx/store';

import * as fromApp from '../../reducers';
import * as app from '../../core/store/app.actions';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-apply-driver',
  templateUrl: './apply-driver.component.html',
  styleUrls: ['./apply-driver.component.css']
})
export class ApplyDriverComponent implements OnInit {

  driverForm: FormGroup;

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
    this.driverForm = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      driverPhone: ['', Validators.required],
      driverEmail: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      zipCode: ['', Validators.required],
      phonetype: ['', Validators.required],
      iphonename: ['', Validators.required],
      androidname: ['', Validators.required],
      vehicleyear: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required],
    });

  }


  onFormSubmit(): void {
    if (this.driverForm.invalid) {
      // form invalid, tell user
      
    } else {
      // The form is valid, lets process it, tell the user we processed it,
      // and then send the user somewhere else.
      console.log('everything looked valid');

      this.createUser(this.driverForm.value.driverEmail, this.generateRandomString()).then( user => {
        // console.log('user uid is: ' + user.uid);
      }, error => {
        console.log(error);
      })
    }
  }


  createUser(email: string, password: string): firebase.Promise<any>  {
    return this._afAuth.auth.createUserWithEmailAndPassword(email, password).then( user => {
      console.log('email is : ' + this.driverForm.value.driverEmail);
      // now create the vehicle in the database
      this._afDb.list(`/vehicle`).push({
        creator: user.uid,
        vehicleyear: this.driverForm.value.vehicleyear,
        make: this.driverForm.value.make,
        model: this.driverForm.value.model,
        phonetype: this.driverForm.value.phonetype,
        zipCode: this.driverForm.value.zipcode
      }).then( snapshot => {
        console.log('snapshot.key is : ' + snapshot.key);
        // now add the vehicle to the user.
        this._afDb.object(`/drivers/${user.uid}`).set({
          firstName: this.driverForm.value.firstName,
          lastName: this.driverForm.value.lastName,
          email: this.driverForm.value.driverEmail,
          phone: this.driverForm.value.driverPhone,
          vehicle: snapshot.key
        })
      })
    }, error => {
      
    })
  }

  generateRandomString(): string {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 6; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

      console.log('random string is: ' + text);

    return text;
  }

}
