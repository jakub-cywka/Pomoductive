import React, { useState, lazy, useEffect, Suspense, SetStateAction, Dispatch as ReactDispatch } from 'react';

import { connect } from 'react-redux';

import { State } from '../interfaces/state';
import { User } from '../interfaces/user';
import { Action } from '../interfaces/action';
import { FormStatus } from '../interfaces/formStatus';

import { Dispatch as ReduxDispatch } from 'redux';

import { updateUser } from '../functions/updateUser';
import { loginUserWithEmail } from '../functions/loginUserWithEmail';
import { loginUserWithOAuth2 } from '../functions/loginUserWithOAuth2';

import { Formik, FormikActions, Form } from 'formik';

import { FormMessageStatus } from '../enums/formMessageStatus';
import { Theme } from '../enums/theme';

import { IonItemGroup, IonButton, IonText, IonCheckbox, IonItem, IonLabel } from '@ionic/react';
import { CheckboxChangeEventDetail } from '@ionic/core';

import { FormItem } from './FormItem';
import { FormLabel } from './FormLabel';
import { FormikField } from './FormikField';
const Alert = lazy(() => import('./Alert'));
import { PasswordFormItem } from './PasswordFormItem';
import { FormikError } from './FormikError';

import { StyledFirebaseAuth } from 'react-firebaseui';

import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

import * as Yup from 'yup';

import firebase from 'firebase';

interface MapStateToProps {
    user: User;
    theme: Theme;
};

const SignInSchema = Yup.object().shape({
    email: Yup.string().required('Email is required.').email('Must be email-like.').lowercase('Must be lower case.'),
    password: Yup.string().required('Password is required.').min(8, 'Password is too short.').max(25, 'Password is too long.')
});

interface MapDispatchToProps {
    updateUser: (user: User) => Action;
    loginUserWithEmail: (shouldKeepLoggedIn: boolean) => Action;
    loginUserWithOAuth2: (userCredential: firebase.auth.UserCredential, shouldKeepLoggedIn: boolean) => Action;
};

interface Props extends MapStateToProps, MapDispatchToProps {  };

const mapStateToProps: (state: State) => MapStateToProps = state => ({
    user: state.user,
    theme: state.theme
});

const mapDispatchToProps: (dispatch: ReduxDispatch<Action>) => MapDispatchToProps = dispatch => ({
    updateUser: user => dispatch(updateUser({ user })),
    loginUserWithEmail: shouldKeepLoggedIn => dispatch(loginUserWithEmail(shouldKeepLoggedIn) as unknown as Action),
    loginUserWithOAuth2: (userCredential, shouldKeepLoggedIn) => dispatch(loginUserWithOAuth2(userCredential, shouldKeepLoggedIn) as unknown as Action)
});

export const LoginFormContainer: ({ user, updateUser, loginUserWithEmail, loginUserWithOAuth2, theme, history }: Props & RouteComponentProps) => JSX.Element = ({ user, updateUser, loginUserWithEmail, loginUserWithOAuth2, theme, history }) => {
    const [shouldKeepLoggedIn, setShouldKeepLoggedIn] = useState(false);

    function toggleShouldKeepLoggedIn(event: CustomEvent<CheckboxChangeEventDetail>) {
        setShouldKeepLoggedIn(event.detail.checked);
    };

    function onFormikSubmit(values: User, formikActions: FormikActions<User>): void {
        formikActions.setSubmitting(false);
        updateUser(values);
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
};

export const LoginForm = withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer) as any);