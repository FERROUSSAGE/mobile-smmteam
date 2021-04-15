import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const Colors = {
    primaryButton: '#5E50FF',
    secondaryButton: '#B250FF',
    titleStack: '#747474',
    primaryHome: '#D39CFE',

    blue: '#5E50FF',
    pink: '#B250FF'
};
const RN_APP_API_URL = 'http://5.180.136.16:8080/';


export {
    height as h, 
    width as w,
    Colors,
    RN_APP_API_URL
};