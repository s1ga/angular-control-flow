import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <h1>Control Flow Examples</h1>

    <a routerLink="/if-else">if-else example</a>
    <a routerLink="/switch-case">switch-case example</a>
    <a routerLink="/for-loop">for-loop example</a>
    <a routerLink="/empty-loop">empty-loop example</a>
    <a routerLink="/defer">defer example</a>
  `,
  imports: [RouterLink],
})
export class HomeComponent {

}