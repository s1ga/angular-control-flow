import { Routes } from '@angular/router';
import { NgIfElseComponent } from './examples/ng-if-else.component';
import { NgSwitchCaseComponent } from './examples/ng-switch-case.component';
import { NgForLoopComponent } from './examples/ng-for-loop.component';
import { NgEmptyLoopComponent } from './examples/empty-block.component';
import { NgDeferComponent } from './examples/defer.component';
import { HomeComponent } from './components/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'if-else',
    component: NgIfElseComponent,
  },
  {
    path: 'switch-case',
    component: NgSwitchCaseComponent,
  },
  {
    path: 'for-loop',
    component: NgForLoopComponent,
  },
  {
    path: 'empty-loop',
    component: NgEmptyLoopComponent,
  },
  {
    path: 'defer',
    component: NgDeferComponent,
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  }
];
