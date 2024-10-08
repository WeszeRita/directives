import { Component } from '@angular/core';
import { CustomNgForObject } from '../../../../shared/directives/custom-ng-for.directive';
import { MyNgFor } from '../../../../shared/directives/custom-ng-for-with-track-by.directive';

@Component({
  selector: 'app-usage-custom-ng-for',
  standalone: true,
  imports: [
    CustomNgForObject,
    CustomNgForObject,
    MyNgFor,
  ],
  templateUrl: './usage-custom-ng-for.component.html',
})
export class UsageCustomNgForComponent {
  greenyPlants = ['🌱', '🌿', '🍀', '🌳', '🌵'];
  greenyPlantsWithNames = {
    'tree': '🌳',
    'cactus': '🌵',
    'clover': '🍀',
  };
}
