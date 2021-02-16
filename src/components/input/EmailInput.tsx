import styled from 'styled-components/native';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import RNTextInput from 'src/components/input/RNTextInput';
import colors from 'src/utils/color';
import RawText from 'src/components/text/RawText';
import Pixel from 'src/draw/size/pixel';
import { getRunningModelHeight } from 'src/draw/device/model/deviceModel';
import Percentage from 'src/draw/size/percentage';

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

const AtSignView = styled.View`
  height: 100%
  width: 10%
  background-color: ${colors.blue_signiture};
  align-items: center;
  justify-content: center;
`;

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
  const textSize: Pixel = getRunningModelHeight().multiply(new Percentage(3));
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
        placeholderTextColor={colors.gray500}
        containerWidth="50%"
        containerHeight="100%"
      />
      <AtSignView>
        <RawText
          fontFamily="ProximaNova-Regular"
          fontStyle="normal"
          fontSize={textSize.toString()}
          lineHeight={textSize.toString()}
          color={colors.white}
        >
          @
        </RawText>
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
          borderTopRightRadius: radius,
          borderBottomRightRadius: radius
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
    </Container>
  );
};

export default EmailInput;
