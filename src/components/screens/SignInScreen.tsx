import React from 'react';
import BackTopbar from 'src/components/topbar/BackTopbar';
import SignInSection from 'src/components/section/SignInSection';
import { View } from 'react-native';

interface Props {
  componentId: string;
}

const SignInScreen: React.FC<Props> = ({ componentId }: Props) => {
  return (
    <View>
      <BackTopbar componentId={componentId} />
      <SignInSection componentId={componentId} />
    </View>
  );
};
export default SignInScreen;
