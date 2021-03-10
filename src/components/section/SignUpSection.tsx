import React, { ReactNode, useState } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import TextInputBox, { TextInputBoxStyle } from 'src/components/box/TextInputBox';
import { runningDeviceModel } from 'src/draw/device/model/deviceModel';
import Percentage from 'src/draw/size/percentage';
import InformationBoard from 'src/components/board/InformationBoard';
import Pixel from 'src/draw/size/pixel';
import TextBox, { TextBoxStyleProps } from 'src/components/box/TextBox';
import DropDownPicker from 'react-native-dropdown-picker';
import { Avatar, Button } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

const deviceModelHeight: Pixel = runningDeviceModel._height;
const deviceModelWidth: Pixel = runningDeviceModel._width;

const SignUpSection: React.FC = () => {
  return (
    <View>
      <SignupBoard title="Register at HY international">
        You should verify you are HY univ student
      </SignupBoard>
      <SignupEmailInput />
      <SignupEmailButton
        onPress={() => {}}
        icon={() => (
          <Avatar.Icon
            size={deviceModelHeight.multiply(new Percentage(4.5)).value}
            icon="email-send"
          />
        )}
      >
        send email
      </SignupEmailButton>
      <TextInput label="verification code" />
      <TextInput label="password" />
      <TextInput label="password double check" />
      <SignupEmailButton
        onPress={() => {}}
        icon={() => (
          <Avatar.Icon
            size={deviceModelHeight.multiply(new Percentage(4.5)).value}
            icon="draw"
          />
        )}
      >
        sign up
      </SignupEmailButton>
    </View>
  );
};

const SignupBoard: React.FC<{ title: string; children: ReactNode }> = (props: {
  title: string;
  children: ReactNode;
}) => {
  const { title, children } = props;
  const titleStyles = StyleSheet.create<TextInputBoxStyle>({
    boxStyle: {
      width: deviceModelWidth.multiply(new Percentage(90)).value,
      height: deviceModelHeight.multiply(new Percentage(3)).value,
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: deviceModelHeight.multiply(new Percentage(5)).value
    },
    contentStyle: {
      fontFamily: 'ProximaNova-Bold',
      fontSize: deviceModelHeight.multiply(new Percentage(3)).value,
      lineHeight: deviceModelHeight.multiply(new Percentage(3)).value,
      color: 'black'
    }
  });

  const bodyStyles = StyleSheet.create<TextInputBoxStyle>({
    boxStyle: {
      width: deviceModelWidth.multiply(new Percentage(90)).value,
      height: deviceModelHeight.multiply(new Percentage(5)).value,
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: deviceModelHeight.multiply(new Percentage(3)).value,
      marginBottom: deviceModelHeight.multiply(new Percentage(3)).value
    },
    contentStyle: {
      fontFamily: 'ProximaNova-Regular',
      fontSize: deviceModelHeight.multiply(new Percentage(2.5)).value,
      lineHeight: deviceModelHeight.multiply(new Percentage(2.5)).value,
      color: 'black'
    }
  });

  return (
    <InformationBoard
      title={title}
      titleStyles={titleStyles}
      bodyStyles={bodyStyles}
    >
      {children}
    </InformationBoard>
  );
};

