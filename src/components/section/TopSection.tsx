import React from 'react';
import { StyleSheet } from 'react-native';
import Topbar, { ActionProps, TopbarStyle } from '../bar/Topbar';
import Percentage from '../../draw/size/percentage';
import Pixel from '../../draw/size/pixel';
import { blue } from '../../draw/color';
import runningDeviceModel from '../../draw/device/model/deviceModel';
import ZERO from '../../draw/size/value';

const ICON_COLOR = 'white';

const TopSection: React.FC = () => {
  console.log('topSection');
  console.log(getTopSectionHeight().value);
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

function getTopNavigationBarHeight(): Pixel {
  return runningDeviceModel.getHeightOf(new Percentage(6));
}

function getTopSectionHeight(): Pixel {
  return getTopNavigationBarHeight().plus(
    runningDeviceModel.getStatusBarHeight()
  );
}

const topbarStyles = StyleSheet.create<TopbarStyle>({
  header: {
    justifyContent: 'space-between',
    height: getTopSectionHeight().value,
    backgroundColor: blue.get('600'),
    paddingTop: runningDeviceModel.getStatusBarHeight().value
  },
  content: {
    alignItems: 'center'
  },
  action: {}
});

export default TopSection;
