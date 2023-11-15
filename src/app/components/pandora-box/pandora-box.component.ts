import {Component, OnInit} from '@angular/core';
import {Person} from '../../model/person.model';
import {Student} from '../../model/student.model';
import {User} from '../../model/user.model';
import {NameService} from '../../name.service';
import {CountService} from '../../count.service';

@Component({
  selector: 'app-pandora-box',
  templateUrl: './pandora-box.component.html',
  styleUrls: ['./pandora-box.component.scss']
})
export class PandoraBoxComponent implements OnInit{
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
    username: 'Thomas',
    age: 10,
    address:{
      street: 'road of trees',
      city: 'Washington'
    },
    ishostedboarding: false,
    profilepicture: 'https://as1.ftcdn.net/v2/jpg/03/99/99/08/1000_F_399990881_utW0oWBpNdHhQRRIz4xYFQFtQyctLUq5.jpg'
  }
  s:Student = {id: 12, firstname: 'Tom', lastname: 'Tom'}

  constructor(private ns: NameService, public cs: CountService) {}

  ngOnInit(): void {
    this.name = this.cs.title
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

  computeInputClass() {
    return {valid: this.name.length >=6, pending: this.name.length > 3 &&  this.name.length < 6, error: this.name.length <= 3}
    }


}
