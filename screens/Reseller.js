import React from 'react';
import { Text, View } from 'react-native';
import { Container, Flex } from '../components/styled';

const Reseller = () => {
    return (
        <Flex flex={1} justifyContent='center' alignItems='center'>
            <Container>
                <Text>Reseller</Text>
            </Container>
        </Flex>
    );
};

export {Reseller};
