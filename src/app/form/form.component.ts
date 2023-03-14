import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{
  constructor(private formBuilder: FormBuilder) { }
  formForm = this.formBuilder.group({
    personalDetails: new FormGroup({
      fname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      tel: new FormControl(null, Validators.required),
    }),
    gender: new FormControl('other', Validators.required),
  })

  onSubmit() {
    console.warn(this.formForm.value);
  }
}
