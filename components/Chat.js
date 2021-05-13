import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, FlatList} from 'react-native';

import { Container, Flex, AppTextBold } from './styled';

import { cutString, getHash, nameSurnameAbbreviation } from '../utils/functions';

const Avatar = styled.View`
    width: 55px;
    height: 55px;
    border-radius: 50px;

    justify-content: center;
    align-items: center;

    backgroundColor: ${props => props.color || '#D29CFE'};
`;

const ItemContent = styled(Flex)`
    padding: 0 16px;
    width: 100%;
    borderBottomColor: 'rgba(0, 0, 0, 0.2)';
    borderBottomWidth: 2px; 
`;

const Item = ({ nickName, text }) => {
    return (
        <Flex
            direction='row'
            style={{ marginTop: 20 }}
        >
            <Avatar color={getHash()}>
                <AppTextBold
                    size='15px'
                >
                    {nameSurnameAbbreviation(nickName)}
                </AppTextBold>
            </Avatar>
            <ItemContent
                justifyContent='space-around'
            >
                <AppTextBold
                    size='12px'
                    color='black'
                >
                    {nickName}
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
}

const Chat = ({ navigation, data }) => {

    const goToDetails = (item) => navigation.navigate('TelegramDetails', {...item});

    const renderItem = ({item}) => (
        <TouchableOpacity onPress={() => goToDetails(item)}>
            <Item nickName={item.nickName} text={item.messages[item.messages.length - 1]}/>
        </TouchableOpacity>
    );

    return (
        <Container
            style={{ flex: 1 }}
        >
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.nickName}
            />
        </Container>
    );
}

export default Chat;
