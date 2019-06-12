import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PatternsComponent } from './patterns/patterns.component';
import { PatternDetailComponent } from './pattern-detail/pattern-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PatternsComponent,
    PatternDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }