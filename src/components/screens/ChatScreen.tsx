import React from 'react';
import ChatSection from 'src/components/section/ChatSection';
import Zone from 'src/model/zone';
import { View } from 'react-native';

interface Props {
  componentId: string;
}

const ChatScreen: React.FC<Props> = ({ componentId }: Props) => {
  return (
    <View>
      <ChatSection />
    </View>
  );
};

export default ChatScreen;
