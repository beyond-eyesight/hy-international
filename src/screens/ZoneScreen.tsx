import React from 'react';
import styled from 'styled-components/native';
import ContainerWithStatusBar from 'components/container/ContainerWithStatusBar';
import colors from 'styles/color';
import BackTopbar from 'components/topbar/BackTopbar';
import ZoneSection from 'components/section/ZoneSection';

const Container = styled(ContainerWithStatusBar)`
  background-color: ${colors.milkWhite};
  align-items: center;
`;

interface Props {
  componentId: string;
}

const ZoneScreen: React.FC<Props> = ({ componentId }: Props) => {
  return (
    <Container statusBarColor={colors.blue_signiture}>
      <BackTopbar componentId={componentId} />
      <ZoneSection componentId={componentId} />
    </Container>
  );
};

export default ZoneScreen;
