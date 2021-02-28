import React from 'react';
import styled from 'styled-components/native';
import ContainerWithStatusBar from 'src/components/container/ContainerWithStatusBar';
import BackTopbar from 'src/components/topbar/BackTopbar';
import SignUpSection from 'src/components/section/SignUpSection';
import { blue } from 'src/draw/color';

const Container = styled(ContainerWithStatusBar)`
  background-color: ${blue.get('99')};
  align-items: center;
`;

interface Props {
  componentId: string;
}

const SignUpScreen: React.FC<Props> = ({ componentId }: Props) => {
  return (
    <Container statusBarColor={blue.get('600')}>
      <BackTopbar componentId={componentId} />
      <SignUpSection />
    </Container>
  );
};

export default SignUpScreen;
