import React from 'react';
import ChatSection from 'src/components/section/ChatSection';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { runningDeviceModel } from 'src/draw/device/model/deviceModel';
import Percentage from 'src/draw/size/percentage';
import Topbar, { ActionProps, TopbarStyle } from 'src/components/bar/Topbar';
import Pixel from 'src/draw/size/pixel';
import { blue } from 'src/draw/color';

interface Props {
  componentId: string;
}

const deviceModelHeight: Pixel = runningDeviceModel._height;

const ChatScreen: React.FC<Props> = ({ componentId }: Props) => {
  return (
    <View style={chatScreenStyle.screenStyle}>
      <TopbarNode />
      <ChatSection />
    </View>
  );
};

const TopbarNode: React.FC = () => {
  const leftActionProps: Array<ActionProps> = [
    {
      icon: runningDeviceModel.getBackActionIcon(),
      iconColor: 'white',
      iconSize: deviceModelHeight.multiply(new Percentage(3)),
      iconDisabled: false,
      actionStyle: {},
      onPress: () => {}
    }
  ];

  const rightActionProps: Array<ActionProps> = [
    {
      icon: 'alarm-bell',
      iconColor: 'white',
      iconSize: deviceModelHeight.multiply(new Percentage(3)),
      iconDisabled: false,
      actionStyle: {},
      onPress: () => {}
    }
  ];

  return (
    <Topbar
      headerProps={{
        isDark: true,
        statusBarHeight: new Pixel(0),
        headerStyle: topbarStyles.header
      }}
      contentProps={{
        title: 'hihi',
        subtitle: 'kkk',
        titleStyle: {
          fontSize: deviceModelHeight.multiply(new Percentage(3)).value
        },
        subtitleStyle: {
          fontSize: deviceModelHeight.multiply(new Percentage(2)).value
        },
        onPress: () => {},
        contentStyle: topbarStyles.content
      }}
      leftActionsProps={leftActionProps}
      rightActionsProps={rightActionProps}
    />
  );
};
const statusBarHeight: Pixel = runningDeviceModel.getStatusBarHeight();
const topbarStyles = StyleSheet.create<TopbarStyle>({
  header: {
    left: 0,
    right: 0,
    justifyContent: 'space-between',
    height:
      deviceModelHeight.multiply(new Percentage(6)).value +
      statusBarHeight.value,
    backgroundColor: blue.get('600'),
    paddingTop: statusBarHeight.value
  },
  content: {
    alignItems: 'center',
    flex: 0,
    width: 100
  },
  action: {
    width: 100
  }
});

const chatScreenStyle = StyleSheet.create<{ screenStyle: ViewStyle }>({
  screenStyle: {
    backgroundColor: '#FCFCFC',
    height: deviceModelHeight.multiply(new Percentage(100)).value
  }
});

export default ChatScreen;
