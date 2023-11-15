import { Component } from "@angular/core";
import { ChartComponent } from "../components/chart.component";
import { delay, map, of, timer } from "rxjs";
import { AsyncPipe } from "@angular/common";

@Component({
  standalone: true,
  selector: 'ng-defer',
  template: `
    <h2>ng-defer</h2>

    <section>
      <h3>Defer on idle (immediate)</h3>
      @defer (on idle) {
        <app-chart />
      } @loading(after 2ms; minimum 2s) {
        <p>Loading block with after 2ms and min 2s</p>
      } @placeholder {
        <p>Placeholder</p>
      } @error {
        <p class="text-red-500">Something went wrong...<p>
      }
    </section>

    <section>
      <h3>Defer on hover (placeholder or specified target)</h3>
      @defer (on hover) {
        <app-chart />
      } @placeholder (minimum 1s) {
        <p>Placeholder with minimum 1s</p>
      } @error {
        <p class="text-red-500">Something went wrong...<p>
      }
    </section>

    <section>
      <h3>Defer on imperative condition (when statement) with prefetch</h3>
      @defer (when condition$ | async; prefetch on timer(500)) {
        <app-chart />
      } @placeholder {
        <p>Waiting for condition to be true</p>
      } @error {
        <p class="text-red-500">Something went wrong...<p>
      }
    </section>
  `,
  imports: [ChartComponent, AsyncPipe],
})
export class NgDeferComponent {
  protected condition$ = of(true).pipe(delay(3000));
}