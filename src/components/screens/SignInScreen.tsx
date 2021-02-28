import React from 'react';
import styled from 'styled-components/native';
import ContainerWithStatusBar from 'src/components/container/ContainerWithStatusBar';
import BackTopbar from 'src/components/topbar/BackTopbar';
import SignInSection from 'src/components/section/SignInSection';
import { blue, grey } from 'src/draw/color';

const Container = styled(ContainerWithStatusBar)`
  background-color: ${grey.get('99')};
  align-items: center;
`;

interface Props {
  componentId: string;
}

const SignInScreen: React.FC<Props> = ({ componentId }: Props) => {
  return (
    <Container statusBarColor={blue.get('600')}>
      <BackTopbar componentId={componentId} />
      <SignInSection componentId={componentId} />
    </Container>
  );
};
export default SignInScreen;
