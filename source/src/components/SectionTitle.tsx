import React from 'react';

import { State } from '../interfaces/state';

import { Theme } from '../enums/theme';

import { IonText } from '@ionic/react';

import { connect } from 'react-redux';

interface MapStateToProps {
    theme: Theme;
};

const mapStateToProps: (state: State) => MapStateToProps = state => ({
    theme: state.theme
});

interface Props extends MapStateToProps {
    children: any;
};

const SectionTitleContainer: ({ theme, children }: Props) => JSX.Element = ({ theme, children }) => (
    <IonText mode='md' color={theme === Theme.Light ? Theme.Dark : Theme.Light}>
        <h1>
            {children}
        </h1>
    </IonText>
);

export const SectionTitle = connect(mapStateToProps, null)(SectionTitleContainer);