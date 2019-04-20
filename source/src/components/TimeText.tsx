import * as React from 'react';

import { Context, IContext } from '../context/context';

import { IonText } from '@ionic/react';

import { convertTime } from '../helpers/convertTime';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description A component displaying converted time of the pomodoro cycle.
 * @version 0.1.0
 */
export const TimeText = (): JSX.Element => (
    <Context.Consumer>
        {
            (context: IContext): JSX.Element => (
                <IonText mode='md' color='primary'>
                    <h2 className='is-time-text'>
                        {convertTime(context.time)}
                    </h2>
                </IonText>
            ) as JSX.Element
        }
    </Context.Consumer>
) as JSX.Element;