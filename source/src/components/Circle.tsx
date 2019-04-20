import * as React from 'react';

import { Context, IContext } from '../context/context';
import { calculateAngle } from '../helpers/calculateAngle';
import { Theme } from '../enums/theme';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description A wrapper component for pomodoro circle.
 * @param props The props to use with this component.
 * @version 0.1.0
 */
export const Circle = (props: IProps): JSX.Element => (
    <Context.Consumer>
        {
            (context: IContext): JSX.Element => (
                <div className='is-container is-sized'>
                    <div className={`is-circle ${calculateAngle(context.time, context.timeType) > 180 ? 'is-over-half' : ''} has-progress ${context.theme === Theme.Light ? `is-light` : `is-dark`}`}>
                        <span>{props.children}</span>
                        <div className='is-half is-left'>
                            <div className='is-less-half'>
                            </div>
                            <div style={{transform: `rotate(${calculateAngle(context.time, context.timeType)}deg)`}} className='is-progress'></div>
                        </div>
                    </div>
                </div>
            ) as JSX.Element
        }
    </Context.Consumer>
) as JSX.Element;

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description An interface for Circle component.
 * @param children The element to render inside of the Circle component.
 * @version 0.1.0
 */
export interface IProps {
    /**
     * @copyright OpenSourced
     * @author Jakub Cywka
     * @description A part of an interface for Circle component.
     * @param children The element to render inside of the Circle component.
     * @version 0.1.0
    */
    children: any;
};