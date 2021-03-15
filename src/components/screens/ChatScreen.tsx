import React from 'react';
import ChatSection from 'src/components/section/ChatSection';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Percentage from 'src/draw/size/percentage';
import runningDeviceModel from '../../draw/device/model/deviceModel';
import Zone from '../../model/zone';
import Header from '../section/Header';

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
      <Header />
      <ChatSection zone={zone} />
    </View>
  );
};

const chatScreenStyle = StyleSheet.create<{ screenStyle: ViewStyle }>({
  screenStyle: {
    backgroundColor: '#FCFCFC',
    height: runningDeviceModel.getHeightOf(new Percentage(100)).value
  }
});

export default ChatScreen;
