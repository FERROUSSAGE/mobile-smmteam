import React from 'react';
import styled from 'styled-components';
import Svg, { G, Path, Rect } from 'react-native-svg';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, ResellerScreen, MailScreen, OrdersScreen, TelegramScreen, TelegramDetailsScreen } from '../screens';
import { Image, StyleSheet } from 'react-native';
import { Flex } from '../components/styled';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: '#747474',
        fontFamily: 'neometric-bold',
        fontWeight: '600'
    },
    bottomLabel: {
        fontSize: 12,
        fontFamily: 'neometric-medium',
        fontWeight: '500'
    }
});

const Icon = styled.Image`
    width: 25px;
    height: 25px;
`;

const SvgComponent = (props) => (

    <Svg viewBox="0 0 25 25">
        <G {...props}>
            <Path d="M11.4583 8.33332L9.7973 7.5028C9.51959 7.36395 9.21336 7.29166 8.90287 7.29166H8.1201C7.58967 7.29166 7.08096 7.50237 6.70589 7.87744L5.79413 8.7892C5.41906 9.16428 5.20834 9.67298 5.20834 10.2034L5.20834 15.5963C5.20834 16.265 5.54255 16.8895 6.09894 17.2604L10.2158 20.005C10.9528 20.4963 11.9251 20.4443 12.6056 19.8773L17.7083 15.625" />
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M15.0132 13.3933C14.4098 12.5854 13.2993 12.353 12.4226 12.8513L10.426 13.986C9.8052 14.3388 9.02514 14.2334 8.52019 13.7285V13.7285C7.86049 13.0688 7.90965 11.985 8.62637 11.3878L12.9854 7.75521C13.3448 7.45569 13.7979 7.29166 14.2658 7.29166H15.1529C15.4634 7.29166 15.7696 7.36395 16.0473 7.5028L18.6861 8.8222C19.3637 9.16099 19.7917 9.85351 19.7917 10.6111L19.7917 13.7713C19.7917 15.6954 17.3406 16.5096 16.1893 14.968L15.0132 13.3933Z" />
            <Path d="M1.04167 17.7083V8.33334" stroke-linecap="round" />
            <Path d="M1.04167 17.7083V8.33334" stroke-linecap="round" />
            <Path d="M23.9584 17.7083V8.33334" stroke-linecap="round" />
        </G>
    </Svg>

);

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
    <Tab.Navigator 
        initialRouteName='Home'
        tabBarOptions={{
            style: {
                backgroundColor: '#D39CFE',
                alignItems: 'center'
            },
            labelStyle: styles.bottomLabel,
            activeTintColor: '#FAC1FF', 
            inactiveTintColor: '#fff'
        }}
    >
        <Tab.Screen
            name='Orders'
            component={_OrdersStack}
            options={{
                title: 'Заказы',
                tabBarIcon: () => <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M20.8333 10.4167L14.5833 4.16666L20.8333 10.4167Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M4.16667 10.4167L10.4167 4.16666" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M3.97159 10.4167H21.0287L19.4042 19.7917H5.59608L3.97159 10.4167Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                </Svg>

            }}
        /> 
        <Tab.Screen
            name='Mail'
            component={_MailStack}
            options={{
                title: 'Почта',
                tabBarIcon: () => <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Rect x="2.08334" y="5.20834" width="20.8333" height="14.5833" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M2.08334 5.20834L12.5 14.5833L22.9167 5.20834" stroke="white" />
                    <Path d="M2.08334 19.7917L9.37501 11.4583" stroke="white" />
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M22.9167 19.7917L15.625 11.4583L22.9167 19.7917Z" stroke="white" />
                </Svg>

            }}
        />         
        <Tab.Screen
            name='Home'
            component={_HomeStack}
            options={{
                title: 'Главная',
                tabBarIcon: () => <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M3.125 23.1061V10.6061L12.5 2.08334L21.875 10.6061V23.1061H3.125Z" stroke="white" />
                    <Rect x="9.375" y="14.5833" width="6.25" height="8.33333" rx="1" stroke="white" />
                </Svg>

            }}s
        />        
        <Tab.Screen
            name='Telegram'
            component={_TelegramStack}
            options={{
                title: 'Чат',
                tabBarIcon: () => <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M21.4942 11.6057C22.2351 11.9732 22.2351 13.0299 21.4942 13.3974L4.56937 21.7926C3.90466 22.1224 3.125 21.6388 3.125 20.8968V14.5833L12.5 12.5L3.125 10.2025L3.125 4.10629C3.125 3.3643 3.90466 2.88073 4.56937 3.21045L21.4942 11.6057Z" stroke="white" stroke-linejoin="round" />
                </Svg>

            }}
        />
        <Tab.Screen
            name='Reseller'
            component={_ResellerStack}
            options={{
                title: 'Реселлеры',
                tabBarIcon: () => <Svg width="35" height="35" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M11.4583 8.33332L9.7973 7.5028C9.51959 7.36395 9.21336 7.29166 8.90287 7.29166H8.1201C7.58967 7.29166 7.08096 7.50237 6.70589 7.87744L5.79413 8.7892C5.41906 9.16428 5.20834 9.67298 5.20834 10.2034L5.20834 15.5963C5.20834 16.265 5.54255 16.8895 6.09894 17.2604L10.2158 20.005C10.9528 20.4963 11.9251 20.4443 12.6056 19.8773L17.7083 15.625" stroke="white" />
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M15.0132 13.3933C14.4098 12.5854 13.2993 12.353 12.4226 12.8513L10.426 13.986C9.8052 14.3388 9.02514 14.2334 8.52019 13.7285V13.7285C7.86049 13.0688 7.90965 11.985 8.62637 11.3878L12.9854 7.75521C13.3448 7.45569 13.7979 7.29166 14.2658 7.29166H15.1529C15.4634 7.29166 15.7696 7.36395 16.0473 7.5028L18.6861 8.8222C19.3637 9.16099 19.7917 9.85351 19.7917 10.6111L19.7917 13.7713C19.7917 15.6954 17.3406 16.5096 16.1893 14.968L15.0132 13.3933Z" stroke="white" />
                    <Path d="M1.04167 17.7083V8.33334" stroke="white" stroke-linecap="round" />
                    <Path d="M1.04167 17.7083V8.33334" stroke="white" stroke-linecap="round" />
                    <Path d="M23.9584 17.7083V8.33334" stroke="white" stroke-linecap="round" />
                </Svg>
            }}
        />        
                          
    </Tab.Navigator>
);

export default HomeNavigator;