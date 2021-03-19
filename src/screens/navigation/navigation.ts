import { Navigation } from 'react-native-navigation';

interface Props {
  currentComponentId: string;
  nextComponentName: string;
  params?: object;
}

const moveScreen = async ({
  currentComponentId,
  nextComponentName,
  params
}: Props) => {
  await Navigation.push(currentComponentId, {
    component: {
      name: nextComponentName,
      passProps: params
    }
  });
};

const backScreen = async (componentId: string) => {
  await Navigation.pop(componentId);
};

export { moveScreen, backScreen };
