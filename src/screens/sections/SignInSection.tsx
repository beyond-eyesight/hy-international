import React, { ReactNode, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Avatar, Banner, Button } from 'react-native-paper';
import { SCREEN_IDS } from 'src/screens/constant';
import {
  screenHeight,
  screenWidth
} from 'draw/device/model/runningMobileDevice';
import Percentage from 'draw/size/percentage';
import Pixel from 'draw/size/pixel';
import TextInputBox, {
  TextInputBoxStyle
} from 'src/screens/sections/components/box/TextInputBox';
import InformationBoard from 'src/screens/sections/components/board/InformationBoard';
import TextBox, {
  TextBoxStyleProps
} from 'src/screens/sections/components/box/TextBox';
import { moveScreen } from 'src/screens/navigation/navigation';

const SignInSection: React.FC<Props> = ({ componentId }: Props) => {
  const [bannerVisible, setBannerVisible] = React.useState(true);

  // todo: refac
  function setBannerVisibleOpposite(bannerVisible: boolean) {
    return () => setBannerVisible(!bannerVisible);
  }
  return (
    <View>
      <SigninBoard title="Welcome HY International">
        You can enjoy more your exchange-campus life with this app
      </SigninBoard>
      <SigninEmailInput />
      <SigninPasswordInput />
      <SigninButton
        onPress={async () => {
          await moveScreen({
            currentComponentId: componentId,
            nextComponentName: SCREEN_IDS.ZoneScreen
          });
        }}
      />
      <SignInFailBanner
        bannerVisible={bannerVisible}
        onPress={setBannerVisibleOpposite(bannerVisible)}
      />
      <SignupButton
        onPress={async () => {
          await moveScreen({
            currentComponentId: componentId,
            nextComponentName: SCREEN_IDS.SignUpScreen
          });
        }}
      />
    </View>
  );
};

interface Props {
  componentId: string;
}

