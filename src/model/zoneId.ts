import { validate as uuidValidate } from 'uuid';

export default class ZoneId {
  private readonly value: string;

  constructor(value: string) {
    if (!uuidValidate(value)) {
      throw new Error('value is not uuid pattern');
    }
    this.value = value;
  }

  public toString = (): string => {
    return this.value;
  };
}
