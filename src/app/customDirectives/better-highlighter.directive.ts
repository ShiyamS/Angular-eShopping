import { Directive, ElementRef, HostBinding, HostListener, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlighter]'
})
export class BetterHighlighterDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  //  Host Binding to its property in th ehtml element

  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlighter') setColor: string = 'pink';

  @HostBinding('style.background') background: string = this.defaultColor;
  @HostBinding('style.border') border: string = "none"

  @Input() title: string = 'This is a Title of a dive'

  ngOnInit(): void {
    this.background = this.defaultColor
  }

  //  Listens the DOM event and trigger an event
  @HostListener('mouseenter') mouseEnter() {
    this.background = this.setColor;
    this.border = 'purple 2px solid';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.background = this.defaultColor;
    this.border = 'none';
  }
}
