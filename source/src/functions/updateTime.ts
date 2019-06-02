import { UpdateTime } from '../interfaces/updateTime';
import { Action } from '../interfaces/action';

import { Types } from '../enums/types';

export const updateTime: (payload: UpdateTime) => Action<UpdateTime> = (payload: UpdateTime): Action<UpdateTime> => ({
    type: Types.UpdateTime,
    payload
});