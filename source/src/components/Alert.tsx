import * as React from 'react';

import { IonBadge } from '@ionic/react';
import { Components } from '@ionic/core';

import ChildrenProp from '../interfaces/childrenProp';

export default ({ children, ...attributes }: Components.IonBadgeAttributes & ChildrenProp): JSX.Element => <IonBadge children={children} {...attributes as Components.IonBadge} />