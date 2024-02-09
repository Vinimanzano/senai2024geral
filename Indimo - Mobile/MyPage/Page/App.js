import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
     <Image source={{uri: 'https://media.licdn.com/dms/image/C4D03AQEpkKpop6paJg/profile-displayphoto-shrink_800_800/0/1602016178718?e=2147483647&v=beta&t=SqMD_u9dp353L4hlTJtOCsiF3di2OtiXPh8rXdfcCME'}} style={styles.logo}/>
     <br></br>
     <Text style={styles.textoo}>Vinícius Manzano</Text>
     <br></br>
     <br></br>
     <Text style={styles.subtexto}>Dados Pessoais:</Text>
     <br></br>
     <Text style={styles.textoDados}>Idade: 28 anos </Text>
     <br></br>
     <br></br>
     <Text style={styles.subtexto}>Formação: </Text>
     <br></br>
     <Text style={styles.textoDados}>Cursando Desenvolvimento e Análise de Sistemas </Text>
     <br></br>
     <br></br>
     <Text style={styles.contato}>Contato</Text>
     <Button title="Github" onPress={() => Linking.openURL('https://github.com/vinimanzano')}/>

      <StatusBar style="auto" />
    </View>
    
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb( 5, 5, 5)',
    alignItems: 'center',
    letterSpacing: 5,
  },
  logo:{
    width: 150,
    height: 150,
  },
   textoo: {
      color: 'rgb(150,150,150)',
      fontSize: 50,
      fontWeight: 'bold',
      letterSpacing: 5,
      gap: 50,
      textAlign: 'center',
    },
    subtexto: {
      color: 'rgb(230,115,13)',
      fontSize: 30,
      fontWeight: 'bold',
      letterSpacing: 5,
      gap: 50,
      textAlign: 'center',
    },
    textoDados: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      letterSpacing: 5,
    },
    contato: {
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
      letterSpacing: 5,
    }

});
