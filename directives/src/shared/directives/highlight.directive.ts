import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true,
})
export class Highlight {
  private highlight(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('fuchsia');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  constructor(private elementRef: ElementRef) {}
}
