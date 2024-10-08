import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customNgIf]',
  standalone: true,
})
export class CustomNgIf implements OnChanges {
  constructor(readonly templateRef: TemplateRef<unknown>, readonly viewContainer: ViewContainerRef) {}

  @Input({ required: true })
  customNgIf: boolean;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['customNgIf'].currentValue) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
