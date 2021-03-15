import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import Topbar, { ActionProps, TopbarStyle } from '../bar/Topbar';
import Percentage from '../../draw/size/percentage';
import Pixel from '../../draw/size/pixel';
import { blue } from '../../draw/color';
import runningDeviceModel from '../../draw/device/model/deviceModel';

const deviceModelHeight: Pixel = runningDeviceModel._height;
const deviceStatusBarHeight: Pixel = runningDeviceModel.getStatusBarHeight();
const backActionIcon: IconSource = runningDeviceModel.getBackActionIcon();

const TopSection: React.FC = () => {
  const leftActionProps: Array<ActionProps> = [
    {
      icon: backActionIcon,
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

function getTopNavigationBarHeight(): Pixel {
  return deviceModelHeight.multiply(new Percentage(6));
}

function getTopSectionHeight(): Pixel {
  return getTopNavigationBarHeight().plus(deviceStatusBarHeight);
}

const topbarStyles = StyleSheet.create<TopbarStyle>({
  header: {
    justifyContent: 'space-between',
    height: getTopSectionHeight().value,
    backgroundColor: blue.get('600'),
    paddingTop: deviceStatusBarHeight.value
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

export default TopSection;
