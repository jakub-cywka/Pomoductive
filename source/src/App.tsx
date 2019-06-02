import * as React from 'react';

import { IonApp, IonSplitPane, IonPage, IonButtons, IonMenuButton } from '@ionic/react';

import { Background } from './components/Background';
import { Menu } from './components/Menu';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description A root component of the whole Pomoductive app. Renders all of its children components.
 * @version 0.3.0
 * @license MIT
*/
export default (): JSX.Element => (
  <IonApp>
    <Background>
      <IonSplitPane when='(max-width: 0px)' contentId='main'>
        <Menu />
        <IonPage id='main'>
          <IonButtons color='primary'>
            <IonMenuButton mode='md' color='primary'></IonMenuButton>
          </IonButtons>
          <BrowserRouter>
            <Route path='/home' component={Home} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Switch>
              <Redirect to='/login' path='/' exact />
            </Switch>
          </BrowserRouter>
        </IonPage>
      </IonSplitPane>
    </Background>
  </IonApp>
);