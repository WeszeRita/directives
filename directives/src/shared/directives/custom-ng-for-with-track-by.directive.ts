import {
  Directive,
  DoCheck, EmbeddedViewRef,
  Input,
  IterableChangeRecord,
  IterableDiffer,
  IterableDiffers,
  NgIterable, OnChanges, SimpleChanges,
  TemplateRef,
  TrackByFunction,
  ViewContainerRef, ViewRef,
} from '@angular/core';

@Directive({
  selector: '[myNgFor][myNgForOf]',
  standalone: true,
})
export class MyNgFor<T, U extends NgIterable<T> = NgIterable<T>> implements DoCheck, OnChanges {
  // https://kurtwanger40.medium.com/build-your-own-ngfor-in-angular-2e06d2101f50
  private _myNgFor: NgIterable<T> = null;
  private differ: IterableDiffer<T> = null;
  private _trackByFn: TrackByFunction<T>;

  @Input()
  myNgForTrackBy: TrackByFunction<T>

  @Input()
  myNgForOf: NgIterable<T>

  constructor(private viewRef: ViewContainerRef, private templateRef: TemplateRef<any>, private differs: IterableDiffers) {}

  ngOnChanges(changes:SimpleChanges): void {
    this._trackByFn = this.myNgForTrackBy;
    this._myNgFor = this.myNgForOf;
  }

  ngDoCheck(): void {
    const viewRef = this.viewRef;
    const value = this._myNgFor;
    if (!value) return;
    if (!this.differ) {
      this.differ = this.differs.find(value).create(this._trackByFn);
    }

    if (this.differ) {
      const changes = this.differ.diff(this._myNgFor);
      if (!changes) return;

      changes.forEachAddedItem((record: IterableChangeRecord<T>) => {
        viewRef.createEmbeddedView(this.templateRef, {
          $implicit: record.item,
          even: -1,
          odd: -1,
          index: -1,
          first: -1,
          last: -1,
          count: 0,
        });
      });

      changes.forEachMovedItem((record: IterableChangeRecord<T>) => {
        const viewRefItem = viewRef.get(record.previousIndex as number);
        viewRef.move(viewRefItem as ViewRef, record.currentIndex as number);
      });
      changes.forEachRemovedItem((record: IterableChangeRecord<T>) => {
        viewRef.remove(record.previousIndex as number);
      });
      for (let index = 0; index < this.viewRef.length; index++) {
        const item = this.viewRef.get(index) as EmbeddedViewRef<any>;
        const context = item.context;
        context.index = index;
        context.even = index % 2 === 0;
        context.odd = !context.even;
        context.first = index === 0;
        context.last = index === this.viewRef.length - 1;
        context.count = this.viewRef.length;
      }
      changes.forEachIdentityChange((record: IterableChangeRecord<T>) => {
        const view = viewRef.get(record.currentIndex as number) as EmbeddedViewRef<any>;

        view.context.$implicit = record.item;
      });
    }
  }
}
