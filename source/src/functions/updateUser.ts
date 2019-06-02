import { UpdateUser } from '../interfaces/updateUser';
import { Action } from '../interfaces/action';

import { Types } from '../enums/types';

export const updateUser: (payload: UpdateUser) => Action<UpdateUser> = payload => ({
    type: Types.UpdateUser,
    payload
});