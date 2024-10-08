import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightWithRenderer2]',
  standalone: true,
})
export class HighlightWithRenderer2Directive {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  private onMouseEnter(): void {
    this.highlight('mediumAquaMarine');
  }

  @HostListener('mouseleave')
  private onMouseLeave(): void {
    this.highlight(null);
  }

  private highlight(color: string): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', color);
  }
}
