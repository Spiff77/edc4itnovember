import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators} from '@angular/forms';
import {User} from '../model/user.model';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit{

  myform!: FormGroup;
  formSubmitted = false;

  constructor(private fb: NonNullableFormBuilder) { // Will be used only for injection
    // We don't put anyhthing here
  }

// add this route: add-reactive
  ngOnInit(): void {
    // Things I want to do when my component is loaded have to be done here
    this.myform = this.fb.group({
      id: 0,
      firstname: ['Tom', [Validators.required, Validators.minLength(3)]],
      age: 0,
      address: this.fb.group({
        id:0,
        streetname: '',
        streetnumber:''
      })
    })
  }

  submitValue(){
    this.formSubmitted = true;
    console.log(this.myform.value)
  }

}
