import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LoginScreen } from '../screens';
import HomeNavigator from './HomeNavigator';

const MainStack = createDrawerNavigator();
const whiteTheme = {
    ...DefaultTheme,
    colors: {
    ...DefaultTheme.colors,
    background: 'white'
    },
};

const AppNavigator = () => {
    return (
        <NavigationContainer theme={whiteTheme}>
            <MainStack.Navigator
                initialRouteName='Login'
                screenOptions={{
                    swipeEnabled: false
                }}
            >
                <MainStack.Screen 
                    name='Login'
                    component={LoginScreen}
                />
                <MainStack.Screen 
                    name='HomeContainer'
                    children={HomeNavigator}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
