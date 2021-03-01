import React, { ReactNode, RefObject } from 'react';
import {
  ImageProps,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableWithoutFeedback,
  ViewStyle
} from 'react-native';
import Percentage from 'src/draw/size/percentage';
import { getRunningModelHeight } from 'src/draw/device/model/deviceModel';
import Pixel from 'src/draw/size/pixel';
import { white } from 'src/draw/color';
import { TextBoxStyleProps } from 'src/components/box/TextBox';
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
  titleRef: RefObject<Text>;
  onPress: () => void;
  contentStyle: ViewStyle;
}

interface ActionProps {
  iconColor: string;
  iconSize: Pixel;
  iconDisabled: boolean;
  actionStyle: ViewStyle;
  actionRef: RefObject<TouchableWithoutFeedback>;
}

interface TopBarProps {}

const textSize: Pixel = getRunningModelHeight().multiply(new Percentage(3));

const textBoxProps = StyleSheet.create<TextBoxStyleProps>({
  boxStyle: {
    height: '100%',
    width: '10%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: textSize.value,
    lineHeight: textSize.value,
    color: white
  }
});
const Topbar: React.FC = () => {
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
