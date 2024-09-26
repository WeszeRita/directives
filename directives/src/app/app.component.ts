import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsageCustomNgIfComponent } from './pages/custom-structural-directives/usage-custom-ngIf/usage-custom-ngIf.component';
import {
  UsageCustomNgForComponent
} from './pages/custom-structural-directives/usage-custom-ng-for/usage-custom-ng-for.component';
import {
  UsageHighlightDirectiveComponent
} from './pages/custom-attribute-directives/usage-highlight-directive/usage-highlight-directive.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsageCustomNgIfComponent, UsageCustomNgForComponent, UsageHighlightDirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
