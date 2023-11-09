import { AsyncPipe, NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { delay, of } from "rxjs";

@Component({
  standalone: true,
  selector: 'ng-for-loop',
  template: `
    <h2>ng-for-loop</h2>

    <h3>Old style</h3>
    <ul>
      <li *ngFor="let item of streamingServices">{{item}}</li>
    </ul>

    <h3>New Style</h3>
    <ul>
      @for (item of streamingServices; track $index) {
        <li>{{item}}</li>
      }
    </ul>

    <h3>New Style with async</h3>
    <ul>
      @for (item of streamingServices$ | async; track $index) {
        <li>{{item}}</li>
      }
    </ul>

    <h3>New Style with loop vars</h3>
    <ul>
      @for (
        item of streamingServices$ | async; 
        track idx;
        let idx = $index,
        even = $even,
        odd = $odd,
        last = $last,
        first = $first
      ) {
        <li>
          {{item}}: (Idx: {{idx}}) {{first ? '(First)' : ''}} {{last ? '(Last)' : ''}} {{even ? '(Even)' : ''}} {{odd ? '(Odd)' : ''}}
        </li>
      }
    </ul>
  `,
  imports: [NgFor, AsyncPipe],
})
export class NgForLoopComponent {
  protected streamingServices = ['Netfilx', 'AppleTV', 'Disney+'];
  protected streamingServices$ = of(this.streamingServices).pipe(delay(500));
}