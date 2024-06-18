import React from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native';

const songs = [
  { title: 'Kamisa10' },
  { title: 'Borges' },
  { title: 'Chitãozinho & Xororó - Galopeira' },
  { title: 'Luan Pereira - Estrada de Chão' },
  { title: 'Churrasquinho - Menos é Mais' },
  { title: 'MC Paulin da Capital e Mc Daniel - Renasci das Cinzas' },
  { title: 'Poesia Acústica #15' },
  { title: 'Ana Castela - Ram Tchum' },
];

export default function PlaylistsScreen() {
  return (
    <ImageBackground
      source={require('../assets/logo.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Minha Playlist</Text>
        <FlatList
          data={songs}
          renderItem={({ item }) => <Text style={styles.song}>{item.title}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff', 
  },
  song: {
    fontSize: 16,
    marginBottom: 10,
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
