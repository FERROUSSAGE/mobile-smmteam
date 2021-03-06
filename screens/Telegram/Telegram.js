import React from 'react';
import Chat from '../../components/Chat';
import { Flex } from '../../components/styled';

const data = [
    {
        nickname: 'Александр Волчанский',
        messages: ['Привет, у меня есть пару вопросов, собственно да']
    },
    {
        nickname: 'Снегирь Вологодский',
        messages: ['Чик-чирик']
    }
];



const Telegram = ({ navigation }) => {
    return (
        <Flex
            flex={1}
        >
            <Chat data={data} navigation={navigation} />
        </Flex>
    );
};

export {Telegram};
