import { State } from '../interfaces/state';

import { Then } from '../enums/then';
import { TimerState } from '../enums/timerState';
import { Theme } from '../enums/theme';
import { TimeType } from '../enums/timeType';

export const initialState: State = {
    time: {
        minutes: 25,
        seconds: 0
    },
    then: Then.Break,
    timerState: TimerState.Paused,
    theme: new Date().getHours() > 18 ? Theme.Dark : Theme.Light,
    timeType: TimeType.Work,
    workTime: {
        minutes: 25,
        seconds: 0
    },
    breakTime: {
        minutes: 5,
        seconds: 0
    },
    id: null as unknown as NodeJS.Timeout
};