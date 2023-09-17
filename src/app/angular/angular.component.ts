import { EnrollService } from './../services/enroll.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent {
  title: string = "Angular";

  constructor(private enroll: EnrollService) { }

  onEnroll() {
    const enroll = new EnrollService();
    enroll.onEnrollService(this.title);
  }
}
