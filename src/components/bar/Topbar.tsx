import React, { ReactNode, RefObject } from 'react';
import {
  TextStyle,
  TouchableWithoutFeedback,
  View,
  ViewStyle
} from 'react-native';
import Pixel from 'src/draw/size/pixel';
import { Appbar } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import runningDeviceModel from '../../draw/device/model/deviceModel';

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
      statusBarHeight={runningDeviceModel.getTopSectionPaddingTop().value}
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

export default Topbar;
