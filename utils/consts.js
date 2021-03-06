import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const Colors = {
    primaryButton: '#5E50FF',
    secondaryButton: '#B250FF',
    titleStack: '#747474',
    primaryHome: '#D39CFE'
};


export {
    height as h, 
    width as w,
    Colors
};