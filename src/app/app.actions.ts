import { Injectable } from '@angular/core';
import { Action } from 'redux';

export interface IContactAction {
  type: string;
  id?: number;
  name?: string;
}

@Injectable()
export class CounterActions {
  static readonly INCREMENT = 'INCREMENT';
  static readonly DECREMENT = 'DECREMENT';
  static readonly SAVE = 'SAVE';

  
  increment(): IContactAction {
    return { type: CounterActions.INCREMENT };
  }

  decrement(): IContactAction {
    return { type: CounterActions.DECREMENT };
  }

  save(name: string): IContactAction {
    return { type: CounterActions.SAVE, name };
  }
}