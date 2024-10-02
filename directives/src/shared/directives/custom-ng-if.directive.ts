import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customNgIf]',
  standalone: true,
})
export class CustomNgIf implements OnChanges {
  constructor(private templateRef: TemplateRef<unknown>, private viewContainer: ViewContainerRef) {}

  @Input() customNgIf: boolean;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['customNgIf'].currentValue) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
