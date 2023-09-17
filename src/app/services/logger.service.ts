import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  logMessage(user: string, status: string) {
    console.log(`A new User ${user} with the status ${status} has been added !`)
  }
}
