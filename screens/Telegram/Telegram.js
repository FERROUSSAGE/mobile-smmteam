import React from 'react';
import { Text, View } from 'react-native';
import { Container, Flex } from '../../components/styled';

const data = [
    {
        name: 'Александр Волчанский',
        text: 'Привет, у меня есть пару вопросов'
    },
    {
        name: 'Снегирь Вологодский',
        text: 'Чик-чирик'
    }
];



const Telegram = () => {
    return (
        <Flex
            flex={1} 
        >
            <Container>
                
            </Container>
        </Flex>
    );
};

export {Telegram};
