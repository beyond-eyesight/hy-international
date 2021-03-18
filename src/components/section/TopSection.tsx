import React from 'react';
import { StyleSheet } from 'react-native';
import Topbar, { ActionProps, TopbarStyle } from '../bar/Topbar';
import Percentage from '../../draw/size/percentage';
import { blue } from '../../draw/color';
import RunningMobileDevice from '../../draw/device/model/runningMobileDevice';
import { ZERO } from '../../draw/value';
import Pixel from '../../draw/size/pixel';
import { pop } from '../../navigation/navigation';

const ICON_COLOR = 'white';

const TOPBAR_HEIGHT: Pixel = RunningMobileDevice.getHeightOf(new Percentage(6));

const TopSection: React.FC<{ componentId: string }> = (props: {
  componentId: string;
}) => {
  const { componentId } = props;
  const leftActionProps: Array<ActionProps> = [
    {
      icon: RunningMobileDevice.backActionIcon,
      iconColor: ICON_COLOR,
      iconSize: RunningMobileDevice.getHeightOf(new Percentage(3)),
      iconDisabled: false,
      actionStyle: {},
      onPress: async () => {
        await pop(componentId);
      }
    }
  ];

  const rightActionProps: Array<ActionProps> = [
    {
      icon: 'alarm-bell',
      iconColor: 'white',
      iconSize: RunningMobileDevice.getHeightOf(new Percentage(3)),
      iconDisabled: false,
      actionStyle: {},
      onPress: () => {}
    }
  ];

  return (
    <Topbar
      headerProps={{
        isDark: true,
        statusBarHeight: new Pixel(ZERO),
        headerStyle: topbarStyles.header
      }}
      contentProps={{
        title: 'hihi',
        subtitle: 'kkk',
        titleStyle: {
          fontSize: RunningMobileDevice.getHeightOf(new Percentage(3)).value
        },
        subtitleStyle: {
          fontSize: RunningMobileDevice.getHeightOf(new Percentage(2)).value
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
    height: TOPBAR_HEIGHT.value,
    backgroundColor: blue.get('600')
  },
  content: {
    alignItems: 'center'
  },
  action: {}
});

export default TopSection;
