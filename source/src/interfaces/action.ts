import { Types } from '../enums/types';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description An interface for Actions in application's flow (via Redux).
 * @param type The type of the action to perform.
 * @param payload The payload to pass through the action.
 * @version 0.4.0
 * @license MIT
*/
export interface Action<Payload = any> {
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A part of an Action interface.
     * @param type The type of the action to perform.
     * @version 0.4.0
     * @license MIT
    */
    type: Types;
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A part of an Action interface.
     * @param payload The payload to pass through the action.
     * @version 0.4.0
     * @license MIT
    */
    payload: Payload;
};