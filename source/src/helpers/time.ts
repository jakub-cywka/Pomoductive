import { Time } from '../interfaces/time';
import { Action } from '../interfaces/action';

import { initialState } from '../constants/initialState';

import { Types } from '../enums/types';

export const time: (time: Time, action: Action) => Time = (time: Time = initialState.time, action: Action): Time => {
    switch (action.type) {
        case Types.UpdateTime:
            return action.payload.time as Time;
        default:
            return time;
    };
};