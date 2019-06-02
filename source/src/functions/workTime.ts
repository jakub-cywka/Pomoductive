import { Time } from '../interfaces/time';
import { Action } from '../interfaces/action';

import { Types } from '../enums/types';

import { initialState } from '../constants/initialState';

export const workTime = (workTime: Time = initialState.workTime, action: Action): Time => {
    switch (action.type) {
        case Types.UpdateWorkTime:
            return action.payload.workTime as Time;
        default:
            return workTime;
    };
};