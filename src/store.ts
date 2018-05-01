import { Action } from 'redux';
import { CounterActions, IContactAction } from './app/app.actions';

export interface IAppState {
  count: number;
  text: String;
}

export const INITIAL_STATE: IAppState = {
  count: 0,
  text:"hello world",
};

export function rootReducer(lastState: IAppState, action: IContactAction): IAppState {
  switch(action.type) {
    case CounterActions.INCREMENT: return { count: lastState.count + 1, text:lastState.text };
    case CounterActions.DECREMENT: return { count: lastState.count - 1, text:lastState.text };
    case CounterActions.SAVE: return { count: lastState.count, text:action.name };
  }

  // We don't care about any other actions right now.
  return lastState;
}