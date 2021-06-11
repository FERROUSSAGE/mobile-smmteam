import React from 'react';
import styled from 'styled-components/native';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { AppTextMedium, Button, Container, Flex, Input } from '../../components/styled';
import Swipeout from 'react-native-swipeout';

import { observer } from 'mobx-react-lite';
import { debounce } from 'lodash';

import store from '../../store';
import { getOrderByText as httpGetOrderByText, deleteOrder as httpDeleteOrder } from '../../https/order';
import { infoAdcore, infoSmmok, infoVktarget, infoSpanel } from '../../https/api';
import { uploadTable as httpUploadTable } from '../../https/google/spreadsheet';

import Svg, { Path } from 'react-native-svg';

const Row = styled.View`
    flexDirection: row;
    alignItems: center;
    justifyContent: space-around;

    background-color: ${props => props.color === true ? 'rgba(0,0,0,0.1)' : 'transparent'};
    borderBottomColor: rgba(41,40,40,.2);
    borderBottomWidth: 1px;
`;

const Cell = styled.View`
    flex: 1;
    margin: 10px;
    alignItems: center;
    justifyContent: center;

    height: 35px;
    
`;

const RowItem = ({ column, color, onLongPress }) => {  
    return (
        <TouchableOpacity 
            onLongPress={onLongPress}>
            <Row color={color}>
                {column.map((data) => (
                    <CellItem
                        data={data}
                    />
                ))}
            </Row>
        </TouchableOpacity> 
   );
}
const CellItem = ({ data }) => {
    return (
        <Cell>
            <AppTextMedium
                color='rgba(133, 133, 133, 0.82)'
            >{data}</AppTextMedium>
        </Cell>
    );
}

const dataFromOrders = (array) => [] = array.map(item => [item.idSmmcraft, item.socialNetwork, item.countOrdered, item.spend]);

