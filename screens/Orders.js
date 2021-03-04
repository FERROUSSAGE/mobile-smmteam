import React from 'react';
import { Text, View } from 'react-native';
import { Container, Flex } from '../components/styled';

const Orders = () => {
    return (
        <Flex flex={1} justifyContent='center' alignItems='center'>
            <Container>
                <Text>Orders</Text>
            </Container>
        </Flex>
    );
};

export {Orders};
