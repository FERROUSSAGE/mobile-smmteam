import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

const Content = styled.View`
    background: ${props => props.color === 'blue'
        ? '#5E50FF' : props.color === 'pink'
            ? '#B250FF' : 'transparent'};
    border-radius: 15px;
    ${props => props.border ? `border: ${props.border}` : ''};
    width: ${props => props.width || '50px'};
    height: ${props => props.height || '25px'};
    ${props => props.shadow ? 'box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25)' : ''};
`;

const Button = (props) => {
    const { onPress } = props;
    return <TouchableOpacity  onPress={onPress} >
        <Content {...props} />
    </TouchableOpacity>
} 

export { Button }
