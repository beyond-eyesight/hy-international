import React from 'react';
import styled from 'styled-components/native';
import ContainerWithStatusBar from 'src/components/container/ContainerWithStatusBar';
import BackTopbar from 'src/components/topbar/BackTopbar';
import ZoneSection from 'src/components/section/ZoneSection';
import { blue, grey } from 'src/draw/color';

const Container = styled(ContainerWithStatusBar)`
  background-color: ${grey.get('99')};
  align-items: center;
`;

interface Props {
  componentId: string;
}

const ZoneScreen: React.FC<Props> = ({ componentId }: Props) => {
  return (
    <Container statusBarColor={blue.get('600')}>
      <BackTopbar componentId={componentId} />
      <ZoneSection componentId={componentId} />
    </Container>
  );
};

export default ZoneScreen;
