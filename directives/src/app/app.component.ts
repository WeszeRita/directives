import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsageCustomNgIfComponent } from './pages/custom-structural-directives/usage-custom-ngIf/usage-custom-ngIf.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsageCustomNgIfComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
