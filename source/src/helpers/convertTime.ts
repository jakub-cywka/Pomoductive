import { Time } from '../interfaces/time';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description A function that takes expired time and converts it for more human-readable way to present it.
 * @param time The time of the pomodoro lifecycle to use for calculations.
 * @version 0.1.0
*/
export const convertTime = (time: Time): string => {
    let targetMinutes: string;
    let targetSeconds: string;

    if (time.minutes < 10) {
        targetMinutes = `0${time.minutes}`;
    } else {
        targetMinutes = `${time.minutes}`;
    };

    if (time.seconds < 10) {
        targetSeconds = `0${time.seconds}`;
    } else {
        targetSeconds = `${time.seconds}`;
    };

    return `${targetMinutes}:${targetSeconds}`;
};