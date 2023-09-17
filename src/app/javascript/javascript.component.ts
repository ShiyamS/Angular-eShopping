import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent {
  title: string = "Javascript";

  onEnroll() {
    const enroll = new EnrollService();
    enroll.onEnrollService(this.title);
  }
}

