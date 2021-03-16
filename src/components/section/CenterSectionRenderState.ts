import Pixel from '../../draw/size/pixel';


class Initialized {
  private a: number = 3;

  getPaddingBottom(): Pixel {
    return new Pixel(this.a);
  }
}
