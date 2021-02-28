import React from 'react';
import BackTopbar from 'src/components/topbar/BackTopbar';
import SignUpSection from 'src/components/section/SignUpSection';
import { View } from 'react-native';

interface Props {
  componentId: string;
}

const SignUpScreen: React.FC<Props> = ({ componentId }: Props) => {
  return (
    <View>
      <BackTopbar componentId={componentId} />
      <SignUpSection />
    </View>
  );
};

export default SignUpScreen;
