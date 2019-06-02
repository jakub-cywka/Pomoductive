import { Components } from '@ionic/core';

export interface IonItemAttributesWithChildren extends Components.IonItemAttributes {
    children: JSX.Element | JSX.Element[];
};