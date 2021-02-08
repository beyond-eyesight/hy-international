import React from 'react';
import styled from 'styled-components/native';
import ContainerWithStatusBar from 'src/components/container/ContainerWithStatusBar';
import BackTopbar from 'src/components/topbar/BackTopbar';
import SignInSection from 'src/components/section/SignInSection';
import colors from 'src/utils/color';
import { Dimensions, Platform } from 'react-native';
import { getModel } from 'react-native-device-info';

const Container = styled(ContainerWithStatusBar)`
  background-color: ${colors.milkWhite};
  align-items: center;
`;

interface Props {
  componentId: string;
}

const SignInScreen: React.FC<Props> = ({ componentId }: Props) => {
  console.log('kkkk');
  console.log(Dimensions.get('screen'));
  console.log(getModel());
  console.log(Platform);

  return (
    <Container statusBarColor={colors.blue_signiture}>
      <BackTopbar componentId={componentId} />
      <SignInSection componentId={componentId} />
    </Container>
  );
};

export default SignInScreen;
