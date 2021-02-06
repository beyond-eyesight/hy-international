import React from 'react';
import styled from 'styled-components/native';
import ContainerWithStatusBar from 'src/components/container/ContainerWithStatusBar';
import colors from 'src/styles/color';
import BackTopbar from 'src/components/topbar/BackTopbar';
import SignUpSection from 'src/components/section/SignUpSection';

const Container = styled(ContainerWithStatusBar)`
  background-color: ${colors.milkWhite};
  align-items: center;
`;

interface Props {
  componentId: string;
}

const SignUpScreen: React.FC<Props> = ({ componentId }: Props) => {
  return (
    <Container statusBarColor={colors.blue_light}>
      <BackTopbar componentId={componentId} />
      <SignUpSection />
    </Container>
  );
};

export default SignUpScreen;
