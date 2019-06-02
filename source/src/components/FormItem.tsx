import React from 'react';

import { IonItem } from '@ionic/react';
import { Components } from '@ionic/core';

import { IonItemAttributesWithChildren } from '../interfaces/ionItemAttributesWithChildren';

export const FormItem: ({ children, ...attributes }: IonItemAttributesWithChildren) => JSX.Element = ({ children, ...attributes }) => (
    <IonItem mode='md' lines='none' color={attributes.color !== undefined ? attributes.color : 'primary'} margin={attributes.margin !== undefined ? attributes.margin : undefined} {...attributes as Components.IonItem}>
        {children}
    </IonItem>
);