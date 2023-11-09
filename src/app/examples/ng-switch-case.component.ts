import { NgSwitch, NgSwitchCase, NgSwitchDefault } from "@angular/common";
import { Component } from "@angular/core";

type StreamingService = 'AppleTV' | 'Netfilx' | 'Disney+' | undefined;

@Component({
  standalone: true,
  selector: 'ng-switch-case',
  template: `
    <h2>ng-switch-case</h2>

    <h3>Old style</h3>
    <div [ngSwitch]="streamingService">
      <div *ngSwitchCase="'AppleTV'">Ted Lasso</div>
      <div *ngSwitchCase="'Disney+'">Mandalorian</div>
      <div *ngSwitchDefault>Peaky Blinders</div>
    </div>

    <h3>New Style</h3>
    @switch (streamingService) {
      @case ('AppleTV') {
        <div>Ted Lasso</div>
      }
      @case ('Disney+') {
        <div>Mandalorian</div>
      }
      @default {
        <div>Peaky Blinders</div>
      }
    }

    <button (click)="changeToNetflix()">Netflix</button>
    <button (click)="changeToApple()">AppleTV</button>
    <button (click)="changeToDisney()">Disney+</button>
  `,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
})
export class NgSwitchCaseComponent {
  protected streamingService: StreamingService;

  public changeToNetflix(): void {
    this.streamingService = 'Netfilx';
  }

  public changeToApple(): void {
    this.streamingService = 'AppleTV';
  }

  public changeToDisney(): void {
    this.streamingService = 'Disney+';
  }
}