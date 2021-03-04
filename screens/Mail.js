import React from 'react';
import { Text, View } from 'react-native';
import { Container, Flex } from '../components/styled';

const Mail = () => {
    return (
        <Flex flex={1} justifyContent='center' alignItems='center'>
            <Container>
                <Text>Mail</Text>
            </Container>
        </Flex>
    );
};

export {Mail};
