import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  userValue: string = "";

  constructor(private UserService: UserService) { }

  sendValue() {
    this.UserService.getUserEnteredValue(this.userValue);
  }

}
