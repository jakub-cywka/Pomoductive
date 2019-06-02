import React from 'react';

import { Background } from '../components/Background';
import { LoginForm } from '../components/LoginForm';
import { SectionTitle } from '../components/SectionTitle';

export default (): JSX.Element => (
    <Background style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    }}>
        <SectionTitle>
            Please log in
        </SectionTitle>
        <LoginForm />
    </Background>
);