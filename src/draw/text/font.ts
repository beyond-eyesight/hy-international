import { Font, Fonts } from 'react-native-paper/lib/typescript/types';

const ProximaNovaBold: Font = {
  fontFamily: 'ProximaNova-Bold',
  fontWeight: '500'
};

const ProximaNovaRegular: Font = {
  fontFamily: 'ProximaNova-Regular',
  fontWeight: '400'
};

const ProximaNovaLight: Font = {
  fontFamily: 'ProximaNovaA-Light',
  fontWeight: '300'
};

const ProximaNova: Fonts = {
  light: ProximaNovaLight,
  medium: ProximaNovaBold,
  regular: ProximaNovaRegular,
  thin: ProximaNovaLight
};

const fontConfig = {
  web: ProximaNova,
  ios: ProximaNova,
  android: ProximaNova
};

export default fontConfig;
