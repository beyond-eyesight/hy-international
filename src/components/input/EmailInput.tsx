import styled from 'styled-components/native';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import RNTextInput from 'src/components/input/RNTextInput';
import Pixel from 'src/draw/size/pixel';
import { getRunningModelHeight } from 'src/draw/device/model/deviceModel';
import Percentage from 'src/draw/size/percentage';
import { blue, grey, white } from 'src/draw/color';
import TextBox, { TextBoxStyleProps } from 'src/components/box/TextBox';
import { StyleSheet } from 'react-native';

interface Props {
  width: string;
  height: string;
  marginTop: string;
  marginBottom: string;
}

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  z-index: 1;
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

const EmailInput: React.FC<Props> = ({
  width,
  height,
  marginTop,
  marginBottom
}: Props) => {
  const radius: number = 10;
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);
  let controller;

  return (
    <Container
      style={{
        width,
        height,
        marginTop,
        marginBottom
      }}
    >
      <RNTextInput
        borderTopLeftRadius={radius}
        borderBottomLeftRadius={radius}
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
          borderTopRightRadius: radius,
          borderBottomRightRadius: radius
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
    </Container>
  );
};

export default EmailInput;
