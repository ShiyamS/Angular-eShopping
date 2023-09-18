import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
declare interface UsersData {
  name: string;
  job: string;
  gender: string;
  country: string;
  age: number;
  avatar: string;
}

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: UsersData[] = [];
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.users;
  }


  showDetails(user: UsersData) {
    this.usersService.getUserDetails(user);
  }
}
