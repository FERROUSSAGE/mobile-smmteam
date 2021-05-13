import React from 'react';
import { Alert, SafeAreaView, StatusBar } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LogBox } from 'react-native';

import AppNavigator from './navigation/AppNavigator';
import { Flex } from './components/styled';
import { h } from './utils/consts';

import { observer } from 'mobx-react-lite';

import store from './store';

const customFonts = {
    'neometric-bold': require('./assets/fonts/Neometric-Bold.ttf'),
    'neometric-medium': require('./assets/fonts/Neometric-Medium.ttf'),
    'neometric-regular': require('./assets/fonts/Neometric-Regular.ttf')
};

export default observer(function App() {
    const [isReady, setIsReady] = React.useState(false);

    LogBox.ignoreAllLogs(true);

    const loadAppAplication = async () => {
        await Font.loadAsync(customFonts);
        setIsReady(true);
    }

    React.useEffect(() => {
        loadAppAplication();
        store.fetchResellerTypes();
        store.fetchResellers();
        store.fetchOrders();
        store.fetchMessages()
    }, []);

    if (isReady) {
        return (
            <Flex 
                flex={1}
                style={{ minHeight: h }}
            >
                <SafeAreaView />
                <StatusBar barStyle={'dark-content'} />
                <AppNavigator/>
            </Flex>
        );
    } else {
        return <AppLoading/>
    }
})
