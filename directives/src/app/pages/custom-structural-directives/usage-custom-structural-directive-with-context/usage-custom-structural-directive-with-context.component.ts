import { Component } from '@angular/core';
import {
  CustomStructuralDirectiveWithContextDirective
} from '../../../../shared/directives/custom-structural-directive-with-context.directive';

@Component({
  selector: 'app-usage-custom-structural-directive-with-context',
  standalone: true,
  imports: [
    CustomStructuralDirectiveWithContextDirective,
  ],
  templateUrl: './usage-custom-structural-directive-with-context.component.html',
})
export class UsageCustomStructuralDirectiveWithContextComponent {}
