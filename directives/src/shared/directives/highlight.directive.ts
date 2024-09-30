import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true,
})
export class Highlight {
  private highlight(color: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', color);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('fuchsia');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
}
