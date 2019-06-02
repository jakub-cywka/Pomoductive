import { UpdateTimerState } from '../interfaces/updateTimerState';
import { Action } from '../interfaces/action';
import { Types } from '../enums/types';

export const updateTimerState: (payload: UpdateTimerState) => Action<UpdateTimerState> = (payload: UpdateTimerState): Action<UpdateTimerState> => ({
    type: Types.UpdateTimerState,
    payload
});