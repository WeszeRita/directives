import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  UsageCustomNgIfComponent,
} from './pages/custom-structural-directives/usage-custom-ngIf/usage-custom-ngIf.component';
import {
  UsageCustomNgForComponent,
} from './pages/custom-structural-directives/usage-custom-ng-for/usage-custom-ng-for.component';
import {
  UsageHighlightDirectiveComponent,
} from './pages/custom-attribute-directives/usage-highlight-directive/usage-highlight-directive.component';
import {
  UsageCustomStructuralDirectiveWithContextComponent,
} from './pages/custom-structural-directives/usage-custom-structural-directive-with-context/usage-custom-structural-directive-with-context.component';
import { AccessingElementsComponent } from './pages/accessing-elements/accessing-elements/accessing-elements.component';
import { AnimalsComponent } from './pages/templateRef/animals/animals.component';
import { LionComponent } from './pages/templateRef/lion/lion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsageCustomNgIfComponent, UsageCustomNgForComponent, UsageHighlightDirectiveComponent, UsageCustomStructuralDirectiveWithContextComponent, AccessingElementsComponent, AnimalsComponent, LionComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
}
