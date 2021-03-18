import { Navigation } from 'react-native-navigation';

interface Props {
  currentComponentId: string;
  nextComponentName: string;
  params?: object;
}

// todo: move 등으로 용어를 바꾸는게 좋을듯?

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
