import React from 'react';
import { StyleSheet, View } from 'react-native';
import Topbar, { TopbarStyle } from 'src/components/bar/Topbar';
import Pixel from 'src/draw/size/pixel';

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

  return (
    <Topbar
      headerProps={{
        isDark: true,
        statusBarHeight: new Pixel(24),
        headerStyle: styles.header
      }}
      actionProps={{
        iconColor: 'white',
        iconSize: new Pixel(24),
        iconDisabled: false,
        actionStyle: styles.action,
        onPress: () => {}
      }}
      contentProps={{
        title: 'hihi',
        subtitle: 'kkk',
        titleStyle: {},
        subtitleStyle: {},
        onPress: () => {},
        contentStyle: styles.content
      }}
    />
  );
};

export default SignInScreen;
