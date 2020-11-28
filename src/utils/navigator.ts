import { Navigation } from 'react-native-navigation';

interface Props {
  currentComponentId: string;
  nextComponentId: string;
}

const push = async ({ currentComponentId, nextComponentId }: Props) => {
  await Navigation.push(currentComponentId, {
    component: {
      name: nextComponentId
    }
  });
};

const pop = async (componentId: string) => {
  await Navigation.pop(componentId);
};

export { push, pop };
