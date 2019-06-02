import { Time } from './time';

import { Then } from '../enums/then';
import { TimerState } from '../enums/timerState';
import { Theme } from '../enums/theme';
import { TimeType } from '../enums/timeType';
import { RequestState } from '../enums/requestState';

import Firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

import { User } from './user';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description An interface for Store.
 * @param time Sets the time of pomodoro cycle.
 * @param then The text to display below the pomodoro's circle.
 * @param timerState The state of pomodoro cycle.
 * @param theme Determines the theme that the components will use.
 * @param timeType The type of time to use (work or break one).
 * @param workTime Determines the amount of work time.
 * @param breakTime Determines the amount of break time.
 * @param id Determines the id of a pomodoro lifecycle.
 * @param firebase The Firebase instance to use in the app.
 * @version 0.4.0
 * @license MIT
*/
export interface State {
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A part of an State interface.
     * @param time Sets the time of pomodoro cycle.
     * @version 0.4.0
     * @license MIT
    */
    time: Time;
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A part of an State interface.
     * @param then The text to display below the pomodoro's circle.
     * @version 0.4.0
     * @license MIT
    */
    then: Then;
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A part of an State interface.
     * @param timerState The state of pomodoro cycle.
     * @version 0.4.0
     * @license MIT
    */
    timerState: TimerState;
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A part of an State interface.
     * @param theme Determines the theme that the components will use.
     * @version 0.4.0
     * @license MIT
    */
    theme: Theme;
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A part of an State interface.
     * @param timeType The type of time to use (work or break one).
     * @version 0.4.0
     * @license MIT
    */
    timeType: TimeType;
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A part of an State interface.
     * @param workTime Determines the amount of work time.
     * @version 0.4.0
     * @license MIT
    */
    workTime: Time;
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A part of an State interface.
     * @param breakTime Determines the amount of break time.
     * @version 0.4.0
     * @license MIT
    */
    breakTime: Time;
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A part of an State interface.
     * @param id Determines the id of a pomodoro lifecycle.
     * @version 0.4.0
     * @license MIT
    */
    id: NodeJS.Timeout;
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A part of an State interface.
     * @param firebase The Firebase instance to use in the app.
     * @version 0.4.0
     * @license MIT
    */
    firebase: typeof Firebase;
    requestState: RequestState;
    user: User;
};