import React from 'react';
import { StyleSheet, View } from 'react-native';
import Topbar, { ActionProps, TopbarStyle } from 'src/components/bar/Topbar';
import Pixel from 'src/draw/size/pixel';
import { getRunningModelStatusBarHeight } from 'src/draw/device/model/deviceModel';

interface Props {
  componentId: string;
}

const SignInScreen: React.FC<Props> = ({ componentId }: Props) => {
  return (
    <View>
      <TopbarNode />
    </View>
  );
};

const TopbarNode: React.FC = () => {
  const styles = StyleSheet.create<TopbarStyle>({
    header: {
      position: 'absolute',
      left: 0,
      right: 0,
      justifyContent: 'space-between'
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

  const leftActionProps: Array<ActionProps> = [
    {
      icon: 'label',
      iconColor: 'white',
      iconSize: new Pixel(24),
      iconDisabled: false,
      actionStyle: {},
      onPress: () => {}
    }
  ];

  const rightActionProps: Array<ActionProps> = [
    {
      icon: 'delete',
      iconColor: 'white',
      iconSize: new Pixel(24),
      iconDisabled: false,
      actionStyle: {},
      onPress: () => {}
    }
  ];

  return (
    <Topbar
      headerProps={{
        isDark: true,
        statusBarHeight: getRunningModelStatusBarHeight(),
        headerStyle: styles.header
      }}
      contentProps={{
        title: 'hihi',
        subtitle: 'kkk',
        titleStyle: {},
        subtitleStyle: {},
        onPress: () => {},
        contentStyle: styles.content
      }}
      leftActionsProps={leftActionProps}
      rightActionsProps={rightActionProps}
    />
  );
};

export default SignInScreen;
