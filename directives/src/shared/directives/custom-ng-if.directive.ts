import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomNgIf]',
  standalone: true,
})
export class CustomNgIf implements OnChanges {
  constructor(private templateRef: TemplateRef<unknown>, private viewContainer: ViewContainerRef) {}

  @Input() appCustomNgIf: boolean;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['appCustomNgIf'].currentValue) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
