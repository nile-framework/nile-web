import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-apply-client',
  templateUrl: './apply-client.component.html',
  styleUrls: ['./apply-client.component.css']
})
export class ApplyClientComponent implements OnInit {

  form: FormGroup;

  constructor(
    private _fb: FormBuilder,

  ) {
    this.buildForm();
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
      console.log('value is : ' + value);
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
      console.log('value is : ' + value);
      // NOTE: for some reason, true and false are reversed on the checkbox.
      if (value === false) {
        this.form.controls['companyEmail'].setValue(this.form.value.clientEmail);
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


  onFormSubmit(): void {
    if (this.form.invalid) {
      // form invalid, tell user
    } else {
      // The form is valid, lets process it, tell the user we processed it,
      // and then send the user somewhere else.

    }
  }

}
