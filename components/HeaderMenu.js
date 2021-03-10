import React from 'react';
import { TouchableOpacity } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
export const HeaderMenu = (route) => {
    return (
        <TouchableOpacity
            style={{ width: 30 }} 
            onPress={() => {}}
        >
            <Svg width="4" height="20" viewBox="0 0 4 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Circle cx="2" cy="2" r="2" fill="#777676"/>
                <Circle cx="2" cy="10" r="2" fill="#777676"/>
                <Circle cx="2" cy="18" r="2" fill="#777676"/>
            </Svg>
        </TouchableOpacity> 
    );
};