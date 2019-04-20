import { Time } from '../interfaces/time';

import { TimeType } from '../enums/timeType';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description A function that takes expired time and it's type and returns the corresponding angle for the progress circle.
 * @param time The time of the pomodoro lifecycle to use for calculations.
 * @param timeType The type of time (work or break) to use for calculations.
 * @version 0.1.0
*/
export const calculateAngle = (time: Time, timeType: TimeType): number => {
    let targetAngle: number = 0;

    targetAngle = (((timeType === TimeType.Work ? 25 : 5) * 60 - (time.minutes * 60 + time.seconds)) / ((timeType === TimeType.Work ? 25 : 5) * 60)) * 360;
    
    return targetAngle;
};