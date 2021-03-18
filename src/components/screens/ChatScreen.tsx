import React from 'react';
import ChatSection from 'src/components/section/ChatSection';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Percentage from 'src/draw/size/percentage';
import Zone from 'src/model/zone';
import TopSection from 'src/components/section/TopSection';
import RunningMobileDevice from 'src/draw/device/model/runningMobileDevice';

interface Props {
  componentId: string;
}

const ChatScreen: React.FC<Props> = ({ componentId }: Props) => {
  const zone: Zone = Zone.of(
    '110841e3-e6fb-4191-8fd8-5674a5107c33',
    'Wangsimni',
    0,
    true
  );
  return (
    <View style={chatScreenStyle.screenStyle}>
      <TopSection componentId={componentId} />
      <ChatSection zone={zone} />
    </View>
  );
};

const chatScreenStyle = StyleSheet.create<{ screenStyle: ViewStyle }>({
  screenStyle: {
    backgroundColor: '#FCFCFC',
    height: RunningMobileDevice.getHeightOf(new Percentage(100)).value
  }
});

export default ChatScreen;
