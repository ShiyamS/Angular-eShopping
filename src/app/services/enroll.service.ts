import { Injectable } from "@angular/core";

@Injectable()
export class EnrollService {

  onEnrollService(title: string) {
    alert(`Thank you for enrolling to ${title} course.`)
  }
}
