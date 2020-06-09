import * as fromCounter from './counter.reducer';
import { ActionReducerMap, createSelector } from '@ngrx/store';

export interface AppState {

  counter: fromCounter.CounterState;
}

export const reducers = {
  counter: fromCounter.reducer
};

const selectCounterBranch = (state: AppState) => state.counter;

export const selectGetCurrent = createSelector(
  selectCounterBranch,
  b => b.current
);

export const selectResetDisabled = createSelector(
  selectGetCurrent,
  c => c === 0
);

export const selectCountingBy = createSelector(
  selectCounterBranch,
  b => b.by
);
