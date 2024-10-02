import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-accessing-elements',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './accessing-elements.component.html',
})
export class AccessingElementsComponent implements AfterViewInit{
  @ViewChild(ChildComponent, { static: true })
  child: ChildComponent;

  @ViewChild('button', { static: true })
  buttonRef: ElementRef<HTMLButtonElement>;

  increment() {
    this.child.increment();
  }

  ngAfterViewInit() {
    if (this.buttonRef?.nativeElement) {
      this.buttonRef.nativeElement.innerText = 'asdf'
    }
  }
}
