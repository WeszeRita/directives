import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngForObject]',
  standalone: true,
})
export class CustomNgForObject implements OnChanges {
  @Input()
  ngForObject: Record<string, string>;

  constructor(private templateRef: TemplateRef<unknown>, private viewContainerRef: ViewContainerRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ngForObject']?.currentValue) {
      this.viewContainerRef.clear();

      const propertyNames = Object.keys(changes['ngForObject'].currentValue);
      propertyNames.forEach((propertyNames: string, index: number) => {
        this.viewContainerRef.createEmbeddedView(this.templateRef, {
          $implicit: propertyNames,
          index,
        });
      });
    }
  }
}
