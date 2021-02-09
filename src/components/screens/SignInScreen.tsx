import React from 'react';
import styled from 'styled-components/native';
import ContainerWithStatusBar from 'src/components/container/ContainerWithStatusBar';
import BackTopbar from 'src/components/topbar/BackTopbar';
import SignInSection from 'src/components/section/SignInSection';
import colors from 'src/utils/color';
import DefaultText from 'src/components/text/DefaultText';
import { RFPercentage } from 'react-native-responsive-fontsize';
import PixelSize from 'src/layout/size/pixelSize';
import { Dimensions, Platform, StatusBar } from 'react-native';
import PercentageSize from 'src/layout/size/percentageSize';

const Container = styled(ContainerWithStatusBar)`
  background-color: ${colors.milkWhite};
  align-items: center;
`;

interface Props {
  componentId: string;
}
const size = new PercentageSize(0.03);

const SignInScreen: React.FC<Props> = ({ componentId }: Props) => {
  const pixelSize = size.toPixelSize().toString();

  return (
    <Container statusBarColor={colors.blue_signiture}>
      <BackTopbar componentId={componentId} />
      <DefaultText
        fontFamily="ProximaNova-Regular"
        fontStyle="normal"
        fontSize={pixelSize}
        lineHeight={pixelSize}
        color="black"
      >
        abcdefg
      </DefaultText>
      <SignInSection componentId={componentId} />
    </Container>
  );
};
export default SignInScreen;
