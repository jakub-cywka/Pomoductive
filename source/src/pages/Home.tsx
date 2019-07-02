import * as React from 'react';

import Circle from '../components/Circle';
import Background from '../components/Background';
import TimeText from '../components/TimeText';
import ThenText from '../components/ThenText';
import MiddleAction from '../components/MiddleAction';
import SideAction from '../components/SideAction';
import Actions from '../components/Actions';

import { Direction } from '../enums/direction';

/**
 * @copyright OpenSourced
 * @author Jakub Cywka
 * @description A root component of the whole Pomoductive app. Renders all of its children components.
 * @version 0.3.0
 * @license MIT
*/
export default (): JSX.Element => (
    <Background>
        <Circle>
            <TimeText />
            <ThenText />
        </Circle>
        <div style={{marginTop: '32px'}}>
            <Actions>
                <SideAction direction={Direction.Backward} />
                <MiddleAction />
                <SideAction direction={Direction.Forward} />
            </Actions>
        </div>
    </Background>
);