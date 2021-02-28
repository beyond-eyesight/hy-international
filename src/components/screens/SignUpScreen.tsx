import React from 'react';
import SignUpSection from 'src/components/section/SignUpSection';
import { View } from 'react-native';

interface Props {
  componentId: string;
}

const SignUpScreen: React.FC<Props> = ({ componentId }: Props) => {
  return (
    <View>
      <SignUpSection />
    </View>
  );
};

export default SignUpScreen;
