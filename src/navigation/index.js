import * as React from 'react';
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from './styles.js'


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
      <Stack.Navigator screenOptions={{
        headerShown: true,
        headerStyle: styles,
        headerTintColor: styles.color,
        headerTitleAlign: 'center'
      }}>
        <Stack.Screen name="Initial" component={() => <Text>Initial</Text>} />
      </Stack.Navigator>
  );
}

export default RootNavigator;
