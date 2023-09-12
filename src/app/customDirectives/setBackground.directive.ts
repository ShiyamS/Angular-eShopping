import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({ selector: '[setBackground]' })

export class SetBackgroundDirective implements OnInit {

  // Approach 1, which is not recommended
  // constructor(element: ElementRef) {
  //   element.nativeElement.style.background = "red"
  // }

  // Approach 2 , recommended
  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {
    this.element.nativeElement.style.background = "yellow"
  }



}

