import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Flex, InputReseller, Button, AppTextMedium, ComboBox } from '../../components/styled';
import { w } from '../../utils/consts';
import { getItems } from '../../utils/functions';

import { observer } from 'mobx-react-lite';

import store from '../../store';
import { useInput, useComboBox } from '../../hooks';

const Spanel = observer(() => {

    const socialNetwork = useComboBox(null),
    resellerType = useComboBox(null),
    idSmmcraft = useInput(''),
    link = useInput(''),
    countOrdered = useInput(''),
    payment = useComboBox(null),
    cost = useInput('');

    const types = store.resellerTypes.filter(item => item.resellerId === 4);

    const itemsService = getItems(types, ['name', 'name']);
    const itemsTypes = getItems(types, ['description', 'type', 'name']).filter(item => item.name === socialNetwork.value);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={110}
            style={{ flex: 1 }}
        >
            <Flex flex={1} justifyContent='center' alignItems='stretch' style={{ paddingHorizontal: 40, paddingVertical: 40 }}>
                <ComboBox
                    items={itemsService}
                    placeholder='Выберите услугу'
                    index={1000}
                    {...socialNetwork}
                />
                <ComboBox
                    items={itemsTypes}
                    placeholder='Выберите тип'
                    index={900}
                    {...resellerType}
                />
                <InputReseller
                    placeholder='Название компании'
                    {...idSmmcraft}
                />
                <InputReseller
                    placeholder='Ссылка'
                    {...link}
                />
                <InputReseller
                    placeholder='Количество'
                    {...countOrdered}
                />
                <ComboBox
                    items={store.payments}
                    placeholder='Платежная система'
                    {...payment}
                />
                <InputReseller
                    placeholder='Стоимость заказа'
                    {...cost}
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
});

export {Spanel};
