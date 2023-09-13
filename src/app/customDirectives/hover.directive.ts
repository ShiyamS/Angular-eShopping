import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {

  }


  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.element.nativeElement, 'margin', '5px 10px')
    this.renderer.setStyle(this.element.nativeElement, 'padding', '30px 30px')
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement, 'margin', '10px 20px')
    this.renderer.setStyle(this.element.nativeElement, 'padding', '10px 20px')
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s')
  }
}
