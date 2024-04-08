import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

export default function JurosScreen() {
  const [valor, setValor] = useState('');
  const [juros, setJuros] = useState('');
  const [total, setTotal] = useState('');

  const calcularJuros = () => {
    const valorFloat = parseFloat(valor);
    const jurosFloat = parseFloat(juros);
    const totalCalculado = valorFloat + (valorFloat * jurosFloat) / 100;
    setTotal(totalCalculado.toFixed(2));
  };

  return (
    <ImageBackground source={require('../assets/contabil.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Tela de Juros</Text>
        <TextInput
          style={styles.input}
          placeholder="Valor do Produto"
          value={valor}
          onChangeText={setValor}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Porcentagem de Juros"
          value={juros}
          onChangeText={setJuros}
          keyboardType="numeric"
        />
        <Button title="Calcular Juros" onPress={calcularJuros} />
        <Text style={styles.total}>Total a Pagar: {total}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  total: {
    fontSize: 18,
    marginTop: 20,
  },
});