import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true,
})
export class Highlight {
  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter')
  private onMouseEnter() {
    this.highlight('fuchsia');
  }

  @HostListener('mouseleave')
  private onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
}
