import React from 'react';

import { State } from '../interfaces/state';

import { Theme } from '../enums/theme';

import { IonText } from '@ionic/react';

import { useSelector } from 'react-redux';

import ChildrenProp from '../interfaces/childrenProp';

interface MapStateToProps {
    theme: Theme;
};

export default ({ children }: ChildrenProp) => {

    const theme = useSelector<State, Theme>(state => state.theme);

    return (
        <IonText mode='md' color={theme === Theme.Light ? Theme.Dark : Theme.Light}>
            <h1>
                {children}
            </h1>
        </IonText>
    );
};