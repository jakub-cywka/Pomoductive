import React from 'react';

import { IonSegmentButton } from '@ionic/react';

import { TimerState } from '../enums/timerState';

import { useSelector, useDispatch } from 'react-redux';

import { UpdateTimerState } from '../interfaces/updateTimerState';
import { State } from '../interfaces/state';
import { Time } from '../interfaces/time';
import { UpdateTime } from '../interfaces/updateTime';

import { updateTimerState } from '../functions/updateTimerState';
import { calculateTime } from '../functions/calculateTime';
import { updateTime } from '../functions/updateTime';
import { UpdateId } from '../interfaces/updateId';
import { updateId } from '../functions/updateId';

export default () => {

    
    const timerState = useSelector<State, TimerState>(state => state.timerState);
    const time = useSelector<State, Time>(state => state.time);
    const id = useSelector<State, NodeJS.Timeout>(state => state.id);

    const dispatch = useDispatch();
    
    const onClick = (): void => {
        dispatch(updateTimerState({
            timerState: timerState === TimerState.Running ? TimerState.Paused : TimerState.Running
        } as UpdateTimerState));
    };

    const callback: React.MutableRefObject<() => Time> = React.useRef({} as unknown as () => Time);

    React.useEffect((): void => {
        callback.current = (): Time => calculateTime(time);
    }, [id]);

    React.useEffect(() => {
        if (timerState === TimerState.Running) {
            const tick = () => {
                dispatch(updateTime({
                    time: {...callback.current()}
                } as UpdateTime));
            };

            let id = setInterval(tick, 1000);

            dispatch(updateId({
                id
            } as UpdateId));

            return () => clearInterval(id);
        };
    }, [timerState]);

    return (
        <IonSegmentButton mode='md'>
            <div onClick={onClick} className='is-container is-middle-action'>
                <div className='is-wheel is-secondary is-container'>
                    <div className={`${timerState === TimerState.Running ? 'is-rectangle-icon' : 'is-triangle-icon is-forward'}`}></div>
                </div>
            </div>
        </IonSegmentButton>
    );
};