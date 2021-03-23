import DropDownPicker from 'react-native-dropdown-picker';
import React from 'react';

const ComboBox = ({items, placeholder}) => {
    
    return (
        <DropDownPicker
            items={items}
            containerStyle={{
                height: 40,
            }}
            style={{
                borderBottomWidth: 1,
                borderBottomColor: '#696666',
                paddingVertical: 10,
                borderBottomEndRadius: 0,
                borderBottomStartRadius: 0,
                borderTopColor: 'transparent',
                borderLeftColor: 'transparent',
                borderRightColor: 'transparent',
                paddingHorizontal: 0,
                paddingVertical: 0,
                marginVertical: 0,
                paddingHorizontal: 0
            }}
            itemStyle={{
                color: 'rgba(142, 140, 140, 0.5)',
                justifyContent: 'flex-start'

            }}
            activeLabelStyle={{ color: 'red' }}
            placeholder={placeholder}
            placeholderStyle={{
                color: 'rgba(142, 140, 140, 0.5)'
            }}
        />
    );
}

export { ComboBox };