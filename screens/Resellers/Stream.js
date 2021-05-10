import React from 'react';
import { Alert, ScrollView } from 'react-native';
import { Flex, InputReseller, Button, AppTextMedium, ComboBox } from '../../components/styled';
import { useInput, useComboBox } from '../../hooks';
import { createAdcore as httpCreateAdcore } from '../../https/api';
import { createOrder as httpCreateOrder } from '../../https/order';
import { startStream as httpStartSream } from '../../https/streambooster';
import { checkOrder, clearFields } from '../../utils/functions';
import store from '../../store';
import { w } from '../../utils/consts';

const Stream = () => {

    const service = useComboBox(null),
        idSmmcraft = useInput(''),
        uuid = useInput(''),
        timer = useInput(''),
        threads = useInput(''),
        countOrdered = useInput(''),
        payment = useComboBox(null),
        cost = useInput(''); 

    const link = `https://youtu.be/${uuid.value}`;
    const resellerType = store.resellerTypes.find(item => item.name === 'YouTube' && item.resellerId === 1 && item.type === "4");

    const enableStream = async (withLikes) => {
        try {
            const { data: stream } = await httpStartSream(uuid.value, threads.value, service.value, timer.value);
            const target = stream.response;

            if(stream.status){
                withLikes ? createOrder(true) : createOrder();
                return Alert.alert(`${target.msg}\n ${target.uuid}`);
            }
            Alert.alert(target.msg);

        } catch (e) { Alert.alert('Произошла ошибка1!\n' + e) }
    }

    const createOrder = async (enabledLikes = false) => {
        try {
            const { data: order } = await httpCreateOrder({
                idSmmcraft: +idSmmcraft.value,
                socialNetwork: service.value === 0 ? 'YouTube' : 'Twitch',
                link,
                cost: +cost.value,
                spend: enabledLikes ? Math.floor(resellerType.price * countOrdered.value) : 0,
                countOrdered: +countOrdered.value,
                payment: payment.value,
                resellerId: resellerType.resellerId,
                resellerTypeId: resellerType.id,
                userId: store.user.id
            });

            if(order.status)
                return clearFields([idSmmcraft, uuid, countOrdered, cost, timer, threads]);

        } catch (e) { Alert.alert('Произошла ошибка2!\n' + e) }
    }

    const createOrderHandler = async () => {

        if(!service.value || !uuid.value || !threads.value)
            return Alert.alert('Заполните все поля ввода!');
        
        const check = await checkOrder(idSmmcraft.value)
        if(check)
            return Alert.alert(check);

        if(!countOrdered.value) return enableStream();    

        const { data: adcore } = await httpCreateAdcore(resellerType.type, link, countOrdered.value, resellerType.price);
        if(adcore.status) return enableStream(true);

    }   
    
    return (
        <ScrollView contentInset={{top: -50, left: 0, bottom: 200, right: 0}}>
            <Flex flex={1} justifyContent='center' alignItems='stretch' style={{ paddingHorizontal: 40, paddingTop: 40 }}>
                <ComboBox
                    items={[
                        {label: 'YouTube', value: '1'},
                        {label: 'Twitch', value: '0'}
                    ]}
                    placeholder='*Выберите сервис'
                    {...service}
                   />
                <InputReseller
                    placeholder='Название компании'
                    keyboardType='numeric'
                    {...idSmmcraft}
                   />
                <InputReseller
                    placeholder='*UUID'
                    {...uuid}
                   />
                <InputReseller
                    placeholder='*Количество потоков'
                    keyboardType='numeric'
                    {...threads}
                   />
                <InputReseller
                    placeholder='*Таймер: продолжительность стрима'
                    {...timer}
                   />
                <InputReseller
                    placeholder='Количество лайков'
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
