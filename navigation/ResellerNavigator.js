import React from 'react';
import { StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

import { AdcoreScreen, VktargetScreen, StreamScreen, SpanelScreen, SmmokScreen, ResellerScreen } from '../screens';
import { Colors, h, w } from '../utils/consts';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: Colors.titleStack,
        fontFamily: 'neometric-bold',
        fontWeight: '600'
    }
});

const _Resellers = () => (
    <Stack.Navigator>
        <Stack.Screen
            name='Resellers'
            component={ResellerScreen}
            options={{ 
                title: 'Реселлеры',
                headerTitleAlign: 'left',
                headerTitleStyle: styles.title
            }}
        />
    </Stack.Navigator>
);
const _Adcore = () => (
    <Stack.Navigator>
        <Stack.Screen
            name='Adcore'
            component={AdcoreScreen}
            options={{ 
                title: 'Реселлеры: Adcore',
                headerTitleAlign: 'left',
                headerTitleStyle: styles.title
            }}
        />
    </Stack.Navigator>
);
const _Smmok = () => (
    <Stack.Navigator>
        <Stack.Screen
            name='Smmok'
            component={SmmokScreen}
            options={{ 
                title: 'Реселлеры: SMMOK-FB',
                headerTitleAlign: 'left',
                headerTitleStyle: styles.title
            }}
        />
    </Stack.Navigator>
);
const _Vktarget = () => (
    <Stack.Navigator>
        <Stack.Screen
            name='Vktarget'
            component={VktargetScreen}
            options={{ 
                title: 'Реселлеры: VKTARGET',
                headerTitleAlign: 'left',
                headerTitleStyle: styles.title
            }}
        />
    </Stack.Navigator>
);
const _Spanel = () => (
    <Stack.Navigator>
        <Stack.Screen
            name='Spanel'
            component={SpanelScreen}
            options={{ 
                title: 'Реселлеры: SocialPanel',
                headerTitleAlign: 'left',
                headerTitleStyle: styles.title
            }}
        />
    </Stack.Navigator>
);
const _Stream = () => (
    <Stack.Navigator>
        <Stack.Screen
            name='Stream'
            component={StreamScreen}
            options={{ 
                title: 'Запуск стрима',
                headerTitleAlign: 'left',
                headerTitleStyle: styles.title
            }}
        />
    </Stack.Navigator>
);

const ResellerNavigator = () => (
    <Drawer.Navigator
        drawerPosition='right'
        initialRouteName='Resellers'
        hideStatusBar={true}
        statusBarAnimation='slide'
        keyboardDismissMode='none'
        drawerStyle={{
            borderTopLeftRadius: 44,
            borderBottomLeftRadius: 44
        }}
        drawerContentOptions={{
            style: {
                marginTop: h / 12,
                paddingLeft: 30,
                paddingRight: 30
            },
            inactiveTintColor: '#fff',
            activeTintColor: '#fff',
            activeBackgroundColor: '#8076FA',
            labelStyle: {
                fontWeight: '600',
                fontFamily: 'neometric-bold',
                fontSize: 14,
                paddingLeft: 30,
                textAlign: 'center'
            },
            itemStyle: {
                backgroundColor: Colors.blue,
                paddingTop: 5,
                paddingBottom: 5,
                marginTop: 10, 
                marginBottom: 10,
                borderRadius: 15,
                shadowColor: '#c750ff',
                shadowOffset: {
                    width: 0,
                    height: 4
                },
                shadowOpacity: 0.26,
                shadowRadius: 20,
                elevation: 4
            }
        }}
    >
        <Drawer.Screen
            name='Resellers'
            component={_Resellers}
            options={{
                drawerLabel: 'О реселлерах'
            }}
        />
        <Drawer.Screen
            name='Adcore'
            component={_Adcore}
            options={{
                drawerLabel: 'AD_CORE'
            }}
        />
        <Drawer.Screen
            name='Smmok'
            component={_Smmok}
            options={{
                drawerLabel: 'SMMOK-FB'
            }}
        />
        <Drawer.Screen
            name='Vktarget'
            component={_Vktarget}
            options={{
                drawerLabel: 'VKTARGET'
            }}
        />
        <Drawer.Screen
            name='Spanel'
            component={_Spanel}
            options={{
                drawerLabel: 'SocialPanel'
            }}
        />
        <Drawer.Screen
            name='Stream'
            component={_Stream}
            options={{
                drawerLabel: 'Запуск стрима'
            }}
        />
    </Drawer.Navigator>
);

export default ResellerNavigator;