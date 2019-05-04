import * as React from 'react';

import { connect } from 'react-redux';

import { State } from '../interfaces/state';

import { Theme } from '../enums/theme';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description A wrapper component for a whole application.
 * @param children The element to render inside of the Background component.
 * @version 0.2.0
 */
export const Background = connect((state: State): {
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