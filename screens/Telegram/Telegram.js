import React from 'react';
import Chat from '../../components/Chat';
import { Flex } from '../../components/styled';

const data = [
    {
        nickname: 'Александр Волчанский',
        messages: ['Александр Волчанский: Привет, у меня есть пару вопросов, собственно да',
        'Оператор: Привет, у меня есть пару вопросов, собственно да'
        ],
        chatId: '4224412'
    },
    {
        nickname: 'Снегирь Вологодский',
        messages: ['Снегирь Волчанский: аs', 'Снегирь Волчанский: Как ты думаешь, существует ли?'],
        chatId: '4224'
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
