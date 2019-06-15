import { Dispatch } from 'redux';

import { Action } from '../interfaces/action';
import { State } from '../interfaces/state';
import { User } from '../interfaces/user';

import { updateUser } from './updateUser';
import { updateRequestState } from './updateRequestState';

import { RequestState } from '../enums/requestState';

export const loginUserWithEmail: (shouldKeepLoggedIn: boolean) => (dispatch: Dispatch<Action>, getState: () => State) => void = shouldKeepLoggedIn => (dispatch, getState) => {
    
    const { firebase, user } = getState();

    dispatch(updateRequestState({ requestState: RequestState.Pending }));

    firebase.firestore().collection('users').get().then((value): void => {
        value.forEach((result): void => {

            const { email, password } = result.data() as User;

            if (email === user.email && password === user.password) {
                if (shouldKeepLoggedIn === true) {
                    localStorage.setItem('email', email);
                    localStorage.setItem('password', password);
                };
                dispatch(updateUser({
                    user: result.data() as User
                }));
                dispatch(updateRequestState({ requestState: RequestState.Resolved }));
            };
        });
    }).catch(() => dispatch(updateRequestState({ requestState: RequestState.Rejected })));
};