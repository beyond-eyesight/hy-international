import styled from 'styled-components/native';
import { StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import RNTextInput from './RNTextInput';
import { Bold } from '../text/Typographies';
import colors from '../../styles/color';
import RNText from '../text/RNText';

interface Props {
  containerWidth: string;
  containerHeight: string;
}

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const AtSignView = styled.View`
  height: 100%
  width: 10%
  background-color: ${colors.blue_light};
  align-items: center;
  justify-content: center;
`;

const AtSign = styled(RNText).attrs({ fontType: 'BOLD', color: 'white' })`
  font-size: 25px;
`;

const EmailInput: React.FC<Props> = ({
  containerWidth,
  containerHeight
}: Props) => {
  const radius: number = 10;
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);
  let controller;

  return (
    <Container style={{ width: containerWidth, height: containerHeight }}>
      <RNTextInput
        borderTopLeftRadius={radius}
        borderBottomLeftRadius={radius}
        placeHolder="Email ID"
        placeholderTextColor={colors.gray500}
        containerWidth="50%"
        containerHeight="100%"
      />
      <AtSignView>
        <AtSign>@</AtSign>
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
          backgroundColor: '#fafafa',
          borderBottomLeftRadius: 0,
          borderTopLeftRadius: 0,
          borderTopRightRadius: radius,
          borderBottomRightRadius: radius
        }}
        itemStyle={{
          justifyContent: 'flex-start'
        }}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
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

const styles = StyleSheet.create({
  BLOCK_SIZE: {
    height: '100%',
    width: '50%'
  }
});

export default EmailInput;
