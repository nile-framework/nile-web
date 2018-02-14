// TODO: we need to ass an async validator to the clientEmail
  // The async validator needs to check the database for the client email list, to make sure
  // this email is not already connected to another account.

// TODO: add the user creation process to cloud functions.


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
  selector: 'app-apply-client',
  templateUrl: './apply-client.component.html',
  styleUrls: ['./apply-client.component.css']
})
export class ApplyClientComponent implements OnInit {

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
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      clientPhone: ['', Validators.required],
      clientEmail: ['', [Validators.required, Validators.email]],
      companyName: ['', Validators.required],
      companyEmail: ['', [Validators.email, Validators.required]],
      companyPhone: ['', Validators.required],
      state: ['Texas', Validators.required],
      city: ['', Validators.required],
      deliveriesPerWeek: ['', Validators.required],
      usePersonalPhone: [false],
      usePersonalEmail: [false]
    });

    // TODO: FIX THIS BUG BUG BUG
    // there is a bug in the section below, for some the first two controls need to do the primary
    // check against the value being false, BUT then the other two contols need to check for true.

    this.form.controls['usePersonalPhone'].statusChanges.subscribe( status => {
      let value = this.form.value.usePersonalPhone;
      // console.log('value is : ' + value);
      // for some reason, true and false are reversed on the checkbox.
      if (value === false) {
        this.form.controls['companyPhone'].setValue(this.form.value.clientPhone);
        this.form.controls['companyPhone'].disable();
      } else {
        this.form.controls['companyPhone'].enable();
        this.form.controls['companyPhone'].setValue('');
      }
    });
    this.form.controls['usePersonalEmail'].statusChanges.subscribe( status => {
      let value = this.form.value.usePersonalEmail;
      // console.log('value is : ' + value);
      // NOTE: for some reason, true and false are reversed on the checkbox.
      if (value === false) {
        this.form.controls['companyEmail'].setValue(this.form.value.clientEmail);
        console.log('company email is: ' + this.form.value.companyEmail);
        this.form.controls['companyEmail'].disable();
      } else {
        this.form.controls['companyEmail'].enable();
        this.form.controls['companyEmail'].setValue('');
      }
    });

    // we also need to subscribe to the value changes of the clientPhone and clientEmail.
    // if the user has selected to use their personal email or phone number for the company
    // email/phone, then we also need to update the company phone/email value
    this.form.controls['clientPhone'].statusChanges.subscribe( _ => {
      // NOTE: for some reason, the checkbox is emitting true when not click and false when clicked
      if (this.form.controls['usePersonalPhone'].value === true) {
        this.form.controls['companyPhone'].setValue(this.form.controls['clientPhone'].value);
      } else {
        return;
      }
    })
    this.form.controls['clientEmail'].statusChanges.subscribe( _ => {
      // NOTE: for some reason, the checkbox is emitting true when not click and false when clicked
      if (this.form.controls['usePersonalEmail'].value === true) {
        this.form.controls['companyEmail'].setValue(this.form.controls['clientEmail'].value);
      } else {
        return;
      }
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

      this.createUser(this.form.value.clientEmail, this.generateRandomString()).then( user => {
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
      console.log('company email is : ' + this.form.controls['companyEmail'].value);
      // now create the company in the database
      this._afDb.list(`/company`).push({
        creator: user.uid,
        name: this.form.value.companyName,
        email: this.form.controls['companyEmail'].value,
        phone: this.form.controls['companyPhone'].value,
        state: this.form.value.state,
        city: this.form.value.city,
        deliveriesPerWeek: this.form.value.deliveriesPerWeek
      }).then( snapshot => {
        console.log('snapshot.key is : ' + snapshot.key);
        // now add the company to the user.
        this._afDb.object(`/users/${user.uid}`).set({
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
