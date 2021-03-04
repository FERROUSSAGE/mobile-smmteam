import React from 'react';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import AppNavigator from './navigation/AppNavigator';

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
            <AppNavigator />
        );
    } else {
        return <AppLoading/>
    }
}
