import React from 'react';
import { AppTextBold, Container, Flex } from '../components/styled';

import Accardeon from 'react-native-collapsible/Accordion';
import styled from 'styled-components';

import { AppTextMedium, AppTextRegular } from '../components/styled';

const HeaderWrapper = styled.View`
    background: rgba(127, 5, 255, 0.26);
    box-shadow: 0px 4px 20px rgba(199, 80, 255, 0.50);
    border-radius: 15px;
`;

const HeaderTitle = styled(AppTextMedium)`
    text-align: left;
    padding: 16px 20px;
    width: 100%;
`;

const ContentTitle = styled(AppTextRegular)`
    padding: 10px 20px;
`;

const ContentWrapper = styled.View`
  width: 90%;
  maxHeight: 300px;
  margin: 0 auto;
  background: #D29CFE;
  padding: 5px;

  borderBottomLeftRadius: 18px;
  borderBottomRightRadius: 18px;
`;

const Wrapper = styled(Container)`
    padding: 0;
    margin: 20px;
`


const Header = (section) => {
    return <HeaderWrapper>
      <HeaderTitle size='14px'>{section.title}</HeaderTitle>
    </HeaderWrapper>
  }
  
  const Content = (section) => {
    return <ContentWrapper>
      <ContentTitle size='14px'>{section.content}</ContentTitle>
    </ContentWrapper>
  }
  
  const SECTIONS = [
    {
      title: 'Как это работает?',
      content: 'Документация выставки: Введение в Expodocs.expo.io Перевести эту страницу Это набор инструментов и сервисов, созданных на основе React Native и нативных платформ, которые помогут вам разрабатывать, создавать, развертывать, ... Создать новый проект expo init my-project ...',
    },
    {
      title: 'Правила оформления заказа',
      content: 'Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...',
    },
    {
      title: 'Список заказов это',
      content: 'Документация выставки: Введение в Expodocs.expo.io Перевести эту страницу Это набор инструментов и сервисов, созданных на основе React Native и нативных платформ, которые помогут вам разрабатывать, создавать, развертывать, ... Создать новый проект expo init my-project ...',
    },
    {
      title: 'Telegram Panel',
      content: 'Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...',
    },
  ];


const Home = () => {
    const [activeSection, setActiveSection] = React.useState([0]);
    const updateSectionHandler = (activeSections) => {
        setActiveSection(activeSections);
    }

    return (
        <Flex flex={1}>
            <Wrapper style={{ position: 'relative',  height: '100%'}}>
                <AppTextBold
                    size='18px'
                    color='rgba(133, 133, 133, 0.82)'
                    style={{ position: 'absolute', top: 10 }}
                >Приложение для работы оператору</AppTextBold>
                <Flex style={{ marginBottom: 30, position: 'absolute', right: 0, left: 0, top: 75, height: '100%'}}>
                    <Flex style={{ minHeight: '75%' }}>
                        <Accardeon
                            sections={SECTIONS}
                            activeSections={activeSection}
                            renderHeader={Header}
                            renderContent={Content}
                            onChange={updateSectionHandler}
                            underlayColor='transparent'
                            sectionContainerStyle={{marginTop: 10}}

                        />
                    </Flex>
                    <AppTextBold
                        size='9px'
                        color='rgba(150, 150, 150, 0.51)'
                        style={{ textAlign: 'center' }}
                    >Developers of Uglovskoy Ilya | Panova Svetlana Design by @svpanova_design</AppTextBold>
                </Flex> 
            </Wrapper>
        </Flex>
    );
};

export {Home};
