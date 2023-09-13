import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlighter]'
})
export class BetterHighlighterDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  //  Host Binding to its property in th ehtml element

  @HostBinding('style.background') background: string = "transparent"
  @HostBinding('style.border') border: string = "none"

  //  Listens the DOM event and trigger an event
  @HostListener('mouseenter') mouseEnter() {
    this.background = 'pink';
    this.border = 'purple 2px solid';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.background = 'transparent';
    this.border = 'none';
  }
}
