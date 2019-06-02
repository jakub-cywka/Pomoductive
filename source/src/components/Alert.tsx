import React from 'react';

import { IonBadge } from '@ionic/react';
import { Components } from '@ionic/core';

interface IonBadgeAttributesWithChildren extends Components.IonBadgeAttributes {
    children: any;
};

export default ({ ...attributes }: IonBadgeAttributesWithChildren): JSX.Element => <IonBadge children={attributes.children} {...attributes as Components.IonBadge} />