// todo: refac - weight로 get
import PixelSize from 'src/layout/size/pixelSize';

type ProximaNova =
  | 'ProximaNova-Bold'
  | 'ProximaNova-Regular'
  | 'ProximaNovaA-Light';

export interface Font {
  fontFamily: ProximaNova;
  fontStyle: string;
  fontSize: string;
  lineHeight: string;
  color: string;
}
