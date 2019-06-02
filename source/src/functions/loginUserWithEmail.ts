import { Dispatch } from 'redux';

import { Action } from '../interfaces/action';
import { State } from '../interfaces/state';
import { User } from '../interfaces/user';

import { updateUser } from './updateUser';

export const loginUserWithEmail: () => (dispatch: Dispatch<Action>, getState: () => State) => void = () => (dispatch, getState) => {
    
    const { firebase, user } = getState();

    firebase.firestore().collection('users').get().then((value): void => {
        value.forEach((result): void => {

            const { email, password } = result.data() as User;

            if (email === user.email && password === user.password) {
                dispatch(updateUser({
                    user: result.data() as User
                }));
            };
        });
    });
};