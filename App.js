import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import AppNavigator from './navigation/AppNavigator';
import { Flex } from './components/styled';

const customFonts = {
    'neometric-bold': require('./assets/fonts/Neometric-Bold.ttf'),
    'neometric-medium': require('./assets/fonts/Neometric-Medium.ttf'),
    'neometric-regular': require('./assets/fonts/Neometric-Regular.ttf')
};

export default function App() {
    const [isReady, setIsReady] = React.useState(false);


    const loadAppAplication = async () => {
        await Font.loadAsync(customFonts);
        setIsReady(true);
    }

    React.useEffect(() => {
        loadAppAplication();
    }, []);

    if (isReady) {
        return (
            <Flex flex={1}>
                <SafeAreaView style={{  }}/>
                <StatusBar barStyle={'dark-content'} />
                <AppNavigator/>
            </Flex>
        );
    } else {
        return <AppLoading/>
    }
}
