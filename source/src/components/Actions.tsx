import * as React from 'react';

import { Context, IContext } from '../context/context';

import { IonSegment } from '@ionic/react';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description A wrapper component for actions.
 * @param props The props to use with this component.
 * @version 0.1.0
 */
export const Actions = (props: IProps): JSX.Element => (
    <Context.Consumer>
        {
            (context: IContext): JSX.Element => (
                <IonSegment mode='md' color='secondary'>
                    {props.children}
                </IonSegment>
            ) as JSX.Element
        }
    </Context.Consumer>
) as JSX.Element;

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description An interface for Actions component.
 * @param children The element to render inside of the Actions component.
 * @version 0.1.0
 */
export interface IProps {
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A part of an interface for Actions component.
     * @param children The element to render inside of the Actions component.
     * @version 0.1.0
    */ 
    children: any;
};