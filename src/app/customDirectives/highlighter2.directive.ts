import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlighter2]'
})
export class Highlighter2Directive {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input() set appHighlighter2(value: boolean) {
    if (value) {
      this.renderer.addClass(this.element.nativeElement, 'card-higlighter')
    }
  }




}
