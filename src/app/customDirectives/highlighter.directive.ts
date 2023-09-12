import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {

    // Add Style
    this.renderer.setStyle(this.element.nativeElement, 'background', 'purple')
    this.renderer.setStyle(this.element.nativeElement, 'color', 'white')

    // Add Class
    this.renderer.addClass(this.element.nativeElement, 'container')
    // Set Attribute
    this.renderer.setAttribute(this.element.nativeElement, 'title', 'random text')
  }

}
