import { Component } from '@angular/core';
import {Person} from './model/person.model';
import {User} from './model/user.model';
import {Student} from './model/student.model';

interface Counter {
  name: string,
  value: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  count!: Counter

  constructor() {

    console.log("1")
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({name: 'mycounter', value: 10});
      }, 3000);
    });

    myPromise.then(res => this.count = (res as Counter))
    console.log("3")

  }
}
