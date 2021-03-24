import React from 'react';
import styled from 'styled-components/native';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { AppTextMedium, Button, Container, Flex, Input } from '../components/styled';


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
`;

const RowItem = ({ column, color }) => {  
    return (
        <TouchableOpacity>
            <Row color={color}>
                {column.map((data) => (
                    <CellItem
                        data={data}
                        key={data.toString(16)}
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

const Orders = () => {
    const data = [
        [15, 14, 13, 12],
        [11, 10, 9, 8],
        [7, 6, 5, 4],
        [0, 1, 2, 3],
      ];

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

                    <ScrollView>
                        <RowItem 
                            column={['Номер заказа', 'Соц. сеть', 'Кол-во', 'Расход']}
                        />
                        {data.map((column, i) => (
                            <RowItem 
                                column={column} 
                                color={i % 2 === 0}
                                key={column.toString(16)} 
                            />
                        ))}
                    </ScrollView>

                <Flex 
                    style={{ position: 'absolute', bottom: 5, left: 0, right: 0, paddingHorizontal: 5 }}
                >
                    <Flex
                        direction='row'
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        <AppTextMedium
                            size='12px'
                            color='rgba(133, 133, 133, 0.82)'
                        >
                            Всего: 50
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
                                Cтраница: 1
                            </AppTextMedium>
                            <Button style={{ marginRight: 5 }}>
                                <AppTextMedium 
                                    size='12px'
                                    color='rgba(133, 133, 133, 0.82)'
                                >
                                    &#5176;&#5176;
                                </AppTextMedium>
                            </Button>
                            <Button style={{ marginRight: 5 }}>
                                <AppTextMedium 
                                    size='12px'
                                    color='rgba(133, 133, 133, 0.82)'

                                >
                                    &#5176;
                                </AppTextMedium>
                            </Button>
                            <Button style={{ marginLeft: 5 }}>
                                <AppTextMedium 
                                    size='12px'
                                    color='rgba(133, 133, 133, 0.82)'
                                >
                                    &#5171;
                                </AppTextMedium>
                            </Button>
                            <Button style={{ marginLeft: 5 }}>
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
};
export {Orders};
