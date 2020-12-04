import 'reflect-metadata';

export interface IProvider<T> {
  provide(): T;
}

interface Bean<T> {}
