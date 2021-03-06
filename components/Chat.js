import React from 'react';
import styled from 'styled-components';
import { TouchableOpacity, FlatList} from 'react-native';

import { Container, Flex, AppTextBold } from './styled';

import { cutString, getHash } from '../utils/functions';

const Avatar = styled.View`
    width: 55px;
    height: 55px;
    border-radius: 50px;

    backgroundColor: ${props => props.color || '#D29CFE'};
`;

const ItemContent = styled(Flex)`
    padding: 0 16px;
    width: 100%;
    borderBottomColor: 'rgba(0, 0, 0, 0.2)';
    borderBottomWidth: 2px; 
`;

const avatarText = (string) =>{
    let result = '';
    string.split(' ').forEach((item) => result += item[0]);
    return result;
} 

const Item = ({ nickname, text }) => (
    <Flex
        direction='row'
        style={{ marginTop: 20 }}
    >
        <Avatar color={getHash()}>
            <AppTextBold
                size='15px'
                style={{ textAlign: 'center', lineHeight: 53 }}
            >
                {avatarText(nickname)}
            </AppTextBold>
        </Avatar>
        <ItemContent
            justifyContent='space-around'
        >
            <AppTextBold
                size='12px'
                color='black'
            >
                {nickname}
            </AppTextBold>
            <AppTextBold
                size='12px'
                color='rgba(0, 0, 0, 0.5)'
            >
                {cutString(text, 35)}
            </AppTextBold>
        </ItemContent>
    </Flex>
);

const Chat = ({ navigation, data }) => {

    const goToDetails = (item) => navigation.navigate('TelegramDetails', {item});

    const renderItem = ({item}) => (
        <TouchableOpacity onPress={() => goToDetails(item)}>
            <Item nickname={item.nickname} text={item.messages[item.messages.length - 1]}/>
        </TouchableOpacity>
    );

    return (
        <Container
            style={{ flex:1 }}
        >
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.nickname}
            />
        </Container>
    );
}

const ChatDetails = () => {

}

export default Chat;
