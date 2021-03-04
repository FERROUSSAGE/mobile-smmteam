import React from 'react';
import { DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, ResellerScreen, MailScreen, OrdersScreen, TelegramScreen, TelegramDetailsScreen } from '../screens';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: '#747474',
        fontFamily: 'neometric-bold',
        fontWeight: '600'
    }
});

const _HomeStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name='Home' 
            component={HomeScreen} 
            options={{ 
                title: 'Главная',
                headerTitleAlign: 'left',
                headerTitleStyle: styles.title
            }}
        />
    </Stack.Navigator>
); 

const _ResellerStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name='Reseller'
            component={ResellerScreen}
            options={{ 
                title: 'Реселлеры',
                headerTitleAlign: 'left',
                headerTitleStyle: styles.title
            }}
        />
    </Stack.Navigator>
); 

const _MailStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name='Mail'
            component={MailScreen}
            options={{
                title: 'Почта',
                headerTitleAlign: 'left',
                headerTitleStyle: styles.title 
            }}
        />
    </Stack.Navigator>
); 

const _OrdersStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name='Orders'
            component={OrdersScreen}
            options={{
                title: 'Список заказов',
                headerTitleAlign: 'left',
                headerTitleStyle: styles.title 
            }}
        />
    </Stack.Navigator>
); 

const _TelegramStack = () => (
    <Stack.Navigator initialRouteName='TelegramDialogs'>
        <Stack.Screen
            name='TelegramDialogs'
            component={TelegramScreen}
            options={{
                title: 'Telegram - Чат',
                headerTitleAlign: 'left',
                headerTitleStyle: styles.title 
            }}
        />
        <Stack.Screen
            name='TelegramDetails'
            component={TelegramDetailsScreen}
            options={{
                title: 'Telegram - Чат',
                headerTitleAlign: 'left',
                headerTitleStyle: styles.title 
            }}
        />
    </Stack.Navigator>
); 

const HomeNavigator = () => (
    <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen
            name='Orders'
            component={_OrdersStack}
            options={{
                title: 'Заказы'
            }}
        /> 
        <Tab.Screen
            name='Mail'
            component={_MailStack}
            options={{
                title: 'Почта'
            }}
        />         
        <Tab.Screen
            name='Home'
            component={_HomeStack}
            options={{
                title: 'Главная'
            }}s
        />        
        <Tab.Screen
            name='Telegram'
            component={_TelegramStack}
            options={{
                title: 'Чат'
            }}
        />
        <Tab.Screen
            name='Reseller'
            component={_ResellerStack}
            options={{
                title: 'Реселлеры'
            }}
        />        
                          
    </Tab.Navigator>
);

export default HomeNavigator;