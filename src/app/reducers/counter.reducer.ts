import { Action, on, createReducer } from '@ngrx/store';
import * as actions from '../actions/counter.actions';


export interface CounterState {
  current: number;
  by: number;
}
const initialState: CounterState = {
  current: 0,
  by: 1
};

const myReducer = createReducer(
  initialState,
  on(actions.countIncremented, (currentState) => ({ ...currentState, current: currentState.current + 1 })),
  on(actions.countDecremented, (currentState) => ({ ...currentState, current: currentState.current - 1 })),
  on(actions.countBySet, (currentState, action) => ({ ...currentState, by: action.by })),
  on(actions.countReset, () => initialState)
);

export function reducer(state: CounterState = initialState, action: Action): CounterState {
  return myReducer(state, action);
}
