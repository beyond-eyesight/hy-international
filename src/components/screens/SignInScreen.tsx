import React from 'react';
import SignInSection from 'src/components/section/SignInSection';
import { View } from 'react-native';

interface Props {
  componentId: string;
}

const SignInScreen: React.FC<Props> = ({ componentId }: Props) => {
  return (
    <View>
      <SignInSection componentId={componentId} />
    </View>
  );
};
export default SignInScreen;
