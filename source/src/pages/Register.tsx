import React from 'react';

import RegisterForm from '../components/RegisterForm';
import Background from '../components/Background';
import SectionTitle from '../components/SectionTitle';

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
            Please sign up
        </SectionTitle>
        <RegisterForm />
    </Background>
);