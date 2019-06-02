import { TimeType } from '../enums/timeType';
import { Types } from '../enums/types';

import { Action } from '../interfaces/action';

import { initialState } from '../constants/initialState';

export const timeType: (timeType: TimeType, action: Action) => TimeType = (timeType: TimeType = initialState.timeType, action: Action): TimeType => {
    switch (action.type) {
        case Types.UpdateTimeType:
            return action.payload.timeType as TimeType;
        default:
            return timeType;
    };
};