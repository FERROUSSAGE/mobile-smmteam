import React from 'react';
import styled from 'styled-components/native';
import { ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';

import { Container, Flex, AppTextMedium, Button } from '../components/styled';

import eyeSlash from '../assets/icons/eye-slash.png';
import eye from '../assets/icons/eye.png';

const Input = styled.TextInput`
    background: rgba(255, 255, 255, 0.48);
    border-radius: 15px;
    padding: ${props => props.ios ? '22px 25px' : '10px 25px'};
    color: rgba(74, 74, 74, 0.54);
    font-size: 14px;
    font-family: neometric-medium;
    font-weight: 500;

    margin: 20px 0 19px 0;  
    width: 100%;   
`;

const Eye = styled.Image`
    position: absolute;
    right: 15px;
    bottom: -25px;
    width: 30px;
    height: 30px;
    transform: scale(2.5);
`;


const Login = ({ navigation }) => {
    const [passwordVisible, setPasswordVisible] = React.useState(true);

    const visibleHandler = () => setPasswordVisible(!passwordVisible); 
    const goToHomeHandler = () => navigation.navigate('HomeContainer');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <ImageBackground
                resizeMode='cover'
                style={{ flex: 1, justifyContent: 'center' }}
                source={require('../assets/images/login/login-background.jpg')} >
                <Flex
                    flex={1}
                    justifyContent='flex-end'
                    style={{ marginBottom: 60 }}
                >
                    <Flex
                        direction='column'
                    >
                        <Container>
                            <AppTextMedium
                                size='18px'
                                color='white'
                            >
                                Login:
                        </AppTextMedium>
                            {
                                Platform.OS === 'ios'
                                    ? <Input ios />
                                    : <Input />
                            }
                            <AppTextMedium
                                size='18px'
                                color='white'
                            >
                                Password:
                        </AppTextMedium>
                            <Flex
                                direction='row'
                                alignItems='center'
                                style={{ position: 'relative' }}
                            >
                                {
                                    Platform.OS === 'ios'
                                        ? <Input
                                            ios
                                            secureTextEntry={passwordVisible}
                                        />
                                        :
                                        <Input
                                            secureTextEntry={passwordVisible}
                                        />
                                }
                                <Button
                                    onPress={visibleHandler}
                                    style={{ position: 'absolute', right: -10, top: -10 }}
                                >
                                    {!passwordVisible
                                        ? <Eye resizeMode='center' source={eye} />
                                        : <Eye resizeMode='center' source={eyeSlash}
                                        />}
                                </Button>
                            </Flex>
                            <Flex
                                alignItems='center'
                                style={{ marginTop: 30 }}
                            >
                                <Button
                                    color='blue'
                                    width='165px'
                                    height='50px'
                                    shadow
                                    onPress={goToHomeHandler}

                                    style={{ paddingTop: 16, paddingBottom: 16, paddingLeft: 16, paddingRight: 16 }}
                                >
                                    <AppTextMedium
                                        style={{ textAlign: 'center' }}
                                    >
                                        Войти
                                    </AppTextMedium>
                                </Button>
                            </Flex>
                        </Container>
                    </Flex>
                </Flex>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
};

export {Login};