const Orders = observer(({ navigation }) => {
    const [page, setPage] = React.useState(1),
        [toggleDisabledButton, setToggleDisabledButton] = React.useState(false);
    let data = dataFromOrders(store.orders.rows);

    const lastPage = Math.ceil(store.totalCount / 10);

    const prevArrow = () => page >= 2 && setPage(page - 1);
    const nextArrow = () => page <= lastPage && setPage(page + 1);
    const startArrow = () => setPage(1);
    const lastArrow = () => setPage(lastPage);

    React.useEffect(() => {
        store.fetchOrders(page);
    }, [page])

    const handler = React.useCallback(debounce( async (text) => {
        try {
            const orders = await httpGetOrderByText(text);
            store.orders = orders.data.response;
        } catch (e) {
            Alert.alert('Ошибка');
        }
    }), 150);

    const goToDetails = (id) => navigation.navigate('OrderDetails',  {order: store.orders.rows.find(order => order.idSmmcraft === id)});   

    const uploadOrdersHandler = async () => {
        try {
            setToggleDisabledButton(true);

            const moscowDate = new Date().toLocaleDateString('ru-RU', { timeZone: 'Europe/Moscow' });
            const todayOrders = store.orders.rows.filter(order => order.date === moscowDate).length;
            if(todayOrders > 0){
                const { data: upload } = await httpUploadTable(store.user[0].name);
                const target = upload.response;
                if(upload.status)
                    Alert.alert('Выгрузка заказов', `${target.msg}\nДата - ${moscowDate}`);
            } else Alert.alert('Выгрузка заказов', `На дату - ${moscowDate} еще нет заказов!`);
        } catch (error) { Alert.alert('Выгрузка заказов', 'Произошла ошибка при выгрузки заказов!'); }
        finally { setToggleDisabledButton(false); }

    }

    const infoOrderHandler = async (id) => {
        try {
            const { idProject, countOrdered, reseller_type } = store.orders.rows.find(item => item.idSmmcraft === id);
            switch(reseller_type?.resellerId){
                case 1:
                    const { data: adcore } = await infoAdcore(idProject, countOrdered);
                    const targetAdcore = adcore.response;
                    if(adcore.status) Alert.alert('Информация по заказу', `Выполнено ${targetAdcore.performed} из ${targetAdcore.total}`)
                break;
                case 2:
                    const { data: smmok } = await infoSmmok(idProject);
                    const targetSmmok = smmok.response;
                    if(smmok.status) Alert.alert('Информация по заказу', `Выполнено ${targetSmmok.performed} из ${targetSmmok.total}`)
                break;
                case 3:
                    const { data: vktarget } = await infoVktarget(idProject);
                    const targetVktarget = vktarget.response;
                    if(vktarget.status) Alert.alert('Информация по заказу', `Выполнено ${targetVktarget.performed} из ${targetVktarget.total}`)
                break;
                case 4:
                    const { data: spanel } = await infoSpanel(idProject, countOrdered);
                    const targetSpanel = spanel.response;
                    if(spanel.status) Alert.alert('Информация по заказу', `Выполнено ${targetSpanel.performed} из ${targetSpanel.total}`)
                break;
                default:
                    Alert.alert('Информация по заказу', 'У данной компании нельзя проверить исполнителей!');
                break;
            }


        } catch (e) { Alert.alert('Произошла ошибка при показе информации!\n' + e); }
    }

    const deleteOrderHandler = async (id) => {
        try {
            const order = store.orders.rows.find(item => item.idSmmcraft === id);
            Alert.alert(
                'Вы действительно хотите удалить?', `Удалить заказ - ${order.id}`, 
                [
                    {
                        text: 'Okey',
                        style: 'default',
                        onPress: async () => {
                            const { data: orderDeleted } = await httpDeleteOrder(order.id);
                            if(!orderDeleted.status)
                                return Alert.alert(orderDeleted.message);
                            Alert.alert(orderDeleted.message);
                            store.fetchOrders(page);
                        }
                    },
                    {
                        text: 'Cancel', 
                        style: 'cancel'
                    }
                ],
                {
                    cancelable: true
                }
            )

        } catch (e) { Alert.alert('Произошла ошибка при удалении!\n' + e); }
    }

    return (
        <Flex flex={1}>
            <Container
                style={{ flex: 1, position: 'relative' }}
            >
                <Flex
                    direction='row' 
                    justifyContent='space-between'
                    style={{ marginTop: 10 }}
                >
                    <Input
                        placeholder='Введите номер заказа:'
                        border
                        size='11px'
                        style={{ flex: 1, paddingTop: 0, paddingBottom: 0, height: 30}}
                        onChangeText={handler}
                        keyboardType='numeric'
                    />
                    <Button 
                        color='blue'
                        width='130px'
                        height='30px'
                        onPress={() => {}}

                        style={{ paddingVertical: 3, borderRadius: 10 }}
                        onPress={uploadOrdersHandler}
                        disabled={toggleDisabledButton}>
                        <AppTextMedium
                            style={{ textAlign: 'center' }}
                        >
                            Выгрузка
                        </AppTextMedium>
                    </Button>
                </Flex>

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentInset={{top: -50, left: 0, bottom: 20, right: 0}}
                    >
                        <RowItem 
                            column={['Номер заказа', 'Соц. сеть', 'Кол-во', 'Расход']}
                        />
                        {data && data.map((column, i) => (
                            <Swipeout
                                key={data[i][0]}
                                autoClose={true}
                                backgroundColor='transparent'
                                buttonWidth={80}
                                right={[
                                    {
                                        component: (
                                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                                <Svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <Path d="M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="white"/>
                                                </Svg>
                                            </View>
                                        ),
                                        onPress: () => {infoOrderHandler(column[0])}
                                    },
                                    {
                                        component: (
                                          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                            <Svg width="20" height="20" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                                <Path d="M10.6239 8.5026L16.5614 2.5651C16.8431 2.28381 17.0017 1.90209 17.002 1.50393C17.0024 1.10576 16.8445 0.72377 16.5632 0.441977C16.2819 0.160185 15.9002 0.00167771 15.5021 0.00132608C15.1039 0.000974453 14.7219 0.158807 14.4401 0.440102L8.5026 6.3776L2.5651 0.440102C2.28331 0.15831 1.90112 0 1.5026 0C1.10409 0 0.721895 0.15831 0.440102 0.440102C0.15831 0.721895 0 1.10409 0 1.5026C0 1.90112 0.15831 2.28331 0.440102 2.5651L6.3776 8.5026L0.440102 14.4401C0.15831 14.7219 0 15.1041 0 15.5026C0 15.9011 0.15831 16.2833 0.440102 16.5651C0.721895 16.8469 1.10409 17.0052 1.5026 17.0052C1.90112 17.0052 2.28331 16.8469 2.5651 16.5651L8.5026 10.6276L14.4401 16.5651C14.7219 16.8469 15.1041 17.0052 15.5026 17.0052C15.9011 17.0052 16.2833 16.8469 16.5651 16.5651C16.8469 16.2833 17.0052 15.9011 17.0052 15.5026C17.0052 15.1041 16.8469 14.7219 16.5651 14.4401L10.6239 8.5026Z" fill="white"/>
                                            </Svg>
                                          </View>  
                                        ),
                                        backgroundColor: '#F85A5A',
                                        onPress: () => deleteOrderHandler(column[0]) 
                                    }
                                
                                ]}
                            >
                                <RowItem 
                                    column={column}
                                    color={i % 2 === 0}
                                    onLongPress={() => goToDetails(data[i][0])}
                                />
                            </Swipeout>
  
                        ))}
                    </ScrollView>

                <Flex 
                    style={{ position: 'absolute', bottom: 0, left: 0, right: 0, paddingHorizontal: 5 }}
                >
                    <Flex
                        direction='row'
                        justifyContent='space-between'
                        alignItems='center'
                        style={{ backgroundColor: 'white', height: 40 }}
                    >
                        <AppTextMedium
                            size='12px'
                            color='rgba(133, 133, 133, 0.82)'
                        >
                            Всего: {store.totalCount}
                        </AppTextMedium>
                        	
                        <Flex
                            direction='row' 
                            alignItems='center'
                        >
                            <AppTextMedium
                                size='12px'
                                color='rgba(133, 133, 133, 0.82)'
                                style={{ marginRight: 10 }}
                            >
                                Cтраница: {page}
                            </AppTextMedium>
                            <Button style={{ marginRight: 5 }}
                                onPress={startArrow}
                            >
                                <AppTextMedium 
                                    size='12px'
                                    color='rgba(133, 133, 133, 0.82)'
                                >
                                    &#5176;&#5176;
                                </AppTextMedium>
                            </Button>
                            <Button style={{ marginRight: 5 }}
                                onPress={prevArrow}
                            >
                                <AppTextMedium 
                                    size='12px'
                                    color='rgba(133, 133, 133, 0.82)'

                                >
                                    &#5176;
                                </AppTextMedium>
                            </Button>
                            <Button style={{ marginLeft: 5 }}
                                onPress={nextArrow}
                            >
                                <AppTextMedium 
                                    size='12px'
                                    color='rgba(133, 133, 133, 0.82)'
                                >
                                    &#5171;
                                </AppTextMedium>
                            </Button>
                            <Button style={{ marginLeft: 5 }}
                                onPress={lastArrow}
                            >
                                <AppTextMedium 
                                    size='12px'
                                    color='rgba(133, 133, 133, 0.82)'
                                >
                                    &#5171;&#5171;
                                </AppTextMedium>
                            </Button>
                        </Flex>
                    </Flex>

                </Flex>
            </Container>
        </Flex>
    );
});
export {Orders};
