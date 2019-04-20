import * as React from 'react';

import { Time } from '../interfaces/time';

import { TimerState } from '../enums/timerState';
import { Theme } from '../enums/theme';
import { TimeType } from '../enums/timeType';
import { Then } from '../enums/then';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description A React's Context API based context for controlling application's state.
 * @param time Sets the time of pomodoro cycle.
 * @param then The text to display below the pomodoro's circle.
 * @param timerState The state of pomodoro cycle.
 * @param theme Determines the theme that the components will use.
 * @param timeType The type of time to use (work or break one).
 * @version 0.1.0
 */
export const Context: React.Context<IContext> = React.createContext({
    time: {
        minutes: 25,
        seconds: 0
    } as Time,
    then: Then.Break,
    timerState: TimerState.Paused,
    theme: new Date().getHours() > 18 ? Theme.Dark : Theme.Light,
    timeType: TimeType.Work,
} as IContext);

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description An interface for Context.
 * @param time Sets the time of pomodoro cycle.
 * @param then The text to display below the pomodoro's circle.
 * @param timerState The state of pomodoro cycle.
 * @param theme Determines the theme that the components will use.
 * @param timeType The type of time to use (work or break one).
 * @version 0.1.0
*/
export interface IContext {
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A fragment of Context interface.
     * @param time Sets the time of pomodoro cycle.
     * @version 0.1.0
    */
    time: Time;
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A fragment of Context interface.
     * @param then The text to display below the pomodoro's circle.
     * @version 0.1.0
    */
    then: Then;
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A fragment of Context interface.
     * @param timerState The state of pomodoro cycle.
     * @version 0.1.0
    */
    timerState: TimerState;
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A fragment of Context interface.
     * @param theme Determines the theme that the components will use.
     * @version 0.1.0
    */
    theme: Theme;
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A fragment of Context interface.
     * @param timeType The type of time to use (work or break one).
     * @version 0.1.0
    */
    timeType: TimeType;
};