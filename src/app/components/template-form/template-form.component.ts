import { Component } from '@angular/core';
import {User} from '../../model/user.model';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {

  formSubmitted = false;

  user:User = {
    id: 0,
    username: 'fgsdfgd',
    age: 0,
    address:{
      street: '',
      city: ''
    },
    ishostedboarding: false,
  }

  getFormData(){
    this.formSubmitted = true;
    console.log(this.user)
  }

}
