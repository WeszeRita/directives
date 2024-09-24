import { Component } from '@angular/core';
import { CustomNgIfDirective } from '../../../../shared/directives/custom-ng-if.directive';

@Component({
  selector: 'app-usage-custom-ng-if',
  standalone: true,
  imports: [
    CustomNgIfDirective,
  ],
  templateUrl: './usage-custom-ngIf.component.html',
  styleUrl: './usage-custom-ngIf.component.css'
})
export class UsageCustomNgIfComponent {
  condition = true;

  setCondition() {
    this.condition = !this.condition;
  }
}
