import {Component, OnInit} from '@angular/core';
import {Person} from './model/person.model';
import {User} from './model/user.model';
import {Student} from './model/student.model';
import {HttpClient} from '@angular/common/http';
import {map, mergeMap, switchMap} from 'rxjs';

interface Counter {
  name: string,
  value: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  arr = [6,7,3,4]

  count!: Counter

  ngOnInit(): void {
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts/11')
      .pipe(
        switchMap(v => {
          const post = v;
          return this.http.get<any>(`https://jsonplaceholder.typicode.com/users/${v['userId']}`)
            .pipe(map(w => {
              post['user']=w
              delete post['userId']
              return post
            }))
        } )
      ).subscribe(v => console.log("FINAL", v))
  }

  constructor(private http: HttpClient) {


    this.arr.map((sdgsdfg, index) => {
      console.log(index, sdgsdfg)
      return sdgsdfg * 10
    })


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
