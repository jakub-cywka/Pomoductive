import { Dispatch, AnyAction } from 'redux';

import { updateTime } from './updateTime';

import { UpdateTime } from '../interfaces/updateTime';
import { State } from '../interfaces/state';

import { calculateTime } from './calculateTime';
import { updateId } from './updateId';
import { UpdateId } from '../interfaces/updateId';

export const updateInterval: () => (dispatch: Dispatch<AnyAction>, getState: () => State) => void = (): (dispatch: Dispatch<AnyAction>, getState: () => State) => void => (dispatch: Dispatch<AnyAction>, getState: () => State): void => {
    let id = setInterval((): void => {
        dispatch(updateTime({
            time: {
                minutes: calculateTime(getState().time).minutes,
                seconds: calculateTime(getState().time).seconds
            }
        } as UpdateTime));
    }, 1000);
    dispatch(updateId({
        id
    } as UpdateId));
};