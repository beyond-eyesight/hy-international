import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Zone from 'src/model/zone';
import ChatSection from 'src/screens/sections/ChatSection';
import RunningMobileDevice from 'graphic/device/model/runningMobileDevice';
import Percentage from 'graphic/size/percentage';
import DefaultTopBar from 'src/screens/sections/components/bar/Topbar';

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
      <DefaultTopBar componentId={componentId} />
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
