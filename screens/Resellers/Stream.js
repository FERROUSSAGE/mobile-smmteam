import React from 'react';
import { Text } from 'react-native';
import { Container, Flex } from '../../components/styled';

const Stream = () => {
    return (
        <Flex flex={1} justifyContent='center' alignItems='center'>
            <Container>
                <Text>Stream</Text>
            </Container>
        </Flex>
    );
};

export {Stream};
