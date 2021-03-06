import React from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components';

import { Container, Flex, Input, Button, AppTextBold } from '../components/styled';
import { w } from '../utils/consts';

const TextInput = styled(Input)`
    ${props => props.flex === 1 ? 'flex: 1' : ''};
    margin: ${props => props.margin || '0'};
    height: 50px;
`;

const patterns = {
    incorrect: 'Здравствуйте, Ваш заказ <strong>#Номер заказа</strong> не может быть исполнен, поскольку в нём указана не корректная ссылка для продвижения. Чтобы Ваш заказ был исполнен отпишитесь, пожалуйста в чат поддержки на нашем сайте!)<br><br>С уважением,<br>команда <strong>SmmCraft.Ru</strong><br> <strong>E - mail: </strong> <a href="mailto:team@smmcraft.ru">team@smmcraft.ru</a><br> <strong>Сайт: </strong><a href="https://smmcraft.ru/">smmcraft.ru</a><br><img style="width: 50%;" src="https://resize.yandex.net/mailservice?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-mail-signature%2F222735%2F0c07c1894a68cc0536884bf2ec66a173%2Forig&proxy=yes&key=b4847178f9c9fd6512b77d639348a577">',
    endDay: 'Здравствуйте, Ваш заказ <strong>#Номер заказа</strong> был оформлен после окончания рабочей смены оператора. Чтобы запустить Ваш заказ отпишитесь, пожалуйста оператору в чат поддержки на нашем сайте!)<br><br>\n\n\n С уважением,<br>команда <strong>SmmCraft.Ru</strong><br> <strong>E - mail: </strong> <a href=\"mailto:team@smmcraft.ru\">team@smmcraft.ru</a><br> <strong>Сайт: </strong><a href=\"https://smmcraft.ru/\">smmcraft.ru</a><br><img  style=\"width: 50%;\" src=\"https://resize.yandex.net/mailservice?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-mail-signature%2F222735%2F0c07c1894a68cc0536884bf2ec66a173%2Forig&proxy=yes&key=b4847178f9c9fd6512b77d639348a577\">'
}

const Mail = () => {

    const [toMail, setToMail] = React.useState('');
    const [caption, setCaption] = React.useState('');
    const [pattern, setPattern] = React.useState(null);
    const [html, setHtml] = React.useState('');

    const setMailHandler = (text) => setToMail(text);
    const setCaptionHandler = (text) => setCaption(text);
    const setPatternHandler = (index) => index === 0
     ? (setHtml(patterns.incorrect), setPattern(index))
     : (setHtml(patterns.endDay), setPattern(index)); 
    const setHtmlHandler = (text) => setHtml(text); 
    

    return (
        <Container
            style={{ flex: 1 }}
        >
            <Flex 
                flex={1} 
                justifyContent='space-around'
            >
                <TextInput
                    placeholder='Кому отправить письмо?'
                    shadow
                    border
                    size='11px'
                    keyboardType='email-address'
                    autoCorrect={false}
                    style={{ marginTop: 30 }}

                    onChangeText={setMailHandler}
                    value={toMail}
                />
                <TextInput
                    placeholder='Заголовок письма'
                    shadow
                    border
                    size='11px'

                    style={{ marginTop: 30, marginBottom: 30 }}

                    onChangeText={setCaptionHandler}
                    value={caption}
                />
                <TextInput
                    shadow
                    border
                    size='12px'
                    flex={3}
                    multiline={true}
                    returnKeyType='none'

                    style={{ marginBottom: 30 }}
                    placeholder='Начните вводить текст...'
                    onChangeText={setHtmlHandler}
                    value={html}
                />
                <Flex 
                    direction='row'
                    justifyContent={w <= 320 ? 'center' : 'space-between'}
                    alignItems='center'
                    style={{ marginBottom: 15 }}
                >
                    <Button
                        color={pattern === 0 ? 'blue' : '2px solid'}
                        borderColor={pattern === 1 ? 'rgba(94, 80, 255, 0.5)' : pattern === 0 ? '' : 'rgba(94, 80, 255, 0.5)'}
                        style={{ paddingTop: 16, paddingBottom: 16, paddingLeft: 12, paddingRight: 15 }}
                        onPress={() => setPatternHandler(0)}
                    >
                        <AppTextBold
                            size='11px'
                            color={pattern === 1 ? 'rgba(0, 0, 0, 0.21)' : pattern === 0 ? '' : 'rgba(0, 0, 0, 0.21)'}
                        >
                            Некорректный заказ
                        </AppTextBold>
                    </Button>
                    <Button
                        color={pattern === 1 ? 'blue' : ''}
                        borderColor={pattern === 0 ? 'rgba(94, 80, 255, 0.5)' : pattern === 1 ? '' : 'rgba(94, 80, 255, 0.5)'}
                        style={{ paddingTop: 16, paddingBottom: 16, paddingLeft: 15, paddingRight: 10}}
                        onPress={() => setPatternHandler(1)}
                    >
                        <AppTextBold
                            size='11px'
                            color={pattern === 0 ? 'rgba(0, 0, 0, 0.21)' : pattern === 1 ? '' : 'rgba(0, 0, 0, 0.21)'}
                        >
                            Конец рабочего дня
                        </AppTextBold>
                    </Button>
                </Flex>
                <Button
                    width='165px'
                    color='pink'

                    style={{ 
                        alignItems: 'center',
                        marginBottom: 13, 
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        paddingTop: 16, 
                        paddingBottom: 16, 
                        paddingLeft: 40, 
                        paddingRight: 40
                    }}
                    onPress={() => Alert.alert(toMail + ' ' + caption + '' + html)}
                >
                    <AppTextBold
                        size='13px'
                    >
                        Оправить
                    </AppTextBold>
                </Button>
            </Flex>

        </Container>
    );
};

export {Mail};
