import React from 'react';
import { Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { Flex, InputReseller, Button, AppTextMedium, ComboBox } from '../../components/styled';
import { w } from '../../utils/consts';

import { observer } from 'mobx-react-lite';

import { createVktarget as httpCreate } from '../../https/api';
import { createOrder as httpCreateOrder } from '../../https/order';
import { getItems, checkOrder, clearFields, check, rounded } from '../../utils/functions';

import store from '../../store';
import { useInput, useComboBox } from '../../hooks';

const Vktarget = observer(() => {

    const socialNetwork = useComboBox(null),
        resellerType = useComboBox(null),
        idSmmcraft = useInput(''),
        link = useInput(''),
        countOrdered = useInput(''),
        payment = useComboBox(null),
        cost = useInput(''),
        [toggleDisabledButton, setToggleDisabledButton] = React.useState(false);

    const types = store.resellerTypes.filter(item => item.resellerId === 3);

    const itemsService = getItems(types, ['name', 'name']);
    const itemsTypes = getItems(types, ['description', 'type', 'name']).filter(item => item.name === socialNetwork.value);

    const createOrderHandler = async () => {
        try {
            setToggleDisabledButton(true);

            const valid = check([
                [idSmmcraft.value, 'number'],
                [socialNetwork.value, 'number'],
                [resellerType.value, 'empty'],
                [link.value, 'link'],
                [countOrdered.value, 'number'],
                [payment.value, 'text'],
                [cost.value, 'number']
            ]);

            if(valid.length > 0){
                valid.forEach(error => Alert.alert('Прозошла ошибка!', error));
            }
            else {
                const type = types.find(item => item.type === resellerType.value);

                const check = await checkOrder(idSmmcraft.value);
                if(check)
                    return Alert.alert(check);
    
                const { data: vktarget } = await httpCreate(resellerType.value, link.value, countOrdered.value, idSmmcraft.value);
                const target = vktarget.response;

                if(!vktarget.status){
                    return Alert.alert(target.msg);
                }
                try {
                    const { data: order } = await httpCreateOrder({
                        idSmmcraft: +idSmmcraft.value,
                        idProject: +target.id,
                        socialNetwork: socialNetwork.value,
                        link: link.value,
                        cost: +cost.value,
                        spend: rounded(type.price * countOrdered.value),
                        countOrdered: +countOrdered.value,
                        payment: payment.value,
                        resellerId: type.resellerId,
                        resellerTypeId: type.id,
                        userId: store.user[0].id
                    });
                    if(order.status){
                        clearFields([idSmmcraft, link, countOrdered, cost]);
                        store.fetchBalances();
                        return Alert.alert('Заказ успешно создан!')
                    }
    
                } catch (e) { Alert.alert('Произошла ошибка!') }
            } 
        } catch (e) { Alert.alert('Произошла ошибка!') }
        finally { setToggleDisabledButton(false); }
    }

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
                    keyboardType='numeric'
                    {...idSmmcraft}
                />
                <InputReseller
                    placeholder='Ссылка'
                    {...link}
                />
                <InputReseller
                    placeholder='Количество'
                    keyboardType='numeric'
                    {...countOrdered}
                />
                <ComboBox
                    items={store.payments}
                    placeholder='Платежная система'
                    {...payment}
                />
                <InputReseller
                    placeholder='Стоимость заказа'
                    keyboardType='numeric'
                    {...cost}
                />
                <Button 
                    color='blue'
                    shadow
                    height='50px'
                    width='165px'
                    style={{ paddingVertical: 15, marginLeft: w / 6}}
                    onPress={createOrderHandler}
                    disabled={toggleDisabledButton}
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

export {Vktarget};
