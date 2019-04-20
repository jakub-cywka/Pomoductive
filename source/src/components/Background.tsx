import * as React from 'react';

import { Context, IContext } from '../context/context';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description A wrapper component for a whole application.
 * @param props The props to use with this component.
 * @version 0.1.0
 */
export const Background = (props: IProps): JSX.Element => (
    <Context.Consumer>
        {
            (context: IContext): JSX.Element => (
                <div className={`is-container is-fullsized is-${context.theme}`}>
                    {props.children}
                </div>
            ) as JSX.Element
        }
    </Context.Consumer>
) as JSX.Element;

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description An interface for Background component.
 * @param children The element to render inside of the Background component.
 * @version 0.1.0
 */
export interface IProps {
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A part of an interface for Background component.
     * @param children The element to render inside of the Background component.
     * @version 0.1.0
    */ 
    children: any;
};