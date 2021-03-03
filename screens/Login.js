import React from 'react';
import styled from 'styled-components/native';

import { Container, Flex, AppTextMedium, Button } from '../components/styled';
import { ImageBackground } from 'react-native';


const Input = styled.TextInput`
    background: rgba(255, 255, 255, 0.48);
    border-radius: 15px;
    padding: 22px 25px;
    color: rgba(74, 74, 74, 0.54);
    font-size: 14px;
    font-family: neometric-medium;
    font-weight: 500;

    margin: 20px 0 19px 0;  
    width: 100%;   
`;

const Eye = styled.Image`
    right: 0;
    width: 30px;
    height: 30px;
    transform: scale(2.5);
`;


const Login = () => {
    const [passwordVisible, setPasswordVisible] = React.useState(true);

    const visibleHandler = () => setPasswordVisible(!passwordVisible); 

    return <Flex flex={1}>
        <ImageBackground 
            resizeMode='cover'
            style={{ flex: 1, justifyContent: 'center'}}
            source={ require('../assets/images/login/login-background.jpg' )} >
            <Flex flex={1}
                justifyContent='flex-end'
                style={{ marginBottom: 60 }}
                >
                <Flex direction='column'>
                    <Container>
                        <AppTextMedium size='18px'
                            color='white'
                        >Email:</AppTextMedium>
                        <Input/>
                        <AppTextMedium size='18px'
                            color='white'
                        >Password:</AppTextMedium>
                        <Flex direction='row' 
                            alignItems='center'
                            style={{ position: 'relative' }}
                        >
                            <Input secureTextEntry={passwordVisible} style={{ position: 'relative', elevation: -10, zIndex: 10 }}/>
                            <Button onPress={visibleHandler}
                                style={{ position: 'absolute', right: -10, top: -10}}>
                                {!passwordVisible
                                    ? <Eye resizeMode='center' source={require('../assets/images/login/eye.png')}/> 
                                    : <Eye resizeMode='center' source={require('../assets/images/login/eye-slash.png')} />}
                            </Button>
                        </Flex>
                        <Flex alignItems='center'
                            style={{ marginTop: 30 }}    
                        >
                            <Button color='blue'
                                width='165px'
                                height='50px'
                                shadow
                            >
                                <AppTextMedium style={{ paddingTop: 16, paddingBottom: 16, textAlign: 'center' }} >Войти</AppTextMedium>
                            </Button>
                        </Flex>
                    </Container>
                </Flex>
            </Flex>
        </ImageBackground>
    </Flex>
};

export {Login};