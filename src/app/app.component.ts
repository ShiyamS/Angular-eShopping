import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { DemoComponent } from './demo/demo.component';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';


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

  myObservable = new Observable((observer) => {
    console.log("Observer started")
    setTimeout(() => { observer.next(1) }, 1000)
    setTimeout(() => { observer.next(2) }, 2000)
    setTimeout(() => { observer.next(3) }, 3000)
    setTimeout(() => { observer.error(new Error("Someting went wrong !")) }, 3000)
    setTimeout(() => { observer.next(4) }, 4000)
    setTimeout(() => { observer.next(5) }, 5000)
    setTimeout(() => { observer.complete() }, 6000)
    // observer.next(1)
    // observer.next(2)
    // observer.next(3)
    // observer.next(4)
    // observer.next(5)
  })

  ngOnInit(): void {

    this.myObservable.subscribe((value) => {
      console.log(value);

    }, (error) => {
      alert(error.message)
    }, () => {
      alert("Observable is completed")
    })
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
