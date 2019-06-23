import React from 'react';
import styled from 'styled-components';
import Card from './components/Card';
import { ScrollView, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView>
          <TitleBar>
            <Avatar source={require('./assets/avatar.jpg')} />
            <Title>Welcome back,</Title>
            <Name>Meng</Name>
          </TitleBar>
        </ScrollView>
      </SafeAreaView>

      <Subtitle>Continue Learning</Subtitle>
      <ScrollView
        horizontal={true}
        style={{ paddingBottom: 30 }}
        showsHorizontalScrollIndicator={false}
      >
        <Card
          title="Styled Components"
          image={require('./assets/background2.jpg')}
          caption="React Native"
          logo={require('./assets/logo-react.png')}
          subtitle="5 of 12 sections"
        />
      </ScrollView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 50px;
  text-transform: uppercase;
`;
