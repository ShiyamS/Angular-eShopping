import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularApp';




  @ViewChild('dobInput')
  dob!: ElementRef;

  @ViewChild('ageInput') age!: ElementRef;

  // Child Comp

  @ViewChild(DemoComponent, { static: true }) demo?: DemoComponent;


  ngOnInit(): void {

  }
  calculateAge() {
    let birthYear = new Date(this.dob.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();

    let age = currentYear - birthYear;

    this.age.nativeElement.value = age;
  }

  cards = [
    { title: 'Random Title 1', cardImage: "https://picsum.photos/100/100", likes: 800 },
    { title: 'Random Title 2', cardImage: "https://picsum.photos/100/100", likes: 500 },
    { title: 'Random Title 2', cardImage: "https://picsum.photos/100/100", likes: 100 },
  ]


  mostLikedCard() {
    let copyCards = [...this.cards]
    return copyCards.sort((curr, next) => next.likes - curr.likes)[0].likes;
  }

  mostLikes = this.mostLikedCard();


}
