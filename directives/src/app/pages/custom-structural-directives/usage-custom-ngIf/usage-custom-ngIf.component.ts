import { Component } from '@angular/core';
import { CustomNgIf } from '../../../../shared/directives/custom-ng-if.directive';

@Component({
  selector: 'app-usage-custom-ng-if',
  standalone: true,
  imports: [CustomNgIf],
  templateUrl: './usage-custom-ngIf.component.html',
})
export class UsageCustomNgIfComponent {
  condition = true;

  setCondition() {
    this.condition = !this.condition;
  }
}
