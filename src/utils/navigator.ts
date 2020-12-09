import { Navigation } from 'react-native-navigation';

interface Props {
  currentComponentId: string;
  nextComponentName: string;
  params?: object;
}

const push = async ({
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

const pop = async (componentId: string) => {
  await Navigation.pop(componentId);
};

export { push, pop };
