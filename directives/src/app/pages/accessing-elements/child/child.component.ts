import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.component.html',
})
export class ChildComponent {
  count = 0;

  increment() {
    this.count++;
  }
}
