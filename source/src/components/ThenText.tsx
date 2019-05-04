import * as React from 'react';

import { IonText } from '@ionic/react';

import { connect } from 'react-redux';

import { Then } from '../enums/then';
import { TimeType } from '../enums/timeType';

import { State } from '../interfaces/state';
import { Time } from '../interfaces/time';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description A component displaying the upcoming cycle.
 * @version 0.1.0
*/
export const ThenText = connect((state: State): {
    then: Then;
    breakTime: Time;
    workTime: Time;
    timeType: TimeType;
} => ({
    then: state.then,
    breakTime: state.breakTime,
    workTime: state.workTime,
    timeType: state.timeType
}), null)(({ then, breakTime, workTime, timeType }: {
    then: Then;
    breakTime: Time;
    workTime: Time;
    timeType: TimeType;
}): JSX.Element => (
    <IonText mode='md' color='tertiary'>
        <h3 className='is-then-text'>
            Then: {timeType === TimeType.Work ? breakTime.minutes : workTime.minutes} {then}
        </h3>
    </IonText>
));