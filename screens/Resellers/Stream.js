import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Flex, InputReseller, Button, AppTextMedium, ComboBox } from '../../components/styled';
import store from '../../store';
import { w } from '../../utils/consts';

const Stream = () => {
    return (
        <ScrollView contentInset={{top: -50, left: 0, bottom: 200, right: 0}}>
            <Flex flex={1} justifyContent='center' alignItems='stretch' style={{ paddingHorizontal: 40, paddingTop: 40 }}>
                <ComboBox
                    items={[
                        {label: 'YouTube', value: '1'},
                        {label: 'Twitch', value: '0'}
                    ]}
                    placeholder='Выберите сервис'
                   />
                <ComboBox
                    items={[
                        { label: 'HTTP(s)', value: '0'},
                        { label: 'SOCKS4', value: '1'},
                        { label: 'SOCKS5', value: '2'},
                    ]}
                    placeholder='Выберите тип прокси'
                   />
                <ComboBox
                    items={[
                        { label: 'Rubot proxies', value: '0'},
                        { label: 'Url proxies', value: '2'},
                    ]}
                    placeholder='Выберите источник прокси'
                   />
                <InputReseller
                    placeholder='Название компании'
                   />
                <InputReseller
                    placeholder='UUID'
                   />
                <InputReseller
                    placeholder='Количество потоков'
                   />
                <InputReseller
                    placeholder='Количество лайков'
                   />
                <ComboBox
                    items={store.payments}
                    placeholder='Платежная система'
                   />
                <InputReseller
                    placeholder='Стоимость заказа'
                   />
                <Button 
                    color='blue'
                    shadow
                    height='50px'
                    width='165px'
                    style={{ paddingVertical: 15, marginLeft: w / 6}}
                >
                    <AppTextMedium
                        style={{ textAlign: 'center' }}
                    >
                        Заказать
                    </AppTextMedium>
                </Button>                
            </Flex>   
        </ScrollView>
    );
};

export {Stream};
