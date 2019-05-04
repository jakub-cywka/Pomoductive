import * as React from 'react';

import { IonSegment } from "@ionic/react";

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description A wrapper component for actions.
 * @param props The props to use with this component.
 * @version 0.2.0
 */
export const Actions: (props: Props) => JSX.Element = (props: Props): JSX.Element => (
    <IonSegment mode='md' color='secondary'>
        {props.children}
    </IonSegment>
);

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description An interface for Actions component.
 * @param children The element to render inside of the Actions component.
 * @version 0.2.0
 */
interface Props {
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A part of an interface for Actions component.
     * @param children The element to render inside of the Actions component.
     * @version 0.2.0
    */ 
    children: JSX.Element | JSX.Element[];
};