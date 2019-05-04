import { Action } from '../interfaces/action';

import { Types } from '../enums/types';

import { initialState } from '../constants/initialState';

export const id = (id: NodeJS.Timeout = initialState.id, action: Action): NodeJS.Timeout => {
    switch (action.type) {
        case Types.UpdateId:
            return action.payload.id as NodeJS.Timeout;
        default:
            return id;
    };
};