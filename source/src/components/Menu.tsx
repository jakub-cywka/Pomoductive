import React, { useState } from 'react';

import { connect, ConnectedComponentClass, useSelector, useDispatch } from 'react-redux';

import { State } from '../interfaces/state';
import { UpdateTheme } from '../interfaces/updateTheme';
import { UpdateBreakTime } from '../interfaces/updateBreakTime';
import { UpdateWorkTime } from '../interfaces/updateWorkTime';
import { UpdateTime } from '../interfaces/updateTime';

import { Dispatch, AnyAction } from 'redux';

import { Theme } from '../enums/theme';
import { TimeType } from '../enums/timeType';

import { IonMenu, IonHeader, IonTitle, IonToolbar, IonContent, IonListHeader, IonList, IonMenuToggle, IonItem, IonLabel, IonToggle, IonDatetime, IonAlert } from '@ionic/react';

import { updateTheme } from '../functions/updateTheme';
import { updateBreakTime } from '../functions/updateBreakTime';
import { updateWorkTime } from '../functions/updateWorkTime';
import { updateTime } from '../functions/updateTime';
import { ToggleChangeEventDetail } from '@ionic/core';
import { RouteComponentProps, withRouter } from 'react-router';

export default withRouter(({ history }) => {

    const theme = useSelector<State, Theme>(state => state.theme);
    // const updateTheme = useSelector<State, updateTheme>(state => state.updateTheme);
    // const updateBreakTime = useSelector<State, updateBreakTime>(state => state.updateBreakTime);
    // const updateWorkTime = useSelector<State, updateWorkTime>(state => state.updateWorkTime);
    // const updateTime = useSelector<State, updateTime>(state => state.updateTime);
    const dispatch = useDispatch();
    const timeType = useSelector<State, TimeType>(state => state.timeType);

    const update: () => void = (): void => {
        dispatch(updateTheme({
            theme: theme === Theme.Light ? Theme.Dark : Theme.Light
        } as UpdateTheme));
    };

    const updateBreak = (event: any): void => {
        dispatch(updateBreakTime({
            breakTime: {
                minutes: parseInt(event.currentTarget.value.substring(event.currentTarget.value.indexOf(':') + 1, event.currentTarget.value.indexOf(':') + 3)),
                seconds: 0
            }
        } as UpdateBreakTime));
        if (timeType === TimeType.Break) {
            dispatch(updateTime({
                time: {
                    minutes: parseInt(event.currentTarget.value.substring(event.currentTarget.value.indexOf(':') + 1, event.currentTarget.value.indexOf(':') + 3)),
                    seconds: 0
                }
            } as UpdateTime));
        };
    };

    const updateWork = (event: any): void => {
        dispatch(updateWorkTime({
            workTime: {
                minutes: parseInt(event.currentTarget.value.substring(event.currentTarget.value.indexOf(':') + 1, event.currentTarget.value.indexOf(':') + 3)),
                seconds: 0
            }
        } as UpdateWorkTime));
        if (timeType === TimeType.Work) {
            dispatch(updateTime({
                time: {
                    minutes: parseInt(event.currentTarget.value.substring(event.currentTarget.value.indexOf(':') + 1, event.currentTarget.value.indexOf(':') + 3)),
                    seconds: 0
                }
            } as UpdateTime));
        };
    };

    const [shouldClearLocalStorage, setShouldClearLocalStorage] = useState(false);

    function toggleShouldClearLocalStorage(event: CustomEvent<ToggleChangeEventDetail>) {
        setShouldClearLocalStorage(event.detail.checked);
    };

    return (
        <>
            <IonAlert mode='md' onDidDismiss={() => setShouldClearLocalStorage(false)} isOpen={shouldClearLocalStorage} header='Are you sure?' subHeader='Note that this will logout you.' buttons={[
                {
                    text: 'I know. Just delete it!',
                    handler: () => {
                        const email = localStorage.getItem('email');
                        const password = localStorage.getItem('password');
                        const credentials = localStorage.getItem('credentials');

                        if (email !== undefined && email !== null && password !== undefined && password !== null) {
                            localStorage.removeItem('email');
                            localStorage.removeItem('password');
                        };

                        if (credentials !== undefined && credentials !== null) {
                            localStorage.removeItem('credentials');
                        };

                        history.push('/login');
                    }
                },
                {
                    text: 'Don\'t delete it.',
                    handler: () => {
                        setShouldClearLocalStorage(false);
                    }
                }
            ]} />
            <IonMenu color={theme} side='start' swipeGesture={true} contentId='main'>
                <IonHeader color={theme} mode='md'>
                    <IonToolbar color={theme} mode='md'>
                        <IonTitle>
                            Settings
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent color={theme}>
                    <IonList style={{'padding': '0px'}} color={theme} lines='none' mode='md'>
                        <IonListHeader color={theme} mode='md'>
                            Theme
                        </IonListHeader>
                        <IonMenuToggle color={theme} autoHide={false}>
                            <IonItem color={theme} mode='md'>
                                <IonLabel mode='md'>
                                    Dark mode
                                </IonLabel>
                                <IonToggle checked={theme === Theme.Dark} onIonChange={update} mode='md' />
                            </IonItem>
                        </IonMenuToggle>
                        <IonListHeader color={theme} mode='md'>
                            Time
                        </IonListHeader>
                        <IonMenuToggle color={theme} autoHide={false}>
                            <IonItem color={theme} mode='md'>
                                <IonLabel mode='md'>
                                    Work
                                </IonLabel>
                                <IonDatetime onIonChange={updateWork} displayFormat='mm' pickerFormat='mm' mode='md'></IonDatetime>
                            </IonItem>
                        </IonMenuToggle>
                        <IonMenuToggle color={theme} autoHide={false}>
                            <IonItem color={theme} mode='md'>
                                <IonLabel mode='md'>
                                    Break
                                </IonLabel>
                                <IonDatetime onIonChange={updateBreak} displayFormat='mm' pickerFormat='mm' mode='md'></IonDatetime>
                            </IonItem>
                        </IonMenuToggle>
                        <IonListHeader color={theme} mode='md'>
                            Cache
                        </IonListHeader>
                        <IonMenuToggle color={theme} autoHide={false}>
                            <IonItem color={theme} mode='md'>
                                <IonLabel mode='md'>
                                    Clean localStorage?
                                </IonLabel>
                                <IonToggle checked={shouldClearLocalStorage} onIonChange={toggleShouldClearLocalStorage} mode='md' />
                            </IonItem>
                        </IonMenuToggle>
                    </IonList>
                </IonContent>
            </IonMenu>
        </>
    );
});