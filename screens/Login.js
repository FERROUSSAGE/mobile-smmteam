import React from 'react';
import styled from 'styled-components/native';

import { Container, Flex, AppTextBold } from '../components/styled';

import image from '../assets/images/login-background.jpg';

const Main = styled(Flex)`
    background-image: url(${image});   
`;

const Login = () => {
    return <Main flex>
        <Container>
            <Flex direction='column'>

            </Flex>
        </Container>
    </Main>
};

export {Login};