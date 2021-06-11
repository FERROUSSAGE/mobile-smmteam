import React from 'react';
import { Container, Flex, AppTextRegular, AppTextBold, AppTextMedium } from '../components/styled';
import { Colors } from '../utils/consts';

import Svg, { Path } from 'react-native-svg';
import { observer } from 'mobx-react-lite';

import store from '../store';

const Reseller = observer(() => {
    return (
        <Flex
            flex={1}
            justifyContent='space-between'>
            <Container style={{ marginHorizontal: 10, marginVertical: 10 }}>
                <AppTextBold 
                    style={{marginVertical: 10 }}
                    size='24px' 
                    color={Colors.titleStack}>Баланс реселлеров:</AppTextBold>
                <AppTextRegular
                    style={{marginVertical: 10 }}
                    size='20px'
                    color={Colors.titleStack}
                >
                    Adcore — <AppTextMedium size='18px' color={Colors.blue}> {store.balances[0][0]} руб.</AppTextMedium>
                </AppTextRegular>
                <AppTextRegular
                    style={{marginVertical: 10 }}
                    size='20px'
                    color={Colors.titleStack}
                >
                    SMMOK-FB — <AppTextMedium size='18px' color={Colors.blue}> {store.balances[1][0]} руб.</AppTextMedium>
                </AppTextRegular>
                <AppTextRegular
                    style={{marginVertical: 10 }}
                    size='20px'
                    color={Colors.titleStack}
                >
                    VKTarget — <AppTextMedium size='18px' color={Colors.blue}> {store.balances[3][0]} руб.</AppTextMedium>
                </AppTextRegular>
                <AppTextRegular
                    style={{marginVertical: 10 }}
                    size='20px'
                    color={Colors.titleStack}
                >
                    SocialPanel — <AppTextMedium size='18px' color={Colors.blue}> {store.balances[2][0]} руб.</AppTextMedium>
                </AppTextRegular>
            </Container>
            <Flex 
                direction='row'
                justifyContent='space-between'
                style={{ marginHorizontal: 30, marginTop: -30}}>
                <AppTextRegular
                    color={Colors.blue}>Свайпай влево для продолжения 
                </AppTextRegular>
                <Flex style={{ marginTop: -10 }}>
                    <Svg width="40" height="40" viewBox="0 0 40 40"  xmlns="http://www.w3.org/2000/svg">
                        <Path d="M31.6666 21.6667H11.8999L17.9499 28.9334C18.09 29.1019 18.1955 29.2964 18.2604 29.5057C18.3253 29.715 18.3484 29.935 18.3283 30.1532C18.2877 30.594 18.0736 31.0005 17.7333 31.2834C17.3929 31.5663 16.9541 31.7024 16.5134 31.6617C16.0727 31.6211 15.6662 31.4071 15.3833 31.0667L7.04992 21.0667C6.99385 20.9872 6.94372 20.9036 6.89992 20.8167C6.89992 20.7334 6.81659 20.6834 6.78325 20.6C6.70771 20.4089 6.66816 20.2055 6.66659 20C6.66816 19.7946 6.70771 19.5911 6.78325 19.4C6.78325 19.3167 6.86659 19.2667 6.89992 19.1834C6.94372 19.0965 6.99385 19.0129 7.04992 18.9334L15.3833 8.93338C15.54 8.74524 15.7362 8.59394 15.958 8.49024C16.1798 8.38654 16.4217 8.33298 16.6666 8.33338C17.056 8.33262 17.4334 8.46824 17.7333 8.71671C17.902 8.85663 18.0415 9.02846 18.1438 9.22237C18.246 9.41628 18.309 9.62846 18.3291 9.84676C18.3493 10.0651 18.3261 10.2852 18.2611 10.4945C18.196 10.7039 18.0903 10.8983 17.9499 11.0667L11.8999 18.3334H31.6666C32.1086 18.3334 32.5325 18.509 32.8451 18.8215C33.1577 19.1341 33.3333 19.558 33.3333 20C33.3333 20.4421 33.1577 20.866 32.8451 21.1786C32.5325 21.4911 32.1086 21.6667 31.6666 21.6667Z" fill="#5E50FF" fill-opacity="0.7"/>
                    </Svg>
                </Flex>
            </Flex>
            
        </Flex>
    );
});

export {Reseller};
