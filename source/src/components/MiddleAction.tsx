import React from 'react';

import { IonSegmentButton } from '@ionic/react';

import { TimerState } from '../enums/timerState';

import { connect, ConnectedComponentClass } from 'react-redux';

import { UpdateTimerState } from '../interfaces/updateTimerState';
import { State } from '../interfaces/state';
import { Time } from '../interfaces/time';
import { UpdateTime } from '../interfaces/updateTime';

import { Dispatch, AnyAction } from 'redux';

import { updateTimerState } from '../functions/updateTimerState';
import { calculateTime } from '../functions/calculateTime';
import { updateTime } from '../functions/updateTime';
import { updateInterval } from '../functions/updateInterval';
import { UpdateId } from '../interfaces/updateId';
import { updateId } from '../functions/updateId';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description A component that displays the middle action button (resume or pause, depending on context).
 * @version 0.3.0
 * @license MIT
 */
export const MiddleAction: ConnectedComponentClass<({ timerState, updateTimerState, time, updateTime, id, updateId }: {
    timerState: TimerState;
    time: Time;
    id: NodeJS.Timeout;
    updateTimerState: (payload: UpdateTimerState) => AnyAction;
    updateInterval: () => AnyAction;
    updateTime: (payload: UpdateTime) => AnyAction;
    updateId: (payload: UpdateId) => AnyAction;
}) => JSX.Element, Pick<any, string | number | symbol>> = connect((state: State): {
    timerState: TimerState;
    time: Time;
    id: NodeJS.Timeout;
} => ({
    timerState: state.timerState,
    time: state.time,
    id: state.id
}), (dispatch: Dispatch): {
    updateTimerState: (payload: UpdateTimerState) => AnyAction;
    updateInterval: () => AnyAction;
    updateTime: (payload: UpdateTime) => AnyAction;
    updateId: (payload: UpdateId) => AnyAction;
} => ({
    updateTimerState: (payload: UpdateTimerState): AnyAction => dispatch(updateTimerState(payload)),
    updateInterval: (): AnyAction => dispatch(updateInterval() as unknown as AnyAction),
    updateTime: (payload: UpdateTime): AnyAction => dispatch(updateTime(payload)),
    updateId: (payload: UpdateId): AnyAction => dispatch(updateId(payload))
}))(({ timerState, updateTimerState, time, updateTime, id, updateId }: any): JSX.Element => {

    const onClick = (): void => {
        updateTimerState({
            timerState: timerState === TimerState.Running ? TimerState.Paused : TimerState.Running
        } as UpdateTimerState);
    };

    const callback: React.MutableRefObject<() => Time> = React.useRef({} as unknown as () => Time);

    React.useEffect((): void => {
        callback.current = (): Time => calculateTime(time);
    }, [id]);

    React.useEffect(() => {
        if (timerState === TimerState.Running) {
            const tick = () => {
                updateTime({
                    time: {...callback.current()}
                } as UpdateTime);
            };

            let id = setInterval(tick, 1000);

            updateId({
                id
            } as UpdateId);

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
});