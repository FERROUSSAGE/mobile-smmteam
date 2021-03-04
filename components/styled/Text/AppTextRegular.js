import styled from 'styled-components/native';

export const AppTextRegular = styled.Text`
    font-family: neometric-regular;
    font-style: normal;
    font-weight: 400;
    font-size: ${props => props.size || '14px'};
    color: ${props => props.color || 'white'};
`;