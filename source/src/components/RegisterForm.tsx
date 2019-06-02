import React, { lazy, Suspense, useState, useEffect } from 'react';

import { connect } from 'react-redux';

import { Dispatch, AnyAction } from 'redux';

import { State } from '../interfaces/state';
import { FormUser } from '../interfaces/formUser';
import { Action } from '../interfaces/action';
import { User } from '../interfaces/user';
import { FormStatus } from '../interfaces/formStatus';

import { registerUserWithOAuth2 } from '../functions/registerUserWithOAuth2';
import { updateUser } from '../functions/updateUser';
import { registerUserWithEmail } from '../functions/registerUserWithEmail';

import { FormMessageStatus } from '../enums/formMessageStatus';

import { Formik, FormikActions, Form } from 'formik';

import { IonButton, IonItemGroup, IonNote, IonText } from '@ionic/react';

const Alert = lazy(() => import('./Alert'));
import { FormikField } from './FormikField';
import { FormItem } from './FormItem';
import { FormLabel } from './FormLabel';

import { Link } from 'react-router-dom';

import firebase from 'firebase';

interface MapStateToProps {
    user: User;
    firebase: typeof firebase;
};

interface MapDispatchToProps {
    updateUser: (user: User) => Action;
    registerUserWithEmail: () => Action;
    registerUserWithOAuth2: (userCredential: firebase.auth.UserCredential) => Action;
};

interface Props extends MapStateToProps, MapDispatchToProps {  };

const mapStateToProps: (state: State) => MapStateToProps = state => ({
    user: state.user,
    firebase: state.firebase
});

const mapDispatchToProps: (dispatch: Dispatch<Action>) => MapDispatchToProps = dispatch => ({
    updateUser: user => dispatch(updateUser({ user })),
    registerUserWithEmail: () => dispatch(registerUserWithEmail() as unknown as Action),
    registerUserWithOAuth2: (userCredential: firebase.auth.UserCredential) => dispatch(registerUserWithOAuth2(userCredential) as unknown as Action)
});

const RegisterFormContainer: ({ user, updateUser, registerUserWithEmail, firebase, registerUserWithOAuth2 }: Props) => JSX.Element = ({ user, updateUser, registerUserWithEmail, registerUserWithOAuth2, firebase }) => {

    const [shouldAlertAppear, setShouldAlertAppear] = useState(null as unknown as boolean);

    function onFormikSubmit(values: FormUser, formikActions: FormikActions<FormUser>): void {

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
        if (values.email === '' && values.password === '') {
            formikActions.setStatus({
                message: 'Both email and password field needs to be filled.',
                status: FormMessageStatus.Error
            } as FormStatus);
        };
        if (values.password.length < 8) {
            formikActions.setStatus({
                message: 'Password is too short (minimum 8 letters length).',
                status: FormMessageStatus.Error
            } as FormStatus);
        };
        if (values.email !== '' && values.password !== '' && values.password.length >= 8) {
            formikActions.setStatus({
                message: 'Everything\'s good!',
                status: FormMessageStatus.Success
            } as FormStatus);

            updateUser({
                ...user,
                ...values
            });

            registerUserWithEmail();
        };
    };

    useEffect(() => {
        setShouldAlertAppear(false);
    }, []);

    return (
        <>
            <Formik onSubmit={onFormikSubmit} initialValues={user as FormUser}>
                {({status}): JSX.Element => (
                    <div style={{flexDirection: 'column'}}>
                        {
                            shouldAlertAppear === true ? (
                                <Suspense fallback={<h1>Loading...</h1>}>
                                    <Alert class='ion-padding' mode='md' color={status !== undefined ? status.status === FormMessageStatus.Success ? 'success' : 'warning' : undefined}>
                                        {status !== undefined ? status.message : null}
                                    </Alert>
                                </Suspense>
                            ) : null
                        }
                        <Form className='ion-margin-vertical' style={{flexDirection: 'column', display: 'flex'}}>
                            <IonItemGroup>
                                <FormItem button={true} class='ion-margin-vertical' color='tertiary'>
                                    <FormLabel>
                                        First name
                                    </FormLabel>
                                    <FormikField autocomplete='on' name='name' type='text' />
                                </FormItem>
                                <FormItem button={true} class='ion-margin-vertical' color='tertiary'>
                                    <FormLabel>
                                        Surname
                                    </FormLabel>
                                    <FormikField autocomplete='on' name='surname' type='text' />
                                </FormItem>
                                <FormItem button={true} class='ion-margin-vertical'>
                                    <FormLabel>
                                        Email*
                                    </FormLabel>
                                    <FormikField autocomplete='on' name='email' type='email' />
                                </FormItem>
                                <FormItem button={true} class='ion-margin-vertical'>
                                    <FormLabel>
                                        Password*
                                    </FormLabel>
                                    <FormikField autocomplete='on' name='password' type='password' />
                                </FormItem>
                            </IonItemGroup>
                            <IonText>Have an account already? Sign in <Link to='/login' style={{textDecoration: 'none'}}>here</Link></IonText>
                            <IonNote color='secondary' mode='md' class='ion-text-start ion-margin-top'>
                                *required
                            </IonNote>
                            <IonButton color='primary' class='ion-margin-top' type='submit'>
                                Register me!
                            </IonButton>
                        </Form>
                    </div>
                )}
            </Formik>
        </>
    );  
};

export const RegisterForm = connect(mapStateToProps, mapDispatchToProps)(RegisterFormContainer);