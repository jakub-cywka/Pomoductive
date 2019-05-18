import { Time } from './time';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description An interface for payload to update the time in the pomodoro lifecycle.
 * @param time Determines the amount of time to use in update of time in the pomodoro lifecycle.
 * @version 0.3.0
 * @license MIT
*/
export interface UpdateTime {
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A part of an UpdateTime interface.
     * @param time Determines the amount of time to use in update of time in the pomodoro lifecycle.
     * @version 0.3.0
     * @license MIT
    */
    time: Time;
};