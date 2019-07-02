import * as React from 'react';

import { IonText } from '@ionic/react';

import { convertTime } from '../functions/convertTime';

import { useSelector } from 'react-redux';

import { State } from '../interfaces/state';
import { Time } from '../interfaces/time';

export default () => {

    const time = useSelector<State, Time>(state => state.time);

    return (
        <IonText mode='md' color='primary'>
            <h2 className='is-time-text ion-text-center'>
                {
                    convertTime(time)
                }
            </h2>
        </IonText>
    );
};