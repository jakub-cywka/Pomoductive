import { Then } from '../enums/then';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description An interface for payload to update the then text in the pomodoro lifecycle.
 * @param then Determines the then text to use in update of then text in the pomodoro lifecycle.
 * @version 0.2.0
*/
export interface UpdateThen {
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A part of an UpdateThen interface.
     * @param then Determines the then text to use in update of then text in the pomodoro lifecycle.
     * @version 0.2.0
    */
    then: Then;
};