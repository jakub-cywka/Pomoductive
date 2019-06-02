import { TimeType } from '../enums/timeType';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description An interface for payload to update the time type in the pomodoro lifecycle.
 * @param timeType Determines the timeType to use in update of time type in the pomodoro lifecycle.
 * @version 0.4.0
 * @license MIT
*/
export interface UpdateTimeType {
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A part of an UpdateTimeType interface.
     * @param timeType Determines the timeType to use in update of time type in the pomodoro lifecycle.
     * @version 0.4.0
     * @license MIT
    */
    timeType: TimeType;
};