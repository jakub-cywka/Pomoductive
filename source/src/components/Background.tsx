import React from 'react';

import { connect, ConnectedComponentClass } from 'react-redux';

import { State } from '../interfaces/state';

import { Theme } from '../enums/theme';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description A wrapper component for a whole application.
 * @param children The element to render inside of the Background component.
 * @version 0.3.0
 * @license MIT
 */
export const Background: ConnectedComponentClass<({ theme, children }: {
    theme: Theme;
    children: any;
}) => JSX.Element, Pick<any, string | number | symbol>> = connect((state: State): {
    theme: Theme;
} => ({
    theme: state.theme
}), null)(({
    theme,
    children
}: {
    theme: Theme;
    children: any;
}): JSX.Element => (
        <div className={`is-container is-fullsized is-${theme}`}>
            {children}
        </div>
    )
);