import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  userEnteredValue: string = "shiyam"

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.UserService.userEnteredValue.subscribe((data) => {
      this.userEnteredValue = data;
    })
  }
}
