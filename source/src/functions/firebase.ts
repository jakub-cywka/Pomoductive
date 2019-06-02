import Firebase from 'firebase';

import { initialState } from '../constants/initialState';

export const firebase: (firebase: typeof Firebase) => typeof Firebase = (firebase = initialState.firebase) => firebase;