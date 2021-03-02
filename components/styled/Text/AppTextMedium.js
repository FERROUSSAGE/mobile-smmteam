import styled from 'styled-components/native';

export const AppTextMedium = styled.Text`
    font-family: neometric-medium;
    font-style: normal;
    font-weight: 500;
    font-size: ${props => props.size || '14px'};
    line-height: ${props => props.lineHeight };
`;