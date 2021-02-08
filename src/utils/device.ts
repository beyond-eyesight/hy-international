import { Dimensions, Platform } from 'react-native';

// todo: 다 layout 폴더로 옮기기
export const isIOS = Platform.OS === 'ios';
export const isNotAndroid = Platform.OS !== 'android';

const dimension = Dimensions.get('window');

export const getStatusBarHeight = (isSafe: boolean) => {
  return Platform.select({
    android: getAndroidStatusBarHeight,
    ios: getIosStatusBarHeight(isSafe)
  });
};

export const getAndroidStatusBarHeight = (() => {
  // todo: 예제 코드에서는 status 바만큼 패딩을 줬는데, 내가 할때는 0을 줘야 제대로 보임
  // if (isNotAndroid) {
  //   return 0;
  // }
  // console.log('andoroid statusbar height');
  // console.log(StatusBar.currentHeight);
  return 0;
})();

export const isIphoneX =
  Platform.OS === 'ios' &&
  (dimension.height === 812 ||
    dimension.width === 812 ||
    dimension.height === 896 ||
    dimension.width === 896);

const getIphoneXStatusBarHeight = (isSafe: boolean) => {
  return isSafe ? 44 : 30;
};

const getIosStatusBarHeight = (isSafe: boolean) => {
  if (isIphoneX) {
    return getIphoneXStatusBarHeight(isSafe);
  }
  if (isIOS && !isIphoneX) {
    return 20;
  }

  return 0;
};
