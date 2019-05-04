import { Time } from './time';

import { Then } from '../enums/then';
import { TimerState } from '../enums/timerState';
import { Theme } from '../enums/theme';
import { TimeType } from '../enums/timeType';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description An interface for Store.
 * @param time Sets the time of pomodoro cycle.
 * @param then The text to display below the pomodoro's circle.
 * @param timerState The state of pomodoro cycle.
 * @param theme Determines the theme that the components will use.
 * @param timeType The type of time to use (work or break one).
 * @version 0.1.0
*/
export interface State {
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A fragment of state interface.
     * @param time Sets the time of pomodoro cycle.
     * @version 0.1.0
    */
    time: Time;
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A fragment of state interface.
     * @param then The text to display below the pomodoro's circle.
     * @version 0.1.0
    */
    then: Then;
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A fragment of state interface.
     * @param timerState The state of pomodoro cycle.
     * @version 0.1.0
    */
    timerState: TimerState;
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A fragment of state interface.
     * @param theme Determines the theme that the components will use.
     * @version 0.1.0
    */
    theme: Theme;
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A fragment of state interface.
     * @param timeType The type of time to use (work or break one).
     * @version 0.1.0
    */
    timeType: TimeType;
    workTime: Time;
    breakTime: Time;
    id: NodeJS.Timeout;
};