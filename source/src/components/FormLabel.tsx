import React from 'react';

import { Components } from '@ionic/core';
import { IonLabel } from '@ionic/react';

interface IonLabelWithChildren extends Components.IonLabelAttributes {
    children: any;
};

export const FormLabel: ({ children, ...attributes }: IonLabelWithChildren) => JSX.Element = ({ children, ...attributes }) => (
    <IonLabel mode={attributes.mode !== undefined ? attributes.mode : 'md'} position={attributes.position !== undefined ? attributes.position : 'floating'} {...attributes as Components.IonLabel}>
        {children}
    </IonLabel>
);