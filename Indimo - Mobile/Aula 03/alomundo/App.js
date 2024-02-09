import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textoo}>abre o APP para codar</Text>
     <Image source={{uri: 'https://i.gifer.com/MDdU.gif'}} style={styles.logo}/>
      <StatusBar style="auto" />
      
    </View>
    
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb( 5, 5, 5)',
    alignItems: 'center',
    justifyContent: 'center',
    letterSpacing: 5,
  },
  logo:{
    width: 400,
    height: 450,
  },
   textoo: {
      color: 'darkred',
      fontSize: 35,
      fontWeight: 'bold',
      letterSpacing: 5,
      textAlign: 'center',
    }
});
