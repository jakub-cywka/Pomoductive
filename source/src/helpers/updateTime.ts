import { Time } from '../interfaces/time';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description A function that takes expired time and returns new, updated time.
 * @param time The time of the pomodoro lifecycle to use for calculations.
 * @version 0.1.0
*/
export const updateTime = (time: Time): Time => {
    let targetTime: Time = time;

    if (time.seconds > 0) {
        targetTime.seconds = time.seconds - 1;
    };

    if (time.seconds === 0) {
        if (time.minutes > 0) {
            targetTime.minutes = time.minutes - 1;
            targetTime.seconds = 59;
        } else {
            targetTime.minutes = 0;
            targetTime.seconds = 0;
        }
    };

    return targetTime;
};