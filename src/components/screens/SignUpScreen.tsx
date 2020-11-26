import React from 'react';
import styled from 'styled-components/native';
import ContainerWithStatusBar from '../container/ContainerWithStatusBar';
import colors from '../../styles/color';
import SignUpSection from '../section/SignUpSection';

const Container = styled(ContainerWithStatusBar)`
  background-color: ${colors.milkWhite};
  align-items: center;
`;

const SignUpScreen: React.FC = () => {
  return (
    <Container statusBarColor={colors.blue_light}>
      <SignUpSection />
    </Container>
  );
};

export default SignUpScreen;
