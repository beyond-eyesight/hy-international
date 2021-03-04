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

interface Props {
  componentId: string;
}

const SignInSection: React.FC<Props> = ({ componentId }: Props) => {
  const placeholderSize: Pixel = getRunningModelHeight().multiply(
    new Percentage(2)
  );

  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);
  return (
    <View style={styles.sectionStyle}>
      <TextInputBox
        boxStyle={emailInputStyles.boxStyle}
        contentStyle={emailInputStyles.contentStyle}
      />
    </View>
  );
};

// <TextBox
//   boxStyle={textBoxProps.boxStyle}
//   textStyle={textBoxProps.textStyle}
// >
//   @
// </TextBox>
// <DropDownPicker
// items={emailHosts}
// containerStyle={styles.dropdownContainerStyle}
// labelStyle={styles.dropdownLabelStyle}
// style={styles.dropdownContentStyle}
// itemStyle={styles.itemStyle}
// dropDownStyle={styles.dropdownDropdownStyle}
// onChangeList={(items, callback) => {
//   new Promise((resolve, reject) => resolve(setItems(items)))
//     .then(() => callback())
//     .catch(() => {});
// }}
// defaultValue="hanyang.ac.kr"
// onChangeItem={(item) => setValue(item.value)}
// />

const textBoxProps = StyleSheet.create<TextBoxStyleProps>({
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
const emailInputStyles = StyleSheet.create<TextInputBoxStyle>({
  boxStyle: {
    width: emailInputWidth.value,
    height: emailInputHeight.value,
    backgroundColor: '#EEEEEE',
    borderWidth: borderWith.value,
    borderColor: 'red'
  },
  contentStyle: {
    width: emailInputWidth.minus(borderWith.multiply(new Percentage(200)))
      .value,
    height: emailInputHeight.minus(borderWith.multiply(new Percentage(200)))
      .value,
    backgroundColor: '#EEEEEE'
  }
});

const styles = StyleSheet.create({
  sectionStyle: {
    backgroundColor: '#FCFCFC',
    height: getRunningModelHeight().multiply(new Percentage(100)).value,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  dropdownContainerStyle: {
    width: getRunningModelWidth().multiply(new Percentage(35)).value,
    height: getRunningModelHeight().multiply(new Percentage(8)).value
  },
  dropdownLabelStyle: {
    fontSize: getRunningModelHeight().multiply(new Percentage(1.5)).value
  },
  dropdownContentStyle: {
    backgroundColor: '#FCFCFC'
  },
  itemStyle: {
    justifyContent: 'flex-start'
  },
  dropdownDropdownStyle: { backgroundColor: '#FCFCFC' }
});

export default SignInSection;
