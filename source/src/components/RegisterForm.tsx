import React, { lazy, Suspense, useState, useEffect } from 'react';

import { connect, useSelector, useDispatch } from 'react-redux';

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
import FormikField from './FormikField';
import FormItem from './FormItem';
import FormLabel from './FormLabel';
import PasswordFormItem from './PasswordFormItem';
import FormikError from './FormikError';

import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
    name: Yup.string().notRequired(),
    surname: Yup.string().notRequired(),
    email: Yup.string().required('Email is required.').email('Must be email-like.').lowercase('Must be lower case.'),
    password: Yup.string().required('Password is required.').min(8, 'Password is too short.').max(25, 'Password is too long.')
});

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

export default withRouter(({ history }) => {


    const user = useSelector<State, User>(state => state.user);
    
    const dispatch = useDispatch();

    function onFormikSubmit(values: FormUser, formikActions: FormikActions<FormUser>) {
        formikActions.setSubmitting(false);
        
        dispatch(updateUser({
            user: {
                ...user,
                ...values
            }
        }));

        dispatch(registerUserWithEmail());

        history.push('/home');
    };

    return (
        <>
            <Formik validationSchema={SignUpSchema} onSubmit={onFormikSubmit} initialValues={user as FormUser}>
                {(): JSX.Element => (
                    <Form className='ion-margin-vertical' style={{flexDirection: 'column', display: 'flex'}}>
                        <IonItemGroup>
                            <FormikError name='name' />
                            <FormItem class='ion-margin-vertical' color='tertiary'>
                                <FormLabel>
                                    First name
                                </FormLabel>
                                <FormikField autocomplete='on' name='name' type='text' />
                            </FormItem>
                            <FormikError name='surname' />
                            <FormItem class='ion-margin-vertical' color='tertiary'>
                                <FormLabel>
                                    Surname
                                </FormLabel>
                                <FormikField autocomplete='on' name='surname' type='text' />
                            </FormItem>
                            <FormikError name='email' />
                            <FormItem class='ion-margin-vertical'>
                                <FormLabel>
                                    Email*
                                </FormLabel>
                                <FormikField autocomplete='on' name='email' type='email' />
                            </FormItem>
                            <PasswordFormItem labelText='Password*' autocomplete='on' />
                        </IonItemGroup>
                        <IonText>Have an account already? Sign in <Link to='/login' style={{textDecoration: 'none'}}>here</Link></IonText>
                        <IonNote color='secondary' mode='md' class='ion-text-start ion-margin-top'>
                            *required
                        </IonNote>
                        <IonButton color='primary' class='ion-margin-top' type='submit'>
                            Register me!
                        </IonButton>
                    </Form>
                )}
            </Formik>
        </>
    );  
});