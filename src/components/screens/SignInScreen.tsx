import React from 'react';
import { View } from 'react-native';
import Topbar from 'src/components/bar/Topbar';
import Pixel from 'src/draw/size/pixel';

interface Props {
  componentId: string;
}

const SignInScreen: React.FC<Props> = ({ componentId }: Props) => {
  return (
    <View>
      <Topbar
        headerProps={{
          isDark: false,
          statusBarHeight: new Pixel(24),
          headerStyle: {}
        }}
        actionProps={{
          iconColor: 'white',
          iconSize: new Pixel(24),
          iconDisabled: false,
          actionStyle: {},
          onPress: () => {}
        }}
        contentProps={{
          title: 'hihi',
          subtitle: 'kkk',
          titleStyle: {},
          subtitleStyle: {},
          onPress: () => {},
          contentStyle: {}
        }}
      />
    </View>
  );
};
export default SignInScreen;
