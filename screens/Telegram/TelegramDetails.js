import React from 'react';
import { Text, View, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import styled from 'styled-components/native';

import Svg, { Path } from 'react-native-svg';
import { AppTextBold, AppTextMedium, Flex, Container } from '../../components/styled';

const SendInput = styled.TextInput`
    width: 85%;
    color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
`;

const isOperatorMessage = (message) => {
    if(!message){
        return;
    }

    return message.split(':')[0] === 'Оператор' ? true : false;
}

const Item = (messages) => {

}

const TelegramDetails = ({ route }) => {
    const { nickname, chatId, messages } = route.params;

    const [isFocused, setFocused] = React.useState(false);

    const sendMessageHandler = () => {
        setFocused(false);
        Keyboard.dismiss();
    };
    const focusHandler = () => setFocused(true);


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'column'}}
        >
            <Container
                style={{ flex: isFocused ? 0.5 : 10 }}
            >

            </Container>
            <Flex
                flex={1}
                direction='row'
                alignItems='center'
                justifyContent='center'
                style={{ backgroundColor: '#DADADA' }}
            >
                <SendInput
                    placeholder='Введите сообщение'
                    onFocus={focusHandler}
                    multiline={true}
                />
                <TouchableOpacity
                    onPress={sendMessageHandler}
                >
                    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path fill-rule="evenodd" clip-rule="evenodd" d="M21.4942 11.6057C22.2351 11.9732 22.2351 13.0299 21.4942 13.3974L4.56937 21.7926C3.90466 22.1224 3.125 21.6388 3.125 20.8968V14.5833L12.5 12.5L3.125 10.2025L3.125 4.10629C3.125 3.3643 3.90466 2.88073 4.56937 3.21045L21.4942 11.6057Z" stroke="white" stroke-linejoin="round" />
                    </Svg>
                </TouchableOpacity >
            </Flex>
        </KeyboardAvoidingView>
    );
};

export { TelegramDetails };


