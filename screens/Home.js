import React from 'react';
import { AppTextBold, Flex } from '../components/styled';

import Accardeon from 'react-native-collapsible/Accordion';
import styled from 'styled-components';

import { AppTextMedium, AppTextRegular } from '../components/styled';
import { Alert, ScrollView } from 'react-native';

import { w, Colors } from '../utils/consts';

const HeaderWrapper = styled.View`
    background: rgba(127, 5, 255, 0.26);
    box-shadow: 0px 2px 4px rgba(199, 80, 255, 0.50);
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
  margin: 0 auto;
  background: ${Colors.primaryHome};
  padding: 5px;

  borderBottomLeftRadius: 18px;
  borderBottomRightRadius: 18px;
`;

const Wrapper = styled(ScrollView)`
    margin: 20px 20px 40px 20px;
`;

const DevelopersText = styled(AppTextBold)`
    position: absolute;
    bottom: 10px;
    left: ${Math.floor(w / 6)}px;
    width: 250px;
    text-align: center;
`;

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
    const updateSectionHandler = (activeSections) => setActiveSection(activeSections);

    return (
        <Flex flex={1}>
            <Wrapper
                showsVerticalScrollIndicator={false}
            >
                <AppTextBold
                    size='18px'
                    color='rgba(133, 133, 133, 0.82)'
                    style={{ flex: 1 }}
                >Приложение для работы оператору</AppTextBold>
                <Flex
                    style={{ flex: 10, marginBottom: 30 }}
                >
                    <Accardeon
                        sections={SECTIONS}
                        activeSections={activeSection}
                        renderHeader={Header}
                        renderContent={Content}
                        onChange={updateSectionHandler}
                        underlayColor='transparent'
                        sectionContainerStyle={{ marginTop: 20 }}
                    />
                </Flex>
            </Wrapper>
            <DevelopersText
                size='9px'
                color='rgba(150, 150, 150, 0.51)'
            >
                Developers of Uglovskoy Ilya | Panova Svetlana Design by @svpanova_design
            </DevelopersText>
        </Flex>
    );
};

export {Home};
