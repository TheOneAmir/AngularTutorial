import { Injectable } from '@angular/core';
import { Pattern } from './pattern';
import { PATTERNS } from './mock-patterns';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatternService {
  getPatterns(): Observable<Pattern[]> {
    return of(PATTERNS);
  }

  constructor() { }
}
