import * as React from 'react';

import { IonSegment } from '@ionic/react';

import ChildrenProp from '../interfaces/childrenProp';

export default ({ children }: ChildrenProp) => (
    <IonSegment mode='md' color='secondary'>
        {children}
    </IonSegment>
);