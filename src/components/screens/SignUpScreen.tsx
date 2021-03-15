import React from 'react';
import SignUpSection from 'src/components/section/SignUpSection';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Percentage from 'src/draw/size/percentage';
import runningDeviceModel from '../../draw/device/model/deviceModel';
import TopSection from '../section/TopSection';

interface Props {
  componentId: string;
}

const SignUpScreen: React.FC<Props> = ({ componentId }: Props) => {
  return (
    <View style={signupScreenStyle.screenStyle}>
      <TopSection />
      <SignUpSection />
    </View>
  );
};

const signupScreenStyle = StyleSheet.create<{ screenStyle: ViewStyle }>({
  screenStyle: {
    backgroundColor: '#FCFCFC',
    height: runningDeviceModel.getHeightOf(new Percentage(100)).value
  }
});
export default SignUpScreen;
