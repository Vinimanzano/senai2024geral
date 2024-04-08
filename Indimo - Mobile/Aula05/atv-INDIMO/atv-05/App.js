import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './componentes/LoginScreen';
import WelcomeScreen from './componentes/WelcomeScreen';
import JurosScreen from './componentes/JurosScreen';
import IdadeScreen from './componentes/IdadeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Juros" component={JurosScreen} />
        <Stack.Screen name="Idade" component={IdadeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
