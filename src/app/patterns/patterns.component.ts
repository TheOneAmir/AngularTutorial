import { Component, OnInit } from '@angular/core';
import { PatternService } from '../pattern.service';
import { Pattern } from '../pattern';
import { PatternDetailComponent } from '../pattern-detail/pattern-detail.component';

const newLocal = "Strategy";
@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.css']
})
export class PatternsComponent implements OnInit {
  patterns: Pattern[];
  selectedPattern: Pattern;
  
  constructor(private patternService : PatternService) { 
  }

  ngOnInit() {
    this.patternService.getPatterns()
      .subscribe(patterns => this.patterns = patterns);
  }

  onClick(pattern: Pattern): void {
    this.selectedPattern = pattern;
  }
}
