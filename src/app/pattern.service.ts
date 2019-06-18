import { Injectable } from '@angular/core';
import { Pattern } from './pattern';
import { PATTERNS } from './mock-patterns';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PatternService {
  getPatterns(): Observable<Pattern[]> {
    this.messageService.add('PatternService: Obtained messages');
    return of(PATTERNS);
  }

  getPattern(id: number): Observable<Pattern> {
    this.messageService.add('PatternService: Fetched details for pattern ${id}');
    return of(PATTERNS.find(pattern => pattern.id === id));
  }

  constructor(private messageService: MessageService) { }
}
