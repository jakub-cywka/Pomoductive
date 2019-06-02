import { UpdateThen } from '../interfaces/updateThen';

import { Action } from '../interfaces/action';

import { Types } from '../enums/types';

export const updateThen: (payload: UpdateThen) => Action<UpdateThen> = (payload: UpdateThen): Action<UpdateThen> => ({
    type: Types.UpdateThen,
    payload
});