import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity} from 'react-native';
    import React from 'react';
    import MaskInput from 'react-native-mask-input';
    

    const {width, height } = Dimensions.get('screen')


export default function Form({navigation}) {

    return[
        <View style={{...styles.container}}>
            <TouchableOpacity onPress={clickHandler}>
                <Text style={styles.button}>Idade</Text>
            </TouchableOpacity>     
        </View>,
        <View style={{...styles.container}}>
            <TouchableOpacity onPress={clickHandler}>
                
                <Text style={styles.button}>Juros</Text>
            </TouchableOpacity>     
        </View>
]}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
    },
    button: {
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
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
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems: 'center',
    }
})