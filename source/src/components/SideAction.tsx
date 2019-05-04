import * as React from 'react';

import { IonSegmentButton } from '@ionic/react';

import { connect } from 'react-redux';

import { Dispatch, AnyAction } from 'redux';

import { UpdateTimerState } from '../interfaces/updateTimerState';
import { UpdateTimeType } from '../interfaces/updateTimeType';
import { UpdateThen } from '../interfaces/updateThen';
import { UpdateTime } from '../interfaces/updateTime';
import { State } from '../interfaces/state';
import { Time } from '../interfaces/time';
import { UpdateId } from '../interfaces/updateId';

import { updateTimerState } from '../helpers/updateTimerState';
import { updateThen } from '../helpers/updateThen';
import { updateTime } from '../helpers/updateTime';
import { updateTimeType } from '../helpers/updateTimeType';
import { updateId } from '../helpers/updateId';

import { TimerState } from '../enums/timerState';
import { TimeType } from '../enums/timeType';
import { Then } from '../enums/then';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description A component that displays the side action button (forward or backward, depending on props).
 * @param props The props to use with this component.
 * @version 0.1.0
 */
export const SideAction = connect((state: State): {
    timeType: TimeType;
    then: Then;
    workTime: Time;
    breakTime: Time;
    time: Time;
} => ({
    timeType: state.timeType,
    then: state.then,
    workTime: state.workTime,
    breakTime: state.breakTime,
    time: state.time
}), (dispatch: Dispatch): {
    updateTimerState: (payload: UpdateTimerState) => AnyAction;
    updateTimeType: (payload: UpdateTimeType) => AnyAction;
    updateThen: (payload: UpdateThen) => AnyAction;
    updateTime: (payload: UpdateTime) => AnyAction;
    updateId: (payload: UpdateId) => AnyAction;
} => ({
    updateTimerState: (payload: UpdateTimerState): AnyAction => dispatch(updateTimerState(payload)),
    updateTimeType: (payload: UpdateTimeType): AnyAction => dispatch(updateTimeType(payload)),
    updateThen: (payload: UpdateThen): AnyAction => dispatch(updateThen(payload)),
    updateTime: (payload: UpdateTime): AnyAction => dispatch(updateTime(payload)),
    updateId: (payload: UpdateId): AnyAction => dispatch(updateId(payload))
}))(({ direction, updateTimerState, updateTimeType, updateThen, updateTime, timeType, then, workTime, breakTime, updateId, time }: any): JSX.Element => {

    const onClick = (): void => {
        updateTimerState({
            timerState: TimerState.Reseted
        } as UpdateTimerState);
        updateTimeType({
            timeType: timeType === TimeType.Work ? TimeType.Break : TimeType.Work
        } as UpdateTimeType);
        updateThen({
            then: then === Then.Work ? Then.Break : Then.Work
        } as UpdateThen);
        updateId({
            id: null as unknown as NodeJS.Timeout
        } as UpdateId);
        updateTime({
            time: timeType === TimeType.Work ? {...breakTime} : {...workTime}
        } as UpdateTime);
    };

    React.useEffect((): void => {
        if (time.minutes === 0 && time.seconds === 0) {
            onClick();
        };
    }, [time])

    return (
        <IonSegmentButton mode='md'>
            <div onClick={onClick} className='is-container is-side-action'>
                <div className='is-wheel is-secondary is-container is-row'>
                    <div className={`is-triangle-icon is-${direction}`}></div>
                    <div className={`is-triangle-icon is-${direction}`}></div>
                </div>
            </div>
        </IonSegmentButton>
    );
});