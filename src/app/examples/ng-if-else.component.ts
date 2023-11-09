import { AsyncPipe, NgIf, NgTemplateOutlet } from "@angular/common";
import { Component } from "@angular/core";
import { of } from "rxjs";

type StreamingService = 'AppleTV' | 'Netfilx';

@Component({
  standalone: true,
  selector: 'ng-if-else',
  template: `
    <h2>ng-if-else</h2>

    <h3>Old style</h3>
    <div *ngIf="streamingService === 'AppleTV'; else elseBlock">
      Ted Lasso
    </div>

    <h3>New Style</h3>
    @if (streamingService === 'AppleTV') {
      <div>Ted Lasso</div>
    } @else {
      <ng-container [ngTemplateOutlet]="elseBlock" />
    }

    <button (click)="changeToNetflix()">Netflix</button>
    <button (click)="changeToApple()">AppleTV</button>
 
    <ng-template #elseBlock>
      <div>
        Peaky Blinders
      </div>
    </ng-template>

    <h3>New style aliasing</h3>
    @if (list$ | async; as list) {
      <div>List length: {{list.length}}</div>
    }
  `,
  imports: [NgIf, NgTemplateOutlet, AsyncPipe],
})
export class NgIfElseComponent {
  protected streamingService: StreamingService = 'AppleTV';
  protected list$ = of([]);

  public changeToNetflix(): void {
    this.streamingService = 'Netfilx';
  }

  public changeToApple(): void {
    this.streamingService = 'AppleTV';
  }
}