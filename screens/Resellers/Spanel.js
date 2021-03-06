import React from 'react';
import { Text } from 'react-native';
import { Container, Flex } from '../../components/styled';

const Spanel = () => {
    return (
        <Flex flex={1} justifyContent='center' alignItems='center'>
            <Container>
                <Text>Spanel</Text>
            </Container>
        </Flex>
    );
};

export {Spanel};
