import { Component } from '@angular/core';
import {Person} from '../model/person.model';
import {Student} from '../model/student.model';
import {User} from '../model/user.model';

@Component({
  selector: 'app-pandora-box',
  templateUrl: './pandora-box.component.html',
  styleUrls: ['./pandora-box.component.scss']
})
export class PandoraBoxComponent {
  firstName = 'Thomas'

  p = new Person('Thomas', 38)

  students: Student[] = [
    {id: 1, firstname: 'Bob', lastname: 'Dilan'},
    {id: 2, firstname: 'Bob', lastname: 'Marley'},
    {id: 3, firstname: 'Bob', lastname: 'Bob'},
  ]
  addAndFetch(){
  }

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
