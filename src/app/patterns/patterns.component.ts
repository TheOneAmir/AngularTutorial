import { Component, OnInit } from '@angular/core';
import { PATTERNS } from '../mock-patterns';
import { Pattern } from '../pattern';
import { PatternDetailComponent } from '../pattern-detail/pattern-detail.component';

const newLocal = "Strategy";
@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.css']
})
export class PatternsComponent implements OnInit {
  patterns = PATTERNS;
  pattern:  Pattern = {
    id: 1,
    name: 'Strategy'
  };
  selectedPattern: Pattern;
  
  constructor() { }

  ngOnInit() {
  }

  onClick(pattern: Pattern): void {
    this.selectedPattern = pattern;
  }
}
