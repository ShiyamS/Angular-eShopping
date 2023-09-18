import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { DemoComponent } from './demo/demo.component';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // title = 'AngularApp';




  // @ViewChild('dobInput')
  // dob!: ElementRef;

  // @ViewChild('ageInput') age!: ElementRef;

  // // Child Comp

  // @ViewChild(DemoComponent, { static: true }) demo?: DemoComponent;

  // constructor(private userService: UserService) {

  // }

  ngOnInit(): void {
    // this.users = this.userService.users
  }
  // calculateAge() {
  //   let birthYear = new Date(this.dob.nativeElement.value).getFullYear();
  //   let currentYear = new Date().getFullYear();

  //   let age = currentYear - birthYear;

  //   this.age.nativeElement.value = age;
  // }

  // cards = [
  //   { title: 'Random Title 1', cardImage: "https://picsum.photos/100/100", likes: 800 },
  //   { title: 'Random Title 2', cardImage: "https://picsum.photos/100/100", likes: 500 },
  //   { title: 'Random Title 2', cardImage: "https://picsum.photos/100/100", likes: 100 },
  // ]


  // mostLikedCard() {
  //   let copyCards = [...this.cards]
  //   return copyCards.sort((curr, next) => next.likes - curr.likes)[0].likes;
  // }

  // mostLikes = this.mostLikedCard();

  // // Based on condition we are setting the background color
  // active: boolean = false

  // displayNotify: boolean = false;

  // notifyMe() {
  //   this.displayNotify = true;
  // }

  // userValue: string = ''

  // getValue(value: string) {
  //   this.userValue = value;
  //   console.log(value);
  // }

  // // Data Serive

  // users: { name: string, status: string }[] = [];


}
