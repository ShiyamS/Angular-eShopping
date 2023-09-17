import { Component } from '@angular/core';
import { UserService } from '../services/user.service';


interface AddUser { name: string; status: string };

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {

  userName: string = '';
  status: string = 'active';



  constructor(private userService: UserService) { }

  onAddUser() {
    this.userService.addNewUser(this.userName, this.status)
  }

}
