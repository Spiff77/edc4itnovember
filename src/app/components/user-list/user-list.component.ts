import {Component, HostListener, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../model/user.model';
import {UserService} from '../../user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{


  $users!: Observable<User[]>


  constructor(private us: UserService) {
  }

  ngOnInit(): void {
    this.$users =  this.us.getAll()
  }

  @HostListener('click')
  addUser(){
    this.us.addUser({
      id: 10,
        username: 'Thomas',
        age: 10,
        address:{
        street: 'road of trees',
          city: 'Washington'
      },
      ishostedboarding: false,
        profilepicture: 'https://as1.ftcdn.net/v2/jpg/03/99/99/08/1000_F_399990881_utW0oWBpNdHhQRRIz4xYFQFtQyctLUq5.jpg'
    }).subscribe(v => console.log(v))
  }

}
