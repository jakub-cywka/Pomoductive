import * as React from 'react';

import { IonApp } from '@ionic/react';

import { IContext, Context } from './context/context';

import { Time } from './interfaces/time';

import { Circle } from './components/Circle';
import { Background } from './components/Background';
import { TimeText } from './components/TimeText';
import { ThenText } from './components/ThenText';
import { MiddleAction } from './components/MiddleAction';
import { SideAction } from './components/SideAction';
import { Actions } from './components/Actions';

import { TimerState } from './enums/timerState';

import { updateTime } from './helpers/updateTime';
import { Direction } from './enums/direction';
import { TimeType } from './enums/timeType';
import { Then } from './enums/then';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description A root component of the whole app. Stores all of its logic and provides the state for all of the children components.
 * @version 0.1.0
*/
export const App = (): JSX.Element => {

  const [state, setState]: [IContext, React.Dispatch<React.SetStateAction<IContext>>] = React.useState({
    ...React.useContext(Context)
  } as IContext);

  const updateTimeCallback: React.MutableRefObject<() => Time> = React.useRef((): Time => updateTime(state.time));

  React.useEffect((): void => {
    updateTimeCallback.current = (): Time => updateTime(state.time);
    if (state.time.minutes === 0 && state.time.seconds === 0) {
      skip();
    };
  }, [state.time.minutes, state.time.seconds]);

  React.useEffect((): (() => void) | undefined => {
      if (state.timerState === TimerState.Running) {
        const id: NodeJS.Timeout = setInterval(() => {
          setState({
            ...state,
            time: updateTimeCallback.current(),
          } as IContext);
        }, 1000);
        return () => clearInterval(id);
      };
      if (state.timerState === TimerState.Reseted) {
        const timeType: TimeType = state.timeType === TimeType.Work ? TimeType.Break : TimeType.Work as TimeType;
        setState({
          ...state,
          timeType,
          time: timeType === TimeType.Work ? {
            minutes: 25,
            seconds: 0
          } as Time : {
            minutes: 5,
            seconds: 0
          } as Time,
          timerState: TimerState.Paused,
          then: timeType === TimeType.Work ? Then.Break : Then.Work
        } as IContext);
      };
  }, [state.timerState]);

  const skip = (): void => {
    setState({
      ...state,
      timerState: TimerState.Reseted
    } as IContext);
  };

  const updateTimerState = (): void => {
    setState({
      ...state,
      timerState: state.timerState === TimerState.Running ? TimerState.Paused : TimerState.Running
    } as IContext);
  };

  return (
    <Context.Provider value={state}>
      <IonApp>
        <Background>
          <Circle>
            <TimeText />
            <ThenText />
          </Circle>
          <div style={{marginTop: '32px'}}>
            <Actions>
              <SideAction onClick={skip} direction={Direction.Backward} />
              <MiddleAction onClick={updateTimerState} />
              <SideAction onClick={skip} direction={Direction.Forward} />
            </Actions>
          </div>
        </Background>
      </IonApp>
    </Context.Provider>
    ) as JSX.Element;
};