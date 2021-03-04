import React from 'react';
import { Text, View } from 'react-native';
import { Container, Flex } from '../components/styled';

const Telegram = () => {
    return (
        <Flex flex={1} justifyContent='center' alignItems='center'>
            <Container>
                <Text>Telegram</Text>
            </Container>
        </Flex>
    );
};

export {Telegram};