const SignupEmailInput: React.FC = () => {
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);

  const emailInputWidth: Pixel = deviceModelWidth.multiply(
    new Percentage(45)
  );

  const containerStyle = StyleSheet.create<{ containerStyle: ViewStyle }>({
    containerStyle: {
      flexDirection: 'row',
      alignSelf: 'center',
      marginVertical: deviceModelHeight.multiply(new Percentage(1)).value
    }
  });

  const inputStyles = StyleSheet.create<TextInputBoxStyle>({
    boxStyle: {
      width: emailInputWidth.value,
      height: INPUT_COMPONENT_HEIGHT.value,
      backgroundColor: '#EEEEEE',
      borderWidth: BORDER_WIDTH.value,
      borderColor: '#E0E0E0',
      borderRightColor: 'transparent',
      borderRadius: BORDER_RADIUS,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: BORDER_RADIUS,
      overflow: 'hidden'
    },
    contentStyle: {
      width: emailInputWidth.value,
      height: INPUT_COMPONENT_HEIGHT.plus(
        BORDER_WIDTH.multiply(new Percentage(200))
      ).value,
      borderColor: 'transparent',
      borderTopLeftRadius: BORDER_RADIUS,
      borderBottomLeftRadius: BORDER_RADIUS,
      overflow: 'hidden'
    }
  });

  const atSignProps = StyleSheet.create<TextBoxStyleProps>({
    boxStyle: {
      height: deviceModelHeight.multiply(new Percentage(8)).value,
      width: deviceModelWidth.multiply(new Percentage(10)).value,
      backgroundColor: '#1E88E5',
      alignItems: 'center',
      justifyContent: 'center'
    },
    textStyle: {
      fontFamily: 'ProximaNova-Regular',
      fontSize: deviceModelHeight.multiply(new Percentage(3)).value,
      lineHeight: deviceModelHeight.multiply(new Percentage(3)).value,
      color: '#FFFFFF'
    }
  });

  const dropdownStyle = StyleSheet.create<{
    containerStyle: ViewStyle;
    labelStyle: ViewStyle;
    contentStyle: ViewStyle;
    itemStyle: ViewStyle;
    dropdownStyle: ViewStyle;
  }>({
    containerStyle: {
      width: deviceModelWidth.multiply(new Percentage(35)).value,
      height: deviceModelHeight.multiply(new Percentage(8)).value
    },
    labelStyle: {
      fontSize: deviceModelHeight.multiply(new Percentage(1.5)).value
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
    dropdownStyle: { backgroundColor: '#FCFCFC', zIndex: 1 }
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
    <View style={containerStyle.containerStyle}>
      <TextInputBox
        textInputBoxStyle={{
          boxStyle: inputStyles.boxStyle,
          contentStyle: inputStyles.contentStyle
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

const SignupEmailButton: React.FC<{
  onPress: () => void;
  icon: IconSource;
  children: ReactNode;
}> = (props: {
  onPress: () => void;
  icon: IconSource;
  children: ReactNode;
}) => {
  const { onPress, icon, children } = props;

  const signInButtonStyle = StyleSheet.create<{
    container: ViewStyle;
    content: ViewStyle;
    label: ViewStyle;
  }>({
    container: {
      alignSelf: 'center',
      marginTop: deviceModelHeight.multiply(new Percentage(1)).value
    },

    content: {
      width: deviceModelWidth.multiply(new Percentage(90)).value,
      height: deviceModelHeight.multiply(new Percentage(8)).value
    },

    label: {
      fontSize: deviceModelHeight.multiply(new Percentage(2.5)).value,
      lineHeight: deviceModelHeight.multiply(new Percentage(2.5)).value
    }
  });

  return (
    <Button
      theme={{ roundness: BORDER_RADIUS }}
      icon={icon}
      mode="contained"
      onPress={onPress}
      style={signInButtonStyle.container}
      contentStyle={signInButtonStyle.content}
      labelStyle={signInButtonStyle.label}
    >
      {children}
    </Button>
  );
};

const TextInput: React.FC<{ label: string }> = (props: { label: string }) => {
  const { label } = props;
  const passwordInputStyles = StyleSheet.create<TextInputBoxStyle>({
    boxStyle: {
      width: deviceModelWidth.multiply(new Percentage(90)).value,
      height: INPUT_COMPONENT_HEIGHT.value,
      borderWidth: BORDER_WIDTH.value,
      borderColor: '#E0E0E0',
      borderRadius: BORDER_RADIUS,
      overflow: 'hidden',
      alignSelf: 'center',
      marginVertical: deviceModelHeight.multiply(new Percentage(1)).value
    },
    contentStyle: {
      width: deviceModelWidth.multiply(new Percentage(90)).value,
      height: INPUT_COMPONENT_HEIGHT.plus(
        BORDER_WIDTH.multiply(new Percentage(200))
      ).value,
      backgroundColor: '#EEEEEE',
      borderColor: '#E0E0E0',
      borderWidth: BORDER_WIDTH.value,
      overflow: 'hidden'
    }
  });

  return (
    <TextInputBox
      textInputBoxStyle={{
        boxStyle: passwordInputStyles.boxStyle,
        contentStyle: passwordInputStyles.contentStyle
      }}
      label={label}
    />
  );
};

const BORDER_WIDTH: Pixel = new Pixel(1);
const INPUT_COMPONENT_HEIGHT: Pixel = deviceModelHeight.multiply(
  new Percentage(8)
);
const BORDER_RADIUS: number = 10;

export default SignUpSection;
