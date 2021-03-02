import styled from 'styled-components/native';

export const Button = styled.View`
    padding: ${props => props.padding};
    background: ${props => props.color === 'blue'
    ? '#5E50FF' : props.color === 'pink' 
    ? '#B250FF' : 'transparent'};
    border-radius: 15px;
    border: ${props => props.border && '2px solid rgba(94, 80, 255, 0.5)' };
    box-shadow: ${props => props.shadow && '0px 3px 10px rgba(0, 0, 0, 0.25)'};
`;