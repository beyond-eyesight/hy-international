import React, { useState } from 'react';
import styled from 'styled-components/native';
import Board from 'src/components/board/Board';
import VerifyEmailBox from 'src/components/box/VerifyEmailBox';
import DefaultTextInput from 'src/components/input/DefaultTextInput';
import TextButton from 'src/components/button/TextButton';
import colors from 'src/utils/color';
import Pixel from 'src/layout/size/pixel';
import { getRunningModelHeight } from 'src/layout/device/model/deviceModel';
import Percentage from 'src/layout/size/percentage';
import RNTextInput from 'src/components/input/RNTextInput';
import DefaultText from 'src/components/text/DefaultText';
import DropDownPicker from 'react-native-dropdown-picker';

const Container = styled.View`
  height: 100%;
  width: 90%;
  background: ${colors.white};
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
  background-color: ${colors.blue_signiture};
  align-items: center;
  justify-content: center;
`;

const SignUpSection: React.FC = () => {
  const textSize: Pixel = getRunningModelHeight().multiply(new Percentage(3));
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
          placeholderTextColor={colors.gray500}
          containerWidth="50%"
          containerHeight="100%"
        />
        <AtSignView>
          <DefaultText
            fontFamily="ProximaNova-Regular"
            fontStyle="normal"
            fontSize={textSize.toString()}
            lineHeight={textSize.toString()}
            color={colors.white}
          >
            @
          </DefaultText>
        </AtSignView>
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
            backgroundColor: colors.gray20,
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10
          }}
          itemStyle={{
            justifyContent: 'flex-start'
          }}
          dropDownStyle={{ backgroundColor: colors.gray20 }}
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
      <DefaultTextInput
        containerWidth="100%"
        containerHeight="6%"
        marginTop="1%"
        marginBottom="3%"
        placeholder=" Verification Code"
      />
      <DefaultTextInput
        containerWidth="100%"
        containerHeight="6%"
        marginTop="1%"
        marginBottom="3%"
        placeholder=" Password"
      />
      <DefaultTextInput
        containerWidth="100%"
        containerHeight="6%"
        marginTop="1%"
        marginBottom="3%"
        placeholder=" Password Verification"
      />
      <TextButton
        width="100%"
        height="6%"
        content="Sign Up"
        ellipticalColor={colors.blue_signiture}
        textColor={colors.white}
        borderRadius="100px"
      />
    </Container>
  );
};

export default SignUpSection;
