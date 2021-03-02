import styled from 'styled-components/native';

export const AppTextBold = styled.Text`
    font-family: neometric-bold;
    font-style: normal;
    font-weight: 600;
    font-size: ${props => props.size || '14px'};
`;