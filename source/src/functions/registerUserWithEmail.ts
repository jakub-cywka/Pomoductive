import { Dispatch } from 'redux';

import { Action } from '../interfaces/action';
import { State } from '../interfaces/state';
import { User } from '../interfaces/user';

import { User as FirebaseUser } from 'firebase';

import { updateUser } from './updateUser';
import { updateRequestState } from './updateRequestState';

import { RequestState } from '../enums/requestState';

export const registerUserWithEmail: () => (dispatch: Dispatch<Action>, getState: () => State) => void = () => (dispatch, getState) => {

    dispatch(updateRequestState({ requestState: RequestState.Pending }));

    const { firebase, user } = getState();

    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then((value): void => {
        
        const user = value.user as FirebaseUser;

        user.sendEmailVerification();
    }).then((): void => {

        firebase.firestore().collection('users').get().then((value): void => {
            
            let shouldRegister: boolean = true;
            
            const users: User[] = [];

            value.forEach((result): void => {
                users.push(result.data() as User);
            });

            for (const { email } of users) {
                if (email === user.email) {
                    shouldRegister = false;
                    break;
                } else {
                    shouldRegister = true;
                };
            };

            if (shouldRegister === true) {
                firebase.firestore().collection('users').add({
                    ...user,
                    id: users.length > 0 ? users[users.length - 1].id + 1 : 0
                } as User).then((value): void => {
                    value.get().then((value): void => {
                        dispatch(updateUser({
                            user: value.data() as User
                        }));
                        dispatch(updateRequestState({ requestState: RequestState.Resolved }));
                    });
                }).catch(() => dispatch(updateRequestState({ requestState: RequestState.Rejected })));
            };
        });
    });
};