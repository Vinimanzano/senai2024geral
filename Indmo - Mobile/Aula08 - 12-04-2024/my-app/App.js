import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './screens/Home';
import SearchScreen from './screens/Midia';
import ContactScreen from './screens/Formulario';
import { Ionicons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        activeColor='rgb(250, 33, 25)'
        inactiveColor='rgb(220, 44, 235)'
        barStyle={{backgroundColor: 'rgb(10, 10, 10)'}}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Midia') {
              iconName = focused ? 'share-social' : 'share-social-outline';
            } else if (route.name === 'Formulario') {
              iconName = focused ? 'list-sharp' : 'list-sharp';
            }

            return <Ionicons name={iconName} size={22} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Midia" component={SearchScreen} />
        <Tab.Screen name="Formulario" component={ContactScreen} />
      </Tab.Navigator> 
    </NavigationContainer>
  );
}
