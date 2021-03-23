import React from 'react';
import { TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard, FlatList } from 'react-native';
import styled from 'styled-components/native';

import Svg, { Path } from 'react-native-svg';
import { AppTextBold, Flex, Container } from '../../components/styled';
import { w, h } from '../../utils/consts';

const SendInput = styled.TextInput`
    width: 85%;
    color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
`;

const Message = styled.View`
    background: ${props => props.color ? 'rgba(72, 248, 205, 0.87)' : 'rgba(94, 80, 255, 0.87)'};
    border-radius: 10px;

    width: ${props => props.width < 10 ? props.width * 10 : props.width * 6}px;
    padding: 15px 10px;
`;

const substrMessage = (message) => message.split(': ')[1];

const isOperatorMessage = (message) => {
    if(!message){
        return;
    }
    return message.split(':')[0] === 'Оператор' ? true : false;
}

const TelegramDetails = ({ route }) => {
    const { nickname, chatId, messages } = route.params;

    const sendMessageHandler = () => {
        Keyboard.dismiss();
    };


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={80}
            style={{ flex: 1 }}
        >
            <Container
                style={{ flex: 1 }}
            >
                <FlatList
                    contentContainerStyle={{ flex: 1, justifyContent: 'flex-end' }}
                    data={messages}
                    renderItem={({item}) => {
                        const isOperator = isOperatorMessage(item);
                        return (
                            <Message
                                style={{
                                    marginVertical: 5,
                                    marginLeft: isOperator ? w * 0.2 : 0,
                                    marginRight: !isOperator ? w * 0.2 : 0
                                }}
                                color={isOperator}
                                width={substrMessage(item).length}
                            >
                                <AppTextBold
                                    color='white'
                                    size='11px'
                                >{substrMessage(item)}</AppTextBold>
                            </Message>
                        ); 
                    }}
                    keyExtractor={item => item.toString(16)}
                />
            </Container>
            <Flex
                direction='row'
                alignItems='center'
                justifyContent='center'
                style={{ backgroundColor: '#DADADA', height: h * 0.07 }}
            >
                <SendInput
                    placeholder='Введите сообщение'
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


