import { State } from '../interfaces/state';

import { Then } from '../enums/then';
import { TimerState } from '../enums/timerState';
import { Theme } from '../enums/theme';
import { TimeType } from '../enums/timeType';
import { RequestState } from '../enums/requestState';

import * as Firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

Firebase.initializeApp({
    apiKey: 'AIzaSyBBLa1JB7qOx3K9qLh8E7GwtmH36Fbbs8E',
    authDomain: 'pomoductive-app.firebaseapp.com',
    databaseURL: 'https://pomoductive-app.firebaseio.com',
    projectId: 'pomoductive-app',
    storageBucket: 'pomoductive-app.appspot.com',
    messagingSenderId: '1093188668461',
    appId: '1:1093188668461:web:7289e6ca321e5ad3'
});

export const initialState: State = {
    time: {
        minutes: 25,
        seconds: 0
    },
    then: Then.Break,
    timerState: TimerState.Paused,
    theme: new Date().getHours() > 18 ? Theme.Dark : Theme.Light,
    timeType: TimeType.Work,
    workTime: {
        minutes: 25,
        seconds: 0
    },
    breakTime: {
        minutes: 5,
        seconds: 0
    },
    id: null as unknown as NodeJS.Timeout,
    firebase: Firebase,
    requestState: RequestState.Resolved,
    user: {
        name: '',
        surname: '',
        email: '',
        password: '',
        id: 0
    }
};