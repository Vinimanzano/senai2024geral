import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Midias = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Midias Sociais</Text>
    </View>
  );
};

export default function App() {  
  return (
    <View style={styles.container}>
      <Text style={styles.contato}>Contato</Text>
      <TouchableOpacity onPress={() => Linking.openURL('https://github.com/vinimanzano')} style={styles.button}>
        <Ionicons name="logo-github" size={24} color="white" />
        <Text style={styles.buttonText}>Github</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://vinimanzano.github.io')} style={styles.button}>
        <Ionicons name="link-sharp" size={24} color="white" />
        <Text style={styles.buttonText}>Portfólio</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(5, 5, 5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  contato: {
    color: 'white',
    fontSize: 50,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 18,
  },
});
