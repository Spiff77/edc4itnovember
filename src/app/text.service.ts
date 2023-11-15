import {EventEmitter, Injectable} from '@angular/core';
import {Subject, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  private _evt  = new Subject<string>()

  constructor() { }

  emitValue(val: string){
    this._evt.next(val) // Sending a value to all subscribers. (same as "emit" with Eventemitter)
  }

  get evt(): Subject<string> {
    return this._evt // just a setter that return the Observable
  }

}
