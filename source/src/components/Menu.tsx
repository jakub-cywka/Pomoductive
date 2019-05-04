import * as React from 'react';

import { connect } from 'react-redux';

import { State } from '../interfaces/state';
import { Theme } from '../enums/theme';
import { Dispatch, AnyAction } from 'redux';
import { UpdateTheme } from '../interfaces/updateTheme';
import { updateTheme } from '../helpers/updateTheme';
import { IonMenu, IonHeader, IonTitle, IonToolbar, IonContent, IonListHeader, IonList, IonMenuToggle, IonItem, IonLabel, IonToggle, IonDatetime } from '@ionic/react';
import { Time } from '../interfaces/time';
import { UpdateBreakTime } from '../interfaces/updateBreakTime';
import { UpdateWorkTime } from '../interfaces/updateWorkTime';
import { updateBreakTime } from '../helpers/updateBreakTime';
import { updateWorkTime } from '../helpers/updateWorkTime';
import { UpdateTime } from '../interfaces/updateTime';
import { updateTime } from '../helpers/updateTime';
import { TimeType } from '../enums/timeType';

export const Menu = connect((state: State): {
    theme: Theme;
    breakTime: Time;
    workTime: Time;
    time: Time;
    timeType: TimeType;
} => ({
    theme: state.theme,
    breakTime: state.breakTime,
    workTime: state.workTime,
    time: state.time,
    timeType: state.timeType
}), (dispatch: Dispatch<AnyAction>): {
    updateTheme: (payload: UpdateTheme) => AnyAction;
    updateBreakTime: (payload: UpdateBreakTime) => AnyAction;
    updateWorkTime: (payload: UpdateWorkTime) => AnyAction;
    updateTime: (payload: UpdateTime) => AnyAction;
} => ({
    updateTheme: (payload: UpdateTheme): AnyAction => dispatch(updateTheme(payload)),
    updateBreakTime: (payload: UpdateBreakTime): AnyAction => dispatch(updateBreakTime(payload)),
    updateWorkTime: (payload: UpdateWorkTime): AnyAction => dispatch(updateWorkTime(payload)),
    updateTime: (payload: UpdateTime): AnyAction => dispatch(updateTime(payload))
}))(({ theme, updateTheme, breakTime, updateBreakTime, workTime, updateWorkTime, time, updateTime, timeType }: any): JSX.Element => {

    const update: () => void = (): void => {
        updateTheme({
            theme: theme === Theme.Light ? Theme.Dark : Theme.Light
        } as UpdateTheme);
    };

    const updateBreak = (event: any): void => {
        console.log(event.currentTarget.value);
        updateBreakTime({
            breakTime: {
                minutes: parseInt(event.currentTarget.value.substring(event.currentTarget.value.indexOf(':') + 1, event.currentTarget.value.indexOf(':') + 3)),
                seconds: 0
            }
        } as UpdateBreakTime);
        if (timeType === TimeType.Break) {
            updateTime({
                time: {
                    minutes: parseInt(event.currentTarget.value.substring(event.currentTarget.value.indexOf(':') + 1, event.currentTarget.value.indexOf(':') + 3)),
                    seconds: 0
                }
            } as UpdateTime);
        };
    };

    const updateWork = (event: any): void => {
        updateWorkTime({
            workTime: {
                minutes: parseInt(event.currentTarget.value.substring(event.currentTarget.value.indexOf(':') + 1, event.currentTarget.value.indexOf(':') + 3)),
                seconds: 0
            }
        } as UpdateWorkTime);
        if (timeType === TimeType.Work) {
            updateTime({
                time: {
                    minutes: parseInt(event.currentTarget.value.substring(event.currentTarget.value.indexOf(':') + 1, event.currentTarget.value.indexOf(':') + 3)),
                    seconds: 0
                }
            } as UpdateTime);
        };
    };

    return (
        <IonMenu side='start' swipeGesture={true} contentId='main'>
            <IonHeader mode='md'>
                <IonToolbar color='primary' mode='md'>
                    <IonTitle>
                        Settings
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList lines='none' mode='md'>
                    <IonListHeader mode='md'>
                        Theme
                    </IonListHeader>
                    <IonMenuToggle autoHide={false}>
                        <IonItem mode='md'>
                            <IonLabel mode='md'>
                                Dark mode
                            </IonLabel>
                            <IonToggle onIonChange={update} mode='md'></IonToggle>
                        </IonItem>
                    </IonMenuToggle>
                    <IonListHeader mode='md'>
                        Time
                    </IonListHeader>
                    <IonMenuToggle autoHide={false}>
                        <IonItem mode='md'>
                            <IonLabel mode='md'>
                                Work
                            </IonLabel>
                            <IonDatetime onIonChange={updateWork} displayFormat='mm' pickerFormat='mm' mode='md'></IonDatetime>
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle autoHide={false}>
                        <IonItem mode='md'>
                            <IonLabel mode='md'>
                                Break
                            </IonLabel>
                            <IonDatetime onIonChange={updateBreak} displayFormat='mm' pickerFormat='mm' mode='md'></IonDatetime>
                        </IonItem>
                    </IonMenuToggle>
                </IonList>
            </IonContent>
        </IonMenu>
    );
});