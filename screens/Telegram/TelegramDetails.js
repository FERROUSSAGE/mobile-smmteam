import React from 'react';
import { Text, View } from 'react-native';
import { Container, Flex } from '../../components/styled';

const TelegramDetails = ({ route, navigation }) => {
    const { nickname, chatId, messages } = route.params;
    return (
        <Flex flex={1} justifyContent='center' alignItems='center'>
            <Container>
                <Text>TelegramDetails</Text>
            </Container>
        </Flex>
    );
};

export {TelegramDetails};
