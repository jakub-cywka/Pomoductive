import React from 'react';

import { IonItem } from '@ionic/react';
import { Components } from '@ionic/core';

import ChildrenProp from '../interfaces/childrenProp';

export default ({ children, ...attributes }: ChildrenProp & Components.IonItemAttributes) => (
    <IonItem button style={{'--border-radius': '4px'}} mode='md' lines='none' color={attributes.color !== undefined ? attributes.color : 'primary'} margin={attributes.margin !== undefined ? attributes.margin : undefined} {...attributes as Components.IonItem}>
        {children}
    </IonItem>
);