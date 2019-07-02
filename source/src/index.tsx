import * as React from 'react';

import * as ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import './index.css';

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import App from './App';

import { Provider } from 'react-redux';

import { store } from './constants/store';

import { IonApp, IonSplitPane, IonPage, IonMenuButton, IonButtons } from '@ionic/react';

import Background from './components/Background';
import Menu from './components/Menu';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
    <Provider store={store}>
        <IonApp>
            <Background>
                <IonSplitPane when='(max-width: 0px)' contentId='main'>
                    <BrowserRouter>
                        <Menu />
                        <IonPage id='main'>
                            <IonButtons color='primary'>
                                <IonMenuButton mode='md' color='primary'></IonMenuButton>
                            </IonButtons>
                            <App />
                        </IonPage>
                    </BrowserRouter>
                </IonSplitPane>
            </Background>
        </IonApp>
    </Provider>
), document.getElementById('root'));

serviceWorker.register();