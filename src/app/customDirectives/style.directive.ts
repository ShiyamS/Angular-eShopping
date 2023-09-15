import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input() set appStyle(value: object) {

    let entries = Object.entries(value);
    for (let [property, cssValue] of entries) {
      if (property) {
        this.renderer.setStyle(this.element.nativeElement, property, cssValue)
      }
    }

  }

}
