import React, { ReactNode, RefObject } from 'react';
import {
  StyleSheet,
  TextStyle,
  TouchableWithoutFeedback,
  View,
  ViewStyle
} from 'react-native';
import { Appbar } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { backScreen } from 'src/navigation/navigation';
import Pixel from 'draw/size/pixel';
import RunningMobileDevice from 'draw/device/model/runningMobileDevice';
import Percentage from 'draw/size/percentage';
import { ZERO } from 'draw/value';
import { blue } from 'draw/color';

const ICON_COLOR = 'white';

const TOP_BAR_HEIGHT: Pixel = RunningMobileDevice.getHeightOf(
  new Percentage(6)
);

const DefaultTopBar: React.FC<{ componentId: string }> = (props: {
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
        await backScreen(componentId);
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
    height: TOP_BAR_HEIGHT.value,
    backgroundColor: blue.get('600')
  },
  content: {
    alignItems: 'center'
  },
  action: {}
});

export interface TopbarStyle {
  header: ViewStyle;
  content: ViewStyle;
  action: ViewStyle;
}

interface HeaderProps {
  isDark: boolean;
  statusBarHeight: Pixel;
  headerStyle: ViewStyle;
}

interface ContentProps {
  title: ReactNode;
  subtitle: ReactNode;
  titleStyle: TextStyle;
  subtitleStyle: TextStyle;
  titleRef?: RefObject<Text>;
  onPress: () => void;
  contentStyle: ViewStyle;
}

export interface ActionProps {
  icon: IconSource;
  iconColor: string;
  iconSize: Pixel;
  iconDisabled: boolean;
  actionStyle: ViewStyle;
  actionRef?: RefObject<TouchableWithoutFeedback>;
  onPress: () => void;
}

interface TopBarProps {
  headerProps: HeaderProps;
  contentProps: ContentProps;
  leftActionsProps: Array<ActionProps>;
  rightActionsProps: Array<ActionProps>;
}

const Topbar: React.FC<TopBarProps> = ({
  headerProps,
  contentProps,
  leftActionsProps,
  rightActionsProps
}: TopBarProps) => {
  return (
    <Appbar.Header
      style={headerProps.headerStyle}
      statusBarHeight={RunningMobileDevice.getStatusBarOnScreenHeight().value}
      dark={headerProps.isDark}
    >
      <View>
        {leftActionsProps.map((leftActionProps, key) => {
          return (
            <Appbar.Action
              key={parseInt('radix', key)}
              icon={leftActionProps.icon}
              size={leftActionProps.iconSize.value}
              color={leftActionProps.iconColor}
              disabled={leftActionProps.iconDisabled}
              style={leftActionProps.actionStyle}
              onPress={leftActionProps.onPress}
            />
          );
        })}
      </View>
      <Appbar.Content
        style={contentProps.contentStyle}
        title={contentProps.title}
        titleStyle={contentProps.titleStyle}
        subtitle={contentProps.subtitle}
        subtitleStyle={contentProps.subtitleStyle}
        onPress={contentProps.onPress}
      />
      <View>
        {rightActionsProps.map((rightActionProps, key) => {
          return (
            <Appbar.Action
              key={parseInt('radix', key)}
              icon={rightActionProps.icon}
              size={rightActionProps.iconSize.value}
              color={rightActionProps.iconColor}
              disabled={rightActionProps.iconDisabled}
              style={rightActionProps.actionStyle}
              onPress={rightActionProps.onPress}
            />
          );
        })}
      </View>
    </Appbar.Header>
  );
};

export default DefaultTopBar;
