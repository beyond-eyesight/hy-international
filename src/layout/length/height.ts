import { Size } from 'src/layout/size/size';
import Length from 'src/layout/length/length';

export default class Height implements Length {
  private readonly _size: Size;

  constructor(size: Size) {
    this._size = size;
  }

  getSize(): string {
    return this._size.toString();
  }
}
