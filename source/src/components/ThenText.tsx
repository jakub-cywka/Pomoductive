import * as React from 'react';

import { IonText } from '@ionic/react';

import { useSelector } from 'react-redux';

import { Then } from '../enums/then';
import { TimeType } from '../enums/timeType';

import { State } from '../interfaces/state';
import { Time } from '../interfaces/time';

export default () => {

    const then = useSelector<State, Then>(state => state.then);
    const breakTime = useSelector<State, Time>(state => state.breakTime);
    const workTime = useSelector<State, Time>(state => state.workTime);
    const timeType = useSelector<State, TimeType>(state => state.timeType);

    return (
        <IonText mode='md' color='tertiary'>
            <h3 className='is-then-text'>
                Then: {timeType === TimeType.Work ? breakTime.minutes : workTime.minutes} {then}
            </h3>
        </IonText>
    );
};