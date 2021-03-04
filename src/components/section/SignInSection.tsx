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
import TextInputBox from 'src/components/box/TextInputBox';
import { Avatar, Banner } from 'react-native-paper';

interface Props {
  componentId: string;
}

const PasswordInput: React.FC = () => {
  return (
    <TextInputBox
      textInputBoxStyle={{
        boxStyle: passwordInputStyles.boxStyle,
        contentStyle: passwordInputStyles.contentStyle
      }}
      label="password"
    />
  );
};

const EmailInput: React.FC = () => {
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);
  return (
    <View style={emailInputStyles.containerStyle}>
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

// <EmailInput />
// <PasswordInput />
const SignInSection: React.FC<Props> = ({ componentId }: Props) => {
  const [visible, setVisible] = React.useState(true);
  return (
    <View>
      <Banner
        visible={visible}
        actions={[
          {
            label: 'OK',
            onPress: () => setVisible(false)
          }
        ]}
        icon={() => <Avatar.Icon size={40} icon="chat-alert" />}
      >
        Although you already registered in Hanyang Portal, you should sign up
        cause this app is another system
      </Banner>
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
const passwordInputStyles = StyleSheet.create({
  boxStyle: {
    width: getRunningModelWidth().multiply(new Percentage(87)).value,
    height: emailInputHeight.value,
    borderWidth: borderWith.value,
    borderColor: '#E0E0E0',
    borderRadius: emailInputBorderRadius,
    overflow: 'hidden'
  },
  contentStyle: {
    width: getRunningModelWidth().multiply(new Percentage(87)).value,
    height: emailInputHeight.plus(borderWith.multiply(new Percentage(200)))
      .value,
    backgroundColor: '#EEEEEE',
    borderColor: '#E0E0E0',
    borderWidth: borderWith.value,
    overflow: 'hidden'
  }
});
const emailInputStyles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#FCFCFC',
    height: getRunningModelHeight().multiply(new Percentage(100)).value,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  boxStyle: {
    width: emailInputWidth.value,
    height: emailInputHeight.value,
    backgroundColor: '#EEEEEE',
    borderWidth: borderWith.value,
    borderColor: '#E0E0E0',
    borderRightColor: 'transparent',
    borderRadius: emailInputBorderRadius,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: emailInputBorderRadius,
    overflow: 'hidden'
  },
  contentStyle: {
    width: emailInputWidth.value,
    height: emailInputHeight.plus(borderWith.multiply(new Percentage(200)))
      .value,
    borderColor: 'transparent',
    borderTopLeftRadius: emailInputBorderRadius,
    borderBottomLeftRadius: emailInputBorderRadius,
    overflow: 'hidden'
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
    backgroundColor: '#FCFCFC',
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    borderColor: '#E0E0E0',
    borderLeftColor: 'transparent'
  },
  itemStyle: {
    justifyContent: 'flex-start'
  },
  dropdownStyle: { backgroundColor: '#FCFCFC' }
});

export default SignInSection;
