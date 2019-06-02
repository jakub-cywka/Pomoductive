import { UpdateTheme } from '../interfaces/updateTheme';

import { Action } from '../interfaces/action';

import { Types } from '../enums/types';

export const updateTheme: (payload: UpdateTheme) => Action<UpdateTheme> = (payload: UpdateTheme): Action<UpdateTheme> => ({
    type: Types.UpdateTheme,
    payload
});