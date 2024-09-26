import { Component } from '@angular/core';
import { Highlight } from '../../../../shared/directives/highlight.directive';
import { HighlightWithRenderer2Directive } from '../../../../shared/directives/highlight-with-renderer2.directive';

@Component({
  selector: 'app-usage-highlight-directive',
  standalone: true,
  imports: [
    Highlight,
    HighlightWithRenderer2Directive,
  ],
  templateUrl: './usage-highlight-directive.component.html',
})
export class UsageHighlightDirectiveComponent {

}
