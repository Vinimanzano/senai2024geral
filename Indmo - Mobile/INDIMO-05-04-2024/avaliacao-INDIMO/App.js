import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Componentes/LoginScreen';
import EscolhaScreen from './Componentes/EscolhaScreen';
import SwitchScreen from './Componentes/SwitchScreen';
import JurosScreen from './Componentes/JurosScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Escolha" component={EscolhaScreen} />
        <Stack.Screen name="Switch" component={SwitchScreen} />
        <Stack.Screen name="Juros" component={JurosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
