import React from 'react';

import { Field, FieldProps } from 'formik';

import { IonInput } from '@ionic/react';
import { Components } from '@ionic/core';

export const FormikField: ({ name, value, onChange, onBlur, ...attributes }: Components.IonInputAttributes) => JSX.Element = ({ name, value, onChange, onBlur, ...attributes }) => {
    return (
        <Field name={name} render={({ field }: FieldProps): JSX.Element => (
            <IonInput onIonChange={field.onChange} name={field.name} value={field.value} mode={attributes.mode !== undefined ? attributes.mode : 'md'} {...attributes as Components.IonInput} />
        )} />
    );
};