import { Component, Input, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-animals',
  standalone: true,
  imports: [
    NgTemplateOutlet,
  ],
  templateUrl: './animals.component.html',
})
export class AnimalsComponent {
  @Input()
  template: TemplateRef<any>
}
