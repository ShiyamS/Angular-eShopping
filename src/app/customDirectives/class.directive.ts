import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  // Scenario 1
  // @Input('appClass') set display(value: object) {
  //   let entries = Object.entries(value);
  //   for (let [className, condition] of entries) {
  //     if (condition) {
  //       this.renderer.addClass(this.element.nativeElement, className)
  //     }
  //   }
  // }

  // Scenario 2
  @Input() set appClass(value: object) {
    let entries = Object.entries(value);
    for (let [className, condition] of entries) {
      if (condition) {
        this.renderer.addClass(this.element.nativeElement, className)
      }
    }
  }

}
