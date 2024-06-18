import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      {'\n'}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dia4')}>
        <Text style={styles.buttonText}>Chamada para o Dia 4</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PrimeiraTrilogia')}>
        <Text style={styles.buttonText}>Primeira Trilogia</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SegundaTrilogia')}>
        <Text style={styles.buttonText}>Segunda Trilogia</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TerceiraTrilogia')}>
        <Text style={styles.buttonText}>Terceira Trilogia</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DarthVader')}>
        <Text style={styles.buttonText}>Darth Vader fazendo joia</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  title: {
    color: '#fff',
    fontSize: 28,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#333',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default HomeScreen;
