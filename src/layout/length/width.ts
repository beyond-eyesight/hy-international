import { Size } from 'src/layout/size/size';
import Length from 'src/layout/length/length';

export default class Width<T extends Size> implements Length {
  private readonly _size: T;

  constructor(size: T) {
    this._size = size;
  }

  getSize(): string {
    return this._size.toString();
  }
}
