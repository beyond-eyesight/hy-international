import { Theme } from 'react-native-paper/lib/typescript/types';
import ProximaNova from 'src/draw/text/font';

const theme: Theme = {
  animation: { scale: 1.0 },
  colors: {
    primary: '#1E88E5',
    accent: '#0D47A1',
    backdrop: 'rgba(0,0,0,0.5)',
    background: '#FCFCFC',
    disabled: 'rgba(0,0,0,0.26)',
    error: '',
    notification: '',
    onBackground: '',
    onSurface: '',
    placeholder: 'rgba(33,33,33,.7)',
    surface: '',
    text: ''
  },
  dark: false,
  fonts: ProximaNova,
  roundness: 0
};

export default theme;
