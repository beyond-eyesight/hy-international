import React from 'react';
import SignUpSection from 'src/components/section/SignUpSection';
import { StyleSheet, View, ViewStyle } from 'react-native';
import {
  getRunningModelBackActionIcon,
  getRunningModelHeight,
  getRunningModelStatusBarHeight
} from 'src/draw/device/model/deviceModel';
import Percentage from 'src/draw/size/percentage';
import Topbar, { ActionProps, TopbarStyle } from 'src/components/bar/Topbar';
import Pixel from 'src/draw/size/pixel';
import { blue } from 'src/draw/color';

interface Props {
  componentId: string;
}

const SignUpScreen: React.FC<Props> = ({ componentId }: Props) => {
  return (
    <View style={signupScreenStyle.screenStyle}>
      <TopbarNode />
      <SignUpSection />
    </View>
  );
};

const signupScreenStyle = StyleSheet.create<{ screenStyle: ViewStyle }>({
  screenStyle: {
    backgroundColor: '#FCFCFC',
    height: getRunningModelHeight().multiply(new Percentage(100)).value
  }
});

const TopbarNode: React.FC = () => {
  const leftActionProps: Array<ActionProps> = [
    {
      icon: getRunningModelBackActionIcon(),
      iconColor: 'white',
      iconSize: getRunningModelHeight().multiply(new Percentage(3)),
      iconDisabled: false,
      actionStyle: {},
      onPress: () => {}
    }
  ];

  const rightActionProps: Array<ActionProps> = [
    {
      icon: 'alarm-bell',
      iconColor: 'white',
      iconSize: getRunningModelHeight().multiply(new Percentage(3)),
      iconDisabled: false,
      actionStyle: {},
      onPress: () => {}
    }
  ];

  return (
    <Topbar
      headerProps={{
        isDark: true,
        statusBarHeight: new Pixel(0),
        headerStyle: topbarStyles.header
      }}
      contentProps={{
        title: 'signup',
        subtitle: 'signup',
        titleStyle: {
          fontSize: getRunningModelHeight().multiply(new Percentage(3)).value
        },
        subtitleStyle: {
          fontSize: getRunningModelHeight().multiply(new Percentage(2)).value
        },
        onPress: () => {},
        contentStyle: topbarStyles.content
      }}
      leftActionsProps={leftActionProps}
      rightActionsProps={rightActionProps}
    />
  );
};

const topbarStyles = StyleSheet.create<TopbarStyle>({
  header: {
    left: 0,
    right: 0,
    justifyContent: 'space-between',
    height:
      getRunningModelHeight().multiply(new Percentage(6)).value +
      getRunningModelStatusBarHeight().value,
    backgroundColor: blue.get('600'),
    paddingTop: getRunningModelStatusBarHeight().value
  },
  content: {
    alignItems: 'center',
    flex: 0,
    width: 100
  },
  action: {
    width: 100
  }
});

export default SignUpScreen;
