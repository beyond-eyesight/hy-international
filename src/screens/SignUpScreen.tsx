import React from 'react';
import styled from 'styled-components/native';
import ContainerWithStatusBar from 'components/container/ContainerWithStatusBar';
import colors from 'styles/color';
import BackTopbar from 'components/topbar/BackTopbar';
import SignUpSection from 'components/section/SignUpSection';

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
