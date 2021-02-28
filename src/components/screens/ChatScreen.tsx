import React from 'react';
import styled from 'styled-components/native';
import ContainerWithStatusBar from 'src/components/container/ContainerWithStatusBar';
import BackTopbar from 'src/components/topbar/BackTopbar';
import ChatSection from 'src/components/section/ChatSection';
import Zone from 'src/model/zone';
import { blue, grey } from 'src/draw/color';

const Container = styled(ContainerWithStatusBar)`
  background-color: ${grey.get('99')};
`;

interface Props {
  componentId: string;
  zone: Zone;
}

const ChatScreen: React.FC<Props> = ({ componentId, zone }: Props) => {
  return (
    <Container statusBarColor={blue.get('600')}>
      <BackTopbar componentId={componentId} />
      <ChatSection zone={zone} />
    </Container>
  );
};

export default ChatScreen;
