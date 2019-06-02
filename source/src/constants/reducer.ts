import { combineReducers, Reducer, AnyAction } from 'redux';

import { time } from '../functions/time';
import { then } from '../functions/then';
import { timerState } from '../functions/timerState';
import { theme } from '../functions/theme';
import { timeType } from '../functions/timeType';
import { workTime } from '../functions/workTime';
import { breakTime } from '../functions/breakTime';
import { id } from '../functions/id';
import { firebase } from '../functions/firebase';
import { requestState } from '../functions/requestState';
import { user } from '../functions/user';

import { State } from '../interfaces/state';

export const reducer: Reducer<State, AnyAction> = combineReducers({
   time,
   then,
   timerState,
   theme,
   timeType,
   workTime,
   breakTime,
   id,
   firebase,
   requestState,
   user
} as any);