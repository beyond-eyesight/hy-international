import React, { useState } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import SignInSection from 'src/screens/sections/SignInSection';
import RunningMobileDevice from 'draw/device/model/runningMobileDevice';
import Percentage from 'draw/size/percentage';
import DefaultTopBar from 'src/screens/sections/components/bar/Topbar';

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
      <DefaultTopBar componentId={componentId} />
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
