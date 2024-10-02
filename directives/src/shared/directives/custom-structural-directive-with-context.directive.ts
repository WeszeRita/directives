import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

class HideAfterContext {
  public get $implicit() {
    return this.hideAfter;
  }
  public hideAfter = 0;
  public counter = 0;
}

@Directive({
  selector: '[hideAfter]',
  standalone: true,
})
export class CustomStructuralDirectiveWithContextDirective implements OnInit {
  @Input('hideAfter')
  set delay(value: number) {
    this._delay = value ?? 0;
    this.context.hideAfter =this.context.counter = this._delay / 1000;
  }

  @Input('hideAfterThen')
  placeholder: TemplateRef<any> = null;

  private context = new HideAfterContext();
  private _delay = 0;

  constructor(private viewContainerRef: ViewContainerRef, private template: TemplateRef<HideAfterContext>) {}

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.template, this.context);

    const intervalId =  setInterval(() => {
      this.context.counter--;
    }, 1000);

    setTimeout(() => {
      this.viewContainerRef.clear();
      if (this.placeholder) {
        this.viewContainerRef.createEmbeddedView(this.placeholder, this.context);
      }

      clearInterval(intervalId);
    }, this._delay);
  }
}
