import React from 'react';
import styled from 'styled-components/native';
import ContainerWithStatusBar from 'src/components/container/ContainerWithStatusBar';
import BackTopbar from 'src/components/topbar/BackTopbar';
import SignInSection from 'src/components/section/SignInSection';
import colors from 'src/utils/color';
import DefaultText from 'src/components/text/DefaultText';
import Percentage from 'src/layout/size/percentage';
import Pixel from 'src/layout/size/pixel';
import { getRunningModelHeight } from 'src/layout/device/model/deviceModel';

const Container = styled(ContainerWithStatusBar)`
  background-color: ${colors.milkWhite};
  align-items: center;
`;

interface Props {
  componentId: string;
}

const SignInScreen: React.FC<Props> = ({ componentId }: Props) => {
  return (
    <Container statusBarColor={colors.blue_signiture}>
      <BackTopbar componentId={componentId} />

      <SignInSection componentId={componentId} />
    </Container>
  );
};
export default SignInScreen;
