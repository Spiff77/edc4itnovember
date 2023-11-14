import { Component } from '@angular/core';
import {User} from '../model/user.model';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {

  formSubmitted = false;

  user:User = {
    id: 0,
    firstname: 'fgsdfgd',
    age: 0,
    address:{
      streetname: '',
      city: ''
    },
    ishostedboarding: false,
  }

  getFormData(){
    this.formSubmitted = true;
    console.log(this.user)
  }

}
