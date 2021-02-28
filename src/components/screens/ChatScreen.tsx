import React from 'react';
import ChatSection from 'src/components/section/ChatSection';
import Zone from 'src/model/zone';
import { View } from 'react-native';

interface Props {
  componentId: string;
  zone: Zone;
}

const ChatScreen: React.FC<Props> = ({ componentId, zone }: Props) => {
  return (
    <View>
      <ChatSection zone={zone} />
    </View>
  );
};

export default ChatScreen;
