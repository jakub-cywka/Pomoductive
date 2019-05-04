import { UpdateId } from '../interfaces/updateId';
import { Action } from '../interfaces/action';

import { Types } from '../enums/types';

export const updateId = (payload: UpdateId): Action<UpdateId> => ({
    type: Types.UpdateId,
    payload
});