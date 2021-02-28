import React, { useState } from 'react';
import styled from 'styled-components/native';
import Board from 'src/components/board/Board';
import VerifyEmailBox from 'src/components/box/VerifyEmailBox';
import TextButton from 'src/components/button/TextButton';
import Pixel from 'src/draw/size/pixel';
import { getRunningModelHeight } from 'src/draw/device/model/deviceModel';
import Percentage from 'src/draw/size/percentage';
import RNTextInput from 'src/components/input/RNTextInput';
import DropDownPicker from 'react-native-dropdown-picker';
import { blue, grey, white } from 'src/draw/color';
import TextBox, { TextBoxStyleProps } from 'src/components/box/TextBox';
import { StyleSheet } from 'react-native';

const Container = styled.View`
  height: 100%;
  width: 90%;
  background: ${white};
  align-items: center;
`;

const EmailContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  z-index: 1;
`;

const AtSignView = styled.View`
  height: 100%
  width: 10%
  background-color: ${blue.get('600')};
  align-items: center;
  justify-content: center;
`;

const DefaultTextInputContainer = styled.View`
  align-items: center;
  text-align: center;
`;

const textSize: Pixel = getRunningModelHeight().multiply(new Percentage(3));

const textBoxProps = StyleSheet.create<TextBoxStyleProps>({
  boxStyle: {
    height: '100%',
    width: '10%',
    backgroundColor: blue.get('600'),
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: textSize.value,
    lineHeight: textSize.value,
    color: white
  }
});

const SignUpSection: React.FC = () => {
  let controller;
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);
  return (
    <Container>
      <Board containerWidth="100%" containerHeight="10%" title="Sign Up" />
      <EmailContainer
        style={{
          width: '100%',
          height: '6%',
          marginTop: '5%',
          marginBottom: '3%'
        }}
      >
        <RNTextInput
          borderTopLeftRadius={10}
          borderBottomLeftRadius={10}
          placeHolder=" Email ID"
          placeholderTextColor={grey.get('500')}
          containerWidth="50%"
          containerHeight="100%"
        />
        <TextBox
          boxStyle={textBoxProps.boxStyle}
          textStyle={textBoxProps.textStyle}
        >
          @
        </TextBox>
        <DropDownPicker
          items={[
            {
              label: 'hanyang.ac.kr',
              value: 'hanyang.ac.kr'
            },
            {
              label: 'hmail.hanyang.ac.kr',
              value: 'hmail.hanyang.ac.kr'
            }
          ]}
          controller={(instance) => {
            controller = instance;
          }}
          containerStyle={{
            width: '40%',
            height: '100%',
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0
          }}
          labelStyle={{
            fontSize: 12
          }}
          style={{
            backgroundColor: grey.get('50'),
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10
          }}
          itemStyle={{
            justifyContent: 'flex-start'
          }}
          dropDownStyle={{ backgroundColor: grey.get('50') }}
          onChangeList={(items, callback) => {
            new Promise((resolve, reject) => resolve(setItems(items)))
              .then(() => callback())
              .catch(() => {});
          }}
          defaultValue="hanyang.ac.kr"
          onChangeItem={(item) => setValue(item.value)}
        />
      </EmailContainer>
      <VerifyEmailBox />
      <DefaultTextInputContainer
        style={{
          width: '100%',
          height: '6%',
          marginTop: '1%',
          marginBottom: '3%'
        }}
      >
        <RNTextInput
          borderTopLeftRadius={10}
          borderTopRightRadius={10}
          borderBottomLeftRadius={10}
          borderBottomRightRadius={10}
          placeHolder=" Verification Code"
          placeholderTextColor={grey.get('500')}
          textAlign="center"
        />
      </DefaultTextInputContainer>
      <DefaultTextInputContainer
        style={{
          width: '100%',
          height: '6%',
          marginTop: '1%',
          marginBottom: '3%'
        }}
      >
        <RNTextInput
          borderTopLeftRadius={10}
          borderTopRightRadius={10}
          borderBottomLeftRadius={10}
          borderBottomRightRadius={10}
          placeHolder=" Password"
          placeholderTextColor={grey.get('500')}
          textAlign="center"
        />
      </DefaultTextInputContainer>
      <DefaultTextInputContainer
        style={{
          width: '100%',
          height: '6%',
          marginTop: '1%',
          marginBottom: '3%'
        }}
      >
        <RNTextInput
          borderTopLeftRadius={10}
          borderTopRightRadius={10}
          borderBottomLeftRadius={10}
          borderBottomRightRadius={10}
          placeHolder=" Password Verification"
          placeholderTextColor={grey.get('500')}
          textAlign="center"
        />
      </DefaultTextInputContainer>
      <TextButton
        width="100%"
        height="6%"
        content="Sign Up"
        ellipticalColor={blue.get('600')}
        textColor={white}
        borderRadius="100px"
      />
    </Container>
  );
};

export default SignUpSection;
