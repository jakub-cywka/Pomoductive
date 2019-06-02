import { Store, createStore, applyMiddleware, Dispatch, Action } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import * as ReduxThunk from 'redux-thunk';

import { State } from '../interfaces/state';

import { reducer } from './reducer';

export const store: Store<State, Action> & {
    dispatch: () => {}
} = createStore(reducer, composeWithDevTools(applyMiddleware(ReduxThunk.default)));