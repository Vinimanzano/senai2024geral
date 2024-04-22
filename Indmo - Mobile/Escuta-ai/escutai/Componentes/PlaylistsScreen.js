import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as FileSystem from 'expo-file-system';

const PlaylistsScreen = ({ navigation }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    loadSongs();
  }, []);

  // Função para carregar as músicas da pasta "songs"
  const loadSongs = async () => {
    try {
      const songsDir = `${FileSystem.documentDirectory}escutai/songs`;
      const dirInfo = await FileSystem.getInfoAsync(songsDir);
      
      // Verifica se o diretório existe
      if (dirInfo.exists) {
        const songs = await FileSystem.readDirectoryAsync(songsDir);
        setSongs(songs);
      } else {
        console.log('A pasta "songs" não existe');
      }
    } catch (error) {
      console.error('Erro ao carregar músicas:', error);
    }
  };

  // Função para reproduzir uma música
  const playSong = async (songName) => {
    try {
      const songUri = `${FileSystem.documentDirectory}songs${songName}`;
      // Implemente a lógica para reproduzir a música selecionada
      console.log('Reproduzindo música:', songUri);
    } catch (error) {
      console.error('Erro ao reproduzir música:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Playlists</Text>
      {songs.map((song, index) => (
        <Button key={index} title={song} onPress={() => playSong(song)} />
      ))}
      <Button title="Voltar para o Player de música" onPress={() => navigation.navigate('Player de música')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default PlaylistsScreen;
