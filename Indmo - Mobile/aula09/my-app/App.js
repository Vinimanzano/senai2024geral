import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PlayerScreen from './componentes/PlayerScreen';
import PlaylistsScreen from './componentes/PlaylistsScreen';
import AboutUsScreen from './componentes/AboutUsScreen';
import CreateMusicScreen from './componentes/CreateMusicScreen';
import { MaterialIcons } from '@expo/vector-icons'; // Troquei para MaterialIcons

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Player') {
              iconName = 'headset'; // Ícone de fone de ouvido para a tela do Player
            } else if (route.name === 'Playlists') {
              iconName = 'queue-music'; // Ícone de lista de reprodução para a tela de Playlists
            } else if (route.name === 'About Us') {
              iconName = 'info'; // Ícone de informação para a tela Sobre Nós
            } else if (route.name === 'Create Music') {
              iconName = 'add-box'; // Ícone de adicionar para a tela de Criar Música
            }

            // Retorna o ícone correspondente com a cor e o tamanho especificados
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue', // Cor do ícone ativo
          inactiveTintColor: 'gray', // Cor do ícone inativo
        }}
      >
        <Tab.Screen name="Player" component={PlayerScreen} />
        <Tab.Screen name="Playlists" component={PlaylistsScreen} />
        <Tab.Screen name="About Us" component={AboutUsScreen} />
        <Tab.Screen name="Create Music" component={CreateMusicScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
