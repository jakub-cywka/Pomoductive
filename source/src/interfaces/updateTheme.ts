import { Theme } from '../enums/theme';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description An interface for payload to update the them in the pomodoro lifecycle.
 * @param theme Determines the theme to use in update of theme in the pomodoro lifecycle.
 * @version 0.2.0
*/
export interface UpdateTheme {
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description An interface for payload to update the them in the pomodoro lifecycle.
     * @param theme Determines the theme to use in update of theme in the pomodoro lifecycle.
     * @version 0.2.0
    */
    theme: Theme;
};