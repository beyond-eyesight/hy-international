import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import Topbar, { ActionProps, TopbarStyle } from '../bar/Topbar';
import Percentage from '../../draw/size/percentage';
import { blue } from '../../draw/color';
import runningDeviceModel from '../../draw/device/model/deviceModel';
import ZERO from '../../draw/size/value';
import Pixel from '../../draw/size/pixel';

const ICON_COLOR = 'white';

const TopSection: React.FC = () => {
  const leftActionProps: Array<ActionProps> = [
    {
      icon: runningDeviceModel.getBackActionIcon(),
      iconColor: ICON_COLOR,
      iconSize: runningDeviceModel.getHeightOf(new Percentage(3)),
      iconDisabled: false,
      actionStyle: {},
      onPress: () => {}
    }
  ];

  const rightActionProps: Array<ActionProps> = [
    {
      icon: 'alarm-bell',
      iconColor: 'white',
      iconSize: runningDeviceModel.getHeightOf(new Percentage(3)),
      iconDisabled: false,
      actionStyle: {},
      onPress: () => {}
    }
  ];

  return (
    <Topbar
      headerProps={{
        isDark: true,
        statusBarHeight: ZERO,
        headerStyle: topbarStyles.header
      }}
      contentProps={{
        title: 'hihi',
        subtitle: 'kkk',
        titleStyle: {
          fontSize: runningDeviceModel.getHeightOf(new Percentage(3)).value
        },
        subtitleStyle: {
          fontSize: runningDeviceModel.getHeightOf(new Percentage(2)).value
        },
        onPress: () => {},
        contentStyle: topbarStyles.content
      }}
      leftActionsProps={leftActionProps}
      rightActionsProps={rightActionProps}
    />
  );
};

const topbarStyles = StyleSheet.create<TopbarStyle>({
  header: {
    justifyContent: 'space-between',
    height: runningDeviceModel.getTopSectionHeightBy(new Percentage(6)).value,
    paddingTop: getTopNavigationBarTop().value,
    backgroundColor: blue.get('600')
  },
  content: {
    alignItems: 'center'
  },
  action: {}
});

function getTopNavigationBarTop(): Pixel {
  return Platform.select({
    android: new Pixel(0),
    ios: runningDeviceModel.getStatusBarHeight()
  }) as Pixel;
}

export default TopSection;
