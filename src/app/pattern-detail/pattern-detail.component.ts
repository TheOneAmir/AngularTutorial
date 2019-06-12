import { Component, OnInit, Input } from '@angular/core';
import { Pattern } from '../pattern';

@Component({
  selector: 'app-pattern-detail',
  templateUrl: './pattern-detail.component.html',
  styleUrls: ['./pattern-detail.component.css']
})
export class PatternDetailComponent implements OnInit {
  @Input() pattern: Pattern;
  
  constructor() { }

  ngOnInit() {
  }

}
