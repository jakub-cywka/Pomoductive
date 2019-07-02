import * as React from 'react';

import { State } from '../interfaces/state';

import { Theme } from '../enums/theme';

import { useSelector } from 'react-redux';

export default ({ ...attributes }: React.HTMLAttributes<HTMLDivElement>) => {

    const theme = useSelector<State, Theme>(state => state.theme);

    return (
        <div {...attributes} className={`is-container is-fullsized is-${theme}`}>
            {attributes.children}
        </div>
    )
};