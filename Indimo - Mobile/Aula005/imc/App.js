//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';

import { NamedExoticComponent } from "@react-navigation/nativereact";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenIMC from './components/formIMC.js';
import LoginForm from './componentsLoginForm';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavegationContainer>
      
      <stack.Navigator>

        <stack.Screen
        name="Login"
        component={LoginForm}
        options={{title: 'Bem vindo'}} />    


        <stack.Screen
        name="telaIMC"
        component={ScreenIMC}
        options={{title: 'Calcule seu IMC'}} />

      </stack.Navigator>
    </NavegationContainer>
  )
}