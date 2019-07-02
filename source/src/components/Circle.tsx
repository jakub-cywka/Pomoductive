import React from 'react';

import { calculateAngle } from '../functions/calculateAngle';

import { Theme } from '../enums/theme';
import { TimeType } from '../enums/timeType';

import { useSelector } from 'react-redux';

import { State } from '../interfaces/state';
import { Time } from '../interfaces/time';
import ChildrenProp from '../interfaces/childrenProp';

export default ({ children }: ChildrenProp) => {

    const time = useSelector<State, Time>(state => state.time);
    const timeType = useSelector<State, TimeType>(state => state.timeType);
    const workTime = useSelector<State, Time>(state => state.workTime);
    const breakTime = useSelector<State, Time>(state => state.breakTime);
    const theme = useSelector<State, Theme>(state => state.theme);

    return (
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
    );
};