const SigninBoard: React.FC<{ title: string; children: ReactNode }> = (props: {
  title: string;
  children: ReactNode;
}) => {
  const { title, children } = props;
  const titleStyles = StyleSheet.create<TextInputBoxStyle>({
    boxStyle: {
      width: screenWidth.multiply(new Percentage(90)).value,
      height: screenHeight.multiply(new Percentage(3)).value,
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: screenHeight.multiply(new Percentage(5)).value
    },
    contentStyle: {
      fontFamily: 'ProximaNova-Bold',
      fontSize: screenHeight.multiply(new Percentage(3)).value,
      lineHeight: screenHeight.multiply(new Percentage(3)).value,
      color: 'black'
    }
  });

  const bodyStyles = StyleSheet.create<TextInputBoxStyle>({
    boxStyle: {
      width: screenWidth.multiply(new Percentage(90)).value,
      height: screenHeight.multiply(new Percentage(5)).value,
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: screenHeight.multiply(new Percentage(3)).value,
      marginBottom: screenHeight.multiply(new Percentage(3)).value
    },
    contentStyle: {
      fontFamily: 'ProximaNova-Regular',
      fontSize: screenHeight.multiply(new Percentage(2.5)).value,
      lineHeight: screenHeight.multiply(new Percentage(2.5)).value,
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

const SigninButton: React.FC<{
  onPress: () => void;
}> = (props: { onPress: () => void }) => {
  const { onPress } = props;

  const signInButtonStyle = StyleSheet.create<{
    container: ViewStyle;
    content: ViewStyle;
    label: ViewStyle;
  }>({
    container: {
      alignSelf: 'center',
      marginTop: screenHeight.multiply(new Percentage(1)).value
    },

    content: {
      width: screenWidth.multiply(new Percentage(90)).value,
      height: screenHeight.multiply(new Percentage(8)).value
    },

    label: {
      fontSize: screenHeight.multiply(new Percentage(2.5)).value,
      lineHeight: screenHeight.multiply(new Percentage(2.5)).value
    }
  });

  return (
    <Button
      theme={{ roundness: BORDER_RADIUS }}
      icon={() => (
        <Avatar.Icon
          size={screenHeight.multiply(new Percentage(4.5)).value}
          icon="login"
        />
      )}
      mode="contained"
      onPress={onPress}
      style={signInButtonStyle.container}
      contentStyle={signInButtonStyle.content}
      labelStyle={signInButtonStyle.label}
    >
      Sign In
    </Button>
  );
};

const SignupButton: React.FC<{
  onPress: () => void;
}> = (props: { onPress: () => void }) => {
  const { onPress } = props;
  return (
    <Button
      theme={{ roundness: BORDER_RADIUS }}
      icon={() => (
        <Avatar.Icon
          size={screenHeight.multiply(new Percentage(4.5)).value}
          icon="draw"
        />
      )}
      mode="contained"
      onPress={onPress}
      style={{
        width: screenWidth.multiply(new Percentage(90)).value,
        height: screenHeight.multiply(new Percentage(8)).value,
        alignSelf: 'center',
        marginVertical: screenHeight.multiply(new Percentage(1)).value
      }}
      contentStyle={{
        width: screenWidth.multiply(new Percentage(90)).value,
        height: screenHeight.multiply(new Percentage(8)).value
      }}
      labelStyle={{
        fontSize: screenHeight.multiply(new Percentage(2.5)).value,
        lineHeight: screenHeight.multiply(new Percentage(2.5)).value
      }}
    >
      Sign Up
    </Button>
  );
};

const SigninEmailInput: React.FC = () => {
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);

  const emailInputWidth: Pixel = screenWidth.multiply(new Percentage(45));

  const containerStyle = StyleSheet.create<{ containerStyle: ViewStyle }>({
    containerStyle: {
      flexDirection: 'row',
      alignSelf: 'center',
      marginVertical: screenHeight.multiply(new Percentage(1)).value
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
      height: screenHeight.multiply(new Percentage(8)).value,
      width: screenWidth.multiply(new Percentage(10)).value,
      backgroundColor: '#1E88E5',
      alignItems: 'center',
      justifyContent: 'center'
    },
    textStyle: {
      fontFamily: 'ProximaNova-Regular',
      fontSize: screenHeight.multiply(new Percentage(3)).value,
      lineHeight: screenHeight.multiply(new Percentage(3)).value,
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
      width: screenWidth.multiply(new Percentage(35)).value,
      height: screenHeight.multiply(new Percentage(8)).value
    },
    labelStyle: {
      fontSize: screenHeight.multiply(new Percentage(1.5)).value
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

const SigninPasswordInput: React.FC = () => {
  const passwordInputStyles = StyleSheet.create<TextInputBoxStyle>({
    boxStyle: {
      width: screenWidth.multiply(new Percentage(90)).value,
      height: INPUT_COMPONENT_HEIGHT.value,
      borderWidth: BORDER_WIDTH.value,
      borderColor: '#E0E0E0',
      borderRadius: BORDER_RADIUS,
      overflow: 'hidden',
      alignSelf: 'center',
      marginVertical: screenHeight.multiply(new Percentage(1)).value
    },
    contentStyle: {
      width: screenWidth.multiply(new Percentage(90)).value,
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
      label="password"
    />
  );
};

const SignInFailBanner: React.FC<{
  bannerVisible: boolean;
  onPress: () => void;
}> = (props: { bannerVisible: boolean; onPress: () => void }) => {
  const { bannerVisible, onPress } = props;

  return (
    <Banner
      visible={bannerVisible}
      actions={[
        {
          label: 'OK',
          onPress
        }
      ]}
      icon={() => <Avatar.Icon size={40} icon="chat-alert" />}
    >
      Although you already registered in Hanyang Portal, you should sign up
      cause this app is another system
    </Banner>
  );
};

const BORDER_WIDTH: Pixel = new Pixel(1);
const INPUT_COMPONENT_HEIGHT: Pixel = screenHeight.multiply(new Percentage(8));
const BORDER_RADIUS: number = 10;

export default SignInSection;
