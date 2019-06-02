import { RequestState } from '../enums/requestState';
import { Types } from '../enums/types';

import { Action } from '../interfaces/action';

import { initialState } from '../constants/initialState';

export const requestState: (requestState: RequestState, action: Action) => RequestState = (requestState = initialState.requestState, action) => {
    switch (action.type) {
        case Types.UpdateRequestState:
            return action.payload.requestState as RequestState;
        default:
            return requestState;
    };
};