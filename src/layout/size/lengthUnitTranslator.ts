import { LengthUnit } from 'src/layout/size/lengthUnit';

export interface LengthUnitTranslator {
  translate(lengthUnit: LengthUnit): LengthUnit;
}
