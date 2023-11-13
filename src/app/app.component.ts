import { Component } from '@angular/core';
import {Person} from './model/person.model';
import {User} from './model/user.model';
import {Student} from './model/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  firstName = 'Thomas'

  p = new Person('Thomas', 38)

  students: Student[] = [
    {id: 1, firstname: 'Bob', lastname: 'Dilan'},
    {id: 2, firstname: 'Bob', lastname: 'Marley'},
    {id: 3, firstname: 'Bob', lastname: 'Bob'},
  ]

  name= 'toto'

  user:User = {
    id: 10,
    firstname: 'Thomas',
    age: 10,
    address:{
      streetname: 'road of trees',
      city: 'Washington'
    },
    ishostedboarding: false,
    profilepicture: 'https://as1.ftcdn.net/v2/jpg/03/99/99/08/1000_F_399990881_utW0oWBpNdHhQRRIz4xYFQFtQyctLUq5.jpg'
  }
  s:Student = {id: 12, firstname: 'Tom', lastname: 'Tom'}

  constructor() {

    console.log(this.p.firstname)
  }

  addAndFetch(){
    this.students = [
      {id: 1, firstname: 'Bob', lastname: 'Dilan'},
      {id: 2, firstname: 'Bob', lastname: 'Marley'},
      {id: 3, firstname: 'Bob', lastname: 'Bob'},
      {id: 4, firstname: 'Jack', lastname: 'Daniel'},
    ]
  }

  isAdult(): boolean{
    return this.user.age >= 18
  }

  changeCityName() {
    if(this.user.address){
       this.user.address['city'] = 'Richmond'
    }
  }

  showMeTheValue(value: string) {
    console.log(value)
  }

  trackByStudentId(index: number, student: Student): number{
    return student.id
  }
}

/*
 * Create a first project using "ng new sandbox"
 * Run the server using "ng serve"
 *
 * Step 1
 *   In app.component.html. we want to display your name stored in a variable called "myname" in the app.component.ts file
 *   Check that it works!
 *
 * Step 2
 *   Add in input that can modify this name, it has to be reflected everywhere (ngModel)
 */
