import { combineReducers, Reducer, AnyAction } from 'redux';

import { time } from '../helpers/time';
import { then } from '../helpers/then';
import { timerState } from '../helpers/timerState';
import { theme } from '../helpers/theme';
import { timeType } from '../helpers/timeType';
import { workTime } from '../helpers/workTime';
import { breakTime } from '../helpers/breakTime';
import { id } from '../helpers/id';

import { State } from '../interfaces/state';

export const reducer: Reducer<State, AnyAction> = combineReducers({
   time,
   then,
   timerState,
   theme,
   timeType,
   workTime,
   breakTime,
   id
} as any);