import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[uppercase]',
  standalone: true,
})
export class UppercaseDirective implements OnInit {
  static elements: HTMLElement[] = [];      // static field will be accessed using dot notation (e.g. UppercaseDirective.elements)

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click')
  private onClick(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'textTransform', 'uppercase');
    UppercaseDirective.elements.forEach((child) => console.log(child.innerText));
  }

  ngOnInit(): void {
    UppercaseDirective.elements.push(this.elementRef.nativeElement);
  }
}
