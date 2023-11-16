import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from './model/user.model';
import {Observable, shareReplay} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]>{
    let params = new HttpParams()
              .set('search', 'blabla')
              .set('sort', 'username');


     return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users', {params: params} )
  }

  addUser(u: User): Observable<User>{
    return this.http.post<User>('https://jsonplaceholder.typicode.com/users', u)
  }


}
