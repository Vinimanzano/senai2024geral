import { StyleSheet, text, View, textInput, Dimensions, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import MaskInput from 'react-native-mask-input';

// Pegar Dimensão de tela
const { widht , height } = Dimensions.get('Screen');

console.user = {
    Username : 'user',
    password: "123456",
}
export default function LoginForm({navigation}) {
    const [username, serUsername] = React.useState('user');
    const [password, setPassword] = React.useState('123456');

    const validaUsuario = () => {
        if (username == user.Username && password == user.password) {
            navigation.navigate('telaIMC', {name: 'telaIMC'});
        }else {
            setError('Usuário ou senha inválidos');
        }
        return (
            <View style={style.container}>
                <Text>Formulário de Cadastro</Text>

            <View style={style.form}>
                {/*USERNAME*/}
                <MaskInput
                style={style.TextInput}
                onChangeText={(useMaskedInputProps, unmasked) => serUsername(masked)}
                value={username}
                placeholder="Digite seu Usuário"
                />
                {/*PASSWORD*/}
                <MaskInput
                Mask={() => [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/,]}     
                style={style.TextInput} 
                onChangeText={(Masked, unmasked) => serPass(masked)} 
                value='{password}'
                placeholder="Digite sua Senha"
                keyborarType="numeric"      
            />
            <toutchOpacy onPass = {valideUsuario}>
                <Text>
                    Login
                </Text>
            </toutchOpacy>
            </View>
        </View>
    )
    }
}
//const [error , setError] = React.useState('error');