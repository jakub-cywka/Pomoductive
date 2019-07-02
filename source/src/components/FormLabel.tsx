import React from 'react';

import { Components } from '@ionic/core';
import { IonLabel } from '@ionic/react';

import ChildrenProp from '../interfaces/childrenProp';

export default ({ children, ...attributes }: Components.IonLabelAttributes & ChildrenProp) => (
    <IonLabel mode={attributes.mode !== undefined ? attributes.mode : 'md'} position={attributes.position !== undefined ? attributes.position : 'floating'} {...attributes as Components.IonLabel}>
        {children}
    </IonLabel>
);