import * as React from 'react';

import { IonApp, IonSplitPane, IonPage, IonButtons, IonMenuButton } from '@ionic/react';

import { Circle } from './components/Circle';
import { Background } from './components/Background';
import { TimeText } from './components/TimeText';
import { ThenText } from './components/ThenText';
import { MiddleAction } from './components/MiddleAction';
import { SideAction } from './components/SideAction';
import { Actions } from './components/Actions';

import { Direction } from './enums/direction';
import { Menu } from './components/Menu';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description A root component of the whole Pomoductive app. Renders all of its children components.
 * @version 0.3.0
 * @license MIT
*/
export const App: () => JSX.Element = (): JSX.Element => (
  <IonApp>
    <Background>
      <IonSplitPane when='(max-width: 0px)' contentId='main'>
        <Menu />
        <IonPage id='main'>
          <IonButtons color='primary'>
            <IonMenuButton mode='md' color='primary'></IonMenuButton>
          </IonButtons>
          <Background>
            <Circle>
              <TimeText />
              <ThenText />
            </Circle>
            <div style={{marginTop: '32px'}}>
              <Actions>
                <SideAction direction={Direction.Backward} />
                <MiddleAction />
                <SideAction direction={Direction.Forward} />
              </Actions>
            </div>
          </Background>
        </IonPage>
      </IonSplitPane>
    </Background>
  </IonApp>
);