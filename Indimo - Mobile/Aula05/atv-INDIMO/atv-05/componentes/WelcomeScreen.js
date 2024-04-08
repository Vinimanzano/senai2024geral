import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/fundo.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Escolha uma opção:</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Button
              title="Tela de Idade"
              onPress={() => navigation.navigate('Idade')}
              style={styles.button}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              title="Tela de Juros"
              onPress={() => navigation.navigate('Juros')}
              style={styles.button}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%', // Alterado de '30%' para '80%'
  },
  buttonWrapper: {
    marginHorizontal: 10,
    flex: 1,
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#007bff',
    paddingVertical: 15,
  },
});
