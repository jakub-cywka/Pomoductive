import * as React from 'react';

import { calculateAngle } from '../helpers/calculateAngle';

import { Theme } from '../enums/theme';

import { connect } from 'react-redux';

import { TimeType } from '../enums/timeType';

import { State } from '../interfaces/state';
import { Time } from '../interfaces/time';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description A wrapper component for pomodoro circle.
 * @param props The props to use with this component.
 * @version 0.2.0
 */
export const Circle = connect((state: State): {
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