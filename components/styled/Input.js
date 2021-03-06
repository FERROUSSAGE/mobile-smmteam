import styled from 'styled-components/native';

export const Input = styled.TextInput`
    backgroundColor: ${props => props.background || 'white'};
    color: ${props => props.color || 'rgba(142, 140, 140, 0.5)'};

    fontSize: ${props => props.size || '9px'};
    fontFamily: ${props => props.family || 'neometric-bold'};
    fontWeight: ${props => props.weight || '600'};
    
    ${props => props.border && 'border: 1px solid rgba(0, 0, 0, 0.1)'};
    ${props => props.shadow && 'box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25)'};
    border-radius: ${props => props.borderRadius || '10px'};
    padding: ${props => props.padding || '17px 22px'};
`;