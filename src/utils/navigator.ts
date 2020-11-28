import { Navigation } from 'react-native-navigation';

interface Props {
  currentComponentId: string;
  nextComponentName: string;
}

const push = async ({ currentComponentId, nextComponentName }: Props) => {
  await Navigation.push(currentComponentId, {
    component: {
      name: nextComponentName
    }
  });
};

const pop = async (componentId: string) => {
  await Navigation.pop(componentId);
};

export { push, pop };
