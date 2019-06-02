import React, { HTMLAttributes } from 'react';

import { connect } from 'react-redux';

import { State } from '../interfaces/state';

import { Theme } from '../enums/theme';

interface Props extends HTMLAttributes<HTMLDivElement> {
    theme: Theme;
};

const mapStateToProps: (state: State) => ({
    theme: Theme;
}) = state => ({
    theme: state.theme
});

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description A wrapper component for a whole application.
 * @param children The element to render inside of the Background component.
 * @version 0.3.0
 * @license MIT
 */
export const Background = connect(mapStateToProps, () => ({}))(({ ...attributes }: Props) => (
    <div {...attributes} className={`is-container is-fullsized is-${attributes.theme}`}>
        {attributes.children}
    </div>
));