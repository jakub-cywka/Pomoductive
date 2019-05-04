import { Time } from '../interfaces/time';
import { Action } from '../interfaces/action';

import { Types } from '../enums/types';

import { initialState } from '../constants/initialState';

export const breakTime = (breakTime: Time = initialState.breakTime, action: Action): Time => {
    switch (action.type) {
        case Types.UpdateBreakTime:
            return action.payload.breakTime as Time;
        default:
            return breakTime;
    };
};