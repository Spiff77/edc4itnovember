import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../model/user.model';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit{

  myform!: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder) { // Will be used only for injection
    // We don't put anyhthing here
  }


  ngOnInit(): void {
    // Things I want to do when my component is loaded have to be done here
    //before
    this.myform = new FormGroup({
      firstname: new FormControl('Tom', Validators.required),
      age: new FormControl(0),
    })

    //after
    this.myform = this.fb.group({
      firstname: ['Tom', Validators.required],
      age: 0
    })
  }

  submitValue(){
    this.formSubmitted = true;
    console.log(this.myform.value)
  }

}
