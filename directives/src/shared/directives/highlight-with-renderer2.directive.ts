import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightWithRenderer2]',
  standalone: true
})
export class HighlightWithRenderer2Directive {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'lightCyan');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', null)
  }
}
