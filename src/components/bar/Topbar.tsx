import React, { ReactNode, RefObject } from 'react';
import {
  ImageProps,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableWithoutFeedback,
  ViewStyle
} from 'react-native';
import Pixel from 'src/draw/size/pixel';
import { Appbar } from 'react-native-paper';

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

interface ActionProps {
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
  actionProps: ActionProps;
}

const Topbar: React.FC<TopBarProps> = ({
  headerProps,
  contentProps,
  actionProps
}: TopBarProps) => {
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Action
        icon="archive"
        onPress={() => console.log('Pressed archive')}
      />
      <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
      <Appbar.Content style={styles.content} title="kkkk" subtitle="ffff" />
      <Appbar.Action
        icon="label"
        onPress={() => console.log('Pressed label')}
      />
      <Appbar.Action
        icon="delete"
        onPress={() => console.log('Pressed delete')}
      />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'space-between'
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

export default Topbar;
