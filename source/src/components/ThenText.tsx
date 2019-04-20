import * as React from 'react';

import { IonText } from '@ionic/react';

import { Context, IContext } from '../context/context';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description A component displaying the upcoming cycle.
 * @version 0.1.0
 */
export const ThenText = (): JSX.Element => (
    <Context.Consumer>
        {
            (context: IContext) => (
                <IonText mode='md' color='tertiary'>
                    <h3 className='is-then-text'>
                        Then: {context.then}
                    </h3>
                </IonText>
            )
        }
    </Context.Consumer>
);