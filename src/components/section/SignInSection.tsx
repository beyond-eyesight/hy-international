import React, { Dispatch, ReactNode, SetStateAction, useState } from 'react';
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
import { Avatar, Banner, Button } from 'react-native-paper';
import InformationBoard from 'src/components/board/InformationBoard';

const SignInSection: React.FC<Props> = ({ componentId }: Props) => {
  const [visible, setVisible] = React.useState(true);
  return (
    <View>
      <Board title="Welcome HY International">
        You can enjoy more your exchange-campus life with this app
      </Board>
      <EmailInput />
      <PasswordInput />
      <SigninButton visible={visible} setVisible={setVisible} />
      <SignupButton />
      <SignInFailBanner
        visible={visible}
        onPress={() => {
          console.log(visible);
        }}
      />
    </View>
  );
};

interface Props {
  componentId: string;
}

const Board: React.FC<{ title: string; children: ReactNode }> = (props: {
  title: string;
  children: ReactNode;
}) => {
  const { title, children } = props;
  const titleStyles = StyleSheet.create<TextInputBoxStyle>({
    boxStyle: {
      width: getRunningModelWidth().multiply(new Percentage(90)).value,
      height: getRunningModelHeight().multiply(new Percentage(3)).value,
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: getRunningModelHeight().multiply(new Percentage(5)).value
    },
    contentStyle: {
      fontFamily: 'ProximaNova-Bold',
      fontSize: getRunningModelHeight().multiply(new Percentage(3)).value,
      lineHeight: getRunningModelHeight().multiply(new Percentage(3)).value,
      color: 'black'
    }
  });

  const bodyStyles = StyleSheet.create<TextInputBoxStyle>({
    boxStyle: {
      width: getRunningModelWidth().multiply(new Percentage(90)).value,
      height: getRunningModelHeight().multiply(new Percentage(5)).value,
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: getRunningModelHeight().multiply(new Percentage(3)).value,
      marginBottom: getRunningModelHeight().multiply(new Percentage(3)).value
    },
    contentStyle: {
      fontFamily: 'ProximaNova-Regular',
      fontSize: getRunningModelHeight().multiply(new Percentage(2.5)).value,
      lineHeight: getRunningModelHeight().multiply(new Percentage(2.5)).value,
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
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}> = (props: {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const { visible, setVisible } = props;
  return (
    <Button
      theme={{ roundness: borderRadius }}
      icon={() => <Avatar.Icon size={40} icon="login" />}
      mode="contained"
      onPress={() => {
        setVisible(!visible);
      }}
      style={{
        width: getRunningModelWidth().multiply(new Percentage(90)).value,
        height: getRunningModelHeight().multiply(new Percentage(8)).value,
        alignSelf: 'center',
        marginTop: getRunningModelHeight().multiply(new Percentage(1)).value
      }}
      contentStyle={{
        width: getRunningModelWidth().multiply(new Percentage(90)).value,
        height: getRunningModelHeight().multiply(new Percentage(8)).value
      }}
      labelStyle={{
        fontSize: getRunningModelHeight().multiply(new Percentage(2.5)).value,
        lineHeight: getRunningModelHeight().multiply(new Percentage(2.5)).value
      }}
    >
      Sign In
    </Button>
  );
};

const SignupButton: React.FC = () => {
  return (
    <Button
      theme={{ roundness: borderRadius }}
      icon={() => <Avatar.Icon size={40} icon="draw" />}
      mode="contained"
      onPress={() => {
        console.log('pressed');
      }}
      style={{
        width: getRunningModelWidth().multiply(new Percentage(90)).value,
        height: getRunningModelHeight().multiply(new Percentage(8)).value,
        alignSelf: 'center',
        marginVertical: getRunningModelHeight().multiply(new Percentage(1))
          .value
      }}
      contentStyle={{
        width: getRunningModelWidth().multiply(new Percentage(90)).value,
        height: getRunningModelHeight().multiply(new Percentage(8)).value
      }}
      labelStyle={{
        fontSize: getRunningModelHeight().multiply(new Percentage(2.5)).value,
        lineHeight: getRunningModelHeight().multiply(new Percentage(2.5)).value
      }}
    >
      Sign Up
    </Button>
  );
};

const EmailInput: React.FC = () => {
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);

  const emailInputWidth: Pixel = getRunningModelWidth().multiply(
    new Percentage(45)
  );

  const emailInputContainerStyle = StyleSheet.create({
    containerStyle: {
      flexDirection: 'row',
      alignSelf: 'center',
      marginVertical: getRunningModelHeight().multiply(new Percentage(1)).value
    }
  });

  const emailInputStyles = StyleSheet.create<TextInputBoxStyle>({
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
    <View style={emailInputContainerStyle.containerStyle}>
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
  const passwordInputStyles = StyleSheet.create<TextInputBoxStyle>({
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

const SignInFailBanner: React.FC<{
  visible: boolean;
  onPress: () => void;
}> = (props: { visible: boolean; onPress: () => void }) => {
  const { visible, onPress } = props;

  return (
    <Banner
      visible={visible}
      actions={[
        {
          label: 'OK',
          onPress
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
