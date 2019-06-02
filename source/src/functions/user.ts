import { User } from '../interfaces/user';
import { Action } from '../interfaces/action';

import { initialState } from '../constants/initialState';

import { Types } from '../enums/types';

export const user: (user: User, action: Action) => User = (user = initialState.user, action) => {
    switch (action.type) {
        case Types.UpdateUser:
            return action.payload.user as User;
        default:
            return user;
    };
};