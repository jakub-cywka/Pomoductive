import React from 'react';

import { IonSegment } from '@ionic/react';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description A wrapper component for actions.
 * @param props The props to use with this component.
 * @version 0.4.0
 * @license MIT
 */
export const Actions: (props: Props) => JSX.Element = props => (
    <IonSegment mode='md' color='secondary'>
        {props.children}
    </IonSegment>
);

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description An interface for Actions component.
 * @param children The element to render inside of the Actions component.
 * @version 0.4.0
 * @license MIT
 */
interface Props {
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A part of an interface for Actions component.
     * @param children The element to render inside of the Actions component.
     * @version 0.4.0
     * @license MIT
    */ 
    children: any;
};