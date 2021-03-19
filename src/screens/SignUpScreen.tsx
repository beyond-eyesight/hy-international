import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Percentage from 'src/draw/size/percentage';
import RunningMobileDevice from 'src/draw/device/model/runningMobileDevice';
import DefaultTopBar from 'src/components/bar/Topbar';
import SignUpSection from 'src/screens/sections/SignUpSection';

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
