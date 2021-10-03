import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootNavigator from 'root/src/navigation';

function App() {
  return (
    <NavigationContainer>
        <RootNavigator />
    </NavigationContainer>
  );
}

export default App;