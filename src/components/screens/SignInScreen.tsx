import React from 'react';
import styled from 'styled-components/native';
import ContainerWithStatusBar from 'src/components/container/ContainerWithStatusBar';
import BackTopbar from 'src/components/topbar/BackTopbar';
import SignInSection from 'src/components/section/SignInSection';
import colors from 'src/utils/color';
import RawText from 'src/components/text/RawText';
import Percentage from 'src/draw/size/percentage';
import Pixel from 'src/draw/size/pixel';
import { getRunningModelHeight } from 'src/draw/device/model/deviceModel';

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
