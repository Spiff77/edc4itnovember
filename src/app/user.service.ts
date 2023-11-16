import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from './model/user.model';
import {Observable, of, shareReplay} from 'rxjs';

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

  deleteRecipe(id: number): Observable<boolean>{
    return of(true);
  }

  /**
   *
   * Material dialog component (using the component way)
   *  -  in recipe detail, add a delete button. It will open the dialog box.
   *  -  if the user click on cancel, we close the dialog, nothing happen
   *  -  if yes, we call the delete service and if the answer is "true", we redirect tot the recipe list. // recipe-detail-component
   *
   */


}
