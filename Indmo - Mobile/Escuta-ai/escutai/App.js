import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MusicPlayerScreen from './Componentes/MusicPlayerScreen';
import PlaylistsScreen from './Componentes/PlaylistsScreen';
import AboutUsScreen from './Componentes/AboutUsScreen';
import CreateMusicScreen from './Componentes/CreateMusicScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Player de música" component={MusicPlayerScreen} />
        <Stack.Screen name="Playlists" component={PlaylistsScreen} />
        <Stack.Screen name="Quem somos" component={AboutUsScreen} />
        <Stack.Screen name="Faça sua música" component={CreateMusicScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
