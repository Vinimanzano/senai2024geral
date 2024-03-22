import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import MaskInput from 'react-native-mask-input';

export default function FormIMC() {
    const [peso, setPeso] = React.useState('');
    const [altura, setAltura] = React.useState('');

    return (
        <View style={styles.container}>
            <Text>Formulario de IMC</Text>
            <View style={styles.form}>
                {/*PESO*/}
                <MaskInput
                style={styles.textInput}
                onChangeText={(masked, unmasked) => setPeso(masked)}
                value={peso}
                placeholder="Digite seu Peso"
                keyboardType="numeric"
                />

                {/*ALTURA*/}
                <MaskInput
                mask={[/\d/, /\d/, '.', /\d/]}
                style={styles.textInput}
                onChangeText={(masked, unmasked) => setAltura(masked)}
                value={altura}
                placeholder="Digite sua Altura"
                keyboardType="numeric"
                />

                <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    const imc = (peso / (altura * altura)).toFixed(2)
                    alert(`Seu IMC e ${imc}`)
                }}>
                    <Text>Calcular</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15
    },
    form: {
        width: 300,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    textInput: {
        padding: 5,
        width: 200,
        height: 40,
        borderWidth: 1,
        borderColor: '#e0ff',
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
    },
    button: {
        width: 200,
        height: 40,
        backgroundColor: '#e0ff',
        justifyContent: 'center',
        alignItems: 'center',
    }
})