import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

const Content = styled.View`
    background: ${props => props.color === 'blue'
        ? '#5E50FF' : props.color === 'pink'
            ? '#B250FF' : 'transparent'};
    border-radius: 15px;
    border: 2px solid transparent;
    ${props => props.borderColor && 'border-color: rgba(94, 80, 255, 0.5)'}; 
    ${props => props.width ? `width: ${props.width}` : ''};
    ${props => props.height ? `height: ${props.height}` : ''};
    ${props => props.shadow ? 'box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25)' : ''};
`;

const Button = (props) => {
    const { onPress } = props;
    return <TouchableOpacity  onPress={onPress} >
        <Content {...props} />
    </TouchableOpacity>
} 

export { Button }
