import React from 'react';
import { View } from 'react-native';
import Topbar from 'src/components/bar/Topbar';

interface Props {
  componentId: string;
}

const SignInScreen: React.FC<Props> = ({ componentId }: Props) => {
  return (
    <View>
      <Topbar />
    </View>
  );
};
export default SignInScreen;
