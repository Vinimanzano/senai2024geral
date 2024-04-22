// CreateMusicScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CreateMusicScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Faça sua música</Text>
      <Button title="Voltar para o Player de música" onPress={() => navigation.navigate('Player de música')} />
    </View>
  );
};

// Estilos
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

export default CreateMusicScreen;
