import { UpdateTimeType } from '../interfaces/updateTimeType';
import { Action } from '../interfaces/action';

import { Types } from '../enums/types';

export const updateTimeType: (payload: UpdateTimeType) => Action<UpdateTimeType> = (payload: UpdateTimeType): Action<UpdateTimeType> => ({
    type: Types.UpdateTimeType,
    payload
});