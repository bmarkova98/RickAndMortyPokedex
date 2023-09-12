import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../features/auth/AuthScreen';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={AuthScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
