import { Theme } from '../enums/theme';
import { Types } from '../enums/types';

import { Action } from '../interfaces/action';

import { initialState } from '../constants/initialState';

export const theme: (theme: Theme, action: Action) => Theme = (theme: Theme = initialState.theme, action: Action): Theme => {
    switch (action.type) {
        case Types.UpdateTheme:
            return action.payload.theme as Theme;
        default:
            return theme;
    };
};