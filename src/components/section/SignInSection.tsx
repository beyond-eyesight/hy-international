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

const SignInSection: React.FC<Props> = ({ componentId }: Props) => {
  return (
    <View>
      <EmailInput />
      <PasswordInput />
      <SignInFailBanner />
    </View>
  );
};

interface Props {
  componentId: string;
}

const EmailInput: React.FC = () => {
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);

  const emailInputWidth: Pixel = getRunningModelWidth().multiply(
    new Percentage(45)
  );

  const emailInputStyles = StyleSheet.create({
    containerStyle: {
      backgroundColor: '#FCFCFC',
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: getRunningModelHeight().multiply(new Percentage(1)).value
    },
    boxStyle: {
      width: emailInputWidth.value,
      height: inputComponentHeight.value,
      backgroundColor: '#EEEEEE',
      borderWidth: borderWith.value,
      borderColor: '#E0E0E0',
      borderRightColor: 'transparent',
      borderRadius,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: borderRadius,
      overflow: 'hidden'
    },
    contentStyle: {
      width: emailInputWidth.value,
      height: inputComponentHeight.plus(
        borderWith.multiply(new Percentage(200))
      ).value,
      borderColor: 'transparent',
      borderTopLeftRadius: borderRadius,
      borderBottomLeftRadius: borderRadius,
      overflow: 'hidden'
    }
  });

  const atSignProps = StyleSheet.create<TextBoxStyleProps>({
    boxStyle: {
      height: getRunningModelHeight().multiply(new Percentage(8)).value,
      width: getRunningModelWidth().multiply(new Percentage(10)).value,
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

const PasswordInput: React.FC = () => {
  const passwordInputStyles = StyleSheet.create({
    boxStyle: {
      width: getRunningModelWidth().multiply(new Percentage(90)).value,
      height: inputComponentHeight.value,
      borderWidth: borderWith.value,
      borderColor: '#E0E0E0',
      borderRadius,
      overflow: 'hidden',
      alignSelf: 'center',
      marginVertical: getRunningModelHeight().multiply(new Percentage(1)).value
    },
    contentStyle: {
      width: getRunningModelWidth().multiply(new Percentage(90)).value,
      height: inputComponentHeight.plus(
        borderWith.multiply(new Percentage(200))
      ).value,
      backgroundColor: '#EEEEEE',
      borderColor: '#E0E0E0',
      borderWidth: borderWith.value,
      overflow: 'hidden'
    }
  });

  return (
    <TextInputBox
      textInputBoxStyle={{
        boxStyle: passwordInputStyles.boxStyle,
        contentStyle: passwordInputStyles.contentStyle
      }}
      label="password"
      style={{
        justifyContent: 'center'
      }}
    />
  );
};

const SignInFailBanner: React.FC = () => {
  const [visible, setVisible] = React.useState(true);
  return (
    <Banner
      visible={visible}
      actions={[
        {
          label: 'OK',
          onPress: () => setVisible(false)
        }
      ]}
      style={{
        alignItems: 'center'
      }}
      icon={() => <Avatar.Icon size={40} icon="chat-alert" />}
    >
      Although you already registered in Hanyang Portal, you should sign up
      cause this app is another system
    </Banner>
  );
};

const borderWith: Pixel = new Pixel(1);

const inputComponentHeight: Pixel = getRunningModelHeight().multiply(
  new Percentage(8)
);

const borderRadius: number = 10;

export default SignInSection;
