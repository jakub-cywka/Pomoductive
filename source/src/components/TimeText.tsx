import * as React from 'react';

import { IonText, IonInput } from '@ionic/react';

import { convertTime } from '../helpers/convertTime';
import { connect } from 'react-redux';
import { State } from '../interfaces/state';
import { Time } from '../interfaces/time';

import { Dispatch, AnyAction } from 'redux';
import { UpdateTime } from '../interfaces/updateTime';
import { updateTime } from '../helpers/updateTime';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description A component displaying converted time of the pomodoro cycle.
 * @version 0.3.0
 */
export const TimeText = connect((state: State): {
    time: Time;
} => ({
    time: state.time,
}), null)(({ time }: {
    time: Time;
}): JSX.Element => {

    React.useEffect((): void => {
        console.log(time);
    }, [time]);

    return (
        <IonText mode='md' color='primary'>
            <h2 className='is-time-text ion-text-center'>
                {
                    convertTime(time)
                }
            </h2>
        </IonText>
    );
});