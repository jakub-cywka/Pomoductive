import { Time } from './time';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description An interface for payload to update the work time in the pomodoro lifecycle.
 * @param workTime Determines the amount of workTime minutes to use in update of work time in the pomodoro lifecycle.
 * @version 0.3.0
 * @license MIT
*/
export interface UpdateWorkTime {
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A part of an UpdateWorkTime interface.
     * @param workTime Determines the amount of workTime minutes to use in update of work time in the pomodoro lifecycle.
     * @version 0.3.0
     * @license MIT
    */
    workTime: Time;
};