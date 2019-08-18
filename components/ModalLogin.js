import React, { Component } from 'react';
import styled from 'styled-components';
import { TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { BlurView } from 'expo';

class ModalLogin extends Component {
  state = {
    email: '',
    password: '',
    iconEmail: require('../assets/icon-email.png'),
    iconPassword: require('../assets/icon-password.png'),
  };

  handleLogin = () => {
    console.log(this.state);
  };

  focusEmail = () => {
    this.setState({
      iconEmail: require('../assets/icon-email-animated.gif'),
      iconPassword: require('../assets/icon-password.png'),
    });
  };

  focusPassword = () => {
    this.setState({
      iconEmail: require('../assets/icon-email.png'),
      iconPassword: require('../assets/icon-password-animated.gif'),
    });
  };

  tapBackground = () => {
    Keyboard.dismiss();
  }

  render() {
    return (
      <Container>
        <TouchableWithoutFeedback onPress={this.tapBackground}>
          <BlurView
            tint="default"
            intensity={100}
            style={{ position: 'absolute', width: '100%', height: '100%' }}
          />
        </TouchableWithoutFeedback>
        <Modal>
          <Logo source={require('../assets/logo-dc.png')} />
          <Text>Start Learning. Access Pro Content.</Text>
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={email => this.setState({ email })}
            onFocus={this.focusEmail}
          />
          <IconEmail source={this.state.iconEmail} />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
            onFocus={this.focusPassword}
          />
          <IconPassword source={this.state.iconPassword} />
          <TouchableOpacity onPress={this.handleLogin}>
            <Button>
              <ButtonText>Log In</ButtonText>
            </Button>
          </TouchableOpacity>
        </Modal>
      </Container>
    );
  }
}

export default ModalLogin;

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  justify-content: center;
  align-items: center;
`;

const Modal = styled.View`
  width: 335px;
  height: 370px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  align-items: center;
`;

const Logo = styled.Image`
  width: 44px;
  height: 44px;
  margin-top: 50px;
`;

const Text = styled.Text`
  margin-top: 20px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  width: 160px;
  text-align: center;
  color: #b8bece;
`;

const TextInput = styled.TextInput`
  border: 1px solid #dbdfea;
  width: 295px;
  height: 44px;
  border-radius: 10px;
  font-size: 17px;
  color: #3c4560;
  margin-top: 20px;
  padding-left: 44px;
`;

const Button = styled.View`
  background: #5263ff;
  width: 295px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 10px 20px #c2cbff;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
`;

const IconEmail = styled.Image`
  position: absolute;
  top: 179px;
  left: 31px;
  width: 24px;
  height: 16px;
`;

const IconPassword = styled.Image`
  position: absolute;
  top: 239px;
  left: 35px;
  width: 18px;
  height: 24px;
`;
