import { UpdateRequestState } from '../interfaces/updateRequestState';
import { Action } from '../interfaces/action';

import { Types } from '../enums/types';

export const updateRequestState: (payload: UpdateRequestState) => Action<UpdateRequestState> = payload => ({
    type: Types.UpdateRequestState,
    payload
});