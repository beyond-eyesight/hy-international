import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import SignUpSection from 'src/screens/sections/SignUpSection';
import RunningMobileDevice from 'graphic/device/model/runningMobileDevice';
import Percentage from 'graphic/size/percentage';
import DefaultTopBar from 'src/screens/sections/components/bar/Topbar';

interface Props {
  componentId: string;
}

const SignUpScreen: React.FC<Props> = ({ componentId }: Props) => {
  return (
    <View style={signupScreenStyle.screenStyle}>
      <DefaultTopBar componentId={componentId} />
      <SignUpSection />
    </View>
  );
};

const signupScreenStyle = StyleSheet.create<{ screenStyle: ViewStyle }>({
  screenStyle: {
    backgroundColor: '#FCFCFC',
    height: RunningMobileDevice.getHeightOf(new Percentage(100)).value
  }
});
export default SignUpScreen;
