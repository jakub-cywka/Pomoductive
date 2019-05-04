import { UpdateWorkTime } from '../interfaces/updateWorkTime';
import { Action } from '../interfaces/action';
import { Types } from '../enums/types';

export const updateWorkTime = (payload: UpdateWorkTime): Action<UpdateWorkTime> => ({
    type: Types.UpdateWorkTime,
    payload
});