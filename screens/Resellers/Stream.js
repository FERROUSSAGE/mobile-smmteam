import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Flex, InputReseller, Button, AppTextMedium, ComboBox } from '../../components/styled';
import { w } from '../../utils/consts';

const Stream = () => {
    return (
<KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={110}
            style={{ flex: 1 }}
        >
            <Flex flex={1} justifyContent='center' alignItems='stretch' style={{ paddingHorizontal: 40, paddingVertical: 40 }}>
                <ComboBox
                    items={[
                        {label: 'YouTube', value: 'YT'}
                    ]}
                    placeholder='Выберите сервис'
                />
                <ComboBox
                    items={[
                        { label: 'Лайки', value: 'likes'},
                    ]}
                    placeholder='Выберите прокси'
                />
                <InputReseller
                    placeholder='Название компании'
                />
                <InputReseller
                    placeholder='UUID'
                />
                <InputReseller
                    placeholder='Количество'
                />
                <ComboBox
                    items={[
                        { label: 'RK', value: 'RK'},
                        { label: 'UP', value: 'UP'}
                    ]}
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
            
        </KeyboardAvoidingView>
    );
};

export {Stream};
