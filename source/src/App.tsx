import React, { useEffect } from 'react';

import { Route, Switch, Redirect, withRouter, RouteComponentProps } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

import { Action } from './interfaces/action';
import { State } from './interfaces/state';

import { Dispatch } from 'redux';

import { loginUserWithEmail } from './functions/loginUserWithEmail';
import { updateUser } from './functions/updateUser';

import { useDispatch, useSelector } from 'react-redux';

import { initialState } from './constants/initialState';

import { RequestState } from './enums/requestState';

import { IonSpinner } from '@ionic/react';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description A root component of the whole Pomoductive app. Renders all of its children components.
 * @version 0.3.0
 * @license MIT
*/
export const App: ({ history }: RouteComponentProps) => JSX.Element = ({ history }) => {

  const dispatch: Dispatch<Action> = useDispatch();
  const requestState = useSelector<State, RequestState>(state => state.requestState);
  
  useEffect((): void => {

    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    
    if (email !== undefined && email !== null && password !== undefined && password !== null) {
      dispatch(updateUser({
        user: {
          ...initialState.user,
          email,
          password
        }
      }));
      dispatch(loginUserWithEmail(true) as unknown as Action);
      history.push('/home');
    };
  }, []);

  return (
    <>
      {
        requestState === RequestState.Pending ? (
          <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <IonSpinner color='primary' style={{'width': '64px', 'height': '64px'}} name='crescent' />
          </div>
        ) : requestState === RequestState.Resolved ? (
          <>
            <Route path='/home' component={Home} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Switch>
              <Redirect to='/login' path='/' exact />
            </Switch>
          </>
        ) : null
      }
    </>
  );
};

export default withRouter(App);