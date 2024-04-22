import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const MusicPlayerScreen = ({ navigation }) => {
  const [musicName, setMusicName] = useState('');

  const handleAddMusic = () => {
    // Aqui você pode implementar a lógica para adicionar a música ao player
    // Por exemplo, você pode atualizar o estado com o nome da música e iniciar a reprodução
    console.log('Música adicionada:', musicName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Player de música</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome da música"
        value={musicName}
        onChangeText={text => setMusicName(text)}
      />
      <Button title="Adicionar Música" onPress={handleAddMusic} />
      <Button title="Ir para Playlists" onPress={() => navigation.navigate('Playlists')} />
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
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default MusicPlayerScreen;
