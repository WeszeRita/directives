import { Component} from '@angular/core';
import { Highlight } from '../../../../shared/directives/highlight.directive';
import { HighlightWithRenderer2Directive } from '../../../../shared/directives/highlight-with-renderer2.directive';
import { UppercaseDirective } from '../../../../shared/directives/uppercase.directive';

@Component({
  selector: 'app-usage-highlight-directive',
  standalone: true,
  imports: [
    Highlight,
    HighlightWithRenderer2Directive,
    UppercaseDirective,
  ],
  templateUrl: './usage-highlight-directive.component.html',
})
export class UsageHighlightDirectiveComponent {
}
