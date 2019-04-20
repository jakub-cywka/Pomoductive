import * as React from 'react';

import { Context, IContext } from '../context/context';

import { IonSegmentButton } from '@ionic/react';

import { Direction } from '../enums/direction';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description A component that displays the side action button (forward or backward, depending on props).
 * @param props The props to use with this component.
 * @version 0.1.0
 */
export const SideAction = (props: IProps): JSX.Element => (
    <Context.Consumer>
        {
            (context: IContext): JSX.Element => (
                <IonSegmentButton mode='md'>
                    <div onClick={props.onClick} className='is-container is-side-action'>
                        <div className='is-wheel is-secondary is-container is-row'>
                            <div className={`is-triangle-icon ${props.direction === Direction.Forward ? 'is-forward' : 'is-backward'}`}></div>
                            <div className={`is-triangle-icon ${props.direction === Direction.Forward ? 'is-forward' : 'is-backward'}`}></div>
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
 * @description An interface for SideAction component.
 * @param direction Determines the type of side action (forward - arrows right, backward - arrows left).
 * @param onClick The function to run when SideAction component is clicked.
 * @version 0.1.0
 */
export interface IProps {
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A part of an interface for SideAction component.
     * @param direction Determines the type of side action (forward - arrows right, backward - arrows left).
     * @version 0.1.0
    */
    direction: Direction;
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A part of an interface for SideAction component.
     * @param onClick The function to run when SideAction component is clicked.
     * @version 0.1.0
    */
    onClick: any;
};