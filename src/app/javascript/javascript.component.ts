import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  providers: [EnrollService]
})
export class JavascriptComponent {
  title: string = "Javascript";
  constructor(private enroll: EnrollService) { }

  onEnroll() {
    this.enroll.onEnrollService(this.title);
  }
}

