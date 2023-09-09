import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';

  @ViewChild('dobInput')
  dob!: ElementRef;

  @ViewChild('ageInput') age!: ElementRef;

  calculateAge() {
    let birthYear = new Date(this.dob.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();

    let age = currentYear - birthYear;

    this.age.nativeElement.value = age;
  }
}
