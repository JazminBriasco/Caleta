import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class CommunicationService {
  private buttonClickSubject = new Subject<string>();

  buttonClick$ = this.buttonClickSubject.asObservable();

  emitButtonClick(btnStatus: string): void {
    this.buttonClickSubject.next(btnStatus);
  }
}