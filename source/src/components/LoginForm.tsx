import React, { useState, lazy } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { State } from '../interfaces/state';
import { User } from '../interfaces/user';

import { updateUser } from '../functions/updateUser';
import { loginUserWithEmail } from '../functions/loginUserWithEmail';
import { loginUserWithOAuth2 } from '../functions/loginUserWithOAuth2';

import { Formik, FormikActions, Form } from 'formik';

import { Theme } from '../enums/theme';

import { IonItemGroup, IonButton, IonText, IonCheckbox, IonItem, IonLabel } from '@ionic/react';
import { CheckboxChangeEventDetail } from '@ionic/core';

import FormItem from './FormItem';
import FormLabel from './FormLabel';
import FormikField from './FormikField';
const Alert = lazy(() => import('./Alert'));
import PasswordFormItem from './PasswordFormItem';
import FormikError from './FormikError';

import { StyledFirebaseAuth } from 'react-firebaseui';

import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

import * as Yup from 'yup';

import firebase from 'firebase';

const SignInSchema = Yup.object().shape({
    email: Yup.string().required('Email is required.').email('Must be email-like.').lowercase('Must be lower case.'),
    password: Yup.string().required('Password is required.').min(8, 'Password is too short.').max(25, 'Password is too long.')
});

export default withRouter(({ history }: RouteComponentProps) => {
    const [shouldKeepLoggedIn, setShouldKeepLoggedIn] = useState(false);
    const user = useSelector<State, User>(state => state.user);
    const dispatch = useDispatch();
    const theme = useSelector<State, Theme>(state => state.theme);

    function toggleShouldKeepLoggedIn(event: CustomEvent<CheckboxChangeEventDetail>) {
        setShouldKeepLoggedIn(event.detail.checked);
    };

    function onFormikSubmit(values: User, formikActions: FormikActions<User>): void {
        formikActions.setSubmitting(false);
        dispatch(updateUser({ user: {
            ...user,
            ...values
         } }));
        loginUserWithEmail(shouldKeepLoggedIn);
        history.push('/home');
    };

    function signAsGuest() {
        history.push('/home');
    };

    return (
        <>
            <Formik validationSchema={SignInSchema} initialValues={user} onSubmit={onFormikSubmit}>
                {(): JSX.Element => (
                    <Form className='ion-margin-vertical' style={{flexDirection: 'column', display: 'flex'}}>
                        <IonItemGroup>
                            <FormikError name='email' />
                            <FormItem class='ion-margin-vertical' color='primary'>
                                <FormLabel>
                                    Email
                                </FormLabel>
                                <FormikField type='email' name='email' />
                            </FormItem>
                            <PasswordFormItem />
                            <IonItem color={theme} lines='none' mode='md'>
                                <IonCheckbox onIonChange={toggleShouldKeepLoggedIn} mode='md' checked={shouldKeepLoggedIn} />
                                <IonLabel class='ion-margin-start' mode='md'>
                                    Keep me signed in
                                </IonLabel>
                            </IonItem>
                        </IonItemGroup>
                        <IonText color={theme === Theme.Light ? Theme.Dark : Theme.Light}>Don't have an account yet? Sign up <Link to='/register' style={{textDecoration: 'none'}}>here</Link></IonText>
                        <IonButton class='ion-margin-top' color='primary' type='submit'>
                            Login me!
                        </IonButton>
                        <IonButton onClick={signAsGuest} class='ion-margin-top' color='tertiary'>
                            Use without an account
                        </IonButton>
                    </Form>
                )}
            </Formik>
            <StyledFirebaseAuth uiConfig={{
                signInFlow: 'popup',
                signInSuccessUrl: 'https://pomoductive-app.firebaseapp.com',
                signInOptions: [
                    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                    firebase.auth.FacebookAuthProvider.PROVIDER_ID
                ],
                callbacks: {
                    signInSuccessWithAuthResult(authResult: firebase.auth.UserCredential) {
                        loginUserWithOAuth2(authResult, shouldKeepLoggedIn);
                        history.push('/home');
                        return false;
                    },
                }
            }} firebaseAuth={firebase.auth()} />
        </>
    );
});