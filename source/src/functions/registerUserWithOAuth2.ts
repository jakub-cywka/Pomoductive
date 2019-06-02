import { Dispatch } from 'redux';

import { Action } from '../interfaces/action';
import { State } from '../interfaces/state';
import { User } from '../interfaces/user';

import { updateUser } from './updateUser';

export const registerUserWithOAuth2: (userCredential: firebase.auth.UserCredential) => (dispatch: Dispatch<Action>, getState: () => State) => Promise<void> = userCredential => async (dispatch, getState) => {

    async function getUsers(): Promise<User[]> { 
        const users = await firebase.firestore().collection('users').get().then((value): Array<User> => {
            const users: Array<User> = [];
            value.forEach((result): void => {
                users.push(result.data() as User);
            });

            return users;
        });

        return users;
    };

    const { firebase } = getState();
    const user = userCredential.user as firebase.User;
    const users = await getUsers();

    let shouldRegisterUser: boolean = true;

    for (const { email } of users) {
        if (email === user.email) {
            shouldRegisterUser = false;
            break;
        } else {
            shouldRegisterUser = true;
        };
    };

    if (shouldRegisterUser === true) {

        const displayName = user.displayName as string;
        const blankSpaceIndex: number = displayName.indexOf(' ');
        const name: string = displayName.substring(0, blankSpaceIndex);
        const surname: string = displayName.substring(blankSpaceIndex + 1);

        firebase.firestore().collection('users').add({
            name,
            surname,
            email: user.email,
            password: user.email,
            id: users.length > 0 ? users[users.length - 1].id + 1 : 0
        } as User).then((value): void => {
            value.get().then((value): void => {
                dispatch(updateUser({
                    user: value.data() as User
                }));
            });
        });
    };
};