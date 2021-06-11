import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import { Colors } from '../../utils/consts';
import { Flex, AppTextBold, AppTextMedium } from '../../components/styled';

const OrderDetails = ({ route }) => {
    const { order: { 
        idSmmcraft, 
        cost, 
        countOrdered,
        idProject,
        link,
        payment,
        date,
        spend,
        socialNetwork,
        countViews,
        reseller: { name: resellerName },
        reseller_type: { name: typeName },
        user: { name }
    }} = route.params;

    return (
        <ScrollView>
            <Flex 
                flex={1}
                alignItems='flex-start'
                style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                <AppTextBold
                    color='black'
                    size='14px'
                    style={{ paddingVertical: 5 }}>
                    Номер заказа: <AppTextMedium size='12px' color={Colors.titleStack}> {idSmmcraft}</AppTextMedium>
                </AppTextBold>
                {idProject && 
                    <AppTextBold
                        color='black'
                        size='14px'
                        style={{ paddingVertical: 5 }}>
                    Номер заказа реселлера: <AppTextMedium size='12' color={Colors.titleStack}> {idProject}</AppTextMedium>
                    </AppTextBold>
                }
                <AppTextBold
                    color='black'
                    size='14px'
                    style={{ paddingVertical: 5 }}>
                        Социальная сеть:<AppTextMedium size='12px' color={Colors.titleStack}> {socialNetwork}</AppTextMedium>
                </AppTextBold>
                {countViews === 0 
                    ? <Flex>
                        <AppTextBold
                            color='black'
                            size='14px'
                            style={{ paddingVertical: 5 }}>
                            Реселлер: <AppTextMedium size='12px' color={Colors.titleStack}> {resellerName}</AppTextMedium>
                        </AppTextBold>
                        <AppTextBold
                            color='black'
                            size='14px'
                            style={{ paddingVertical: 5 }}>
                            Услуга: <AppTextMedium size='12px' color={Colors.titleStack}> {typeName}</AppTextMedium>
                        </AppTextBold>
                    </Flex>
                    : <Flex>
                        <AppTextBold
                            color='black'
                            size='14px'
                            style={{ paddingVertical: 5 }}>
                            Зрителей: <AppTextMedium size='12px' color={Colors.titleStack}> {countViews}</AppTextMedium>
                        </AppTextBold>
                    </Flex>
                }
                <AppTextBold
                    color='black'
                    size='14px'
                    style={{ paddingVertical: 5 }}>
                    Количество: <AppTextMedium size='12px' color={Colors.titleStack}> {countOrdered}</AppTextMedium>
                </AppTextBold>
                <AppTextBold
                    color='black'
                    size='14px'
                    style={{ paddingVertical: 5 }}>
                    Стоимость: <AppTextMedium size='12px' color={Colors.titleStack}> {cost} руб.</AppTextMedium>
                </AppTextBold>
                <AppTextBold
                    color='black'
                    size='14px'
                    style={{ paddingVertical: 5 }}>
                    Расход: <AppTextMedium size='12px' color={Colors.titleStack}> {spend} руб.</AppTextMedium>
                </AppTextBold>
                <AppTextBold
                    color='black'
                    size='14px'
                    style={{ paddingVertical: 5 }}>
                    Ссылка: <AppTextMedium size='12px' color={Colors.titleStack}> {link}</AppTextMedium>
                </AppTextBold>
                <AppTextBold
                    color='black'
                    size='14px'
                    style={{ paddingVertical: 5 }}>
                    Платежка: <AppTextMedium size='12px' color={Colors.titleStack}> {payment}</AppTextMedium>
                </AppTextBold>
                <AppTextBold
                    color='black'
                    size='14px'
                    style={{ paddingVertical: 5 }}>
                    Дата: <AppTextMedium size='12px' color={Colors.titleStack}> {date}</AppTextMedium>
                </AppTextBold>
                <AppTextBold
                    color='black'
                    size='14px'
                    style={{ paddingVertical: 5 }}>
                    Кем выполнен: <AppTextMedium size='12px' color={Colors.titleStack}> {name}</AppTextMedium>
                </AppTextBold>

            </Flex>
        </ScrollView>
    )

};

export {OrderDetails};
