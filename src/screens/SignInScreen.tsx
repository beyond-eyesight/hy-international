import React from 'react';
import styled from 'styled-components/native';
import ContainerWithStatusBar from 'src/components/container/ContainerWithStatusBar';
import colors from 'src/styles/color';
import BackTopbar from 'src/components/topbar/BackTopbar';
import SignInSection from 'src/components/section/SignInSection';

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
      <SignInSection />
    </Container>
  );
};

export default SignInScreen;
