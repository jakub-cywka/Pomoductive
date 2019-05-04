import * as React from 'react';

import * as ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import './index.css';

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import { App } from './App';

import { Provider } from 'react-redux';

import { store } from './constants/store';

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));

serviceWorker.register();