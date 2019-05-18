import React from 'react';

import { connect, ConnectedComponentClass } from 'react-redux';

import { State } from '../interfaces/state';
import { UpdateTheme } from '../interfaces/updateTheme';
import { UpdateBreakTime } from '../interfaces/updateBreakTime';
import { UpdateWorkTime } from '../interfaces/updateWorkTime';
import { UpdateTime } from '../interfaces/updateTime';

import { Dispatch, AnyAction } from 'redux';

import { Theme } from '../enums/theme';
import { TimeType } from '../enums/timeType';

import { IonMenu, IonHeader, IonTitle, IonToolbar, IonContent, IonListHeader, IonList, IonMenuToggle, IonItem, IonLabel, IonToggle, IonDatetime } from '@ionic/react';

import { updateTheme } from '../helpers/updateTheme';
import { updateBreakTime } from '../helpers/updateBreakTime';
import { updateWorkTime } from '../helpers/updateWorkTime';
import { updateTime } from '../helpers/updateTime';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description A menu component for the pomodoro settings.
 * @version 0.3.0
 * @license MIT
 */
export const Menu: ConnectedComponentClass<({ theme, updateTheme, updateBreakTime, updateWorkTime, updateTime, timeType }: {
    theme: Theme;
    timeType: TimeType;
    updateTheme: (payload: UpdateTheme) => AnyAction;
    updateBreakTime: (payload: UpdateBreakTime) => AnyAction;
    updateWorkTime: (payload: UpdateWorkTime) => AnyAction;
    updateTime: (payload: UpdateTime) => AnyAction;
}) => JSX.Element, Pick<any, string | number | symbol>> = connect((state: State): {
    theme: Theme;
    timeType: TimeType;
} => ({
    theme: state.theme,
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
}))(({ theme, updateTheme, updateBreakTime, updateWorkTime, updateTime, timeType }: {
    theme: Theme;
    timeType: TimeType;
    updateTheme: (payload: UpdateTheme) => AnyAction;
    updateBreakTime: (payload: UpdateBreakTime) => AnyAction;
    updateWorkTime: (payload: UpdateWorkTime) => AnyAction;
    updateTime: (payload: UpdateTime) => AnyAction;
}): JSX.Element => {

    const update: () => void = (): void => {
        updateTheme({
            theme: theme === Theme.Light ? Theme.Dark : Theme.Light
        } as UpdateTheme);
    };

    const updateBreak = (event: any): void => {
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
                            <IonToggle checked={theme === Theme.Dark} onIonChange={update} mode='md'></IonToggle>
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