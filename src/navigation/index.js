import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
      <Stack.Navigator>
        {/* <Stack.Screen name="" component={} /> */}
      </Stack.Navigator>
  );
}

export default RootNavigator;