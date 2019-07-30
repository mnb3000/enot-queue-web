import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NavbarTextService {
  // Observable string sources
  private emitChangeSource = new Subject<string>();
  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();
  // Service message commands
  emitChange(change: string) {
    this.emitChangeSource.next(change);
  }
}
