import React, { useState, lazy, useEffect, Suspense } from 'react';

import { connect } from 'react-redux';

import { State } from '../interfaces/state';
import { User } from '../interfaces/user';
import { Action } from '../interfaces/action';
import { FormStatus } from '../interfaces/formStatus';

import { Dispatch } from 'redux';

import { updateUser } from '../functions/updateUser';
import { loginUserWithEmail } from '../functions/loginUserWithEmail';
import { loginUserWithOAuth2 } from '../functions/loginUserWithOAuth2';

import { Formik, FormikActions, Form } from 'formik';

import { FormMessageStatus } from '../enums/formMessageStatus';
import { Theme } from '../enums/theme';

import { IonItemGroup, IonButton, IonText } from '@ionic/react';

import { FormItem } from './FormItem';
import { FormLabel } from './FormLabel';
import { FormikField } from './FormikField';
const Alert = lazy(() => import('./Alert'));

import { StyledFirebaseAuth } from 'react-firebaseui';

import { Link } from 'react-router-dom';

import firebase from 'firebase';

interface MapStateToProps {
    user: User;
    theme: Theme;
};

interface MapDispatchToProps {
    updateUser: (user: User) => Action;
    loginUserWithEmail: () => Action;
    loginUserWithOAuth2: (userCredential: firebase.auth.UserCredential) => Action;
};

interface Props extends MapStateToProps, MapDispatchToProps {  };

const mapStateToProps: (state: State) => MapStateToProps = state => ({
    user: state.user,
    theme: state.theme
});

const mapDispatchToProps: (dispatch: Dispatch<Action>) => MapDispatchToProps = dispatch => ({
    updateUser: user => dispatch(updateUser({ user })),
    loginUserWithEmail: () => dispatch(loginUserWithEmail() as unknown as Action),
    loginUserWithOAuth2: userCredential => dispatch(loginUserWithOAuth2(userCredential) as unknown as Action)
});

export const LoginFormContainer: ({ user, updateUser, loginUserWithEmail, loginUserWithOAuth2, theme }: Props) => JSX.Element = ({ user, updateUser, loginUserWithEmail, loginUserWithOAuth2, theme }) => {

    const [shouldAlertAppear, setShouldAlertAppear] = useState(null as unknown as boolean);

    useEffect(() => {
        setShouldAlertAppear(true);
    }, []);

    function onFormikSubmit(values: User, formikActions: FormikActions<User>): void {

        formikActions.setSubmitting(false);

        setShouldAlertAppear(true);

        if (values.email === '') {
            formikActions.setStatus({
                message: 'Email field needs to be filled.',
                status: FormMessageStatus.Error
            } as FormStatus);
        };
        if (values.password === '') {
            formikActions.setStatus({
                message: 'Password field needs to be filled.',
                status: FormMessageStatus.Error
            } as FormStatus);
        };
        if (values.password.length < 8) {
            formikActions.setStatus({
                message: 'Password is too short (must be minimum 8 symbols length).',
                status: FormMessageStatus.Error
            } as FormStatus);
        };
        if (values.email !== '' && values.password !== '') {
            formikActions.setStatus({
                message: 'Everything\'s good!',
                status: FormMessageStatus.Success
            } as FormStatus);

            updateUser(values);

            loginUserWithEmail();
        };
    };

    return (
        <>
            <Formik initialValues={user} onSubmit={onFormikSubmit}>
                {({status}): JSX.Element => (
                    <div style={{flexDirection: 'column'}}>
                        {
                            shouldAlertAppear === true ? (
                                <Suspense fallback={<h1>Loading...</h1>}>
                                    <Alert class='ion-padding' color={status !== undefined ? status.status === FormMessageStatus.Success ? 'success' : 'warning' : undefined} mode='md'>
                                        {status !== undefined ? status.message : null}
                                    </Alert>
                                </Suspense>
                            ) : null
                        }
                        <Form className='ion-margin-vertical' style={{flexDirection: 'column', display: 'flex'}}>
                            <IonItemGroup>
                                <FormItem class='ion-margin-vertical' color='primary' mode='md'>
                                    <FormLabel>
                                        Email
                                    </FormLabel>
                                    <FormikField type='email' name='email' />
                                </FormItem>
                                <FormItem class='ion-margin-vertical' color='primary' mode='md'>
                                    <FormLabel>
                                        Password
                                    </FormLabel>
                                    <FormikField type='password' name='password' />
                                </FormItem>
                            </IonItemGroup>
                            <IonText color={theme === Theme.Light ? Theme.Dark : Theme.Light}>Don't have an account yet? Sign up <Link to='/register' style={{textDecoration: 'none'}}>here</Link></IonText>
                            <IonText color={theme === Theme.Light ? Theme.Dark : Theme.Light}>If you don't want an account, jump <Link to='/home' style={{textDecoration: 'none'}}>here</Link></IonText>
                            <IonButton class='ion-margin-top' color='primary' type='submit'>
                                Login me!
                            </IonButton>
                        </Form>
                    </div>
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
                    signInSuccessWithAuthResult(authResult: firebase.auth.UserCredential): boolean {
                        loginUserWithOAuth2(authResult);
                        return false;
                    }
                }
            }} firebaseAuth={firebase.auth()} />
        </>
    );
};

export const LoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);