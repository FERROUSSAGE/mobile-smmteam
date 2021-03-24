import DropDownPicker from 'react-native-dropdown-picker';
import React from 'react';
import { Platform } from 'react-native';

const ComboBox = ({items, placeholder}) => {
    
    return (
        <DropDownPicker
            items={items}
            containerStyle={{
                height: 40,
                width: '97%',
                marginLeft: '1.5%',
                marginVertical: 17
            }}
            style={{
                borderBottomWidth: 1,
                borderBottomColor: '#696666',
                paddingVertical: 10,
                borderBottomEndRadius: 0,
                borderBottomStartRadius: 0,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderStartColor: 'transparent',
                borderEndColor: 'transparent',
                borderLeftColor: 'transparent',
                borderRightColor: 'transparent',
                borderColor: 'transparent',
                paddingHorizontal: 0,
                paddingVertical: 0,
                marginVertical: 0,
                marginHorizontal: 0,
            }}
            itemStyle={{
                justifyContent: 'flex-start'
            }}
            activeLabelStyle={{ color: 'red' }}
            placeholder={placeholder}
            placeholderStyle={{
                color: Platform.OS === 'ios' ? 'rgba(142, 140, 140, 0.6)' : 'rgba(142, 140, 140, 0.8)',
                fontSize: 12,
                fontFamily: 'neometric-medium',
                fontStyle: 'normal',
                fontWeight: '500'
            }}
        />
    );
}

export { ComboBox };