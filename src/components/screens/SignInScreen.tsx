import React from 'react';
import styled from 'styled-components/native';
import ContainerWithStatusBar from 'src/components/container/ContainerWithStatusBar';
import BackTopbar from 'src/components/topbar/BackTopbar';
import SignInSection from 'src/components/section/SignInSection';
import colors from 'src/utils/color';
import TextBox from 'src/components/box/TextBox';

const Container = styled(ContainerWithStatusBar)`
  background-color: ${colors.milkWhite};
  align-items: center;
`;

interface Props {
  componentId: string;
}

const RefacAtSignView = styled(TextBox)`
  background-color: ${colors.black};
`;

const SignInScreen: React.FC<Props> = ({ componentId }: Props) => {
  return (
    <Container statusBarColor={colors.blue_signiture}>
      <BackTopbar componentId={componentId} />
      <RefacAtSignView
        font={{
          fontFamily: 'ProximaNova-Regular',
          fontStyle: 'normal',
          lineHeight: '20px',
          fontSize: '20px',
          color: colors.gray500
        }}
      >
        ddddffff
      </RefacAtSignView>
      <SignInSection componentId={componentId} />
    </Container>
  );
};
export default SignInScreen;
