import React from 'react';
import styled from 'styled-components/native';
import ContainerWithStatusBar from 'src/components/container/ContainerWithStatusBar';
import BackTopbar from 'src/components/topbar/BackTopbar';
import SignInSection from 'src/components/section/SignInSection';
import colors from 'src/utils/color';
import DefaultText from 'src/components/text/DefaultText';
import Percentage from 'src/layout/size/percentage';
import translateFromPercentageToPixel from 'src/layout/translator/percentageToPixelTranslator';
import Pixel from 'src/layout/size/pixel';
import runningDeviceModel from 'src/layout/device/model/deviceModel';

const Container = styled(ContainerWithStatusBar)`
  background-color: ${colors.milkWhite};
  align-items: center;
`;

interface Props {
  componentId: string;
}
const size = new Percentage(0.03);

const SignInScreen: React.FC<Props> = ({ componentId }: Props) => {
  const pixelSize = translateFromPercentageToPixel(
    size,
    new Pixel(runningDeviceModel._height)
  );

  return (
    <Container statusBarColor={colors.blue_signiture}>
      <BackTopbar componentId={componentId} />
      <DefaultText
        fontFamily="ProximaNova-Regular"
        fontStyle="normal"
        fontSize={pixelSize.toString()}
        lineHeight={pixelSize.toString()}
        color="black"
      >
        abcdefg
      </DefaultText>
      <SignInSection componentId={componentId} />
    </Container>
  );
};
export default SignInScreen;
