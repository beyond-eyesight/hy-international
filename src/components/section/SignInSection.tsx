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
import DropDownPicker from 'react-native-dropdown-picker';
import { StyleSheet, View } from 'react-native';
import TextBox, { TextBoxStyleProps } from 'src/components/box/TextBox';
import { push } from 'src/navigation/navigation';
import TextInputBox from 'src/components/box/TextInputBox';
import { blue, grey, white } from 'src/draw/color';

interface Props {
  componentId: string;
}

const titleSize: Pixel = getRunningModelHeight().multiply(new Percentage(2.5));
const bodySize: Pixel = getRunningModelHeight().multiply(new Percentage(1.9));

const textBoxProps1 = StyleSheet.create<TextBoxStyleProps>({
  boxStyle: {
    height: '100%',
    width: '10%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: titleSize.value,
    lineHeight: titleSize.value,
    color: '#FFFFFF'
  }
});

const textBoxProps2 = StyleSheet.create<TextBoxStyleProps>({
  boxStyle: {
    height: '100%',
    width: '10%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: bodySize.value,
    lineHeight: bodySize.value,
    color: '#FFFFFF'
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
    <View>
      <Board containerWidth="100%" containerHeight="10%" title="Sign In" />

      <TextInputBox />
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
          backgroundColor: '#FFFFFF',
          borderBottomLeftRadius: 0,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10
        }}
        itemStyle={{
          justifyContent: 'flex-start'
        }}
        dropDownStyle={{ backgroundColor: '#FFFFFF' }}
        onChangeList={(items, callback) => {
          new Promise((resolve, reject) => resolve(setItems(items)))
            .then(() => callback())
            .catch(() => {});
        }}
        defaultValue="hanyang.ac.kr"
        onChangeItem={(item) => setValue(item.value)}
      />
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
      <TextButton
        width="100%"
        height="6%"
        content="Sign In"
        ellipticalColor="#FFFFFF"
        textColor={white}
        borderRadius="100px"
        onPress={async () => {
          await push({
            currentComponentId: componentId,
            nextComponentName: SCREEN_IDS.ZoneScreen
          });
        }}
      />
    </View>
  );
};

const textSize: Pixel = getRunningModelHeight().multiply(new Percentage(3));
const textBoxProps = StyleSheet.create<TextBoxStyleProps>({
  boxStyle: {
    height: '100%',
    width: '10%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: textSize.value,
    lineHeight: textSize.value,
    color: '#FFFFFF'
  }
});

export default SignInSection;
