import React, { useState } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Percentage from 'src/draw/size/percentage';
import SignInSection from 'src/components/section/SignInSection';
import TopSection from 'src/components/section/TopSection';
import RunningMobileDevice from 'src/draw/device/model/runningMobileDevice';

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
      <TopSection componentId={componentId} />
      <SignInSection componentId={componentId} />
    </View>
  );
};

const signinScreenStyle = StyleSheet.create<{ screenStyle: ViewStyle }>({
  screenStyle: {
    backgroundColor: '#FCFCFC',
    height: RunningMobileDevice.getHeightOf(new Percentage(100)).value
  }
});

export default SignInScreen;
