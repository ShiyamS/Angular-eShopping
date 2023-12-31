import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { DemoComponent } from './demo/demo.component';
import { UserService } from './services/user.service';
import { Observable, of, from, interval, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators'


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

  // Different ways of creating an observable
  // Using the constructor method - new Observable
  // myObservable = new Observable((observer) => {
  //   console.log("Observer started")
  //   setTimeout(() => { observer.next(1) }, 1000)
  //   setTimeout(() => { observer.next(2) }, 2000)
  //   setTimeout(() => { observer.next(3) }, 3000)
  //   setTimeout(() => { observer.error(new Error("Someting went wrong !")) }, 3000)
  //   setTimeout(() => { observer.next(4) }, 4000)
  //   setTimeout(() => { observer.next(5) }, 5000)
  //   setTimeout(() => { observer.complete() }, 6000)
  //   // observer.next(1)
  //   // observer.next(2)
  //   // observer.next(3)
  //   // observer.next(4)
  //   // observer.next(5)
  // })

  // Using create method- it behavious same as the constructor  method
  // myObservable = Observable.create((observer: any) => {
  //   console.log("Observer started")
  //   setTimeout(() => { observer.next(1) }, 1000)
  //   setTimeout(() => { observer.next(2) }, 2000)
  //   setTimeout(() => { observer.next(3) }, 3000)
  //   setTimeout(() => { observer.next(4) }, 4000)
  //   setTimeout(() => { observer.error(new Error("Someting went wrong !")) }, 4000)
  //   setTimeout(() => { observer.next(5) }, 5000)
  //   setTimeout(() => { observer.complete() }, 6000)
  // })

  // Using (of) Operator - u need to import
  array1 = [1, 2, 3, 4, 5];
  array2 = ['A', 'B', 'C', 'D', 'E']
  array3 = 'String check'

  // myObservable = of(this.array1, this.array2)

  // Using (From) Operator - u nned to import it

  //  Usage of RXJS Operators
  // myObservable = from(this.array1).pipe(map((value) => {
  //   return value * 5
  // }), filter((value) => {
  //   return value >= 10
  // }))

  // transformedOperator = this.myObservable.pipe(map((value) => {
  //   return value * 5
  // }), filter((value) => {
  //   return value >= 10
  // }))

  // filteredOperator = this.transformedOperator.pipe(filter((value) => {
  //   return value >= 10
  // }))

  newObserver = interval(1000);

  observerRecorded: Subscription | undefined;
  ngOnInit(): void {

    this.observerRecorded = this.newObserver.subscribe((data) => {
      console.log(data)
    })
    // this.myObservable.subscribe((value) => {
    //   console.log(value);

    // }, (error) => {
    //   alert(error.message)
    // }, () => {
    //   alert("Observable is completed")
    // })
    // this.users = this.userService.users
  }

  unSubscribe() {
    this.observerRecorded?.unsubscribe();
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
