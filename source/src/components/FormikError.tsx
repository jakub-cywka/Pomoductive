import React from 'react';

import { ErrorMessage } from 'formik';

import { Components } from '@ionic/core';
import { IonChip } from '@ionic/react';

export default function({ name, ...attributes }: {
    name: string;
} & Components.IonChipAttributes) {
    return (
        <ErrorMessage name={name} render={(error) => (
            <IonChip {...attributes as Components.IonChip} color='danger' mode='md'>
                {error}
            </IonChip>
        )} />
    );
};