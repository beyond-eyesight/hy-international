/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import SignUpScreen from './components/screens/SignUpScreen';

interface IToDo {
  text: string;
  completed: boolean;
}

export default function App() {
  const [value, setValue] = useState<string>('');
  const [toDoList, setToDos] = useState<IToDo[]>([]);
  const [error, showError] = useState<Boolean>(false);

  return <SignUpScreen />;
}
