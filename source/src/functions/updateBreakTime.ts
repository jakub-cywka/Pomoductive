import { Action } from '../interfaces/action';
import { UpdateBreakTime } from '../interfaces/updateBreakTime';

import { Types } from '../enums/types';

export const updateBreakTime = (payload: UpdateBreakTime): Action<UpdateBreakTime> => ({
    type: Types.UpdateBreakTime,
    payload
});