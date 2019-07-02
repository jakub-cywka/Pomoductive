import React, { useState } from 'react';

import FormItem from './FormItem';
import FormLabel from './FormLabel';
import FormikField from './FormikField';
import FormikError from './FormikError';

import { IonButton, IonIcon } from '@ionic/react';
import { Components } from '@ionic/core';

import { useSelector } from 'react-redux';

import { State } from '../interfaces/state';

import { Theme } from '../enums/theme';

export default function({ labelText, ...attributes }: Components.IonInputAttributes & {
    labelText?: string;
}) {

    const [passwordFieldType, setPasswordFieldType] = useState('password' as Components.IonInputAttributes['type']);
    const theme = useSelector<State, Theme>(state => state.theme);

    function togglePasswordFieldType() {
        setPasswordFieldType(passwordFieldType === 'password' ? 'text' : 'password');
    };

    return (
        <>
            <FormikError name='password' />
            <FormItem class='ion-margin-vertical'>
                <FormItem button={false} color='primary'>
                    <FormLabel>
                        {labelText !== undefined ? labelText : 'Password'}
                    </FormLabel>
                    <FormikField {...attributes} type={passwordFieldType} name='password' />
                </FormItem>
                <IonButton onClick={togglePasswordFieldType} color={theme} mode='md'>
                    <IonIcon name='eye' mode='md' />
                </IonButton>
            </FormItem>
        </>
    );
};