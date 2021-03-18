import { Theme } from 'react-native-paper/lib/typescript/types';
import { configureFonts } from 'react-native-paper';
import fontConfig from 'src/draw/text/font';

const theme: Theme = {
  animation: { scale: 1.0 },
  mode: 'exact',
  colors: {
    primary: '#1E88E5',
    accent: '#1E88E5',
    backdrop: '#1E88E5',
    background: 'white',
    disabled: '#1E88E5',
    error: '#1E88E5',
    notification: '#1E88E5',
    onBackground: '#1E88E5',
    onSurface: '#1E88E5',
    placeholder: '#9E9E9E',
    surface: '#FCFCFC',
    text: 'black'
  },
  dark: false,
  fonts: configureFonts(fontConfig),
  roundness: 0
};

export default theme;
