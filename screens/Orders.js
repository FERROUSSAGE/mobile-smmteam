import React from 'react';
import styled from 'styled-components/native';
import { Alert, ScrollView, Text, TouchableOpacity } from 'react-native';
import { AppTextMedium, Button, Container, Flex, Input } from '../components/styled';
import Swipeout from 'react-native-swipeout';

import { observer } from 'mobx-react-lite';
import { debounce } from 'lodash';

import store from '../store';
import { getOrderByText as httpGetOrderByText, deleteOrder as httpDeleteOrder } from '../https/order';

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

const SwipeoutButton = styled.View`
    width: 80px;
    height: 80px;
    background-color: #B4C1CB;
`

const RowItem = ({ column, color }) => {  
    return (
        <TouchableOpacity>
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

const Orders = observer(() => {
    const [page, setPage] = React.useState(1);

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

    const deleteOrderHandler = async (id) => {
        try {
            const { data: orderDeleted } = await httpDeleteOrder(store.orders.rows.find(item => item.idSmmcraft === id).id);
            if(!orderDeleted.status)
                return Alert.alert(orderDeleted.message);
            Alert.alert(orderDeleted.message);
            store.fetchOrders(page);

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

                        style={{ paddingVertical: 3, borderRadius: 10 }}>
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
                                key={data[i].idSmmcraft}
                                autoClose={true}
                                backgroundColor='transparent'
                                buttonWidth={80}
                                right={[
                                    {
                                        component: () => <SwipeoutButton/>,
                                    },
                                    {
                                        component: () => <SwipeoutButton/>,
                                        onPress: () => deleteOrderHandler(column[0]) 
                                    }
                                
                                ]}
                            >
                                <RowItem 
                                    column={column}
                                    color={i % 2 === 0}
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
