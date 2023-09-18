import { UsersService } from '../services/users.service';
import { } from './../services/user.service';
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
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user!: UsersData;

  constructor(private UsersService: UsersService) { }


  ngOnInit() {
    this.UsersService.ShowUserDetail.subscribe((data) => {
      this.user = data;
    })

    console.log("Ng on init called")
  }
}
