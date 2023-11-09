import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: 'ng-empty-loop',
  template: `
    <h2>ng-empty-loop</h2>

    <ul>
      @for (item of items; track $index) {
        <li>{{item}}</li>
      } @empty {
        <li>There are no items.</li>
      }
    </ul>

    <button (click)="clearItems()">Clear items</button>
  `,
})
export class NgEmptyLoopComponent {
  protected items = ['Netfilx', 'AppleTV', 'Disney+'];

  public clearItems(): void {
    this.items = [];
  }
}