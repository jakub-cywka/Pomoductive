import * as React from 'react';

import { Context, IContext } from '../context/context';

import { IonSegmentButton } from '@ionic/react';

import { TimerState } from '../enums/timerState';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description A component that displays the middle action button (resume or pause, depending on context).
 * @param props The props to use with this component. 
 * @version 0.1.0
 */
export const MiddleAction = (props: IProps): JSX.Element => (
    <Context.Consumer>
        {
            (context: IContext): JSX.Element => (
                <IonSegmentButton class='test' mode='md'>
                    <div onClick={props.onClick} className='is-container is-middle-action'>
                        <div className='is-wheel is-secondary is-container'>
                            <div className={`${context.timerState === TimerState.Running ? 'is-rectangle-icon' : 'is-triangle-icon is-forward' }`}></div>
                        </div>
                    </div>
                </IonSegmentButton>
            ) as JSX.Element
        }
    </Context.Consumer>
) as JSX.Element;

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description An interface for MiddleAction component that displays the middle action button (resume or pause, depending on context).
 * @param onClick The function to execute when the MiddleAction component's action is clicked.
 * @version 0.1.0
 */
export interface IProps {
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A part of an interface for MiddleAction component.
     * @param onClick The function to execute when the MiddleAction component's action is clicked.
     * @version 0.1.0
    */
    onClick: any;
};