import React from 'react';
import { StyleSheet } from 'react-native';
import Topbar, { ActionProps, TopbarStyle } from '../bar/Topbar';
import Percentage from '../../draw/size/percentage';
import { blue } from '../../draw/color';
import runningDeviceModel from '../../draw/device/model/deviceModel';
import { HEADER_HEIGHT, ZERO } from '../../draw/size/value';

const ICON_COLOR = 'white';

const Header: React.FC = () => {
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
    height: HEADER_HEIGHT.value,
    paddingTop: runningDeviceModel.getHeaderPaddingTop().value,
    backgroundColor: blue.get('600')
  },
  content: {
    alignItems: 'center'
  },
  action: {}
});



export default Header;
