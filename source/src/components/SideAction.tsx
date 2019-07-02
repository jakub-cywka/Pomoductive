import * as React from 'react';

import { IonSegmentButton } from '@ionic/react';

import { useSelector, useDispatch } from 'react-redux';

import { UpdateTimerState } from '../interfaces/updateTimerState';
import { UpdateTimeType } from '../interfaces/updateTimeType';
import { UpdateThen } from '../interfaces/updateThen';
import { UpdateTime } from '../interfaces/updateTime';
import { State } from '../interfaces/state';
import { Time } from '../interfaces/time';
import { UpdateId } from '../interfaces/updateId';

import { updateTimerState } from '../functions/updateTimerState';
import { updateThen } from '../functions/updateThen';
import { updateTime } from '../functions/updateTime';
import { updateTimeType } from '../functions/updateTimeType';
import { updateId } from '../functions/updateId';

import { TimerState } from '../enums/timerState';
import { TimeType } from '../enums/timeType';
import { Then } from '../enums/then';
import { Direction } from '../enums/direction';

import { Plugins } from '@capacitor/core';

const { LocalNotifications } = Plugins;

export default ({ direction }: {direction: Direction}) => {

    const timeType = useSelector<State, TimeType>(state => state.timeType); 
    const then = useSelector<State, Then>(state => state.then);
    const workTime = useSelector<State, Time>(state => state.workTime);
    const breakTime = useSelector<State, Time>(state => state.breakTime);
    const time = useSelector<State, Time>(state => state.time); 
    const dispatch = useDispatch();

    const onClick = (): void => {
        dispatch(updateTimerState({
            timerState: TimerState.Reseted
        } as UpdateTimerState));
        dispatch(updateTimeType({
            timeType: timeType === TimeType.Work ? TimeType.Break : TimeType.Work
        } as UpdateTimeType));
        dispatch(updateThen({
            then: then === Then.Work ? Then.Break : Then.Work
        } as UpdateThen));
        dispatch(updateId({
            id: null as unknown as NodeJS.Timeout
        } as UpdateId));
        dispatch(updateTime({
            time: timeType === TimeType.Work ? {...breakTime} : {...workTime}
        } as UpdateTime));
    };

    React.useEffect(() => {

        const scheduleNotification = async () => {
            await LocalNotifications.schedule({
                notifications: [
                    {
                        title: 'Time over!',
                        body: `The ${timeType} time is over, so we'll switch you to ${timeType === TimeType.Work ? TimeType.Break : TimeType.Work} time now :)`,
                        id: 0,
                        schedule: { at: new Date(Date.now()) }
                    }
                ]
            });
        };

        if (time.minutes === 0 && time.seconds === 0) {
            onClick();
            scheduleNotification();
        };

    }, [time, onClick])

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
};