import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const IdadeScreen = () => {
  const [dataNascimento, setDataNascimento] = useState('');
  const [idade, setIdade] = useState('');

  const calcularIdade = () => {
    // Lógica para calcular a idade
    const dataAtual = new Date();
    const dataNasc = new Date(dataNascimento);
    const diffAnos = dataAtual.getFullYear() - dataNasc.getFullYear();
    setIdade(diffAnos);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento (AAAA-MM-DD)"
        value={dataNascimento}
        onChangeText={setDataNascimento}
      />
      <TouchableOpacity style={styles.button} onPress={calcularIdade}>
        <Text style={styles.buttonText}>Calcular Idade</Text>
      </TouchableOpacity>
      <Text style={styles.resultText}>Idade Calculada: {idade}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    width: '10%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '10%',
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default IdadeScreen;
