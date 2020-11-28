import React from 'react';
import styled from 'styled-components/native';
import colors from '../../styles/color';
import Board from '../board/Board';
import EmailInput from '../input/EmailInput';
import DefaultTextInput from '../input/DefaultTextInput';
import TextButton from '../button/TextButton';
import VerifyEmailBox from '../box/VerifyEmailBox';

const Container = styled.View`
  height: 100%;
  width: 90%;
  background: ${colors.white};
  align-items: center;
`;

const SignUpSection: React.FC = () => {
  return (
    <Container>
      <Board containerWidth="100%" containerHeight="10%" title="Sign Up" />
      <EmailInput
        containerWidth="100%"
        containerHeight="6%"
        marginTop="5%"
        marginBottom="3%"
      />
      <VerifyEmailBox />
      <DefaultTextInput
        containerWidth="100%"
        containerHeight="6%"
        marginTop="1%"
        marginBottom="3%"
        placeholder=" Verification Code"
      />
      <DefaultTextInput
        containerWidth="100%"
        containerHeight="6%"
        marginTop="1%"
        marginBottom="3%"
        placeholder=" Password"
      />
      <DefaultTextInput
        containerWidth="100%"
        containerHeight="6%"
        marginTop="1%"
        marginBottom="3%"
        placeholder=" Password Verification"
      />
      <TextButton
        containerWidth="100%"
        containerHeight="6%"
        content="Sign Up"
        ellipticalColor={colors.blue_signiture}
        textColor={colors.white}
        borderRadius="100px"
      />
    </Container>
  );
};

export default SignUpSection;
