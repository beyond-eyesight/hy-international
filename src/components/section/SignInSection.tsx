import styled from 'styled-components/native';
import React, { useState } from 'react';
import Board from 'src/components/board/Board';
import TextButton from 'src/components/button/TextButton';
import { SCREEN_IDS } from 'src/components/screens/constant';
import Percentage from 'src/draw/size/percentage';
import {
  getRunningModelHeight,
  getRunningModelWidth
} from 'src/draw/device/model/deviceModel';
import Pixel from 'src/draw/size/pixel';
import RNTextInput from 'src/components/input/RNTextInput';
import DropDownPicker from 'react-native-dropdown-picker';
import { StyleSheet } from 'react-native';
import TextBox, { TextBoxStyleProps } from 'src/components/box/TextBox';
import { push } from 'src/navigation/navigation';
import TextInputBox from 'src/components/box/TextInputBox';
import { black, blue, grey, white } from 'src/draw/color';

const Container = styled.View`
  height: ${getRunningModelHeight().multiply(new Percentage(100)).toString};
  background: ${white};
  align-items: center;
  width: ${getRunningModelWidth().multiply(new Percentage(90)).toString};
`;

const NoticeContainer = styled.View`
  width: ${getRunningModelWidth().multiply(new Percentage(90)).toString};
  align-items: center;
  margin-top: ${getRunningModelHeight().multiply(new Percentage(5)).toString};
  margin-bottom: ${getRunningModelHeight().multiply(new Percentage(10))
    .toString};
`;

interface Props {
  componentId: string;
}

const EmailContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  z-index: 1;
`;

const DefaultTextInputContainer = styled.View`
  align-items: center;
  text-align: center;
`;

const titleSize: Pixel = getRunningModelHeight().multiply(new Percentage(2.5));
const bodySize: Pixel = getRunningModelHeight().multiply(new Percentage(1.9));

const textBoxProps1 = StyleSheet.create<TextBoxStyleProps>({
  boxStyle: {
    height: '100%',
    width: '10%',
    backgroundColor: blue.get('600'),
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: titleSize.value,
    lineHeight: titleSize.value,
    color: white
  }
});

const textBoxProps2 = StyleSheet.create<TextBoxStyleProps>({
  boxStyle: {
    height: '100%',
    width: '10%',
    backgroundColor: blue.get('600'),
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: bodySize.value,
    lineHeight: bodySize.value,
    color: white
  }
});

const SignInSection: React.FC<Props> = ({ componentId }: Props) => {
  const placeholderSize: Pixel = getRunningModelHeight().multiply(
    new Percentage(2)
  );

  let controller;

  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);
  return (
    <Container>
      <Board containerWidth="100%" containerHeight="10%" title="Sign In" />
      <EmailContainer
        style={{
          width: '100%',
          height: '6%',
          marginTop: '5%',
          marginBottom: '3%'
        }}
      >
        <TextInputBox />

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
          placeholderTextColor={black}
          textAlign="center"
        />
      </DefaultTextInputContainer>
      <NoticeContainer>
        <TextBox
          boxStyle={textBoxProps1.boxStyle}
          textStyle={textBoxProps1.textStyle}
        >
          Notice!
        </TextBox>
        <TextBox
          boxStyle={textBoxProps2.boxStyle}
          textStyle={textBoxProps2.textStyle}
        >
          Only hanyang e-mail can be used. Although you already registered in
          Hanyang Portal, you should sign up cause this app is another system.
        </TextBox>
      </NoticeContainer>
      <TextButton
        width="100%"
        height="6%"
        content="Sign In"
        ellipticalColor={blue.get('600')}
        textColor={white}
        borderRadius="100px"
        onPress={async () => {
          await push({
            currentComponentId: componentId,
            nextComponentName: SCREEN_IDS.ZoneScreen
          });
        }}
      />
    </Container>
  );
};

const textSize: Pixel = getRunningModelHeight().multiply(new Percentage(3));
const textBoxProps = StyleSheet.create<TextBoxStyleProps>({
  boxStyle: {
    height: '100%',
    width: '10%',
    backgroundColor: grey.get('600'),
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

export default SignInSection;
