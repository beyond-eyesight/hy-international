import React, { useState } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Topbar, { ActionProps, TopbarStyle } from 'src/components/bar/Topbar';
import Pixel from 'src/draw/size/pixel';
import {
  getRunningModelBackActionIcon,
  getRunningModelHeight,
  getRunningModelStatusBarHeight
} from 'src/draw/device/model/deviceModel';
import { blue } from 'src/draw/color';
import Percentage from 'src/draw/size/percentage';
import SignInSection from 'src/components/section/SignInSection';

interface Props {
  componentId: string;
}

const SignInScreen: React.FC<Props> = ({ componentId }: Props) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [gender, setGender] = useState();
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);

  return (
    <View style={signinScreenStyle.screenStyle}>
      <TopbarNode />
      <SignInSection componentId={componentId} />
    </View>
  );
};

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
        title: 'hihi',
        subtitle: 'kkk',
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

const signinScreenStyle = StyleSheet.create<{ screenStyle: ViewStyle }>({
  screenStyle: {
    backgroundColor: '#FCFCFC',
    height: getRunningModelHeight().multiply(new Percentage(100)).value
  }
});

export default SignInScreen;
