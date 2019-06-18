import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { PatternsComponent } from './patterns/patterns.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatternDetailComponent } from './pattern-detail/pattern-detail.component';

const routes: Routes = [
  { path: 'patterns', component: PatternsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo:'/dashboard', pathMatch: 'full'},
  { path: 'detail/:id', component: PatternDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
