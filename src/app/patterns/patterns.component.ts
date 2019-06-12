import { Component, OnInit } from '@angular/core';
import { Pattern } from '../pattern';

const newLocal = "Strategy";
@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.css']
})
export class PatternsComponent implements OnInit {
  pattern:  Pattern = {
    id: 1,
    name: 'Strategy'
  };
  
  constructor() { }

  ngOnInit() {
  }

}
