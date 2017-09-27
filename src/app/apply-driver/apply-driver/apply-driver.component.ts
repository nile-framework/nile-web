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

  form: FormGroup;

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
    this.form = this._fb.group({
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

  // 
  onFormSubmit(): void {
    if (this.form.invalid) {
      // form invalid, tell user
      
    } else {
      // The form is valid, lets process it, tell the user we processed it,
      // and then send the user somewhere else.
      console.log('everything looked valid');

      this.createUser(this.form.value.driverEmail, this.generateRandomString()).then( user => {
        // console.log('user uid is: ' + user.uid);
        // // now create the company in the database
        // this._afDb.list(`/company`).push({
        //   creator: user.uid,
        //   name: this.form.value.companyName,
        //   email: this.form.value.companyEmail,
        //   phone: this.form.value.companyPhone,
        //   state: this.form.value.state,
        //   city: this.form.value.city,
        //   deliveriesPerWeek: this.form.value.deliveriesPerWeek
        // }).then( snapshot => {
        //   console.log('snapshot.key is : ' + snapshot.key);
        //   // now add the company to the user.
        //   this._afDb.object(`/users/${user.uid}`).set({
        //     firstName: this.form.value.firstName,
        //     lastName: this.form.value.lastName,
        //     email: this.form.value.clientEmail,
        //     phone: this.form.value.clientPhone,
        //     company: snapshot.key
        //   })
        // })
      }, error => {
        console.log(error);
      })
    }
  }


  createUser(email: string, password: string): firebase.Promise<any>  {
    return this._afAuth.auth.createUserWithEmailAndPassword(email, password).then( user => {
      console.log('email is : ' + this.form.controls['driverEmail'].value);
      // now create the company in the database
      this._afDb.list(`/driver`).push({
        creator: user.uid,
        name: this.form.value.firstName,
        email: this.form.controls['driverEmail'].value,
        phone: this.form.controls['driverPhone'].value,
        city: this.form.value.city,
        zipCode: this.form.value.zipcode,
      }).then( snapshot => {
        console.log('snapshot.key is : ' + snapshot.key);
        // now add the company to the user.
        this._afDb.object(`/driver/${user.uid}`).set({
          firstName: this.form.value.firstName,
          lastName: this.form.value.lastName,
          email: this.form.value.clientEmail,
          phone: this.form.value.clientPhone,
          company: snapshot.key
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
