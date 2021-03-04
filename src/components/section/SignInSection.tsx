import React, { useState } from 'react';
import Percentage from 'src/draw/size/percentage';
import {
  getRunningModelHeight,
  getRunningModelWidth
} from 'src/draw/device/model/deviceModel';
import Pixel from 'src/draw/size/pixel';
import DropDownPicker from 'react-native-dropdown-picker';
import { StyleSheet, View } from 'react-native';
import TextBox, { TextBoxStyleProps } from 'src/components/box/TextBox';
import TextInputBox, {
  TextInputBoxStyle
} from 'src/components/box/TextInputBox';
import { Theme } from 'react-native-paper/lib/typescript/types';

interface Props {
  componentId: string;
}

const SignInSection: React.FC<Props> = ({ componentId }: Props) => {
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);

  return (
    <View style={sectionStyle.sectionStyle}>
      <TextInputBox
        textInputBoxStyle={{
          boxStyle: emailInputStyles.boxStyle,
          contentStyle: emailInputStyles.contentStyle
        }}
        label="email"
      />
      <TextBox
        boxStyle={atSignProps.boxStyle}
        textStyle={atSignProps.textStyle}
      >
        @
      </TextBox>
      <DropDownPicker
        items={emailHosts}
        containerStyle={dropdownStyle.containerStyle}
        labelStyle={dropdownStyle.labelStyle}
        style={dropdownStyle.contentStyle}
        itemStyle={dropdownStyle.itemStyle}
        dropDownStyle={dropdownStyle.dropdownStyle}
        onChangeList={(items, callback) => {
          new Promise((resolve, reject) => resolve(setItems(items)))
            .then(() => callback())
            .catch(() => {});
        }}
        defaultValue="hanyang.ac.kr"
        onChangeItem={(item) => setValue(item.value)}
      />
    </View>
  );
};

const atSignProps = StyleSheet.create<TextBoxStyleProps>({
  boxStyle: {
    height: getRunningModelHeight().multiply(new Percentage(8)).value,
    width: getRunningModelHeight().multiply(new Percentage(7)).value,
    backgroundColor: '#1E88E5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: getRunningModelHeight().multiply(new Percentage(3)).value,
    lineHeight: getRunningModelHeight().multiply(new Percentage(3)).value,
    color: '#FFFFFF'
  }
});

const emailHosts = [
  {
    label: 'hanyang.ac.kr',
    value: 'hanyang.ac.kr'
  },
  {
    label: 'hmail.hanyang.ac.kr',
    value: 'hmail.hanyang.ac.kr'
  }
];

const emailInputWidth: Pixel = getRunningModelWidth().multiply(
  new Percentage(45)
);

const borderWith: Pixel = new Pixel(1);

const emailInputHeight: Pixel = getRunningModelHeight().multiply(
  new Percentage(8)
);

const emailInputBorderRadius: number = 10;
const emailInputStyles = StyleSheet.create<TextInputBoxStyle>({
  boxStyle: {
    width: emailInputWidth.value,
    height: emailInputHeight.value,
    backgroundColor: '#EEEEEE',
    borderWidth: borderWith.value,
    borderColor: '#BDBDBD',
    borderRadius: emailInputBorderRadius,
    overflow: 'hidden'
  },
  contentStyle: {
    width: emailInputWidth.minus(borderWith.multiply(new Percentage(200)))
      .value,
    height: emailInputHeight.plus(borderWith.multiply(new Percentage(200)))
      .value,
    backgroundColor: '#EEEEEE',
    borderRadius: emailInputBorderRadius,
    borderTopEndRadius: emailInputBorderRadius,
    borderTopStartRadius: emailInputBorderRadius,
    overflow: 'hidden'
  }
});

const sectionStyle = StyleSheet.create({
  sectionStyle: {
    backgroundColor: '#FCFCFC',
    height: getRunningModelHeight().multiply(new Percentage(100)).value,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

const dropdownStyle = StyleSheet.create({
  containerStyle: {
    width: getRunningModelWidth().multiply(new Percentage(35)).value,
    height: getRunningModelHeight().multiply(new Percentage(8)).value
  },
  labelStyle: {
    fontSize: getRunningModelHeight().multiply(new Percentage(1.5)).value
  },
  contentStyle: {
    backgroundColor: '#FCFCFC'
  },
  itemStyle: {
    justifyContent: 'flex-start'
  },
  dropdownStyle: { backgroundColor: '#FCFCFC' }
});

export default SignInSection;
