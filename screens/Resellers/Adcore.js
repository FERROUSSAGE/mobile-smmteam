import React from 'react';
import { Text } from 'react-native';
import { Container, Flex, InputReseller, Button, AppTextMedium, ComboBox } from '../../components/styled';
import { w } from '../../utils/consts';

const Adcore = () => {
    return (
        <Flex flex={1} justifyContent='space-around' style={{ paddingHorizontal: 40, paddingVertical: 40 }}>
                <InputReseller
                    placeholder='Название компании'
                />
                <ComboBox
                    items={[
                        {label: 'YouTube', value: 'YT'}
                    ]}
                    placeholder='Выберите услугу'
                />
                <ComboBox
                    items={[
                        { label: 'Лайки', value: 'likes'},
                    ]}
                    placeholder='Выберите тип'
                />
                <InputReseller
                    placeholder='Ссылка'
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
    );
};

export {Adcore};
