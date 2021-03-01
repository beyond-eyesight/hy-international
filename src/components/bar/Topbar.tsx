import React, { ReactNode, RefObject } from 'react';
import {
  ImageProps,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableWithoutFeedback,
  View,
  ViewStyle
} from 'react-native';
import Pixel from 'src/draw/size/pixel';
import { Appbar } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

export type Props = {
  style?: StyleProp<ViewStyle>;
  title?: React.ReactNode;
  onBackPress?: () => void;
  iconSource?: ImageProps['source'];
  iconStyle?: ImageProps['style'];
  LeftComponent?: JSX.Element;
  RightComponent?: JSX.Element;
  justifyContent?: string;
};

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
    <Appbar.Header style={headerProps.headerStyle} dark={headerProps.isDark}>
      <View>
        {leftActionsProps.map((leftActionProps, key) => {
          return (
            <Appbar.Action
              key={parseInt('radix', key)}
              icon={leftActionProps.icon}
              size={leftActionProps.iconSize.value}
              color={leftActionProps.iconColor}
              onPress={() => console.log('Pressed label')}
            />
          );
        })}
      </View>
      <Appbar.Content
        style={contentProps.contentStyle}
        title={contentProps.title}
        subtitle={contentProps.subtitle}
      />
      <View>
        {rightActionsProps.map((rightActionProps, key) => {
          return (
            <Appbar.Action
              key={parseInt('radix', key)}
              icon={rightActionProps.icon}
              size={rightActionProps.iconSize.value}
              color={rightActionProps.iconColor}
              onPress={() => console.log('Pressed label')}
            />
          );
        })}
      </View>
    </Appbar.Header>
  );
};

export default Topbar;
