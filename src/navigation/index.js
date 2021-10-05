import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from 'root/src/screens/home';

import styles from './styles.js';


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
      <Stack.Navigator screenOptions={{
        headerShown: true,
        headerStyle: styles,
        headerTintColor: styles.color,
        headerTitleAlign: 'center'
      }}>
        <Stack.Screen name="Hotels Guide" component={Home} />
      </Stack.Navigator>
  );
}

export default RootNavigator;
