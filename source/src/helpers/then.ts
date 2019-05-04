import { Then } from '../enums/then';

import { Action } from '../interfaces/action';

import { initialState } from '../constants/initialState';

import { Types } from '../enums/types';

export const then: (then: Then, action: Action) => Then = (then: Then = initialState.then, action: Action): Then => {
    switch (action.type) {
        case Types.UpdateThen:
            return action.payload.then as Then;
        default:
            return then;
    };
};