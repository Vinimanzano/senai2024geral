//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenForm from './components/Form';
import LoginForm from './components/LoginForm';
import ScreenIdade from './components/Idade';
import ScreenJuros from './components/Juros';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginForm}
        options={{title: 'Bem vindo'}} />

        <Stack.Screen
        name="Form"
        component={ScreenForm}
        options={{title: 'Escolha uma opção'}} />

        {/* <Stack.Screen
        name="Idade"
        component={ScreenIdade}
        options={{title: 'Clique para ver sua idade'}} /> */}

      {/* <Stack.Screen
        name="Juros"
        component={ScreenJuros}
        options={{title: 'Clique para ver os Juros'}} />  */}

      </Stack.Navigator>

    </NavigationContainer>
  );
  }
    