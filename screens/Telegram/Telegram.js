import React from 'react';
import Chat from '../../components/Chat';
import { Flex } from '../../components/styled';
import { RN_APP_API_URL } from '../../utils/consts';

import { observer } from 'mobx-react-lite';

import { io } from 'socket.io-client';

import store from '../../store';



const Telegram = observer(({ navigation }) => {

    const socket = io(RN_APP_API_URL);
    socket.on("connect", () => console.log(socket.id));


    return (
        <Flex
            flex={1}
        >
            <Chat data={store.messages} navigation={navigation} />
        </Flex>
    );
});

export {Telegram};
