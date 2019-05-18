import { Time } from './time';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description An interface for payload to update the break time in the pomodoro lifecycle.
 * @param breakTime Determines the breakTime to use in update of breakTime in the pomodoro lifecycle.
 * @version 0.3.0
 * @license MIT
*/
export interface UpdateBreakTime {
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A part of an UpdateBreakTime interface.
     * @param breakTime Determines the breakTime to use in update of breakTime in the pomodoro lifecycle.
     * @version 0.3.0
     * @license MIT
    */
    breakTime: Time;
};