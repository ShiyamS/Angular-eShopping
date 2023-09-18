import { EventEmitter, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Subject } from 'rxjs';


@Injectable()
export class UserService {

  constructor(private logger: LoggerService) { }
  users = [
    { name: 'John', status: 'active' },
    { name: 'Mark', status: 'inactive' },
    { name: 'Steve', status: 'active' },
  ]

  addNewUser(name: string, status: string) {
    this.users.push({ name: name, status: status });
    this.logger.logMessage(name, status)
  }

  // userEnteredValue: EventEmitter<string> = new EventEmitter<string>();


  // getUserEnteredValue(value: string) {
  //   this.userEnteredValue.emit(value);
  // }

  // Useage of Subject
  userEnteredValue = new Subject<string>();

  getUserEnteredValue(value: string) {
    this.userEnteredValue.next(value);
  }
}
