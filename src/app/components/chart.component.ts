import { Component } from '@angular/core';

@Component({
  selector: 'app-chart',
  standalone: true,
  template: `
    <div class="simple-bar-chart">
  
    <div class="item" style="--clr: #5EB344; --val: 80">
      <div class="label">Label 1</div>
      <div class="value">80%</div>
    </div>
    
    <div class="item" style="--clr: #FCB72A; --val: 50">
      <div class="label">Label 2</div>
      <div class="value">50%</div>
    </div>
    
    <div class="item" style="--clr: #F8821A; --val: 100">
      <div class="label">Label 3</div>
      <div class="value">100%</div>
    </div>
    
    <div class="item" style="--clr: #E0393E; --val: 15">
      <div class="label">Label 4</div>
      <div class="value">15%</div>
    </div>
    
    <div class="item" style="--clr: #963D97; --val: 1">
      <div class="label">Label 5</div>
      <div class="value">1%</div>
    </div>
    
    <div class="item" style="--clr: #069CDB; --val: 90">
      <div class="label">Label 6</div>
      <div class="value">90%</div>
    </div>
  </div>
  `,
  styles: `
    .simple-bar-chart{
    --line-count: 10;
    --line-color: currentcolor;
    --line-opacity: 0.25;
    --item-gap: 2%;
    --item-default-color: #060606;
    
    height: 10rem;
    display: grid;
    grid-auto-flow: column;
    gap: var(--item-gap);
    align-items: end;
    padding-inline: var(--item-gap);
    --padding-block: 1.5rem; /*space for labels*/
    padding-block: var(--padding-block);
    position: relative;
    isolation: isolate;
  }

  .simple-bar-chart::after{
    content: "";
    position: absolute;
    inset: var(--padding-block) 0;
    z-index: -1;
    --line-width: 1px;
    --line-spacing: calc(100% / var(--line-count));
    background-image: repeating-linear-gradient(to top, transparent 0 calc(var(--line-spacing) - var(--line-width)), var(--line-color) 0 var(--line-spacing));
    box-shadow: 0 var(--line-width) 0 var(--line-color);
    opacity: var(--line-opacity);
  }
  .simple-bar-chart > .item{
    height: calc(1% * var(--val));
    background-color: var(--clr, var(--item-default-color));
    position: relative;
    animation: item-height 1s ease forwards
  }
  @keyframes item-height { from { height: 0 } }

  .simple-bar-chart > .item > * { position: absolute; text-align: center }
  .simple-bar-chart > .item > .label { inset: 100% 0 auto 0 }
  .simple-bar-chart > .item > .value { inset: auto 0 100% 0 }
  `,
})
export class ChartComponent { }
