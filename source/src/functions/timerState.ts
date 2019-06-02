import { TimerState } from '../enums/timerState';
import { Types } from '../enums/types';

import { Action } from '../interfaces/action';

import { initialState } from '../constants/initialState';

export const timerState: (timerState: TimerState, action: Action) => TimerState = (timerState: TimerState = initialState.timerState, action: Action): TimerState => {
    switch (action.type) {
        case Types.UpdateTimerState:
            return action.payload.timerState as TimerState;
        default:
            return timerState;
    };
};