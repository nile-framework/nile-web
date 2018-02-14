import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// ngrx
// import { Store } from '@ngrx/store';

// import * as fromApp from '../../reducers';
// import * as app from '../../core/store/app.actions';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-apply-driver',
  templateUrl: './apply-driver.component.html',
  styleUrls: ['./apply-driver.component.css']
})
export class ApplyDriverComponent implements OnInit {

  isCompleted: boolean;

  formPersonal: FormGroup;
  formPhone: FormGroup;
  formVehicle: FormGroup;
  formAvailability: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _afAuth: AngularFireAuth,
    private _afDb: AngularFireDatabase,
    // private _appStore: Store<fromApp.State>

  ) {
    this.buildForm();

    // this._appStore.dispatch(new app.DisplayLoading());
  }

  ngOnInit() {
  }

  buildForm(): void {
    this.formPersonal = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      driverPhone: ['', Validators.required],
      driverEmail: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      zipCode: ['', Validators.required],
    });

    this.formPhone = this._fb.group({
      phonetype: ['', Validators.required],
      iphonename: ['', Validators.required],
      androidname: ['', Validators.required],
    });

    this.formVehicle = this._fb.group({
      vehicleyear: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required],
    });

    this.formAvailability = this._fb.group({
      fullTimeJob: ['', Validators.required],
      driveTimeMorning: ['', Validators.required],
      driveTimeMidDay: ['', Validators.required],
      driveTimeAfternoon: ['', Validators.required],
      startDate: ['', Validators.required],
      whyNile: ['', Validators.required],
      agreeNile: ['', Validators.required]
    });
  }

  onStepPersonalNext() {
    console.log(this.formPersonal.value);
    console.log(this.formPersonal.valid);
  }

  onPhoneNext() {
    console.log(this.formPhone.value);
  }

  onStepVehicleNext() {
    console.log(this.formVehicle.value);
  }

  onStepAvailabilityNext() {
    console.log(this.formAvailability.value);
  }

  valid() {
    return  this.formPersonal.valid && this.formPhone.valid &&
            this.formVehicle.valid && this.formAvailability.valid;
  }

  onFormSubmit(): void {
    if (this.formPersonal.invalid) {
      // form invalid, tell user
      console.log('something looked invalid');
    } else {
      // The form is valid, lets process it, tell the user we processed it,
      // and then send the user somewhere else.
      console.log('everything looked valid');

      this.createUser(this.formPersonal.value.driverEmail, this.generateRandomString()).then( user => {
      }, error => {
        console.log(error);
      });
    }
  }


  createUser(email: string, password: string): firebase.Promise<any>  {
    return this._afAuth.auth.createUserWithEmailAndPassword(email, password).then( user => {
      console.log('email is : ' + this.formPersonal.value.driverEmail);
      // now create the company in the database
      this._afDb.list(`/driver`).push({
        creator: user.uid,
        email: this.formPersonal.value.driverEmail,
        phone: this.formPersonal.value.driverPhone,
        city: this.formPersonal.value.city,
        zipCode: this.formPersonal.value.zipcode,
      }).then( snapshot => {
        console.log('snapshot.key is : ' + snapshot.key);
        // now add the company to the user.
        this._afDb.object(`/driver/${user.uid}`).set({
          firstName: this.formPersonal.value.firstName,
          lastName: this.formPersonal.value.lastName,
          email: this.formPersonal.value.driverEmail,
          phone: this.formPersonal.value.driverPhone,
          company: snapshot.key
        });

        this.isCompleted = true;
      });
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
