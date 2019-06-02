import React from 'react';

import { calculateAngle } from '../functions/calculateAngle';

import { Theme } from '../enums/theme';
import { TimeType } from '../enums/timeType';

import { connect, ConnectedComponentClass } from 'react-redux';

import { State } from '../interfaces/state';
import { Time } from '../interfaces/time';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description A wrapper component for pomodoro circle.
 * @param children The children to render inside of the component.
 * @version 0.3.0
 * @license MIT
 */
export const Circle: ConnectedComponentClass<({ timeType, time, theme, children, breakTime, workTime }: {
    timeType: TimeType;
    time: Time;
    theme: Theme;
    children: any;
    breakTime: Time;
    workTime: Time;
}) => JSX.Element, Pick<any, string | number | symbol>> = connect((state: State): {
    timeType: TimeType;
    time: Time;
    theme: Theme;
    breakTime: Time;
    workTime: Time;
} => ({
    timeType: state.timeType,
    time: state.time,
    theme: state.theme,
    breakTime: state.breakTime,
    workTime: state.workTime
}), null)(({ timeType, time, theme, children, breakTime, workTime }: {
    timeType: TimeType;
    time: Time;
    theme: Theme;
    children: any;
    breakTime: Time;
    workTime: Time;
}): JSX.Element => (
    <div className='is-container is-sized'>
        <div className={`is-circle ${calculateAngle(time, timeType, workTime, breakTime) > 180 ? 'is-over-half' : ''} has-progress is-${theme}`}>
            <span>
                {children}
            </span>
            <div className='is-half is-left'>
                <div className='is-less-half'></div>
                <div style={{
                    transform: `rotate(${calculateAngle(time, timeType, workTime, breakTime)}deg)`
                }} className='is-progress'></div>
            </div>
        </div>
    </div>
));